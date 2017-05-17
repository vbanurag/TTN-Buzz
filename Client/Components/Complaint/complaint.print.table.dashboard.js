/**
 * Created by anurag on 12/5/17.
 */
import React,{ Component } from 'react';

const PrintTable = (props) => {
    return(
        <tr>
            <td>{props.sNo+1}</td>
            <td>{props.data._id}</td>
            <td>{props.data.category}</td>
            <td>{props.data.status}</td>
            <td>{props.data.complaintBy.displayName}</td>
        </tr>
    )
}
export default PrintTable;