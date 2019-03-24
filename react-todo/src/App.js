import React from 'react';
import Todo from './Todo';
import Done from './Done';
import Add from './Add';

class App extends React.Component {

  autoid = 4;
  state = {
    tasks : [
      { id: 1, subject: "Milk", status: 0},
      { id: 2, subject: "Bread", status: 1},
      { id: 3, subject: "Egg", status: 1},
      { id: 4, subject: "Butter", status: 0},
    ]
  }

  add = subject => {
    let newTask = {id: ++this.autoid, subject: subject, status : 0};
    this.setState(
      {
        tasks : [
          ...this.state.tasks , newTask
        ]
      }
    )
  }

  remove = id => {
    this.setState({
      tasks : this.state.tasks.filter(task => task.id!==id)
    });
  }

  done = id => {
    this.setState({
      tasks : this.state.tasks.map(task => {
        if(task.id === id) {
          task.status =1;
        }
        return task;
      })
    });
  }
  undo = id => {
    this.setState({
      tasks : this.state.tasks.map( task => {
        if(task.id === id) {
          task.status = 0;
        }
        return task;
      })
    });
  }

  clearAllDone = () => {
    this.setState({
      tasks : this.state.tasks.filter( task => task.status !== 1 )
    });
  }

  render() {
    return (
      <div>
        <Header count = {this.state.tasks.filter(task => {
          return task.status === 0;
        }).length} status="Todo" />
        <Todo
          tasks= {this.state.tasks.filter(task => {
            return task.status === 0;
          })}
          remove={this.remove}
          done = {this.done}
        />
        <hr/>
        <Header count = {this.state.tasks.filter(task => {
          return task.status === 1;
        }).length} status="Done"/>
        <Done
          tasks= {this.state.tasks.filter(task => {
            return task.status === 1;
          })}
          remove={this.remove}
          undo={this.undo}
        />
        <Add
          add={this.add}
          clearAllDone = {this.clearAllDone}
        />
      </div>
    );
  }

}


class Header extends React.Component {
  render() {
    return (
      <h1>{this.props.status} List ({this.props.count})</h1>
    );
  }
}

export default App;
