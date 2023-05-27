import { useState } from 'react'
import PlaceContentCenter from './components/PlaceContentCenter'
import Button from './components/Button'
import Counter from './components/Counter'

export default function Usestate() {
    return (
        <PlaceContentCenter>
            <Counter initialValue={10}></Counter>
        </PlaceContentCenter>
    )
}
