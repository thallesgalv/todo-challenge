import styled from 'styled-components'

export const StyledListItem = styled.li`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1.625rem 1fr;
  gap: 1rem;
  align-items: center;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.disabled};
  font: 700 1.5rem/2rem var(--fontPrimary);
  color: ${({ theme }) => theme.colors.text};
  padding: 1.5rem;
  cursor: move;
  animation: show.5s forwards;
  position: relative;

  @keyframes show {
    from {
      transform: translate3d(0, -0.8rem, 0);
      opacity: 0;
    }
    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  p {
    width: fit-content;
    font: 400 1.5rem/2rem var(--fontPrimary);
  }

  input:checked + p {
    color: ${({ theme }) => theme.colors.disabled};
    position: relative;

    &::after {
      content: '';
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.disabled};
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      animation: line 0.5s forwards;

      @keyframes line {
        from {
          right: 100%;
          width: 0;
          opacity: 0;
        }
        to {
          right: 0;
          width: 100%;
          opacity: 1;
        }
      }
    }
  }
`
