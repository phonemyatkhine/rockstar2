import React from 'react';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data : ['Bob','Alice','May']
    }
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.data.map(item => <Item name={item}/>)
          }
        </ul>
      </div>
    );
  }
}

class Item extends React.Component {
  render() {
    return (
      <li>{this.props.name}</li>
    )
  }
}

export default App;
