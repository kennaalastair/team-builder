import React, { useState } from 'react';

function Form(props) {
    const [input, setInput] = useState({ id: parseInt(Math.random() * 1000000000), name: "", email: "", role: "" });

    const handleChange = (event) => setInput({ ...input, [event.target.name]: event.target.value });

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     props.submit(input)
    //     setInput({
    //         name: '', email: '', role: '', id: parseInt(Math.random() * 1000000000)
    //     })

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            props.submit(input)
            setInput({
                name: '', email: '', role: '', id: parseInt(Math.random() * 1000000000)
            })
        }} className="submitform">
            <h3>Add a Member</h3>
            <div className='inputs'>

                <label htmlFor="name">
                    Name:<input type="text" onChange={handleChange} value={input.name} name='name' />
                </label>
                <label htmlFor="email">
                    Email:<input type="email" onChange={handleChange} value={input.email} name='email' />
                </label>
                <label htmlFor="role">
                    Role:<input type="text" onChange={handleChange} value={input.role} name='role' />
                </label>

            </div>

            <button type="submit" className="btn-add-member">Add Member</button>
        </form >
    );
}

export default Form;