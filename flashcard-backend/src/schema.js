import { gql } from 'apollo-server'
import { readFileSync } from "fs";
import { resolve } from "path"
import { UserResolver } from './resolvers/user.js'

const typeDefs = gql(
    readFileSync(resolve("./src/schema.graphql"), { encoding: "utf8" })
);


const resolvers ={
    ...UserResolver
}


export { typeDefs, resolvers }