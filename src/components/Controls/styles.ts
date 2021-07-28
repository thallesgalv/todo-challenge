import styled from 'styled-components'

export const StyledControls = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.disabled};
  font-size: 1rem;
  line-height: 1.5rem;

  @media (min-width: 640px) {
    padding: 1rem 2rem;
    grid-template-columns: repeat(3, 1fr);
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  li {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.disabled};
  }

  .active {
    color: hsl(220, 98%, 61%);
    font-weight: 700;
  }

  > ul {
    display: none;

    @media (min-width: 640px) {
      display: grid;
      grid-auto-flow: column;
      place-items: center;
    }
  }

  > li:last-child {
    text-align: end;
  }
`
export const MobileControls = styled.ul`
  width: var(--innerWidth);
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: var(--defaultRadius);
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem;

  li {
    color: ${({ theme }) => theme.colors.disabled};
    cursor: pointer;
    font-size: 1.25rem; //20px
    line-height: 1.75rem; //28px
  }
  li:active {
    color: hsl(220, 98%, 61%);
    font-weight: 700;
  }
`
