import React from 'react';
import App from '../App';
import FavoritesProvider from '../context/FavoritesProvider';

const Wrapper=() =>{
    return(
        <FavoritesProvider>
            <App />
        </FavoritesProvider>
    )
}
export default Wrapper;