import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './components/ListItems.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
    //Must bind the proper 'context' to be able to use 'this' within the functions:
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleInput(e){
    this.setState({
      currentItem: {
        text: e.target.value, 
        key: Date.now()
      }
    })
  }
     

  addItem(e){
    //prevents the default effect of having the page reload on form Submit
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem !== ""){
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
    console.log(newItem)
  }

  render() {
    return(
    <h1>
      <div className="App"> 
      <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter Text"
          value={this.state.currentItem.text}
          onChange={this.handleInput} />
          <button type="submit">Add</button>
        </form>
      </header>
      <ListItems items={this.state.items} />
      </div>
    </h1>
    )
  };
}

export default App;
