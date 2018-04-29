import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import schema from './schema';
import cors from 'cors';
import createLoaders from './loaders';

const app = express();
const port = 3333;

app.use('*', cors());

// Where we will send all of our GraphQL requests
app.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress({
        schema,
        context: {
            loaders: createLoaders()
        }
    })
);

// A route for accessing the GraphiQL tool (like the github tool for their graphQL)
app.use(
    '/graphiql',
    graphiqlExpress({
        endpointURL: '/graphql'
    })
);

app.listen(
    port,
    err =>
        err
            ? console.log(`ERROR: ${err}`)
            : console.log(`Express running on PORT: http://localhost:${port}`)
);
