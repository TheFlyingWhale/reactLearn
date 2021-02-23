import React from 'react'
import me from '../me.jpg'

export class About extends React.Component {
    render() {
        return (
            <div>
                <h2>About</h2>
                <img src={me} className="profilePicture" />
                <h3>Ole Walberg</h3>
                <p>This is me and my face</p>
                <p>Im 25 years old</p>
            </div>
        )
    }
}