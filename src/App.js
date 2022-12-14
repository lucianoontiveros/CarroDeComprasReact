import { Component } from 'react';
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'

class App extends Component {
  state = { 
    productos: [
      { name: 'Tomate', price: 1500, img: './productos/tomates.jpg' },
      { name: 'Arbeja', price: 2500, img: './productos/arbejas.jpg' },
      { name: 'Lechuga', price: 500, img: './productos/lechugas.jpg' },
    ],
    carro: [],
  }


  agregarAlCarro = (producto) => { 
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }
  
  render() {
    return(
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Productos 
            agregarAlCarro={() => console.log('No hace nada')}
            productos={this.state.productos}
          />
        </Layout>
        
      </div>
    )
  }
}

export default App;
