import React, { Component } from "react";

class PokeApi extends Component {
  constructor(props) {
    super(props);
  }
  state = { pokemons: [] };

  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon/";

    fetch(url)
      .then((data) => data.json())
      .then((json) => {
        console.log(json);
      });
  }

  render() {
    return (
      <div>
        <h3>Pokemons</h3>
      </div>
    );
  }
}

export default PokeApi;
