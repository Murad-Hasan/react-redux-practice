import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux/Cake/CakeActions';


const CakeContainer = () => {
    const numOfCakes = useSelector(state => state.numOfCakes)
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of Cakes - {numOfCakes}</h2>
            <button onClick={()=> dispatch(buyCake())} >Buy Cake</button>
        </div>
    );
};

export default CakeContainer;<h2>Number of Cakes</h2>