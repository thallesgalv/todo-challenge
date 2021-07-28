import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: var(--innerWidth);
  margin: 0 auto;
  padding: 2em 0;
  padding-top: 4.5em;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;

  > h1 {
    font: 700 3rem/1 var(--fontPrimary);
    letter-spacing: 1.5rem;
    color: #fff;
  }
`
export const ButtonIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 4rem;
  height: 4rem;
`
