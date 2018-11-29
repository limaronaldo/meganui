import React, {Component} from 'react';
import './index.scss';

export class Hiperlink extends Component {

    render() {
        return (
            <a href={this.props.href} target={this.props.target}>{this.props.children}</a>
        );
    }

}