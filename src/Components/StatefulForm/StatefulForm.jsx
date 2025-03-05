import { useState } from "react";


const StatefulForm = () => {
    const [name, setName] = useState('Rojoni Klanto');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, email, password);
        if (password.length < 6) {
            setError('Password must be at least 6 characters long!');
        }
        else {
            setError('');
        }
    }
    const handleNameChange = e => {
        // console.log(e.target.value);
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                value={name}
                onChange={handleNameChange}
                type="text" name="name" id="" />
                <br />
                <input 
                onChange={handleEmailChange}
                type="email" name="email" id="" />
                <br />
                <input 
                onChange={handlePasswordChange}
                type="password" name="password" id="" required/>
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;