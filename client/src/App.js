import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ArticleTable } from './components/ArticleTable'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import ModeratorArticleList from './components/ModeratorArticleList'
import './stylesheet.css'
import { ThemeProvider } from '@emotion/react'
import colorTheme from './theme'

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
          <Route path='/moderate' element={<ModeratorArticleList />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
