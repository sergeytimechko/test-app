import React, {Component} from 'react';
import {DATA} from "./MOCK_DATA";
import {TABLE_CONFIG} from "./constants";
import "./App.css";
import TableComponent from "./TableComponent";

class App extends Component {
    render() {
        return(
            <div>
                <TableComponent data={DATA} config={TABLE_CONFIG} />

            </div>
        )
    }
}

export default App;