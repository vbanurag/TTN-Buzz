/**
 * Created by anurag on 12/5/17.
 */
import React,{ Component } from 'react';
import {
    Link
} from 'react-router-dom';

const PrintTable = (props) => {
    return(
        <tr>
            <td>{props.sNo+1}</td>
            {
                props.user.role=='User'?
                    <td><Link to={`/dashboard/resolve_complaint/${props.data._id}`} >{props.data._id}</Link></td>
                    :<td>{props.data._id}</td>
            }
            <td >{props.data.category}</td>
            <td className={`td-category-${props.data.status}`}>{props.data.status}</td>
            <td>{props.data.complaintBy.displayName}</td>
        </tr>
    )
}
export default PrintTable;