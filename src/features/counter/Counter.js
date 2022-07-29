import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount, decrementByAmount } from "./counterSlice";
import Header from '../../components/Header';
import Card from '../../components/shared/Card';
import { keyboard } from '@testing-library/user-event/dist/keyboard';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);
    const [reduceAmount, setReduceAmount] = useState(0);

    return (
        <div>
            <Header />
            <div className='count-wrapper'>
                <p className='count'>{count}</p>
            </div>
            <div className='container'>
                <button className='btn btn-primary' onClick={() => dispatch(increment())}>+</button>
                <button className='btn btn-secondary' onClick={() => dispatch(decrement())}>-</button>
                <button className='btn btn-reset' onClick={() => dispatch(reset(), setAmount(0), setReduceAmount(0))}>Reset</button>


                <div className='amount-card'>
                    <div className='amount-plus'>
                        <h3>Increment By Amount</h3>
                        <input placeholder='0' value={amount} onChange={(e) => setAmount(e.target.value)} />
                        <button className='btn-primary btn-inc' onClick={() => dispatch(incrementByAmount(Number(amount)))}>Add Amount</button>
                    </div>
                    <div className='line'></div>
                    <div className='amount-minus'>
                        <h3>Decrement By Amount</h3>
                        <input placeholder='0' value={reduceAmount} onChange={(e) => setReduceAmount(e.target.value)} />
                        <button className='btn-secondary btn-dec' onClick={() => dispatch(decrementByAmount(Number(reduceAmount)))}>Reduce Amount</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter