import React from 'react'

import { ThemeProvider } from 'styled-components'
import { StyleTheme } from './Helpers/StyleVariables'
import { GlobalResetCSS } from './Helpers/GlobalResetCss'

import MainPage from './Pages/MainPage/MainPage'

function App() {
  return (
    <ThemeProvider theme={StyleTheme}>
      <>
        <GlobalResetCSS />
        <MainPage/>
      </>
    </ThemeProvider>
  )
}

export default App