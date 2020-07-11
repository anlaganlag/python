import React, { Component } from 'react'
import Todos from "./components/Todos";


class App extends Component {
  state ={
    todo:[
      {
        id:1,
        title:"Take out the trash",
        completed:false
      },
      {
        id:2,
        title:"Dinner with wife",
        completed:false
      },
      {
        id:3,
        title:"Meeting with boss",
        completed:false
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todo} />
      </div>
    );
  }
}

export default App
