const { gql } = require('apollo-server-express')

const typeDefs  = gql`
    type User{
        id: ID
        nickname: String
        password: String
    }


    type Query {
        hello: String
        getAllUsers: [User]
    }

    type Mutation {
       createUser(nickname: String, password:String): User
    }
`;

module.exports = {typeDefs}