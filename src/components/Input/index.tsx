import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from '../../contexts/GlobalContext'
import Checkbox from '../Checkbox'
import { Container } from './styles'

const Input: React.FC = () => {
  const { addTask, task, setTask, isChecked } = useGlobalContext()
  const input = useRef<HTMLInputElement>(null)

  const handleCLick = () => {
    if (task.text) {
      addTask(task)
    }
    setTask({ id: 0, isChecked: false, text: '' })
  }

  useEffect(() => {
    input.current?.focus()
  }, [task])

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter') handleCLick()
  }

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress)

    return () => window.removeEventListener('keypress', handleKeyPress)
  }, [task])

  return (
    <Container>
      <Checkbox onChange={handleCLick} checked={false} />
      <input
        ref={input}
        type="text"
        placeholder="Create a new todo..."
        value={task.text}
        onChange={event =>
          setTask({
            id: +new Date()
              .toLocaleString()
              .split('')
              .filter(e => +e)
              .join(''),
            isChecked: isChecked,
            text: event.target.value
          })
        }
      />
    </Container>
  )
}

export default Input
