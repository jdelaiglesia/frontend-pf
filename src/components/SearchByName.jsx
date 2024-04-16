import { products_gym } from "../api/data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const navigate = useNavigate()
    const [state, setState] = useState('')
    const [error, setError] = useState(null)
    
    const handleSearch = () =>{
        const product = products_gym.find((product) => product.name.toLowerCase() === state.toLowerCase());
        if(product){
            navigate(`/product/${product.id}`)
            setError(null)
        }else {
            setError('Producto no encontrado!')
        }
    }

    const handleChange = (event) => {
        const {value} = event.target
        setState(value)
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            handleSearch(state)
            setState('')
        }
     };

    return (
        <div>
           <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={state}
            /> 
            {error && <div className="fixed text-error">{error}</div>}
        </div>
        
    )
}

export default Search