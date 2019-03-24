import React from 'react';
import Item from './Item';

class Todo extends React.Component {

    render() {
      return (
        <ul>
        {this.props.tasks.map(task => {
          return (
            <Item
              task= {task}
              remove = {this.props.remove}
              done = {this.props.done}
            />
          );
        })}
        </ul>
      );
    }

}

export default Todo;
