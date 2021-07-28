import React from 'react'
import { StyledHeader, ButtonIcon } from './styles'
import { useGlobalContext } from '../../contexts/GlobalContext'
import { ReactComponent as SunIcon } from '../../assets/images/icon-sun.svg'
import { ReactComponent as MoonIcon } from '../../assets/images/icon-moon.svg'

const Header: React.FC = () => {
  const { theme, toggleTheme } = useGlobalContext()

  return (
    <StyledHeader>
      <h1>TODO</h1>
      <ButtonIcon onClick={() => toggleTheme(theme)}>
        {theme.title === 'dark' && <SunIcon />}
        {theme.title === 'light' && <MoonIcon />}
      </ButtonIcon>
    </StyledHeader>
  )
}

export default Header
