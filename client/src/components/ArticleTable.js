import { useState } from 'react'
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
  TablePagination,
  Paper,
} from '@mui/material'

const ROWS_PER_PAGE = 5

export const ArticleTable = () => {
  const [currentPage, setCurrentPage] = useState(0)

  // fetch all articles from db
  function getData() {
    const arr = []
    for (let i = 0; i < 20; i++) {
      arr[i] = {
        title: "Bob's Burgers",
        authors: 'bob',
        source: 'burger land',
        pubYear: '2022',
        doi: i,
        claimedBenefit: 'makes you code using less food',
        levelOfEvidence: 'strong support',
      }
    }

    return arr
  }

  const data = getData()

  const handleNextPage = (e, page) => {
    setCurrentPage(page)
  }

  const handleArticleClicked = (e) => {
    console.log('I was clicked')
  }

  return (
    <>
      <TableContainer>
        <Table aria-label='software development process article table'>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Authors</TableCell>
              <TableCell>Source</TableCell>
              <TableCell>Year Published</TableCell>
              <TableCell>DOI</TableCell>
              <TableCell>Claimed Benefit</TableCell>
              <TableCell>Level of Evidence</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(
                currentPage * ROWS_PER_PAGE,
                currentPage * ROWS_PER_PAGE + ROWS_PER_PAGE
              )
              .map((item) => {
                return (
                  <TableRow key={item.doi} onClick={handleArticleClicked}>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.authors}</TableCell>
                    <TableCell>{item.source}</TableCell>
                    <TableCell>{item.pubYear}</TableCell>
                    <TableCell>{item.doi}</TableCell>
                    <TableCell>{item.claimedBenefit}</TableCell>
                    <TableCell>{item.levelOfEvidence}</TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
          <TableFooter></TableFooter>
        </Table>
        <TablePagination
          rowsPerPageOptions={[]}
          component={Paper}
          page={currentPage}
          rowsPerPage={ROWS_PER_PAGE}
          onPageChange={handleNextPage}
          count={data.length}
          colSpan={7}
        />
      </TableContainer>
    </>
  )
}
