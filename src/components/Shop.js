import React, { useState, useEffect } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Product from './Product';


const Shop = () => {

    const [products, setProduct] = useState([])
    useEffect(() => {
        const products =[
            {
                id: '1',
                name: 'Chinigura Rice',
                regPrice: '109',
                sellPrice: '99',
                img: 'images/1.jpg'
            },
            {
                id: '2',
                name: 'Nazirshail Rice Premium',
                regPrice: '369',
                sellPrice: '339',
                img: 'images/2.jpg'
            },
            {
                id: '3',
                name: 'Miniket Rice Premium',
                regPrice: '349',
                sellPrice: '309',
                img: 'images/3.jpg'
            },
            {
                id: '4',
                name: 'Miniket Rice Standard',
                regPrice: '289',
                sellPrice: '265',
                img: 'images/4.jpg'
            },
            {
                id: '5',
                name: 'Nazirshail Rice standard',
                regPrice: '319',
                sellPrice: '279',
                img: 'images/5.jpg'
            },
            {
                id: '6',
                name: 'Pran Chinigura Rice',
                regPrice: '300',
                sellPrice: '250',
                img: 'images/6.jpg'
            },
            {
                id: '7',
                name: 'Katarbog Rice',
                regPrice: '320',
                sellPrice: '280',
                img: 'images/7.jpg'
            },
            {
                id: '8',
                name: 'Atop Rice',
                regPrice: '69',
                sellPrice: '45',
                img: 'images/8.jpg'
            },
            {
                id: '9',
                name: 'Jira Miniket Rice',
                regPrice: '310',
                sellPrice: '289',
                img: 'images/9.jpg'
            },
            {
                id: '10',
                name: 'Athash Rice',
                regPrice: '300',
                sellPrice: '309',
                img: 'images/10.jpg'
            },
            {
                id: '11',
                name: 'Katari Atop Rice',
                regPrice: '350',
                sellPrice: '339',
                img: 'images/11.jpg'
            },
            {
                id: '12',
                name: 'Banglamoti Rice',
                regPrice: '75',
                sellPrice: '69',
                img: 'images/12.jpg'
            },
            {
                id: '13',
                name: 'Aarong Miniket Rice',
                regPrice: '450',
                sellPrice: '400',
                img: 'images/13.jpg'
            },
            {
                id: '14',
                name: 'Pizam Atop Tice',
                regPrice: '330',
                sellPrice: '326',
                img: 'images/14.jpg'
            },
            {
                id: '15',
                name: 'Fortune Rice',
                regPrice: '350',
                sellPrice: '339',
                img: 'images/15.jpg'
            },
            {
                id: '16',
                name: 'Fresh Chinigura Rice',
                regPrice: '350',
                sellPrice: '339',
                img: 'images/16.jpg'
            }
        ];

        setProduct(products)

    }, [])
    
    

    return (
        <Fragment>
            <div className="container my-5">
                <div className="row">
                    {
                        products.map( (product) => <Product productdata ={product} /> )
                    }
                    

                </div>
            </div>
        </Fragment>
    )
}

export default Shop;
