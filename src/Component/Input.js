import React, { Component } from 'react';
import './Input.css'
class Input extends Component {
    
    render() { 
        return ( 
            <div className="input"  onClick={() => this.props.handleClear()}>
            {this.props.children}
            </div>
         );
    }
}
 
export default Input;