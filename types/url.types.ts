export type FormUrlQueryParams = {
  searchParams: { [key: string]: string }
  key: string
  value: string | number | null
}

export type UrlQueryParams = {
  params: string
  key: string
  value: string | null
}

export type RemoveUrlQueryParams = {
  searchParams: string
  keysToRemove: string[]
}

export type SearchParamProps = {
  params: { [key: string]: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
