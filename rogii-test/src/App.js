import React from 'react';
import Line from './elements/Line';
import './App.css';
import testData from '../src/data/test-data.json';
const data = testData.content.map((obj, i) => {obj.number = i + 1;
return obj});
console.log(data);

function App() {
  return (
    <div className="App">
      <h1 className="title">Table</h1>

      <table className="table">
        <Line
          isTitle
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

        {data.map(item => (
         <Line
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
          <span className="results-per-page__value">5</span>
          <span className="results-per-page__value is-active">10</span>
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

