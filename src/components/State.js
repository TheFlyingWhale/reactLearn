import React from 'react'

export class State extends React.Component{
    constructor(props){
        super(props)
        this.state = {value: 'I reflect the input'}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({value: e.target.value})
    }

    render(){
        return(
            <div>
                <h1>Understanding States</h1>
                <p>State is a object used to store property values that belongs to a component</p>
                <p>{this.state.value}</p>
                <input type="text" value={this.state.value} onChange={this.handleChange}></input>
            </div>
        )
    }
}

State.defaultProps = {

}