import React from 'react'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import axios from 'axios'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

class ListHeartRates extends React.Component {
    constructor() {
        super();
        this.state = {
            'nameTextField': 'iamemail@email.com',
            'data': {heart_rate: [0], heart_rate_times: [0]},
        }
    }

    onNameTextFieldChange = (event) => {
        // Update the nameTextField state whenever the text field is changed or perturbed in any way:
        this.setState({'nameTextField': event.target.value});
    };

    onButtonClick = (event) => {
        //Use get request to fetch the data
        var address = 'http://127.0.0.1:5000/api/heart_rate/';
        address += this.state.nameTextField;
        axios.get(address).then( (response) => {
            console.log(response);
            console.log(response.status);
            this.setState({"data": response.data})
        })
    };

    makeTable = (data) => {
        var tableArray = [];
        for (var i = 0; i < data.heart_rate.length; i++){
            tableArray.push((
                <TableRow>
                    <TableCell>
                        {data.heart_rate[i]}
                    </TableCell>
                    <TableCell>
                        {data.heart_rate_times[i]}
                    </TableCell>
                </TableRow>))
        }
        return tableArray
    };

    render(){
        var data = [];
        if (typeof this.state.data.heart_rate === 'undefined'){
            data = {heart_rate: ['User not in database'], heart_rate_times: ['User not in database']}
        }   else{
            data = this.state.data
        }

        var table_body = this.makeTable(data);

        console.log(table_body);

        return(
            <div>
                <TextField
                    id='email'
                    label='User e-mail'
                    defaultValue={this.state.nameTextField}
                    onChange={this.onNameTextFieldChange}
                />

                <br />

                <Button
                    variant={'raised'}
                    label={'Search'}
                    onClick={this.onButtonClick}>
                    Search
                </Button>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Heart Rate</TableCell>
                            <TableCell>Time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            table_body
                        }
                    </TableBody>
                </Table>

            </div>

        );
    }
}

export default ListHeartRates;