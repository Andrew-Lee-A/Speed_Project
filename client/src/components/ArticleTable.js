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
  Toolbar,
  Button,
  Paper,
  tableCellClasses,
  InputAdornment,
  styled,
} from '@mui/material'
import theme from '../theme'
import Input from './component-controller/Input.js'
import { Search } from '@mui/icons-material';

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

const StyledLabel = styled(TableSortLabel)(({theme}) => ({
  
  ['&.MuiTableSortLabel-root']: {color: 'white'},
  ['&.MuiTableSortLabel-root:hover']: {color: '#29D6B5'},
  ['&.Mui-active']: {color: '#29D6B5',},
  ['& .MuiTableSortLabel-icon']: {color: '#29D6B5!important',}
}))

export const ArticleTable = () => {
  const [currentPage, setCurrentPage] = useState(0)

  //sorting const
  const [order, setOrder] = useState()
  const [orderBy, setOrderBy] = useState()

  //
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

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
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }


  function descendingComparator(a, b, orderBy) {
    //a and b are the rows we are comparing. orderby is the field so we comparing a and b on.
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

  const handleSearch = e => {
    let target = e.target;
    console.log(target.value);
    setFilterFn({
        fn: items => {
            if (target.value === "")
                return items;
            else
                return items.filter(x => x.title.toString().toLowerCase().includes(target.value.toLowerCase()));
        }
    })
}

  return (
    <>
      <Toolbar>
        <Input 
        
        variant = "outlined"
        label = "Search Table"
        InputProps={{
          startAdornment: (<InputAdornment position= "start">
            <Search/>
          </InputAdornment>)
        }}
        onChange = {handleSearch}
        />
      </Toolbar>    
      <TableContainer>
        <Table aria-label='software development process article table'>
          <TableHead>
            <TableRow>
              <TableCellVariant
                id='title'
                sortDirection = {orderBy === 'title' ? order:false}>
                <StyledLabel
                  active = {orderBy === 'title'}
                  direction = {orderBy === 'title' ? order : 'asc'}
                  onClick={ () => {handleSortRequest('title')}}>
                  Title
                </StyledLabel>
              </TableCellVariant>
              <TableCellVariant
              id='authors'
              sortDirection = {orderBy === 'authors' ? order:false}>
                <StyledLabel
                active = {orderBy === 'authors'}
                direction = {orderBy === 'authors' ? order : 'asc'}
                onClick={ () => {handleSortRequest('authors')}}>
                  Authors
                </StyledLabel>
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
                id='doi'
                sortDirection = {orderBy === 'doi' ? order:false}>
                <TableSortLabel
                  sx = {
                    {
                        '&.MuiTableSortLabel-root': {
                            color: 'white',
                        },
                        '&.MuiTableSortLabel-root:hover': {
                            color: '#29D6B5',
                        },
                        '&.Mui-active': {
                            color: '#29D6B5',
                        },
                        '& .MuiTableSortLabel-icon': {
                            color: '#29D6B5!important',
                        },
                    }
                }
                  active = {orderBy === 'doi'}
                  direction = {orderBy === 'doi' ? order : 'asc'}
                  onClick={ () => {handleSortRequest('doi')}}>
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
            {stableSort(filterFn.fn(data), getComparator(order, orderBy))
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
