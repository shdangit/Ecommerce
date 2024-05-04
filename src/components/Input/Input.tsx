import { InputHTMLAttributes, useState } from 'react'
import type { UseFormRegister, RegisterOptions, FieldValues, FieldPath } from 'react-hook-form'

interface Props<TFieldValues extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameInput?: string
  classNameError?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<TFieldValues>
  rules?: RegisterOptions
  name: FieldPath<TFieldValues>
}

export default function Input<TFieldValues extends FieldValues = FieldValues>({
  errorMessage,
  className,
  name,
  register,
  rules,
  classNameInput = 'p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm',
  classNameError = 'mt-1 text-red-600 min-h-[1.25rem] text-sm',
  ...rest
}: Props<TFieldValues>) {
  const registerResult = register && name ? register(name, rules) : null

  return (
    <div className={'relative ' + className}>
      <input className={classNameInput} {...registerResult} {...rest} />

      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
}
