import React, { createContext, useState, useContext } from 'react'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'
import { DefaultTheme, ThemeProvider } from 'styled-components'

export interface Task {
  id: number
  isChecked: boolean
  text: string
}

type GlobalContextData = {
  theme: DefaultTheme
  toggleTheme: (arg: DefaultTheme | string) => void
  loadTheme: () => void
  isChecked: boolean
  task: Task
  setTask: (arg: Task) => void
  tasks?: Task[]
  addTask: (arg: Task) => void
  updateTask: (arg: number) => void
  clearCompletedTasks: () => void
  saveTasks: () => void
  loadTasks: () => void
  filter: string
  setFilter: (arg: string) => void
  setTasks: (arg: Task[]) => void
  rearranged: boolean
  setRearranged: (arg: boolean) => void
}

const GlobalContext = createContext({} as GlobalContextData)

export const GlobalContextProvider: React.FC = ({ children }) => {
  const isChecked = false
  const [theme, setTheme] = useState(dark)
  const [task, setTask] = useState({
    id: 0,
    isChecked: isChecked,
    text: ''
  })
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      isChecked: isChecked,
      text: 'Complete online JavaScript course'
    }
  ])
  const [filter, setFilter] = useState('')
  const [rearranged, setRearranged] = useState(false)

  const toggleTheme = () => {
    if (theme === dark) {
      setTheme(light)
      window.localStorage?.setItem('theme', 'light')
    }
    if (theme === light) {
      setTheme(dark)
      window.localStorage?.setItem('theme', 'dark')
    }
  }

  const loadTheme = () => {
    const localStorageTheme = window.localStorage?.getItem('theme')
    localStorageTheme === 'light' && setTheme(light)
    localStorageTheme === 'dark' && setTheme(dark)
  }

  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask])
  }

  const updateTask = (argID: number) => {
    const aux = tasks.filter(i => i.id === argID)[0]
    aux.isChecked = !aux.isChecked

    const cloneList = tasks.filter(i => i.id !== argID)
    setTasks([aux, ...cloneList])
  }

  const clearCompletedTasks = () => {
    setTasks(tasks.filter(i => !i.isChecked))
  }

  const saveTasks = () => {
    window.localStorage?.setItem('tasks', JSON.stringify(tasks))
  }

  const loadTasks = () => {
    const localStorageTasks = window.localStorage?.getItem('tasks')
    localStorageTasks && setTasks(JSON.parse(localStorageTasks))
  }

  return (
    <GlobalContext.Provider
      value={{
        theme,
        toggleTheme,
        loadTheme,
        tasks,
        addTask,
        updateTask,
        task,
        setTask,
        isChecked,
        clearCompletedTasks,
        saveTasks,
        loadTasks,
        filter,
        setFilter,
        setTasks,
        rearranged,
        setRearranged
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = (): GlobalContextData => {
  return useContext(GlobalContext)
}
