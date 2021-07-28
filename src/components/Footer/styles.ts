import styled from 'styled-components'

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 5rem;
  margin-bottom: 2rem;

  svg {
    max-width: 10rem;
    max-height: 2.5rem;
    width: 100%;
  }

  div {
    path {
      fill: ${({ theme }) => theme.colors.disabled};
    }
  }
`
