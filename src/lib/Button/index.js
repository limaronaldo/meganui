import React, {Component} from 'react';
import './index.scss';

export class Button extends Component {

    getClassNames() {
        let classNames = ["button"];

        this.props.block ? classNames.push("block") : Function.prototype();
        this.props.outlined ? classNames.push("outlined") : Function.prototype();
        (typeof this.props.color === 'string') ? classNames.push(this.props.color) : Function.prototype();
        (typeof this.props.size === 'string') ? classNames.push(this.props.size) : Function.prototype();
        
        return classNames.join(" ");
    }

    render() {
        return (
            <button className={this.getClassNames()}
                    tabIndex="0">{this.props.children}</button>
        );
    }
    
}