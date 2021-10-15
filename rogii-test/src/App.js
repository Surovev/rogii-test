import React, {useState} from 'react';
import {createStore} from 'redux';
import {useDispatch, useSelector} from 'react-redux';
import Line from './elements/Line';
import LineTitle from './elements/LIneTitle';
import './App.css';
import testData from '../src/data/test-data.json';

const data = testData.content.map((obj, i) => {obj.number = i + 1;
  return obj});

// сортировка   
  function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        /* next line works with strings and numbers, 
         * and you may want to customize it to your needs
         */
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}
// сортировка

// редьюсер

const reducer = (state = data, action) => {

  switch (action.type) {

    case "COUNT_TABLE":
      return[...state.slice(3,8)]

    case "SORT":
      console.log(action);
      return [...state.sort( dynamicSort(action.payload))]

    default:
      return state;
  }

}
export const store = createStore(reducer)



// редьюсер

function App() {

  const [column, setColumn] = React.useState('');

    const dispatch = useDispatch();
    const renderData = useSelector(dataForRender => dataForRender)
    console.log(renderData);

    
 function sortData(options) {
  dispatch({type:"SORT", payload: options});
}

    const testFunc = () => {
      dispatch({type:"COUNT_TABLE"});
    }


  return (
    <div className="App">
      <h1 className="title">Table</h1>

      <table className="table">
        <LineTitle
          column={column}
          setColumn={setColumn}
          isTitle
          sortData={sortData}
          number="№"
          revision="revision"
          revstmp="revstmp"
          user_id="user_id"
          user_email="user_email"
          user_name="user_name"
          well_id="well_id"
          well_name="well_name"
          well_type="well_type"
          changes_summary="changes_summary"
        />

        { renderData.map(item => (
         <Line
          key={item.number}
          isTitle={false}
          number={item.number}
          revision={item.revision}
          revstmp={item.revstmp}
          user_id={item.user_id}
          user_email={item.user_email}
          user_name={item.user_name}
          well_id={item.well_id}
          well_name={item.well_name}
          well_type={item.well_type}
          changes_summary={item.changes_summary}
        />))}
      </table>
      <div className="breadcrumps">
        <div className="results-per-page">
          <span className="results-per-page__title">На странице</span>
          <span className="results-per-page__value" onClick={() => testFunc()}>5</span>
          <span className="results-per-page__value is-active" >10</span>
          <span className="results-per-page__value">25</span>
          <span className="results-per-page__value">50</span>
        </div>
        <div className="pagination">
          <span className="pagination__title">Страница:</span>
          <span className="pagination__arrow">«</span>
          <span className="pagination__page-number">1</span>
          <span className="pagination__arrow">»</span>
        </div>
      </div>
      
    </div>
  );
}

export default App;

