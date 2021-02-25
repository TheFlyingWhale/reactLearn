import React from 'react'
import { Button } from './Button'

export class ChangeView extends React.Component{
    constructor(props){
        super(props)
        this.state = {view: 1}
    }

    handleClick(){
        alert('button clicked')
    }

    render(){
        return(
            <div>
                <h1>Change View(<span style={{color:'red'}}>not active</span>)</h1>
                <Button 
                    content={'Current state: ' + this.state.view} 
                    onClick={null}
                />
                
            </div>
        )
    }
}