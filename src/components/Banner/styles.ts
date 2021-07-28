import styled from 'styled-components'

import BgDesktopDark from '../../assets/images/bg-desktop-dark.jpg'
import BgDesktopLight from '../../assets/images/bg-desktop-light.jpg'

export const StyledBanner = styled.div`
  width: 100%;
  height: 22em;
  background-image: ${({ theme }) =>
    theme.title === 'dark'
      ? `url(${BgDesktopDark})`
      : `url(${BgDesktopLight})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
