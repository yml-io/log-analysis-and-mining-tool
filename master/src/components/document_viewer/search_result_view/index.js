import React from "react";
import ReactDOM from "react-dom";
import './index.less';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    background: 'rgb(8, 37,78)',
    color: 'white',
    minWidth: 650,
  },
});

const StyledTableCell = withStyles({
  root: {
    color: 'white',
  }
})(TableCell);


export default function SearchResultView(props) {
  const resultItems = props.view;

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="search result table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Level</StyledTableCell>
            <StyledTableCell align="right">Module</StyledTableCell>
            <StyledTableCell align="right">Thread Identifier</StyledTableCell>
            <StyledTableCell align="right">Message</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {resultItems.map((item, ind) => (
            <TableRow key={ind}>
              <StyledTableCell component="th" scope="row">
                {ind}
              </StyledTableCell>
              <StyledTableCell align="right">{item._source.data}</StyledTableCell>
              <StyledTableCell align="right">{item._source.level}</StyledTableCell>
              <StyledTableCell align="right">{item._source.process}</StyledTableCell>
              <StyledTableCell align="right">{item._source.threadId}</StyledTableCell>
              <StyledTableCell align="right">{item._source.message}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
