import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list-component';
import { SearchField } from './components/SearchField/SearchField-component';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));

  }
  handleChange(e) {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredmonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monster Show</h1>
        <SearchField type='search' handleChange={this.handleChange} placeholder='search monsters' />
        <CardList monst={filteredmonsters} />
      </div>
    )
  }
}

export default App;
