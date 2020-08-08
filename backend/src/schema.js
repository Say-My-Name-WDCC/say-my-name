import { gql } from 'apollo-server'
import { readFileSync } from "fs";
import { resolve } from "path"
import { UserResolver } from './resolvers/user.js'
import GMR from 'graphql-merge-resolvers'
import { CourseResolver } from './resolvers/course.js';
import { UserCourseResolver } from './resolvers/user_course.js';
import { FileResolver } from './resolvers/file.js';

const typeDefs = gql(
    readFileSync(resolve("./src/schema.graphql"), { encoding: "utf8" })
);

const resolvers = GMR.merge([
    UserResolver,
    CourseResolver,
    UserCourseResolver,
    FileResolver,
])


export { typeDefs, resolvers }