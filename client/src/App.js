import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ArticleTable } from './components/ArticleTable'
import ArticleForm from './components/ArticleForm'
import './stylesheet.css'
import { ThemeProvider } from '@emotion/react'
import colorTheme from './theme'
import ArticleIcon from '@mui/icons-material/Article';
import PageHeader from'./components/component-controller/header'

function App() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    const axiosGetCall = async () => {
      try {
        const { data } = await axios.get('/api')
        setBackendData(data)
        console.log('axios conversion success')
      } catch (error) {
        console.log(error)
      }
    }

    axiosGetCall()
    /**fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      },
      console.log("useEffect")

    )**/
  }, [])
  return (
    <div>
      <ThemeProvider theme={colorTheme}>
      <PageHeader
                title='Submit Article'
                subTitle='Logged in as: Rhys Van Rooyen'
                icon={<ArticleIcon fontSize='large'/>}
        />
      
      <ArticleForm/>

      </ThemeProvider>
    </div>
  )
}

export default App
