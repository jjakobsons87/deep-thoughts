const { User, Thought: Thought } = require('../models');

const resolvers = {
    Query: {
        // get all thoughts 
        thoughts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Thought.find(params).sort({ createAt: -1 });
        },
        // finding a thought by id 
        thought: async (parent, { _id }) => {
            return Thought.findOne({ _id });
        },
        // get all users 
        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('friends')
            .populate('thoughts');
        },
        // get a user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
            .select('-__v -password') 
            .populate('friends')
            .populate('thoughts');
        },
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);

            return user;
        },
        login: async () => {

        }
    }
};

module.exports = resolvers;