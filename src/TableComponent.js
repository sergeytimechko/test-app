import React, {Component} from "react";
import DATA from "./MOCK_DATA";
import DATE from "./RoomFirst_nameLast_name";


class TableComponent extends Component {
    render() {
        return (
            <div className="App_app">
                {DATE.map((item, index) => {
                    return(
                        <tr key={index}>
                            <td>{item.rooms} </td>
                            <td>{item.first_names}</td>
                            <td>{item.last_names}</td>
                        </tr>
                    )})}
                {DATA.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.rooms} {index+1}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                        </tr>
                    )
                })}
            </div>
        );
    }
}



export default TableComponent;