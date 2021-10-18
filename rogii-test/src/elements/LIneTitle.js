import React, { useState } from 'react';

function LineTitle (props) {

    console.log(props.headers);
    
    const [sort, setSort] = React.useState('-');
    

    const testSort = (value, e) => {
        if (props.column !== '') {
            props.column.classList.remove("arrow-up");
            props.column.classList.remove("arrow-down");
        }
        props.setColumn(e.target);
       // e.target.className.add('arrow-up');
       
        if (sort === '-') {
            
            props.setColumn(e.target);
            console.log(props.column);
            setSort('');
            e.target.classList.add("arrow-up");
            e.target.classList.remove("arrow-down");
        }
        if (sort === '') {
            e.target.classList.add("arrow-down");
            e.target.classList.remove("arrow-up");
            setSort('-');
        } 
 
        props.sortData(`${sort}${value}`)
    }

    return (
     <>
        <tr className="table__row">
          {props.headers.map((item) => (<td className={`table__value table__title-value `} onClick={(e) => testSort(item, e)}>{item}</td>))}
        </tr>
     </>
    );
}

export default LineTitle;

//  arrow-up arrow-down

{/* <td className={`table__value table__title-value `} onClick={(e) => { testSort('number', e)}}>{props.number}</td>
<td className={`table__value table__title-value `} onClick={(e) => testSort(props.revision, e)}>{props.revision}</td>
<td className="table__value table__title-value" onClick={(e) => testSort(props.revstmp, e)}>{props.revstmp}</td>
<td className="table__value table__title-value">{props.user_id}</td>
<td className="table__value table__title-value">{props.user_email}</td>
<td className="table__value table__title-value">{props.user_name}</td>
<td className="table__value table__title-value">{props.well_id}</td>
<td className="table__value table__title-value">{props.well_name}</td>
<td className="table__value table__title-value">{props.well_type}</td>
<td className="table__value table__title-value">{props.changes_summary}</td> */}