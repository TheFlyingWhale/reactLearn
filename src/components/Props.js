import React from 'react'

export class Props extends React.Component{
    render(){
        return(
            <div>
                <h1>Understanding props</h1>
                <p>Props are information passed in a component as an attribute <br/> Following are two components with props passed trough two steps</p>
                <H3 content={this.props.first}/>
                <H3 content={this.props.secound}/>
            </div>
        )
    }
}

class H3 extends React.Component{
    render(){
        return <h3>{this.props.content}</h3>
    }
}