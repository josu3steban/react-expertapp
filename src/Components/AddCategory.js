import React, {useState} from "react";
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategoria} ) => {

    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => setInputValue(e.target.value);
   
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('Submit hecho');

        if( inputValue.trim().length > 2 ) {

            //--setCategoria tiene el estado anterior y se lo puede obtener mediante un callback
            setCategoria( (cat) => [inputValue, ...cat] );

            setInputValue('');
        }
        
    }; 

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type='text'
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
    );
    
}

AddCategory.propTypes = {
    setCategoria: PropTypes.func.isRequired,
}