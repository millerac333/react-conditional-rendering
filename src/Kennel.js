import React, { Component } from "react"
import EmployeeList from "./EmployeeList"
import LocationList from "./LocationList"

export default class Kennel extends Component {

    state = {
        employees: [
            { name: "Jessica Younker" },
            { name: "Jordan Nelson" },
            { name: "Zoe LeBlanc" },
            { name: "Blaise Roberts" }
        ],
        locations: [
            { name: "Nashville North" },
            { name: "Nashville South" }
        ]
    }

    render() {
        return (
            <React.Fragment>
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
            </React.Fragment>
        );
    }
}


// Update your application so that the array of locations is passed from the Kennel state to the props of LocationList. Then use the map() method to display all location names.