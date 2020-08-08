import { gql } from 'apollo-server'
import { readFileSync } from "fs";
import { resolve } from "path"
import { UserResolver } from './resolvers/user.js'
import GMR from 'graphql-merge-resolvers'
import { CourseResolver } from './resolvers/course.js';

const typeDefs = gql(
    readFileSync(resolve("./src/schema.graphql"), { encoding: "utf8" })
);

const resolvers = GMR.merge([
    UserResolver,
    CourseResolver
])


export { typeDefs, resolvers }