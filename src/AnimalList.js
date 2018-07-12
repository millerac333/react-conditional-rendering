import React, { Component } from "react";
import Animal from "./Animal";

export default class AnimalList extends Component {
  state = {
    animals: [
      { id: 1, name: "Jisie the Giraffe", Breed: "Masai Giraffe" },
      { id: 2, name: "Jordan the Jackal", Breed: "Golden Jackal" },
      { id: 3, name: "Emily the Emu", Breed: "Emu" },
      { id: 4, name: "Steve the Starfish", Breed: "Crown-of-Throns Starfish" },
      { id: 5, name: "John the Swan", Breed: "Black Swan" }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.animals.map(animal => {
            return <Animal animal={animal} key={animal.id} />;
          })}
        </ul>
      </React.Fragment>
    );
  }
}
