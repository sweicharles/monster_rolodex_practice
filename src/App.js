import React, { useState } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/searchbox/search-box.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFiled: "",
    };
  }
  handleChange = (e) => this.setState({ searchFiled: e.target.value });

  componentDidMount() {
    (async () => {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await res.json();
      // console.log(data);
      this.setState({ monsters: data });
    })();
  }
  render() {
    const { monsters, searchFiled } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFiled.toLowerCase())
    );

    return (
      <div className="App">
        <h1 className="Gametitle">Monster Rolodex</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
