import useInputHook from "../../Hooks/useInputHook";


const Hookform = () => {
    // const [name, handleNameChange] = useInputHook('Rajani klanto');
    const emailChange = useInputHook('rojoni@clanto.com');
    const handleSubmit = e => {
        e.preventDefault();
        // console.log('input name: ', name)
       console.log(emailChange.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}> 
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" id="" /> */}
                <br />
                <input {...emailChange} type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Hookform;