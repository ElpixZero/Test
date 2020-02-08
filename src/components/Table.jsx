import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import {Table, TableRow,  TableBody, TableCell, TableContainer, TableHead, Paper, TablePagination, Typography} from '@material-ui/core';
import {ArrowDownward as ArrowDownwardIcon, Edit as EditIcon, Close as CloseIcon} from '@material-ui/icons';

import SelectedPersonCard from './PersonCard';
import LoadingIndicator from './LoadingIndicator';
import AddTableObj from './AddTableObj';
import MyTextField from './TextField';
import ErrorMessage from './ErrorMessage';

import CONSTANTS from '../utils/constants'
import FetchWithTimeOut from '../utils/FetchWithTimeOut';

const maxPaginationCount = 50;
const perPageNavigationCount = 10;

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

const filterData = (data, filterOptions) => {
  return data.filter( item => item[filterOptions.key].toString().toUpperCase().indexOf(filterOptions.value.toUpperCase()) !== -1);
}

const sortData = (data, sortOptions, filterOptions) => {
  const transformedData = filterOptions && filterOptions.key !== '' ? filterData(data, filterOptions).map((el, index) => [el, index]): data.map((el, index) => [el, index]);

  const res = transformedData.sort( (a, b) => {
    return sortOptions.rule === CONSTANTS.DESC ? desc(a[0], b[0], sortOptions.key) : -desc(a[0], b[0], sortOptions.key);
  });

  return res.map(el => el[0]);
}

const getAnotherSortRule = (lastRule) => {
  if (lastRule === CONSTANTS.DESC) return CONSTANTS.ASC;
  return CONSTANTS.DESC;
}

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: 'yellow',
  },
  body: {
    fontSize: 14,
    backgroundColor: theme.palette.common.black,
    color: 'yellow',
  },
}))(TableCell);


function CreateTable({source}) {
  const classes = useStyles();

  const [error, setError] = React.useState('');
  const [isEdit, setIsEdit] = React.useState('');
  const [editData, setEditData] = React.useState('');
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedTableObj, setSelectedTableObj] = React.useState(false);
  const [paginationCount, setPaginationCount] = React.useState(perPageNavigationCount);
  const [paginationPage, setPaginationPage] = React.useState(0);
  const [sortOptions, setSortOptions] = React.useState({
    key: '',
    rule: CONSTANTS.DESC
  });

  const handleCloseInputFilter = () => {
    setIsEdit('');
    setEditData('');
  }

  const fetchData = async (source) => {
    try {
      setIsLoading(true);

      const fetchResponse = await FetchWithTimeOut(source, {}, CONSTANTS.MAX_TIMEOUT_SECONDS)

      if (fetchResponse.status === 200) {
        setData(await fetchResponse.json());
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setError('К сожалению, произошла ошибка при загрузке данных для таблицы. Повторите, пожалуйста, позже')
      }
    } catch(e) {
      setError('К сожалению, время ожидания загрузки окончена. Попробуйте, пожалуйста, позже');
      setIsLoading(false);
    }
  }

  const addNewObj = (data, newObj) => {
    let lastData = data.slice();
    lastData.unshift(newObj);

    return setData(lastData);
  }

  React.useEffect(() => {
    fetchData(source);
  }, [source]);
  
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
              {
                error ? <ErrorMessage style={{margin: '0 auto'}}>{error}</ErrorMessage>
                : <>
                    <Table className={classes.taisRequiredble} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          { headRows.map( (item, id) => <StyledTableCell key={item}> 
                                <div
                                  style={{ display: 'flex', alignItems: 'center', justifyContent: id === 0 ? 'flex-start' : 'flex-end'}}
                                >
                                  {
                                    isEdit === item ? <>
                                      <MyTextField value={editData} onChange={setEditData} label={item} />
                                      <CloseIcon onClick={handleCloseInputFilter} style={{fontSize: 16, cursor: 'pointer', marginLeft: 10}} />

                                    </>
                                    : <>
                                    <div onClick={setSortOptions.bind(this, {key: item, rule: getAnotherSortRule(sortOptions.rule)})} style={{cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginRight: 15}}>
                                      <ArrowDownwardIcon style={{marginRight: 5, display: item === sortOptions.key ? 'block' : 'none', transform: sortOptions.rule === CONSTANTS.DESC ? 'rotate(0deg)' : 'rotate(180deg)'}} />
                                      {item}
                                    </div>
                                    <EditIcon onClick={() => setIsEdit(item)} style={{fontSize: 16, cursor: 'pointer'}} />
                                  </>
                                  }
                                </div>
                              </StyledTableCell>
                            )
                          }
                        </TableRow>
                      </TableHead>
                      <TableBody>
                      {paginateData(sortData(data, sortOptions, {key: isEdit, value: editData}), paginationCount, paginationPage).map(row => (
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