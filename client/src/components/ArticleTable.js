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
  Button,
  Paper,
  styled,
  tableCellClasses,
} from '@mui/material'
import theme from '../theme'

const ROWS_PER_PAGE = 5

const TableCellVariant = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
  [`$.${tableCellClasses.body}`]: {
    fontSize: '14',
  },
}))

const TablePaginationVariant = styled(TablePagination)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
}))

const TableBtn = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
}))

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
    console.log(e.target.value)
  }

  return (
    <>
      <TableContainer>
        <Table aria-label='software development process article table'>
          <TableHead>
            <TableRow>
              <TableCellVariant>Title</TableCellVariant>
              <TableCellVariant>Authors</TableCellVariant>
              <TableCellVariant>Source</TableCellVariant>
              <TableCellVariant>Year Published</TableCellVariant>
              <TableCellVariant>DOI</TableCellVariant>
              <TableCellVariant>Claimed Benefit</TableCellVariant>
              <TableCellVariant>Level of Evidence</TableCellVariant>
              <TableCellVariant></TableCellVariant>
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
                  <TableRow key={item.doi} hover>
                    <TableCellVariant>{item.title}</TableCellVariant>
                    <TableCellVariant>{item.authors}</TableCellVariant>
                    <TableCellVariant>{item.source}</TableCellVariant>
                    <TableCellVariant>{item.pubYear}</TableCellVariant>
                    <TableCellVariant>{item.doi}</TableCellVariant>
                    <TableCellVariant>{item.claimedBenefit}</TableCellVariant>
                    <TableCellVariant>{item.levelOfEvidence}</TableCellVariant>
                    <TableCellVariant padding='none'>
                      <TableBtn value={item.doi} onClick={handleArticleClicked}>
                        View More
                      </TableBtn>
                    </TableCellVariant>
                  </TableRow>
                )
              })}
          </TableBody>
          <TableFooter></TableFooter>
        </Table>
        <TablePaginationVariant
          color={theme.palette.secondary.main}
          rowsPerPageOptions={[]}
          component={Paper}
          page={currentPage}
          rowsPerPage={ROWS_PER_PAGE}
          onPageChange={handleNextPage}
          count={data.length}
          colSpan={8}
        />
      </TableContainer>
    </>
  )
}
