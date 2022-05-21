import { useState, useEffect } from 'react'
import { NavTopBar } from './NavTopBar'
import { NavSideBar } from './NavSideBar'
import ArticleCard from './ArticleCard'
import { Stack, Paper, TextField, Button, styled } from '@mui/material'

export default function ModeratorArticleList() {
  const [pendingArticles, setPendingArticles] = useState([
    { title: 'title', doi: 'doi', authors: 'author' },
    { title: 'title', doi: 'doi', authors: 'author' },
  ])

  useEffect(() => {
    async function getPendingArtilces() {}

    getPendingArtilces()
  }, [])

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
          {pendingArticles.map((article, index) => {
            return (
              <ArticleCard
                key={index}
                title={article.title}
                doi={article.doi}
                authors={article.authors}
              />
            )
          })}
        </Stack>
      </Stack>
    </>
  )
}
