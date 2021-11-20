import React from 'react';
import { Fragment } from 'react';
// import product_image from '../1.jpg';

const Product = (data) => {
    return (
        <Fragment>
            <div className="col-md-4 my-3 ">
                <div className="card shadow">
                    <img src={data.productdata.img} width="100%" height="250px" alt="" />
                    <div className="card-body">
                        <h3>{data.productdata.name}</h3><hr />
                        <p>Regular Price: <del>{data.productdata.regPrice}</del> BDT</p>
                        <p>Sell Price: {data.productdata.sellPrice} BDT</p>
                        <a className="btn btn-warning" href="#">Add Cart</a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Product;
