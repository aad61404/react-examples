import React from 'react';

export default class CustomButton extends React.Component {
    constructor(props) {
        super(props);
        this.Click = this.Click.bind(this);
        this.CreateP = this.CreateP.bind(this);
    }
    
    Click() {
        alert('Clcik');
    }

    CreateP() {
        alert("CreateP")
        return <p>Never Stop running!</p>
    }

    render() {
        return (
            <div>
                <button onClick = {this.Click} >Click me! </button>
                <button onClick = {this.CreateP} >CreateP ! </button>
                <p>{this.props.text}</p>
                <p>{this.props.children}</p>
                
            </div>
        )
    }
}