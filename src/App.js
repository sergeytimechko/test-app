import React, {Component} from 'react';
import DATA from "./MOCK_DATA";
import DATE from "./RoomFirst_nameLast_name";
import "./App.css";
import TableComponent from "./TableComponent";

class App extends Component {
    render() {
        return(
            <div>
                <TableComponent items={DATA+ DATE} />

            </div>
        )
    }
}

export default App;