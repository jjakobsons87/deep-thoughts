// import the gql tagged template function 
const { gql } = require('apollo-server-express');

// create out typeDefs
// thoughts is the query name, with the option to pass in a username as a string to search by a user name 
const typeDefs = gql`
    type Thought {
        _id: ID
        thoughtText: String
        createdAt: String
        username: String
        reactionCount: Int
    }

type Query {
        thoughts(username: String): [Thought]
    }
`;

module.exports = typeDefs;