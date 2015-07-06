import React from 'react';
var NotesList = require('./NotesList');
var NotesAdd = require('./NotesAdd');

class Notes extends React.Component {

    render() {
        return (
            <div>
                <h3>Notes for {this.props.username}</h3>
                <NotesAdd username={this.props.username} addNote={this.props.addNote}/>
                <NotesList notes={this.props.notes}/>
            </div>
        )
    }
}

Notes.propTypes = {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    addNote: React.PropTypes.func.isRequired
};

export default Notes;