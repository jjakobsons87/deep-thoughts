// import the gql tagged template function 
const { gql } = require('apollo-server-express');

// create out typeDefs
// helloWorld is hte query name, returning data that will be a string 
const typeDefs = gql`
    type Thought {
        _id: ID
        thoughtText: String
        createdAt: String
        username: String
        reactionCount: Int
    }

type Query {
        thoughts: [Thought]
    }
`;

module.exports = typeDefs;