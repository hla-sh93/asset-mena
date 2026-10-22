'use client'

import { cn } from '@/lib/utils'
import { IProduct } from '@/types'
import { useParams } from 'next/navigation'
import { Fragment, useState } from 'react'

export const ProductTabs = ({ data }: { data: IProduct | undefined }) => {
  const [activeTab, setActiveTab] = useState(0)
  const params = useParams()

  return (
    <div className="flex w-full flex-col gap-6 lg:w-4/6">
      <div className="mx-auto mt-8 w-full">
        <div className="flex">
          {['Description', 'General Specifications'].map((tab, index) => (
            <h2
              key={index}
              className={`body-text cursor-pointer bg-[#e8e8e8] p-4 text-lg dark:bg-cardBg 2xl:text-3xl ${
                index === activeTab
                  ? 'border-b-2 border-b-secondary text-[#1D1B20] dark:text-text-dark'
                  : 'border-b border-b-text-light text-text-light'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </h2>
          ))}
        </div>
      </div>
      <div>
        {activeTab === 0 ? (
          <>
            <div
              dangerouslySetInnerHTML={{
                __html: data?.description ? data?.description : '',
              }}
            />

            {data?.specialNotes && data?.specialNotes?.length > 0 && (
              <div className="mt-6 bg-[#cccccc] px-6 py-3 dark:bg-cardBg">
                {data?.specialNotes?.map((note, noteIndex) => (
                  <p className="body-text text-primary" key={noteIndex}>
                    {note}
                  </p>
                ))}
              </div>
            )}
          </>
        ) : (
          <div>
            {/* Table */}
            {data?.tableData?.map((tableDataEl, tableDataElIndex) => (
              <Fragment key={tableDataElIndex}>
                <h3 className="body-text w-full bg-primary py-2 text-center text-white dark:bg-[#29498233]">
                  {tableDataEl?.title}
                </h3>

                {tableDataEl?.values?.map((subElement, subIndex) => (
                  <div
                    className={cn(
                      'flex items-center justify-between gap-4 px-5 py-2',
                      subIndex % 2 === 0 ? 'bg-[#B9BED233]' : 'bg-[#29498233]',
                      subElement?.length < 4 && 'flex-1 justify-start gap-8',
                    )}
                    key={subIndex}
                  >
                    {subElement?.map((el, ind) => (
                      <span
                        className={cn(
                          'secondary-text w-[24%]',
                          subElement?.length === 3 && 'w-fit',
                          subElement?.length === 3 &&
                            ind !== 0 &&
                            'w-max text-center',
                          subElement?.length === 6 && 'w-1/6 text-center',
                        )}
                        key={ind}
                      >
                        {el}
                      </span>
                    ))}
                  </div>
                ))}
              </Fragment>
            ))}

            {/* Data */}
            {data?.data?.map((element, index) => (
              <Fragment key={index}>
                <h3 className="body-text w-full bg-primary py-2 text-center text-white dark:bg-[#29498233]">
                  {element?.title}
                </h3>
                {params?.product === 'xr-pscan-2611' && (
                  <div className="body-text flex w-full justify-end gap-8 bg-primary p-2 text-center text-white dark:bg-[#29498233]">
                    <strong className="w-[30%]">Small Version</strong>
                    <strong className="w-[30%] px-6 text-end">
                      Big Version
                    </strong>
                  </div>
                )}

                {element?.data?.map((subElement, subIndex) => (
                  <div
                    className={cn(
                      'flex items-center justify-between gap-4 px-5 py-2',
                      subIndex % 2 === 0 ? 'bg-[#B9BED233]' : 'bg-[#29498233]',
                    )}
                    key={subIndex}
                  >
                    {subElement?.small && subElement?.big ? (
                      <>
                        <h4 className="secondary-text w-2/5">
                          {subElement?.label}
                        </h4>

                        <span className="secondary-text w-1/5 text-center">
                          {subElement?.small}
                        </span>

                        <span className="secondary-text w-1/5 text-center">
                          {subElement?.value}
                        </span>

                        <span className="secondary-text w-1/5 text-center">
                          {subElement?.big}
                        </span>
                      </>
                    ) : (
                      <>
                        {subElement?.label && (
                          <h4 className="secondary-text w-[46%] flex-1">
                            {subElement?.label}
                          </h4>
                        )}

                        {subElement?.value && (
                          <p className={'secondary-text w-[46%]'}>
                            {subElement?.value}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
