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
        ],
        animals: [
            { name: "Jisie the Giraffe" },
            { name: "Jordan the Jackal" },
            { name: "Emily the Emu" },
            { name: "Steve the Starfish" },
            { name: "John the Swan" }
        ]
    }

    render() {
        return (
            <React.Fragment>
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
                <AnimalList animals={this.state.animals} />
            </React.Fragment>
        );
    }
}


