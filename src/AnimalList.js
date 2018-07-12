import React, { Component } from "react"
import Animal from "./Animal"

export default class AnimalList extends Component {
    state = {
        animals: [
            { id: 1, name: "Jisie the Giraffe" },
            { id: 2, name: "Jordan the Jackal" },
            { id: 3, name: "Emily the Emu" },
            { id: 4, name: "Steve the Starfish" },
            { id: 5, name: "John the Swan" }
        ]
    };
    render() {
        return (
            <React.Fragment>
                <ul>
                    {
                        this.state.animals.map(animal => {
                            return <Animal animal={animal} key={animal.id} />
                        })
                    }
                </ul>
            </React.Fragment>
        )
    }
}