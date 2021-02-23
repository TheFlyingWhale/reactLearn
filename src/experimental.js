import React from 'react'
import './App.css'
import { HelloWorld } from './components/HelloWorld'
import { About } from './components/About'
import { Button } from './components/Button'
import { Mood } from './components/Mood'
import { Props } from './components/Props'
import { State } from './components/State'

export class Main extends React.Component {
    handleClick() {
        alert('Im a passed event')
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <HelloWorld />
                    <About />
                    <Button content={'Im a button'} />
                    <Button content={'Im also a button!'} />
                    <Button content={'Ive got my own event'} />
                    <Button content={'Ive got an passed event'} onClick={this.handleClick} />
                    <Mood />
                    <Props first="hello" secound="secound"/>
                    <State />
                </header>
            </div>
        )
    }
}