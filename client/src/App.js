import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ArticleTable } from './components/ArticleTable'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import './stylesheet.css'
import { ThemeProvider } from '@emotion/react'
import colorTheme from './theme'
import ArticleIcon from '@mui/icons-material/Article';
import PageHeader from'./components/component-controller/header'

function App() {
  const [account, setAccount] = useState(false)

  return (
    <ThemeProvider theme={colorTheme}>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Home testing={false} account={account} setAccount={setAccount} />
            }
          />
          <Route path='/articles' element={<ArticleTable />} />
          <Route path='/addarticle' />
          <Route
            path='/login'
            element={
              <Login
                testing={false}
                account={account}
                setAccount={setAccount}
              />
            }
          />
          <Route
            path='/signup'
            element={
              <SignUp
                testing={false}
                account={account}
                setAccount={setAccount}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
