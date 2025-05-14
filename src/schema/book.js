import { gql } from 'apollo-server';

// Schema Definition (SDL - Schema Definition Language)
// Here we define the structure of our data and the operations we can perform on it.
// We are using the gql template literal tag to define our schema in a more readable way.
const bookSchema = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    addBook(title: String!, author: String!): Book
  }
`;

// Exporting the schema
export default bookSchema;

// The concept here is to define a schema that describes the data structure (Book) and the operations (Query and Mutation) that can be performed on that data.
