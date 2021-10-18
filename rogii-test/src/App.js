import React, {useState, useEffect} from 'react';
import {createStore} from 'redux';
import {useDispatch, useSelector} from 'react-redux';
import Line from './elements/Line';
import LineTitle from './elements/LIneTitle';
import './App.css';
import testData from '../src/data/test-data.json';

// исходные данные 

const data = testData.content.map((obj, i) => {obj.number = i + 1;
  return obj});

// исходные данные

// сортировка   
  function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}
// сортировка

// редьюсер

const reducer = (state = data, action) => {
  switch (action.type) {
    
    case "COUNT_TABLE":
      return data.slice(action.firstIndex, action.lastIndex);

    case "PAGINATION":
      return data.slice(action.firstIndex, action.lastIndex);

    case "SORT":
      console.log(action);
      return [...data.sort( dynamicSort(action.payload))];

    default:
      return state;
  }

}
export const store = createStore(reducer)

// редьюсер

function App() {

  const headers = Object.keys(data[0]);

  const [column, setColumn] = React.useState('');
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(10);
  const [sortListener, setSortListener] = React.useState('');


  const dispatch = useDispatch();
  const renderData = useSelector(dataForRender => dataForRender);

  useEffect(() => {
    dispatch({type:"COUNT_TABLE", firstIndex: itemsPerPage * (currentPage - 1), lastIndex: itemsPerPage * (currentPage - 1) + itemsPerPage});
  }, [itemsPerPage, currentPage, sortListener, dispatch]);

    
 function sortData(options) {
  dispatch({type:"SORT", payload: options});
  setSortListener(options);
  setCurrentPage(1);
}


 const changeItemsPerPage = (n) => {
  setCurrentPage(1);
setItemsPerPage(n);
dispatch({type:"COUNT_TABLE", firstIndex: 0, lastIndex: n});
 }

 const setPrevPage = () => {
   if(currentPage > 1) {
    let totalPages = currentPage - 1;
    setCurrentPage(totalPages);
     
   } else {
    return;
   }
 }

 const setNextPage = () => {
   let pages = Math.ceil(data.length / itemsPerPage);
  if(currentPage < pages) {
    let totalPages = currentPage + 1
    setCurrentPage(totalPages);
    
  } else {
return;
    
  }
}

  return (
    <div className="App">
      <h1 className="title">Table</h1>
      

      <table className="table">
      <tbody>
        <LineTitle
          
          headers={headers}
          column={column}
          setColumn={setColumn}
          isTitle
          sortData={sortData}
        />

        { renderData.map(item => (
         <Line
          headers={headers}
          isTitle={false}
          currentObj={item}
          key={item.revision}
          uniqueNumber={`${item.revision * 99}`}
        />))}
          </tbody>
      </table>
      <div className="breadcrumps">
        <div className="results-per-page">
          <span className="results-per-page__title">На странице</span>
          <span className={`results-per-page__value ${itemsPerPage === 5 ? 'is-active' : ''}`} onClick={() => changeItemsPerPage(5)}>5</span>
          <span className={`results-per-page__value ${itemsPerPage === 10 ? 'is-active' : ''}`} onClick={() => changeItemsPerPage(10)}>10</span>
          <span className={`results-per-page__value ${itemsPerPage === 25 ? 'is-active' : ''}`} onClick={() => changeItemsPerPage(25)}>25</span>
          <span className={`results-per-page__value ${itemsPerPage === 50 ? 'is-active' : ''}`} onClick={() => changeItemsPerPage(50)}>50</span>
        </div>
        <div className="pagination">
          <span className="pagination__title">Страница:</span>
          <span className="pagination__arrow"onClick={setPrevPage}>«</span>
          <span className="pagination__page-number">{currentPage}</span>
          <span className="pagination__arrow"onClick={setNextPage}>»</span>
        </div>
      </div>
    
    </div>
  );
}

export default App;

