'use client'
import React from 'react'
import type { InputMaskProps } from '@/components/types'
import type { FieldValues } from 'react-hook-form'
import ReactInputMask from 'react-input-mask'
import './styles.css'

export function InputMask<TFormValues extends FieldValues>({
  type,
  name,
  mask = '',
  maskChar = null,
  hasError = false,
  className = '',
  register,
  errorMessage,
  ...rest
}: InputMaskProps<TFormValues>) {
  return (
    <div className={`${className} `}>
      {register ? (
        <ReactInputMask
          mask={mask}
          maskChar={maskChar}
          {...register(name!)}
          type={type}
          className={`input-mask ${hasError && 'input-mask-has-error'}`}
          autoComplete="disabled-autocomplete"
          {...rest}
        />
      ) : (
        <ReactInputMask
          mask={mask}
          maskChar={maskChar}
          type={type}
          autoComplete="disabled-autocomplete"
          className={`input-mask ${hasError && 'input-mask-has-error'}`}
          {...rest}
        />
      )}
      <div className="container-error-message-input-mask">
        {errorMessage && errorMessage()}
      </div>
    </div>
  )
}
