import { useState } from "react"

const useInputState = (defaultValue = null) => {
    const [value, setValue] = useState(defaultValue)

    /*
    * i) return as an array
    */
    // const handleChange = e => {
    //     setValue(e.target.value);
    // }
    // return[value, handleChange];
    /*
    * ii) return as an object
    */
    const onChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange
    }
}
export default useInputState;