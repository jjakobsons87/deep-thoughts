const { User, Thought: Thought } = require('../models');

const resolvers = {
    Query: {
        thoughts: async () => {
            return Thought.find().sort({ createAt: -1 });
        }
    }
};

module.exports = resolvers;