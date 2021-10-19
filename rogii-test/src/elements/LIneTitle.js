import React, { useState } from 'react';

function LineTitle(props) {

    const [sort, setSort] = React.useState('-');


    const createSort = (value, e) => {
        if (Object.keys(props.column).length !== 0) {
            props.column.classList.remove("arrow-up");
            props.column.classList.remove("arrow-down");
        }
        props.setColumn(e.target);

        if (sort === '-') {

            props.setColumn(e.target);
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
                {props.headers.map((item) => (<td key={item} className={`table__value table__title-value `} onClick={(e) => createSort(item, e)}>{item}</td>))}
            </tr>
        </>
    );
}

export default LineTitle;
