import React, {Component} from 'react';
import './index.scss';

export class Image extends Component {

    render() {
        return (
            <div>
                <img className="image thumbnail" src="https://s3.amazonaws.com/signature-vulpi/pictures/Panda.png"></img>
                <img className="image thumbnail big" src="https://s3.amazonaws.com/signature-vulpi/pictures/Panda.png"></img>
                <img className="image thumbnail bigger" src="https://s3.amazonaws.com/signature-vulpi/pictures/Panda.png"></img>
                <img className="image thumbnail biggest" src="https://s3.amazonaws.com/signature-vulpi/pictures/Panda.png"></img>
            </div>
        );
    }

}