// import the gql tagged template function 
const { gql } = require('apollo-server-express');

// create out typeDefs
// helloWorld is hte query name, returning data that will be a string 
const typeDefs = gql`
    type Query {
        helloWorld: String
    }
`;

module.exports = typeDefs;