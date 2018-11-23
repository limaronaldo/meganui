import React, {Component} from 'react';
import './index.scss';

export class TextInput extends Component {

    render() {
        return (
            <div>
                <input className="form-control" type="text"></input>
                <input className="form-control big" type="text"></input>
                <input className="form-control bigger" type="text"></input>
                <input className="form-control biggest" type="text"></input>
            </div>
        );
    }

}