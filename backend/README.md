# Say My Name Backend

[GraphQL playground](https://saymyname.tk/graphql/)

Say My Name is a flashcard app that helps students learn and remember each others' names. Students subscribe to a course and can then learn the names of others who share their course.

The frontend was written in ReactJs and the backend was written in NodeJs using a Apollo/GraphQl and MongoDB.


The following project uses:
- Apollo Server
- AWS s3
- JWT
- Babel
- nodemon

## Setup

rename ```.env-template``` to ```.env``` with the following variable
```
MONGODB_URL= #mongoDB_connection_string

JWT_SECRET= #JWT_random_string

#aws_credentials
AWS_ACCESS_KEY=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
```

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn dev`

Run the app in nodemon with hot reload in development mode.<br />
Open [http://localhost:4001](http://localhost:4001) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### `yarn start`

Runs the app in production mode.<br />
Open [http://localhost:4001](http://localhost:4001) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
