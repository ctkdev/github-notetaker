import React from 'react';
import Firebase from 'firebase';
import UserProfile from '../components/Github/UserProfile';
import Repos from '../components/Github/Repos';
import Notes from '../components/Notes/Notes';
import Helpers from '../utils/Helpers';
import Rebase from 're-base';

var base = Rebase.createClass('https://eggheadio-react-note.firebaseio.com/');


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            bio: {},
            repos: []
        }
    }

    init() {
        // setup the binding with Re-base;
        this.ref = base.bindToState(this.router.getCurrentParams().username, {
            context: this,
            asArray: true,
            state: 'notes'
        });

        Helpers.getGithubInfo(this.router.getCurrentParams().username).then(
            (dataObj) => {
                this.setState({
                    bio: dataObj.bio,
                    repos: dataObj.repos
                })
            });
    }

    // lifecycle event - register Ajax handlers and React Events inside this function
    componentDidMount() {
        this.init();
    }

    componentWillMount() {
        this.router = this.context.router;
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    // lifecycle event - lets us know when part of the route has changed
    componentWillReceiveProps() {
        base.removeBinding(this.ref);
        this.init();
    }

    handleAddNote(newNote) {
        base.post(this.router.getCurrentParams().username, {
            data: this.state.notes.concat([newNote])
        });
    }

    render() {
        var username = this.router.getCurrentParams().username;
        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile username={username} bio={this.state.bio}/>
                </div>
                <div className="col-md-4">
                    <Repos username={username} repos={this.state.repos}/>
                </div>
                <div className="col-md-4">
                    <Notes
                        username={username}
                        notes={this.state.notes}
                        addNote={this.handleAddNote.bind(this)}/>
                </div>
            </div>
        )
    }
}


Profile.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default Profile;