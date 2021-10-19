function Line(props) {


  return (
    <>
      <tr className="table__row">
        {props.headers.map((header) => (<td key={(props.uniqueNumber).toString() + props.currentObj[header]} className="table__value">{props.currentObj[header]}</td>))}
      </tr>
    </>
  );
}

export default Line;

//  arrow-up arrow-down

// <td className="table__value">{props.number}</td>
// <td className="table__value">{props.revision}</td>
// <td className="table__value">{props.revstmp}</td>
// <td className="table__value">{props.user_id}</td>
// <td className="table__value">{props.user_email}</td>
// <td className="table__value">{props.user_name}</td>
// <td className="table__value">{props.well_id}</td>
// <td className="table__value">{props.well_name}</td>
// <td className="table__value">{props.well_type}</td>
// <td className="table__value">{props.changes_summary}</td>