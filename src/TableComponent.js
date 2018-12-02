import React, {Component} from "react"

import PropTypes from 'prop-types'

class TableComponent extends Component {

    static propTypes = {
        data: PropTypes.array,
        config: PropTypes.array
    }

    render() {
        return (
            <div className="table-component">
                {this.props.config.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.rooms} </td>
                            <td>{item.first_names}</td>
                            <td>{item.last_names}</td>
                        </tr>
                    )
                })}
                {this.props.data.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.rooms} {index + 1}</td>
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