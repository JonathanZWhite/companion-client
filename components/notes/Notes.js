import React, { Component, PropTypes } from 'react';
import Note from './Note';

export default class Notes extends Component {
    constructor(props) {
        super(props);
    }

    _renderNotes() {
        const { notes } = this.props;
        return notes.map((note) => {
            return <Note
                key={note.created}
                note={note}/>
        });
    }

    render() {
        const { notes } = this.props;
        return (
            <div>
                <section className="notes grd-container">
                    <div className="block block--preview">
                        <h3 className="head--h3">Notes</h3>
                        <p className="txt--p txt-after--h3">Hey Jonathan! Here's a list of all your notes</p>
                    </div>
                    <div className="notes">
                        {this._renderNotes()}
                    </div>
                </section>
            </div>
        );
    }
}

Notes.propTypes = {
    notes: PropTypes.array
};
