import { useState, useEffect } from 'react'
import { NavTopBar } from './NavTopBar'
import { NavSideBar } from './NavSideBar'
import ArticleCard from './ArticleCard'
import { Stack } from '@mui/material'
import axios from 'axios'

export default function ModeratorArticleList() {
  const [pendingArticles, setPendingArticles] = useState([])
  const [reqestArticles, setRequestArticles] = useState(true)

  useEffect(() => {
    async function getPendingArtilces() {
      try {
        const res = await axios.get('/api/v1/moderator', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('JWT'),
          },
        })
        const data = res.data.pendingArticles
        setPendingArticles(data)
      } catch (e) {
        console.log(e)
      }
    }

    getPendingArtilces()
  }, [reqestArticles])

  function toggleRequestArticles() {
    if (reqestArticles) {
      setRequestArticles(false)
    } else {
      setRequestArticles(true)
    }
  }

  return (
    <>
      <NavTopBar />
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='center'
        gap='5rem'
      >
        <NavSideBar />
        <Stack
          direction='column'
          gap='5rem'
          justifyContent='flex-start'
          alignItems='center'
        >
          {pendingArticles.map((article) => {
            return (
              <ArticleCard
                key={article._id}
                id={article._id}
                title={article.title}
                doi={article.doi}
                authors={article.authors}
                reRender={toggleRequestArticles}
              />
            )
          })}
        </Stack>
      </Stack>
    </>
  )
}
