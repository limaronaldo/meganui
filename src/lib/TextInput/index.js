import React, {Component} from 'react';
import './index.scss';

export class TextInput extends Component {

    render() {
        return (
            <div>
                <input placeholder="Placeholder..." className="text-input error" type="text"></input>
                <input placeholder="Placeholder..." className="text-input success" type="text"></input>
                <input placeholder="Placeholder..." className="text-input" type="text"></input>
                <input placeholder="Placeholder..." className="text-input big" type="text"></input>
                <input placeholder="Placeholder..." className="text-input bigger" type="text"></input>
                <input placeholder="Placeholder..." className="text-input biggest" type="text"></input>
            </div>
        );
    }

}