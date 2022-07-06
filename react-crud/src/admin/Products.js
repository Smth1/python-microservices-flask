import React, { useEffect, useState } from 'react';
import Wrapper from './Wrapper';
import {Link} from 'react-router-dom';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const response = fetch("http://localhost:8000/api/products")

            const data = (await response).json();

            console.log(data);

            setProducts(data);

        };


        getProducts();

    }, []);

    const del = async (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            await fetch(`http://localhost:8000/api/products/${id}`, {
                method: 'DELETE'
            });

            setProducts(products.filter(p => p.id !== id));
        }
    };

    return (
        <Wrapper>
            <h2>Section title</h2>

            <div className='pt-3 pb-2 mb-3 border-bottom'>
                <div className='btn-border mb-2 mb-md-0'>
                    <Link to='/admin/products/create' className='btn btn-sm btn-outline-secondary'>Add</Link>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Image</th>
                            <th scope="col">Title</th>
                            <th scope="col">Likes</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(p => {
                            return (
                                <tr key={p.id}>
                                    <td>{p.id}</td>
                                    <td><img src={p.image} height='100' alt="image"/></td>
                                    <td>{p.title}</td>
                                    <td>{p.likes}</td>
                                    <td>
                                        <div className='btn-group mr-2'>
                                        <Link to={`/admin/products/${p.id}/edit`} className='btn btn-group btn-outline-secondary'>
                                                Edit
                                        </Link>
                                            <a href='#' className='btn btn-group btn-outline-secondary'
                                                onClick={() => del(p.id)} >
                                                Delete</a>
                                        </div>
                                    </td>
                                </tr>);
                        })}
                        <tr>
                            <td>1,001</td>
                            <td>random</td>
                            <td>data</td>
                            <td>placeholder</td>
                            <td>text</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Wrapper>
    );
};

export default Products;