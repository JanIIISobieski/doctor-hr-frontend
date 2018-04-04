import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import ListHeartRates from './ListHeartRates.js'
import 'react-table/react-table.css'

var styles = {
    "appBarStyle": {
        "marginBottom": "10px",
    }
}

class App extends React.Component {
    // One thing every component must do:
    // define the render method
    // (this defines the view of the component)
    render() {
        return (
            <div>
                <AppBar position="static" style={styles.appBarStyle}>
                    <Toolbar>
                        <Typography variant="title" color="default">
                            Heart Rate Monitor
                        </Typography>
                    </Toolbar>
                </AppBar>
                <ListHeartRates />
            </div>
        );
    }
}

export default App;
