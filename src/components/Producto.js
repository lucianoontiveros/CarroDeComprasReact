import { Component } from "react";
import Button from './Button'
const styles = {
    producto: {
        boxShadow: 'o 5px 5px rgb(0, 0, 0,0.1)',
        border: 'solid 1px #eee',
        width: '30%',
        padding: '10px 15px',
        borderRadios: '5px',
    },
    img:{
        width: '100%',

    }
}

class Producto extends Component {
    render() {
        const { producto, agregarAlCarro } = this.props
        return (
            <div style={styles.producto}>
                <img style={styles.img} alt={producto.name} src={producto.img}/>
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
                <Button onClick={() => agregarAlCarro(producto)}>
                    Agregar al carro
                </Button> 
            </div> 
        )
    }
}

export default Producto 