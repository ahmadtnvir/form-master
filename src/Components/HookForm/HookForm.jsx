import useInputState from "../../Hooks/useInputState";

const HookForm = () => {
    // ! i) array
    // const [name, handleNameChange] = useInputState('Sojoni')
    // ! ii) object
    const nameState = useInputState('Tanvir');
    const handleSubmit = e => {
        console.log('form data', nameState.value);
        e.preventDefault();
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                {/* //! ii) object
                */}
                <input {...nameState} type="text" name="name"/>
                <br />
                {/* //! i) array 
                */}
                
                {/* <input value={name} onChange={handleNameChange} type="text" name="name"/>
                <br /> */}
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;

/*
! KeyWords
*
* 1. custom hook (useInputState())
*   import useState()
*   handler
*   return --> i) array  ii) object 
*   
* 2. import custom hook 
*   destructure with i) array ii) object 
*   *use value={} and onChange={} attribute in input field when destructure with array
*   *use {...nameState} in the input field when destructure with object, it contains value={} and onChange={} both.
*/