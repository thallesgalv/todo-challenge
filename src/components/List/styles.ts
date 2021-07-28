import styled from 'styled-components'

export const StyledList = styled.ul`
  width: var(--innerWidth);
  margin: 0 auto;
  padding-bottom: 1.5em;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: var(--defaultRadius);
  position: relative;
  top: -2rem;
`

export const Disclaimer = styled.p`
  color: ${({ theme }) => theme.colors.disabled};
  font-size: 1.125rem;
  line-height: 1.75rem;
  text-align: center;
  margin: 2rem auto;
`
