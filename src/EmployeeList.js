// Update your application so that the array of locations is passed from the Kennel state to the props of LocationList. Then use the map() method to display all location names.
import React, { Component } from 'react'


export default class EmployeeList extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.employees.map(employee =>
                        <div>
                            {employee.name}
                        </div>
                    )
                }
            </React.Fragment>
        )
    }
}

