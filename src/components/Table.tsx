import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';
import {del} from '../Redux/Actions'
import { useSelector,useDispatch } from 'react-redux'

type editingprops = {
    editing:string,
    delete:string,
    changeVisibility : any,
}
function createData(
  name: string,
email:string,
book: string,
price:number,

) {
  return { name, email, book, price };
}



export default function BasicTable(props: editingprops) {

  const dispatch = useDispatch();
  const data = useSelector((state : any) => state.reducerFunction )
 
  return (
 <>
    { props.editing === "false" && props.delete === "false" ?
      <Typography variant='h4'> All Entries </Typography> : null
    }
    <Box margin={4} boxShadow={8}>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name of the User</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Book Name</TableCell>
            <TableCell align="right">Price</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row : any, index : any  ) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.book}</TableCell>
              <TableCell align="right">{row.price}</TableCell>

                { props.editing === "true" ? <Button variant="contained" onClick={()=>{props.changeVisibility(index)}}> Edit </Button> : null}
                { props.delete === "true" ? <Button variant="contained" onClick={()=>{dispatch(del(index)) }}> Delete </Button> : null}

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </>
  );
}
