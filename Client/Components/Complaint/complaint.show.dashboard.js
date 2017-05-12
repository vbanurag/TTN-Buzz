/**
 * Created by anurag on 11/5/17.
 */
import React, { Component } from 'react';
import PrintTable from './complaint.print.table.dashboard';

class ShowComplaint extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div className="tableComplaint">
                <table className="table">
                    <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Reference Id</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Filed By</th>
                    </tr>
                    </thead>
                    <tbody>
                    <PrintTable />
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ShowComplaint;