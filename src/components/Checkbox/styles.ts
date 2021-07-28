import styled from 'styled-components'
import IconCheck from '../../assets/images/icon-check.svg'

export const StyledCheckbox = styled.input`
  -webkit-appearance: none;
  width: 1.625rem;
  height: 1.625rem;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.disabled};

  &:checked {
    background: no-repeat center/50% url(${IconCheck}), var(--checkBackground);
    border: none;
  }
`
