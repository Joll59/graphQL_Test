const { graphql, buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
    name: String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!';
  },
  name: () =>{
    return 'this is the name query'
  },
};

// Run the GraphQL query '{ hello }' and print out the response
graphql(schema, '{ hello, name }', root)
.then((response) => {
  console.log(response);
});

// 
// (async() => {
//   try {
//     var response = await fetch(url);
//     var data = await response.json();
//     console.log(data);
//   }
//     console.log("Booo")
//   }
// });
