import React from 'react';
import Item from './item';
import Add from './add';

class App extends React.Component {

  constructor() {

    super();

    this.state = {
      data : ['Bob','Alice','May']
    }
    this.add = this.add.bind(this); // binding this to this.add
  }

  add(name) {

    var data = this.state.data;
    data.push(name);
    this.setState({
      data : data
    });
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.data.map(item => <Item name={item}/>)
          }
        </ul>
        <Add add={this.add}/>

      </div>
    );
  }
}


export default App;
