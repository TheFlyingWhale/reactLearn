import React from 'react'
import {Button} from './Button'

export class Mood extends React.Component {
    constructor(props) {
        super(props)
        this.state = { mood: 'good', color: 'green' }
        this.toggleMood = this.toggleMood.bind(this)
    }

    toggleMood() {
        const newState = this.state.mood == 'good' ? {mood: 'bad', color: 'red'} : {mood: 'good', color: 'green'}
        this.setState({ mood: newState.mood, color: newState.color })
    }

    render() {
        return (
            <div>
                <h1>I'm feeling <span style={{color: this.state.color}}>{this.state.mood}</span></h1>
                <Button content={'Toggle mood from ' + this.state.mood} onClick={this.toggleMood} />
            </div>
        )
    }
}