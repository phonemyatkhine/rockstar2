import React  from 'react';
import List from './List';
class App extends React.Component {

  state = {
    data: ['Milk', 'Bread']
  }
  input = React.createRef();

 add = (name) => {
   this.setState({
     data : [...this.state.data, name]
   });
 }

 remove = (name) => {
   this.setState({
     data : this.state.data.filter(item => item!==name)
   });
 }

  render() {
    return (
      <div>
        <List data={this.state.data} remove={this.remove}/>
        <input type="text" ref={this.input}/>
        <button onClick={() => {
          this.add(
            this.input.current.value
          );
        }}>+
        </button>
      </div>
    );
  }
}

export default App;
