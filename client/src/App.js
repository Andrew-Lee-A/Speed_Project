import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ArticleTable } from './components/ArticleTable'
import './stylesheet.css'
import { ThemeProvider } from '@emotion/react'
import colorTheme from './theme'

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
        <ArticleTable />
      </ThemeProvider>
      {/* {(typeof backendData.users === 'undefined') ?  (
        <p> Loading...</p>
      ): (
        backendData.users.map((user, i) => (
          <p key = {i}>{user}</p>
        ))
      )} */}
    </div>
  )
}

export default App
