import React from 'react';
import './App.css';
import { Form, TextArea } from 'semantic-ui-react'
import DoListItems from './components/DoListItems.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: 0,
      items: [],
      currentItem: {
        title: '',
        body: '',
        id: 0
      }
    }
    //Must bind the proper 'context' to be able to use 'this' within the functions:
    this.handleDelete = this.handleDelete.bind(this)
  }

  render(){
    return(
      <>
      <div>
        To Do List:
      </div>
      <br/>
      <input
        type="text"
        placeholder="Name Task"
        value={this.state.currentItem.title}
        onChange={e => this.updateText(e)}
      />
      <br />
      <TextArea
        placeholder="Tell me more..."
        value={this.state.currentItem.body}
        onChange={e => this.updateBody(e)}
      />
      <br />
      <button
      onClick={e => this.submit(e)}
      >
        Submit
      </button>
      <br/>
      <DoListItems
        items={this.state.items}
        handleDelete={this.handleDelete}
      />
      </>
    )
  }

  handleDelete = (id) => {
    console.log(id)
    let myItems = [...this.state.items]
    let updatedItems = myItems.filter(item => item.id !== id)
    this.setState({
      items: updatedItems
    })
  }

  updateText = (event) => {
    //alert(event.target.value)
    //console.log(event.target.value)
    let myText = event.target.value
    this.setState({
      currentItem: {
        title: event.target.value,
        body: this.state.currentItem.body,
        id: this.state.currentItem.id
      }
    })

    //console.log(this.state.items)
  }

  
  
  updateBody = (event) => {
    this.setState({
      currentItem: {
        title: this.state.currentItem.title,
        body: event.target.value,
        id: this.state.currentItem.id
      }
    })
  }

  submit = (event) => {
    //alert("hello")
    let theTitle = this.state.currentItem.title
    let theBody = this.state.currentItem.body
    let theId = this.state.currentItem.id
    
    if(theTitle !== '' && theBody !== ''){
     // alert("Error")
      let item = {
        title: theTitle,
        body: theBody,
        id: theId
      }
      let copyItems = this.state.items
      this.setState({
        items: [...copyItems, item]
      })

      this.setState({
        currentItem: {
          title: '',
          body: '',
          id: theId += 1
        }
      })
      console.log(this.state.items)
  }else{
    alert("Error!")
  }
  }

}

export default App;
