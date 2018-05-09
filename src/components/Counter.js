import React from 'react';
import {PropTypes} from 'prop-types';
const Counter=({count,onIncrementClick})=>{
    console.log('render',count,'click',onIncrementClick);
    return (

        <div>
            <h1> I am Counter! </h1>
            <p>Count:{count}</p>
            <button onClick={onIncrementClick}>Increment</button>
        </div>
    )
}

Counter.prototype={
    onIncrementClick:PropTypes.func.isRequired,
    count:PropTypes.string.isRequired

}

export default Counter;