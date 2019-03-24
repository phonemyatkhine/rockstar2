import React from 'react';

class Add extends React.Component {

  input = React.createRef();

  render() {
    return (
      <div>
        <input type="text" ref={this.input}/>
        <button onClick={()=> {
          let subject = this.input.current.value;
          this.input.current.value = "";
          this.props.add(subject);
        }}>Add</button>
        <button onClick={this.props.clearAllDone}>Clear All Done</button>
      </div>
    );
  }
}

export default Add;
