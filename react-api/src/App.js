// import api from './api'
import React, { Component } from 'react'
import api from './api';
class App extends Component{

  state = {
    filmes: [ ],
  }

  async componentDiMount(){
    const response = await api.get('');
console.log(response.data)
    this.setState({filmes: response.data});
  }

  render(){
    return(
      <div>
<h1> Listar Filmes</h1>

      </div>
    )
      
    
  }
}

export default App;
