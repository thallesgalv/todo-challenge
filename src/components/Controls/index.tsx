import React from 'react'
import { useGlobalContext } from '../../contexts/GlobalContext'
import useMedia from '../../hooks/useMedia'
import { MobileControls, StyledControls } from './styles'

const Controls: React.FC = () => {
  const { tasks, filter, setFilter, clearCompletedTasks } = useGlobalContext()
  const isMobile = useMedia('640')

  return (
    <>
      {!isMobile && (
        <StyledControls>
          <li>{tasks && tasks.filter(i => !i.isChecked).length} items left</li>
          <ul>
            <li
              className={filter ? '' : 'active'}
              onClick={() => setFilter('')}
            >
              All
            </li>
            <li
              className={filter === 'active' ? 'active' : ''}
              onClick={() => setFilter('active')}
            >
              Active
            </li>
            <li
              className={filter === 'completed' ? 'active' : ''}
              onClick={() => setFilter('completed')}
            >
              Completed
            </li>
          </ul>
          <li onClick={() => clearCompletedTasks()}>Clear Completed</li>
        </StyledControls>
      )}
      {isMobile && (
        <MobileControls>
          <li className={filter ? '' : 'active'} onClick={() => setFilter('')}>
            All
          </li>
          <li
            className={filter === 'active' ? 'active' : ''}
            onClick={() => setFilter('active')}
          >
            Active
          </li>
          <li
            className={filter === 'completed' ? 'active' : ''}
            onClick={() => setFilter('completed')}
          >
            Completed
          </li>
        </MobileControls>
      )}
    </>
  )
}

export default Controls
