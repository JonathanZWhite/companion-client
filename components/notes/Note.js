import React, { Component, PropTypes } from 'react';

export default class Note extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { note } = this.props;
        return (
            <div className="block block--item">
                <span className="txt--caption">{note.created}</span>
                <p>{note.body}</p>
            </div>
        );
    }
}

Note.propTypes = {
    note: PropTypes.object
};
