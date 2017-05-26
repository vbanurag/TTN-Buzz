/**
 * Created by anurag on 26/5/17.
 */
import React, { Component } from 'react';
import { Modal,Button } from 'react-bootstrap';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';

class ComplaintChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [
            ],
            ShowModal: true
        }
    }
    componentWillMount = () => {
        const Software = this.props.complaints.filter((item) => {
            return item.category == 'Software';
        });
        const Hardware = this.props.complaints.filter((item) => {
            return item.category == 'Hardware';
        });
        const Infra = this.props.complaints.filter((item) => {
            return item.category == 'Infrastructure';
        });
        const Other = this.props.complaints.filter((item) => {
            return item.category == 'Other';
        });
        const { data } = this.state;
        data.push({name: 'Software',
            //Category: Software.length ,
            Resolved: this.isResolved(Software),
            Pending: this.isPending(Software),
            InProgress: this.isProgress(Software)
        });
        data.push({name: 'Hardware',
            //Category: Hardware.length,
            Resolved: this.isResolved(Hardware),
            Pending: this.isPending(Hardware),
            InProgress: this.isProgress(Hardware)
        });
        data.push({name: 'Infra',
            //Category: Infra.length,
            Resolved: this.isResolved(Infra),
            Pending: this.isPending(Infra),
            InProgress: this.isProgress(Infra)
        });
        data.push({name: 'Other',
            //Category: Other.length,
            Resolved: this.isResolved(Other),
            Pending: this.isPending(Other),
            InProgress: this.isProgress(Other)
        });
        this.setState({data});
    };
    isResolved = (arr) => {
        const retVal = arr.filter((item)=> {
            return item.status == 'Resolved';
        });
        return retVal.length;
    };
    isPending = (arr) => {
        const retVal = arr.filter((item)=> {
            return item.status == 'Pending';
        });
        return retVal.length;
    };
    isProgress = (arr) => {
        const retVal = arr.filter((item)=> {
            return item.status == 'InProgress';
        });
        return retVal.length;
    };
    open = () => {
        this.props.changeVisibilty();
        this.setState({ShowModal: false});
    };
    render(){
        return(
            <Modal show={this.state.ShowModal }>
                <Modal.Body>
                    <BarChart width={500} height={250} data={this.state.data}
                              barSize = {25} barGap={2}
                              margin={{top: 20, right: 25, left: 15, bottom: 5}}>
                        <XAxis dataKey="name"/>
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Legend />
                        <Bar dataKey="Resolved" stackId="a" fill="#5cf441" />
                        <Bar dataKey="Pending" stackId="a" fill="#f4424b" />
                        <Bar dataKey="InProgress" stackId="a" fill="#f4af41" />
                    </BarChart>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={ this.open }>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
export default ComplaintChart;
