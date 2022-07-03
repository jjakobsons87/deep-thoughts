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
        reactions: [Reaction]
    }

    type Reaction {
        _id: ID
        reactionBody: String
        createdAt: String
        username: String
    }

    type User {
        _id: ID
        username: String
        email: String
        friendCount: Int
        thoughts: [Thought]
        friends: [User]
    }

    type Query {
        users: [User]
        user(username: String!): User
        thoughts(username: String): [Thought]
        thought(_id: ID!): Thought
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
    }

    type Auth {
        token: ID!
        user: User
    }
`;
// four different query types: all users, by username, thoughts by username, thoughts by id
// the ! in the query means it is required - so user(username:String!) must have a username in the query to return data 

module.exports = typeDefs;