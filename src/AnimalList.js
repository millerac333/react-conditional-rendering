// Create a new state array in the Kennel component named animals.
// Create a AnimalList component for displaying animals.
// Update Kennel to pass its animals state to AnimalList and use the appropriate key on this.props to display all animal names.

import React, { Component } from 'react'


export default class AnimalList extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.animals.map(animal =>
                        <div>
                            {animal.name}
                        </div>
                    )
                }
            </React.Fragment>
        )
    }
}