import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ArticleTable } from './components/ArticleTable'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import './stylesheet.css'
import { ThemeProvider } from '@emotion/react'
import colorTheme from './theme'

function App() {
  return (
    <ThemeProvider theme={colorTheme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/articles' element={<ArticleTable />} />
          <Route path='/addarticle' />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
