import React, {useState} from "react";
import { Navigate } from "react-router-dom";
import Wrapper from "./Wrapper";

const ProductsEdit = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        console.log(title, image);

        try {
            await fetch('http://localhost:8000/api/products', {
                    method : 'POST',
                    headers : {  'Content-Type' : 'application/json' },
                    body : JSON.stringify({
                        title,
                        image
                    })
            });

        } catch (e) {
            console.log(e);
        }

        setRedirect(true);
    }

    console.log("redirect");
    console.log(redirect);
    if (redirect) {
        return <Navigate to={'/admin/products'} />;
    }

    return (
        <Wrapper>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label>Title</label>
                    <input type='text' className='form-control' name='title' 
                    onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input type='text' className="form-control" name='image' 
                    onChange={e => setImage(e.target.value)}
                    />
                </div>

                <button className="btn btn-outline-secondary">Save</button>
            </form>
        </Wrapper>
    );
};

export default ProductsEdit;