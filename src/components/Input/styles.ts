import styled from 'styled-components'

export const Container = styled.section`
  width: var(--innerWidth);
  margin: 0 auto;
  padding: 1.5em;
  background-color: ${({ theme }) => theme.colors?.primary};
  border-radius: var(--defaultRadius);
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1.625rem 1fr;
  align-items: center;
  gap: 1rem;

  input[type='text'] {
    background: transparent;
    border: none;
    outline: none;
    font: 400 1.5rem/2rem var(--fontPrimary);
    color: ${({ theme }) => theme.colors.text};
    /* border: 1px solid yellow; */

    &::placeholder {
      color: ${({ theme }) => theme.colors.placeholder};
    }
  }
`
