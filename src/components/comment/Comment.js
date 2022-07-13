import React, {Component} from 'react';

class Comment extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {id,name,email} = this.props.comment

        return (
            <div>

                <div>{id}-{name}</div>
                <div>{email}</div>

            </div>
        );
    }
}

export {Comment};