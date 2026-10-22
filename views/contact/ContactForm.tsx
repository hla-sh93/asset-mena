'use client'

import { useState } from 'react'
// Components
import { Button } from '@/components/button'
// Utils
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { toast } from 'react-toastify'
import { formSchema } from '@/schemas/schema'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@/lib/utils'
import { CustomInput } from '@/components/input'
import { Spinner } from '@/components/spinner'

// import ReCAPTCHA from 'react-google-recaptcha'

type FormTypes = z.infer<typeof formSchema>

export const ContactForm = () => {
  const [loading, setLoading] = useState(false)

  const { executeRecaptcha } = useGoogleReCaptcha()

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormTypes>({
    defaultValues: {
      fullName: '',
      emailAddress: '',
      message: '',
      recaptcha: '',
    },
    resolver: zodResolver(formSchema),
  })

  const onSubmit: SubmitHandler<FormTypes> = async (data) => {
    setLoading(true)
    // Handle form submission logic here
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not available yet')
      setLoading(false)
      return
    }
    executeRecaptcha('enquiryFormSubmit').then((gReCaptchaToken) => {
      sendMail({
        emailAddress: data?.emailAddress,
        fullName: data?.fullName,
        message: data?.message,
        recaptcha: gReCaptchaToken,
      })
    })
  }

  const sendMail = async (data: FormTypes) => {
    setLoading(true)
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        from: data?.emailAddress,
        name: data?.fullName,
        message: data?.message,
        captcha: data?.recaptcha,
      }),
    })
    if (response.ok) {
      // console.log(await response.json())
      toast.success('Email sent successfully')
      setLoading(false)
      // reset the form
      reset({
        fullName: '',
        emailAddress: '',
        message: '',
        recaptcha: '',
      })
    }
    if (!response.ok) {
      // console.log(await response.json())
      toast.success('Failed to Send Email, Please Try Again Later')
      setLoading(false)
    }
  }

  return (
    <form
      className="flex w-full flex-col gap-6 md:w-1/2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="fullName"
        control={control}
        render={({ field, fieldState }) => (
          <CustomInput
            inputId="fullName"
            label="Name"
            placeholder="Your Name .."
            field={field}
            fieldState={fieldState}
          />
        )}
      />

      <Controller
        name="emailAddress"
        control={control}
        render={({ field, fieldState }) => (
          <CustomInput
            inputId="emailAddress"
            label="email"
            placeholder="ex: example@email.com"
            field={field}
            fieldState={fieldState}
          />
        )}
      />

      <Controller
        name="message"
        control={control}
        render={({ field, fieldState, formState }) => (
          <div className="flex flex-col gap-2" {...field}>
            <label
              htmlFor={'message'}
              className={cn(
                'secondary-text capitalize',
                fieldState?.error ? 'text-red-700' : 'text-text-dark',
              )}
            >
              {fieldState?.error ? fieldState?.error.message : 'Your Message'}
            </label>
            <textarea
              {...field}
              id="message"
              cols={30}
              rows={7}
              disabled={formState?.isSubmitting}
              className={cn(
                'placeholder:body-text body-text primary-transition resize-none border bg-white p-3 text-text-dark outline-none placeholder:text-text-light dark:bg-cardBg',
                fieldState?.error
                  ? 'border-red-700 focus-within:border-red-700'
                  : 'border-border focus-within:border-primary dark:border-cardBg dark:focus-within:border-primary',
              )}
            />
          </div>
        )}
      />

      {/* <Controller
        name="recaptcha"
        control={control}
        rules={{ required: true }}
        render={(field) => (
          <ReCAPTCHA
            {...field?.field}
            sitekey={
              process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
                ? process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
                : ''
            }
            className="origin-top-left scale-[0.85] sm:scale-100"
          />
        )}
      /> */}
      <Button
        variant="primary"
        className="mt-4 self-end"
        type="submit"
        disabled={loading}
      >
        {loading ? <Spinner className="h-2 w-2" /> : 'Send Message'}
      </Button>
    </form>
  )
}
