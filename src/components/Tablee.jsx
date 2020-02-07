import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import Typography from '@material-ui/core/Typography';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import SelectedPersonCard from './PersonCard';
import LoadingIndicator from './LoadingIndicator';
import AddTableObj from './AddTableObj';


const maxPaginationCount = 50;

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const headRows = [
  'id', 'firstName', 'lastName', 'email', 'phone'
];

const paginateData = (data, pagValue, pageNumber) => {
  return data.filter( (item, id) => id < pagValue  * (pageNumber + 1) && id >= pagValue  * (pageNumber));
}

const createPaginationBreakpoints = (data, per) => {
  let dataLength = data.length;
  let pointer = per;
  let paginationBreakpoints = [];
  while (dataLength > per && pointer <= maxPaginationCount) {
    paginationBreakpoints.push(pointer);
    pointer += per;
    dataLength -= per;
  }

  return paginationBreakpoints;
}

function desc(a, b, orderBy) {
if (b[orderBy] < a[orderBy]) {
  return -1;
}
if (b[orderBy] > a[orderBy]) {
  return 1;
}
return 0;
}

const sortData = (data, sortOptions) => {
  const transformedData = data.map((el, index) => [el, index]);

  const res = transformedData.sort( (a, b) => {
    if (sortOptions.rule === 'desc') {
      let descSort = desc(a[0], b[0], sortOptions.key);
       return descSort;
    } else {
      let descSort = -desc(a[0], b[0], sortOptions.key);
      return descSort;
    }
  });

  return res.map(el => el[0]);
}

const getAnotherSortRule = (lastRule) => {
  if (lastRule === 'desc') return 'asc';
  return 'desc';
}

const perPageNavigationCount = 10;

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: 'yellow',
  },
  body: {
    fontSize: 14,
    backgroundColor: theme.palette.common.black,
    color: 'yellow',TableContainer
  },
}))(TableCell);


function CreateTable({source}) {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const fetchData = async (source) => {
    setIsLoading(true);
    const fetchResponse = await fetch(source);
    if (fetchResponse.status === 200) {
      const data = await fetchResponse.json();
      setData(data);
      setIsLoading(false);
    }
  }
  const classes = useStyles();
  const [selectedTableObj, setSelectedTableObj] = React.useState(false);
  const [paginationCount, setPaginationCount] = React.useState(perPageNavigationCount);
  const [paginationPage, setPaginationPage] = React.useState(0);
  const [sortOptions, setSortOptions] = React.useState({
    key: '',
    rule: 'desc'
  });

  const addNewObj = (data, newObj) => {
    let lastData = data.slice();
    lastData.unshift(newObj);

    return setData(lastData);
  }

  React.useEffect(() => {
    fetchData(source);
  }, [source]);

  console.log('table updating');


  return (
    <div style={{padding: 20, maxWidth: 1440,  margin: '0 auto'}}>
      <TableContainer style={{backgroundColor: 'black'}} component={Paper}>
        <div style={{display: 'flex', paddingBottom: 10, maxHeight: 50, alignItems: 'center', background: 'black', justifyContent: 'space-between'}}>
          <Typography variant="h5" style={{backgroundColor: 'black', color: 'yellow'}}>Таблица данных</Typography>
          <AddTableObj rows={headRows} addNewObj={addNewObj.bind(this, data)} />
        </div>
        {
          isLoading ? <LoadingIndicator style={{marginTop: 100}} />
          : <>
            <Table className={classes.taisRequiredble} aria-label="simple table">
              <TableHead>
                <TableRow>
                  { headRows.map( (item, id) => <StyledTableCell onClick={setSortOptions.bind(this, {key: item, rule: getAnotherSortRule(sortOptions.rule)})} key={item}> 
                        <div
                          style={{cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: id === 0 ? 'flex-start' : 'flex-end'}}
                        >
                          <ArrowDownwardIcon style={{marginRight: 5, display: item === sortOptions.key ? 'block' : 'none', transform: sortOptions.rule === 'desc' ? 'rotate(0deg)' : 'rotate(180deg)'}} />
                          {item}
                        </div>
                      </StyledTableCell>
                    )
                  }
                </TableRow>
              </TableHead>
              <TableBody>
              {paginateData(sortData(data, sortOptions), paginationCount, paginationPage).map(row => (
                <TableRow onClick={setSelectedTableObj.bind(this, row)} style={{cursor: 'pointer'}} key={row.id + row.email}>
                  <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.firstName}</StyledTableCell>
                  <StyledTableCell align="right">{row.lastName}</StyledTableCell>
                  <StyledTableCell align="right">{row.email}</StyledTableCell>
                  <StyledTableCell align="right">{row.phone}</StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
            </Table>

            <TablePagination
              style={{color: 'yellow', backgroundColor: 'black'}}
              rowsPerPageOptions={createPaginationBreakpoints(data, perPageNavigationCount)}
              component="div"
              count={data.length}
              rowsPerPage={paginationCount}
              page={paginationPage}
              onChangePage={(e, newPage) => setPaginationPage(newPage)}
              onChangeRowsPerPage={(event) => setPaginationCount(event.target.value)}
            />
            <SelectedPersonCard data={selectedTableObj} />
          </>
        }
      </TableContainer>
    </div>
  );
}

CreateTable.propTypes = {
  source: PropTypes.string.isRequired
}

export default CreateTable;