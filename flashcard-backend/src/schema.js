import { gql } from 'apollo-server'
import { readFileSync } from "fs";
import { resolve } from "path"

const typeDefs = gql(
    readFileSync(resolve("./src/schema.graphql"), { encoding: "utf8" })
);


export { typeDefs }