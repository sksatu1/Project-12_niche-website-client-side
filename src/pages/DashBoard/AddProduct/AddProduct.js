import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        fetch("http://localhost:5000/products", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.insertedId);
                if (data.insertedId) {
                    alert('Successfully added New Product');
                    history.push('/home');
                }
            })
        console.log(data);
    }


    return (
        <div>
            {/* form  */}
            <h1>Add a New Product</h1>
            <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onSubmit)}>
                <input style={{ marginBottom: '5px', paddingTop: '5px' }} {...register("name", { required: true })} placeholder='Bike model name' />

                <input style={{ marginBottom: '5px', paddingTop: '5px' }} {...register("description", { required: true })} placeholder='Description' />

                <input style={{ marginBottom: '5px', paddingTop: '5px' }} {...register("price", { required: true })} placeholder='price' />

                <input style={{ marginBottom: '5px', paddingTop: '5px' }} {...register("img", { required: true })} placeholder='Image URL' />

                <input style={{ marginBottom: '5px', paddingTop: '5px', backgroundColor: 'blue', color: 'white' }} value='Submit' type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;