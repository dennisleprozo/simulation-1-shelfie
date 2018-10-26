import React, { Component } from 'react'
import axios from 'axios';

// import { Link } from 'react-router-dom'
// import routes from '../../routes'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "",
            productName: "",
            price: 0,
            productID: null,
            inventoryList: [],
            products: [],
        }
        this.onClickCancel = this.onClickCancel.bind(this)
        this.onClickAdd = this.onClickAdd.bind(this)
        this.onChangeImage = this.onChangeImage.bind(this)
        this.onChangeProductName = this.onChangeProductName.bind(this)
        this.onChangePrice = this.onChangePrice.bind(this)
    }

    componentDidMount() {
        axios.get('/api/products')
                .then(response => {
                    console.log(response);
                    this.setState({
                        products: [...response.data]
                    })
                })
                console.log(this.state.products)
    }

//reset
    onClickCancel(e) {
        this.setState({
            image: "",
            productName: "",
            price: 0,
            productID: null
        })

    }
    
    onClickAdd(e) {
        axios.post('/api/products')
            .then(res=> {
                console.log(res.data);
            })
            this.setState({
                inventoryList: e.target.value
        })
    }

//image
    onChangeImage(val) {
        this.setState({
            image: val
        })
    }

    onChangeProductName(val) {
        this.setState({
            productName: val
        })
    }

    onChangePrice(val) {
        this.setState({
            price: val
        })
    }





  render() {
    return (
      <div>Form
        <div>
                Image URL:
            <div>
                <input onChangeImage={e => this.onChangeImage(e.target.value)}
                    // value={this.state.image} 
                    alt="imgURL" />
            </div>
                Product Name:
            <div>
                <input onChangeProductName={e => this.onChangeProductName(e.target.value)}
                    // value={this.state.productName} 
                    type="text" />
            </div>
                Price:
            <div>
                <input onChangePrice={e => this.onChangePrice(e.target.value)}
                // value={this.state.price} 
                type="number"/>
            </div>
            <div>
                <button onClick={() => this.onClickCancel()}>Cancel</button>
                    {/* If (this.state.currentProductID === currentProductID) */}
                    {/* <button onClick={() => this.updateProduct()}> Save </button> */}
                <button onClick={() => this.onClickAdd()}> Add to Inventory</button>


                {this.state.products}
            </div>
        </div>
      </div>
    )
    
  }//render
}//class


