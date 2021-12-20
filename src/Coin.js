import React from 'react';
import "./Coin.css";
import "./App.css"

const Coin = ({name, image, symbol, price, volume, hour}) => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='coin'>
                    <img src={image} alt='cripto'></img>
                    <h1>{name}</h1>
                    <p className='symbol'>{symbol.toUpperCase()}</p>
                </div>
                <div className='data'>
                    <p className='price'>$ {price}</p>
                    <p className='hour'>{hour}</p>
                    {hour < 0 ? (<p className='red'>{hour.toFixed(2)}%</p>):(
                        <p className='green'>{hour}%</p>
                    )}
                    <p className='volume'>$ {volume.toLocaleString()}</p>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Coin
