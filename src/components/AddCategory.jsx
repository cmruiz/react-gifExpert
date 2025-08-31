import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('elephant');

    const onInputChange = (event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        console.log(event)
        event.preventDefault(); // para que no se recargue la página al pulsar intro
        console.log(inputValue);
        if (inputValue.trim().length <=1) {
            //   setCategories( categories => [ inputValue, ...categories ] );
            
        }
        else{
            onNewCategory(inputValue.trim());
         }
         setInputValue('');
            return
    }

    return (
        // <form onSubmit={(event) => handleSubmit(event) }>
        <form onSubmit={handleSubmit}>  {/* forma simplificada de lo de arriba (tb se podía llamar todo onSubmit) */}
        <input 
            type="text" 
            placeholder="Buscar gifs..." 
            value={inputValue}
            onChange={onInputChange}
        />
        </form>
    );
}
