import React from 'react';

class Item extends React.Component {
  render() {
    return (
      <li key={this.props.task.id}>
        {
          this.props.task.status === 1 ?
            <input type="checkbox" checked onChange={()=>{
              this.props.undo(this.props.task.id)
            }}/>
            :
            <input type="checkbox" onChange={()=>{
              this.props.done(this.props.task.id)
            }}/>
        }

        {this.props.task.subject}
        <button onClick={()=>{
          this.props.remove(this.props.task.id)
        }}>x</button>
      </li>
    );
  }
}

export default Item;
