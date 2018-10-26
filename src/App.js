import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventoryList: [],

    }
  }

  componentDidMount() {
    axios.get('/api/getAll')
    .then(response => {
        console.log(response);
        this.setState({
            inventoryList: [...response.data]
        })
    })  }

  render() {
    console.log(this.state.inventoryList)
    return (
      <div className="App">
        <Header />
        <Dashboard />
        <Form />
      </div>
    );
  }
}

export default App;
