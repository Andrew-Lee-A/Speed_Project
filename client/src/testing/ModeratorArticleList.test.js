import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import colorTheme from '../theme'
import ArticleCard from '../components/ArticleCard'

const MockCard = () => {
  return (
    <ThemeProvider theme={colorTheme}>
      <BrowserRouter>
        <ArticleCard
          key={1}
          id={1}
          title={'mock title'}
          doi={'mock doi'}
          authors={'mock authors'}
          reRender={() => {}} // mock function
        />
      </BrowserRouter>
    </ThemeProvider>
  )
}

describe('testing a articles cards render correctly for a moderator article list', () => {
  it('should render specified input props', async () => {
    render(<MockCard />)
    const title = screen.getByText('mock title')
    expect(title).toBeInTheDocument()
    const doi = screen.getByText('DOI: mock doi')
    expect(doi).toBeInTheDocument()
    const authors = screen.getByText('AUTHORS: mock authors')
    expect(authors).toBeInTheDocument()
  })
})
