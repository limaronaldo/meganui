import React, {Component} from 'react';
import './index.scss';

export class Button extends Component {

    render() {
        return (
            <div>
                <button className="button">{this.props.children}</button>
                <button className="button primary medium">{this.props.children}</button>
                <button className="button secondary big">{this.props.children}</button>

                <button className="button outlined bigger">{this.props.children}</button>
                <button className="button primary outlined">{this.props.children}</button>
                <button className="button secondary outlined">{this.props.children}</button>

                <button className="button" disabled>{this.props.children}</button>
                <button className="button primary" disabled>{this.props.children}</button>
                <button className="button secondary" disabled>{this.props.children}</button>
            </div>
        );
    }

}