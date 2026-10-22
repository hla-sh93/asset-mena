import { cn } from '@/lib/utils'
import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react'
import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  UseFormStateReturn,
} from 'react-hook-form'

type InputProps<FieldType extends FieldValues = any> = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  field?: ControllerRenderProps<FieldType, any>
  fieldState?: ControllerFieldState
  formState?: UseFormStateReturn<FieldType>
  inputId: string
  inputName?: string
  label: string | ReactNode
  placeholder?: string
  className?: string
}

export const CustomInput = ({
  inputId,
  inputName,
  label,
  placeholder,
  className,
  field,
  fieldState,
  formState,
  ...props
}: InputProps) => {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label
        htmlFor={inputId}
        className={cn(
          'secondary-text capitalize',
          fieldState?.error ? 'text-red-700' : 'text-text-dark',
        )}
      >
        {fieldState?.error ? fieldState?.error.message : label}
      </label>
      <input
        {...props}
        {...field}
        disabled={formState?.isSubmitting}
        type="text"
        name={inputName}
        id={inputId}
        placeholder={placeholder}
        className={cn(
          'placeholder:body-text body-text primary-transition dark:bg-cardBg border bg-white p-3 text-text-dark outline-none placeholder:text-text-light',
          fieldState?.error
            ? 'border-red-700 focus-within:border-red-700'
            : 'dark:border-cardBg border-border focus-within:border-primary dark:focus-within:border-primary',
        )}
      />
    </div>
  )
}
