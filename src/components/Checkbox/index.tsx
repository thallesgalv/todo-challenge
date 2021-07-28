import React from 'react'
import { StyledCheckbox } from './styles'

type CheckboxProps = {
  isChecked?: boolean
  id?: number
  checked?: boolean
  onChange?: () => void
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <StyledCheckbox type="checkbox" checked={checked} onChange={onChange} />
  )
}

export default Checkbox
