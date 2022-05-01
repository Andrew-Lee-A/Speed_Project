import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'

export const ArticleTable = () => {
  // fetch all articles from db

  function getData() {
    return [
      {
        title: "Bob's Burgers",
        authors: 'bob',
        source: 'burger land',
        pubYear: '2022',
        doi: 'xxxxxxxxxx',
        claimedBenefit: 'makes you code using less food',
        levelOfEvidence: 'strong support',
      },
      {
        title: "Bob's Burgers",
        authors: 'bob',
        source: 'burger land',
        pubYear: '2022',
        doi: 'xxxxxxxxxx',
        claimedBenefit: 'makes you code using less food',
        levelOfEvidence: 'strong support',
      },
      {
        title: "Bob's Burgers",
        authors: 'bob',
        source: 'burger land',
        pubYear: '2022',
        doi: 'xxxxxxxxxx',
        claimedBenefit: 'makes you code using less food',
        levelOfEvidence: 'strong support',
      },
    ]
  }

  const data = getData()

  return (
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
          {data.map((item) => {
            //   return (
            //     <TableRow key={item.doi} >
            //         <TableCell>{item.title}</TableCell>
            //         <TableCell>{item.authors}</TableCell>
            //         <TableCell>{item.source}</TableCell>
            //         <TableCell>{item.doi}</TableCell>
            //         <TableCell>{item.claimedBenefit}</TableCell>
            //         <TableCell>{item.levelOfEvidence}</TableCell>
            //     <TableRow />
            //     )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
