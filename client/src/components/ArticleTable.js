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
  TableSortLabel,
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

  //sorting const
  const [order, setOrder] = useState()
  const [orderBy, setOrderBy] = useState()

  // fetch all articles from db
  function getData() {
    const arr = []
    for (let i = 0; i < 4; i++) {
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

  //sort function
  function stableSort(array, comparator) {
    console.log(array);
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        
        return order;
      }
      console.log("a[1]: " + a[1] + " b[1]: " + b[1])
      return a[1] - b[1];
    });
    console.log(stabilizedThis.map((el) => el[0]));
    
    console.log("orderby" + orderBy)
    return stabilizedThis.map((el) => el[0]);
  }
  //comparator
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  //
  function descendingComparator(a, b, orderBy) {
    console.log("b: " + b + " " + b[orderBy] + " a: " + a + " "+ a[orderBy])
    if (b[orderBy] < a[orderBy]) {
      
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      
      return 1;
    }
    
    return 0;
  }

  const handleSortRequest = (cell_ID) => {
    const isAsc = orderBy === cell_ID && order === "asc";
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(cell_ID)
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
              <TableCellVariant
                id='title-id'
                sortDirection = {orderBy === 'title-id' ? order:false}>
                <TableSortLabel 
                  active = {orderBy === 'title-id'}
                  direction = {orderBy === 'title-id' ? order : 'asc'}
                  onClick={ () => {handleSortRequest('title-id')}}>
                  Title
                </TableSortLabel>
              </TableCellVariant>
              <TableCellVariant>
                <TableSortLabel>
                  Authors
                </TableSortLabel>
              </TableCellVariant>
              <TableCellVariant>
                <TableSortLabel>
                  Source
                </TableSortLabel>
                </TableCellVariant>
              <TableCellVariant>
                <TableSortLabel>
                  Year Published
                </TableSortLabel>
              </TableCellVariant>
              <TableCellVariant
                id='DOI-id'
                sortDirection = {orderBy === 'DOI-id' ? order:false}>
                <TableSortLabel
                  active = {orderBy === 'DOI-id'}
                  direction = {orderBy === 'DOI-id' ? order : 'asc'}
                  onClick={ () => {handleSortRequest('DOI-id')}}>
                  DOI
                </TableSortLabel>
              </TableCellVariant>
              <TableCellVariant>
                <TableSortLabel>
                  Claimed Benefit
                </TableSortLabel>
              </TableCellVariant>
              <TableCellVariant>
                <TableSortLabel>
                  Level of Evidence
                </TableSortLabel>
              </TableCellVariant>
              <TableCellVariant>
                
              </TableCellVariant>
            </TableRow>
          </TableHead>
          <TableBody>
            {stableSort(data, getComparator(order, orderBy))
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
