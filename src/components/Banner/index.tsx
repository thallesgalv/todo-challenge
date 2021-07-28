import React from 'react'
import { useGlobalContext } from '../../contexts/GlobalContext'
import Header from '../Header'
import Input from '../Input'
import { StyledBanner } from './styles'

const Banner: React.FC = () => {
  const { theme } = useGlobalContext()

  return (
    <StyledBanner theme={theme}>
      <Header />
      <Input />
    </StyledBanner>
  )
}

export default Banner
