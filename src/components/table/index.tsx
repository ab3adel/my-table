
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { tableState } from '../../store/store';
import {useRecoilState} from 'recoil'

interface iRow{id:number,title:string}
interface iProps {data:iRow[]}
export default function MyTable() {
  const [state]=useRecoilState(tableState)
  return (
    <TableContainer component={Paper}
    sx={{maxHeight:'70vh'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
           
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Title</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {state.length>0 ?
          state.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
             
            </TableRow>
          )):''
        }
        </TableBody>
      </Table>
    </TableContainer>
  );
}