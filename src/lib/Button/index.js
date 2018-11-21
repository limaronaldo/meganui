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
                <button className="button bigger outlined primary">{this.props.children}</button>
                <button className="button bigger outlined primary-variant">{this.props.children}</button>
                <button className="button bigger outlined secondary">{this.props.children}</button>
                <br></br>
                <button className="button biggest" disabled>{this.props.children}</button>
                <button className="button biggest primary" disabled>{this.props.children}</button>
                <button className="button biggest primary-variant" disabled>{this.props.children}</button>
                <button className="button biggest secondary" disabled>{this.props.children}</button>
                <br></br>
                <button className="button alert">{this.props.children}</button>
                <button className="button warn">{this.props.children}</button>
                <button className="button success">{this.props.children}</button>
                <br></br>
                <button className="button big alert">{this.props.children}</button>
                <button className="button big warn">{this.props.children}</button>
                <button className="button big success">{this.props.children}</button>
                <br></br>
                <button className="button bigger outlined alert">{this.props.children}</button>
                <button className="button bigger outlined warn">{this.props.children}</button>
                <button className="button bigger outlined success">{this.props.children}</button>
                <br></br>
                <button disabled className="button biggest alert">{this.props.children}</button>
                <button disabled className="button biggest warn">{this.props.children}</button>
                <button disabled className="button biggest success">{this.props.children}</button>
            </div>
        );
    }

}