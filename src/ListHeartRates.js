import React from 'react'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import axios from 'axios'

var styles = {
    "dataStyle": {
        "marginTop": "20px",
        "marginBottom": "20px",
        "color": "blue",
    }
}

class ListHeartRates extends React.Component {
    constructor() {
        super();
        this.state = {
            'nameTextField': '',
            'data': '',
        }
    }

    onNameTextFieldChange = (event) => {
        // Update the nameTextField state whenever the text field is changed or perturbed in any way:
        this.setState({'nameTextField': event.target.value});
    }

    onButtonClick = (event) => {
        //Use get request to fetch the data
        var address = 'http://127.0.0.1:5000/api/heart_rate/'
        address += this.state.nameTextField
        axios.get(address).then( (response) => {
            console.log(response);
            console.log(response.status);
            this.setState({"data": response.data})
        })
    }


    render(){
        return(
            <div>
                <TextField
                    floatingLabelText='User e-mail'
                    defaultValue='iamemail@email.com'
                    value={this.state.nameTextField}
                    onChange={this.onNameTextFieldChange}
                />

                <br />

                <Button
                    variant={'raised'}
                    label={'Search'}
                    onClick={this.onButtonClick}>
                    Search
                </Button>
                    <div style={styles.dataStyle}>
                        {this.state.data.heart_rate}
                    </div>
            </div>
        );
    }
}

export default ListHeartRates;