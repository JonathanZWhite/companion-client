import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions';
import Notes from '../components/notes/Notes';
// import '../assets/sass/components/notes.scss';

function loadData(props) {
    props.fetchNotes();
}

class NotesPage extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        loadData(this.props);
    }

    render() {
        const { notes } = this.props;
        return (
            <div>
                <Notes notes={notes}/>
            </div>
        );
    }
}

NotesPage.propTypes = {};

function mapStateToProps(state) {
    const { notes } = state.notes;
    return {
        notes
    };
}

export default connect(mapStateToProps, {
    fetchNotes
})(NotesPage);
