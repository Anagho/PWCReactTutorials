import React from 'react'
import { useSelector } from "react-redux"
import Card from '../../components/shared/Card'

const Display = () => {
    const count = useSelector((state) => state.counter.count)
    return (
        <div className='container'>

            <div className='display'>
                <Card>
                    <h3>Display</h3>
                    <h1 className='count-text'>{count}</h1>
                </Card>
            </div>

        </div>

    )
}

export default Display