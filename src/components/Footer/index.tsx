import React from 'react'
import { ReactComponent as GalvLogo } from '../../assets/images/tgNights.svg'
import { ReactComponent as GitHub } from '../../assets/images/gitHub.svg'
import { StyledFooter } from './styles'

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <a
        href="https://www.thallesgalvao.com.br"
        target="_blank"
        rel="noreferrer"
      >
        <GalvLogo title="Personal site" />
      </a>
      <a
        href="https://github.com/thallesgalv/todo-challenge"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <GitHub title="Project Repo" />
        </div>
      </a>
    </StyledFooter>
  )
}

export default Footer
