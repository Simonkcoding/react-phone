import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct
    };

    componentDidMount(){
        this.setProducts();
    }


    setProducts = () =>{
    let tempProducts = [];
    storeProducts.forEach(item=>{
        const singleItem = {...item};
        tempProducts = [...tempProducts,singleItem];
    })
        this.setState(()=>{
            return {products:tempProducts};
        })
    }

    handleDetail = () => {
        console.log('hello from detail');
    };

    addToCart = (id) => {
        console.log(`hello from add to cart ${id}`);
    };

    render() {
        const {products, detailProduct} = this.state;
        return (
            <ProductContext.Provider value={{
                products,
                detailProduct,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
                }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };