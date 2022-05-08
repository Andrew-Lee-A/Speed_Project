import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ArticleTable } from './components/ArticleTable'
import { NavSideBar } from './components/NavSideBar'
import { NavTopBar } from './components/NavTopBar'
import './stylesheet.css'
import { ThemeProvider } from '@emotion/react'
import colorTheme from './theme'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ThemeProvider theme={colorTheme}>
              <ArticleTable />
            </ThemeProvider>
          }
        />
        <Route path='addarticle' />
        <Route path='login' />
        <Route path='signup' />
      </Routes>
    </BrowserRouter>
  )
}

export default App
