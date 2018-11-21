import React, {Component} from 'react';
import './index.scss';

export class Button extends Component {

    render() {
        return (
            <div>

                <button className="button">{this.props.children}</button>
                <button className="button primary">{this.props.children}</button>
                <button className="button primary-variant">{this.props.children}</button>
                <button className="button secondary">{this.props.children}</button>
                <br></br>
                <button className="button big">{this.props.children}</button>
                <button className="button big primary">{this.props.children}</button>
                <button className="button big primary-variant">{this.props.children}</button>
                <button className="button big secondary">{this.props.children}</button>
                <br></br>
                <button className="button bigger outlined">{this.props.children}</button>
                <button className="button bigger primary outlined">{this.props.children}</button>
                <button className="button bigger primary-variant outlined">{this.props.children}</button>
                <button className="button bigger secondary outlined">{this.props.children}</button>
                <br></br>
                <button className="button biggest" disabled>{this.props.children}</button>
                <button className="button biggest primary" disabled>{this.props.children}</button>
                <button className="button biggest primary-variant" disabled>{this.props.children}</button>
                <button className="button biggest secondary" disabled>{this.props.children}</button>
            </div>
        );
    }

}