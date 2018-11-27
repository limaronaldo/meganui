import React, {Component} from 'react';
import './index.scss';

export class Text extends Component {

    render() {
        return (
            <div>
                <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere nibh et odio tempor placerat et vitae metus. Nam imperdiet neque diam, ac semper metus laoreet sed. Fusce id placerat sem. Donec arcu lectus, cursus ut ullamcorper vitae, vehicula quis augue. Fusce erat dui, molestie ac pretium vel, semper ut nisi. 
                </p>
                <p>
                    Quisque quam sapien, <span className="text-muted">molestie in mauris nec</span>, vestibulum efficitur diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam laoreet nulla a tempus ultrices. Etiam tristique mauris sem, eu rutrum quam ullamcorper sed. Aenean hendrerit accumsan purus, a ornare turpis sollicitudin quis. Donec vestibulum orci auctor justo tempor tristique. Sed molestie facilisis mollis.
                </p>
                <p className="text-primary">
                    .text-primary
                </p>
                <p className="text-primary-variant">
                    .text-primary-variant
                </p>
                <p className="text-secondary">
                    .text-secondary
                </p>
                <p className="text-danger">
                    .text-danger
                </p>
                <p className="text-success">
                    .text-success
                </p>
                <p className="text-warning">
                    .text-warning
                </p>
            </div>
        );
    }

}