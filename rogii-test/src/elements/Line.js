function Line (props) {

    const arrowUpClassname = props.isTitle? 'arrow-up' : '';
    const arrowDownClassname = props.isTitle? 'arrow-down' : '';


    return (
     <>
        <tr className="table__row">
          <td className={`table__value ${arrowDownClassname}`}>{props.number}</td>
          <td className={`table__value ${arrowUpClassname}`}>{props.revision}</td>
          <td className="table__value">{props.revstmp}</td>
          <td className="table__value">{props.user_id}</td>
          <td className="table__value">{props.user_email}</td>
          <td className="table__value">{props.user_name}</td>
          <td className="table__value">{props.well_id}</td>
          <td className="table__value">{props.well_name}</td>
          <td className="table__value">{props.well_type}</td>
          <td className="table__value">{props.changes_summary}</td>
        </tr>
     </>
    );
}

export default Line;

//  arrow-up arrow-down