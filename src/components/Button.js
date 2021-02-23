import React from 'react'

export class Button extends React.Component {
    render() {
        let title = 'Actions'
        return (
            <div>
                <button 
                    className="button" 
                    onClick={this.props.onClick}
                >
                    {this.props.content}
                </button>
            </div>
        )
    }
}

Button.defaultProps = {
    onClick : () => {
        alert('Im a default event')
    }
}