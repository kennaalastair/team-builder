import React, { useState } from 'react';

function Form(props) {
    const [input, setInput] = useState({ id: parseInt(Math.random() * 1000000000), name: "", email: "", role: "" });

    const handleChange = (event) => setInput({ ...input, [event.target.name]: event.target.value });
        /*
    demonstrate the ability to handle multiple inputs in a form
    * Use an object to track our state (user)
    * Set a `name` on each input that correlates with the state object's keys (email, password, etc.)
    * When updating state, copy values into the `user` object (using spread: ...user)
    * Then set the changed input based on target.name & target.value.
        */
        // console.log(
        //     "handleChange",
        //     event.target.name,
        //     event.target.value,
        //     updatedInput
        // );


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
                    Email:<input type="text" onChange={handleChange} value={input.email} name='email' />
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