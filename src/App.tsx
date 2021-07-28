import React from 'react'
import GlobalStyle from '../src/styles/global'
import Banner from '../src/components/Banner'
import List from '../src/components/List'
import Footer from '../src/components/Footer'
import { GlobalContextProvider } from './contexts/GlobalContext'

const App: React.FC = () => {
  return (
    <GlobalContextProvider>
      <Banner />
      <List />
      <Footer />
      <GlobalStyle />
    </GlobalContextProvider>
  )
}

export default App
