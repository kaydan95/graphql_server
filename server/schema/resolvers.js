// All Functions (Methods) for Query and Mutations
const {userList, MovieList} = require("../fakeData");
const _ = require("lodash");

const resolvers = {
    Query : {
        // user resolvers
        users : () => {
            return userList;
        },
        user : (parent, args) => {
            const id = args.id;
            const user = _.find(userList, {id:Number(id)});
            return user;
        },

        // movie resolvers
        movies : () => {
            return MovieList;
        },
        movie : (parent, args) => {
            const name = args.name;
            const movie = _.find(MovieList, {name});
            return movie;
        }
    },
    User : {
        favoriteMovies : () => {
            return _.filter(MovieList, (movie) => movie.yearOfPublication >= 2010);
        }
    },
    Mutation : {
        createUser : (parent, args) => {
            const user = args.input;
            const lastId = userList[userList.length-1].id;

            user.id = lastId + 1;
            userList.push(user);
            return user;
        },
        updateUsername : (parent, args) => {
            const newUsername = args.input.newUsername;
            const id = args.input.id;
            let userUpdated;
            userList.forEach((user) => {
                if(user.id === Number(id)){
                    user.username = newUsername;
                    userUpdated = user;
                    
                }
            });
            return userUpdated;
        },
        deleteUser : (parent, args) => {
            const id = args.id;
            _.remove(userList, (user) => user.id === Number(id));
            return null;
        }
    }
};

module.exports = {resolvers};