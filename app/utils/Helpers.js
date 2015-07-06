import axios from 'axios';

function getRepos(username){
    // backticks in ES6 are the same as Groovy GStrings.
    return axios.get(`https://api.github.com/users/${username}/repos`);
}

function getUserInfo(username) {
    return axios.get(`https://api.github.com/users/${username}`);
}

var Helpers = {
    getGithubInfo: function(username) {
        return axios.all([getRepos(username), getUserInfo(username)]).then((arr) => {
            return {
                repos: arr[0].data,
                bio: arr[1].data
            }
        });
    }
};

export default Helpers;