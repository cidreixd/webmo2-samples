import React, { FC } from 'react'
// @ts-ignore
import InputComponent from '@bit/reactstrap.reactstrap.input'

export interface InputProps {
  placeholder: string
  onChange: (value: string) => void
}

export const Input: FC<InputProps> = ({ placeholder,  onChange }) => (
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
    />

    <InputComponent
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  </div>
)
