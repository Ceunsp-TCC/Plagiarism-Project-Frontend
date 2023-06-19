import type { InputProps } from './input-props'
import type { FieldValues } from 'react-hook-form'

export type InputMaskProps<
  TFormValues extends FieldValues = Record<string, any>,
> = InputProps<TFormValues> & {
  mask: string
  maskChar?: string | null
}
