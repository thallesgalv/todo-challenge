import React, { memo, useEffect, useRef } from 'react'

import { useGlobalContext } from '../../contexts/GlobalContext'
import useMedia from '../../hooks/useMedia'
import Checkbox from '../Checkbox'
import Controls from '../Controls'
import { StyledControls } from '../Controls/styles'
import ListItem from '../ListItem'
import { Disclaimer, StyledList } from './styles'

const List: React.FC = () => {
  const {
    loadTheme,
    tasks,
    updateTask,
    saveTasks,
    loadTasks,
    clearCompletedTasks,
    filter,
    setTasks,
    setRearranged
  } = useGlobalContext()

  useEffect(() => {
    loadTheme()
    loadTasks()
  }, [])

  useEffect(() => {
    saveTasks()
  }, [tasks])

  const isMobile = useMedia('640')

  const draggingItem = useRef<HTMLLIElement | null>(null)
  const dragOverItem = useRef<HTMLLIElement | null>(null)
  const [dragItemPosition, setDragItemPosition] = React.useState(0)
  const [dragOverPosition, setDragOverPosition] = React.useState(0)

  const handleDragStart = (position: number) => {
    setDragItemPosition(position)
    setRearranged(false)
  }

  const handleDragEnter = (position: number) => {
    setDragOverPosition(position)
  }

  const handleDragEnd = () => {
    const cloneList = tasks

    if (cloneList) {
      const draggingItemContent = cloneList[dragItemPosition]
      cloneList && cloneList.splice(dragItemPosition, 1)
      cloneList.splice(dragOverPosition, 0, draggingItemContent)
      draggingItem.current = null
      setDragItemPosition(0)
      dragOverItem.current = null
      setDragItemPosition(0)
      setRearranged(true)
      setTasks(cloneList)
      saveTasks()
    }
  }

  return (
    <>
      <StyledList>
        {(tasks &&
          !filter &&
          tasks.map(({ id, isChecked, text }, index) => (
            <ListItem
              key={id}
              text={text}
              onDragStart={() => handleDragStart(index)}
              onDragEnter={() => handleDragEnter(index)}
              onDragEnd={handleDragEnd}
              onDragOver={e => e.preventDefault()}
            >
              <Checkbox
                isChecked={isChecked}
                checked={isChecked}
                onChange={() => {
                  updateTask(id)
                }}
              />
            </ListItem>
          ))) ||
          (tasks &&
            filter === 'active' &&
            tasks
              .filter(i => !i.isChecked)
              .map(({ id, isChecked, text }, index) => (
                <ListItem
                  key={id}
                  text={text}
                  onDragStart={() => handleDragStart(index)}
                  onDragEnter={() => handleDragEnter(index)}
                  onDragEnd={handleDragEnd}
                  onDragOver={e => e.preventDefault()}
                >
                  <Checkbox
                    isChecked={isChecked}
                    checked={isChecked}
                    onChange={() => {
                      updateTask(id)
                    }}
                  />
                </ListItem>
              ))) ||
          (tasks &&
            filter === 'completed' &&
            tasks
              .filter(i => i.isChecked)
              .map(({ id, isChecked, text }, index) => (
                <ListItem
                  key={id}
                  text={text}
                  onDragStart={() => handleDragStart(index)}
                  onDragEnter={() => handleDragEnter(index)}
                  onDragEnd={handleDragEnd}
                  onDragOver={e => e.preventDefault()}
                >
                  <Checkbox
                    isChecked={isChecked}
                    checked={isChecked}
                    onChange={() => {
                      updateTask(id)
                    }}
                  />
                </ListItem>
              )))}
        {isMobile && (
          <StyledControls>
            <li>
              {tasks && tasks.filter(i => !i.isChecked).length} items left
            </li>
            <li onClick={() => clearCompletedTasks()}>Clear Completed</li>
          </StyledControls>
        )}
        {!isMobile && <Controls />}
      </StyledList>
      {isMobile && <Controls />}
      <Disclaimer>Drag and drop to reorder list</Disclaimer>
    </>
  )
}

export default memo(List)
