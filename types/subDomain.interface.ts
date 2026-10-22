import { IProduct } from '.'

export interface ISubDomain {
  id: number
  name: string
  fieldId: number // Foreign key referencing FieldOfApplication
  data: IProduct[] | any
}
