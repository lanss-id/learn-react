import { useState } from 'react'
import Button from './Button'

export default function Counter({ initialValue }) {
    const [count, setCount] = useState(initialValue)
    function handleClick() {
        setCount((prevState) => prevState + 1)
    }
    return (
        <div>
            <div className='text-4xl font-bold capitalize'>{count}</div>
            <div className='mt-5 flex gap-2'>
                <Button onClick={handleClick}>Count + 1</Button>
                <Button
                    onClick={() => {
                        handleClick()
                        handleClick()
                        handleClick()
                    }}>
                    Count + 3
                </Button>
            </div>
        </div>
    )
}
