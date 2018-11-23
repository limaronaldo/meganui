import React, {Component} from 'react';
import './index.scss';

export class Heading extends Component {

    render() {
        const level = this.props.level ? this.props.level : '1';

        /**
         * In React, names starting with a capital letter will compile to the createComponent method.
         */
        const TagName = `h${level}`;
        
        return (<TagName>{this.props.children}</TagName>);
    }

}