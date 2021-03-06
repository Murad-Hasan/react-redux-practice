import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyIceCream } from '../redux/IceCream/IceCreamActions'


const IceCreamContainer = () => {
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of Cakes - {numOfIceCream}</h2>
            <button onClick={()=> dispatch(buyIceCream())} >Buy Cake</button>
        </div>
    );
};

export default IceCreamContainer;