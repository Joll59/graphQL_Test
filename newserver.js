let express = require('express');
let graphqlHTTP = require('express-graphql');
let { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
let schema = buildSchema(`
  type Query {
    hello: String
    whatever : String
    number(value: Int): Int
  }
`);

// The root provides a resolver function for each API endpoint
let root = {
  hello: () => {
    return 'Hello world!';
  },
  whatever: () => {
     return 'human Peon, should be heard not seen, NINJA OUT.';
   },
   number: ({value}) => {
     return value * 4;
   },
};

let app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
