import React, {Component} from 'react';

class User extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {id,name,username,email} = this.props.user

        return (
            <div>
                <div>{id}-{name}</div>
                <div>{username}</div>
                <div>{email}</div>
                <hr/>
                <br/>
            </div>
        );
    }
}

export {User};