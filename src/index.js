import { ApolloServer, gql } from "apollo-server";

// Mock de dados
const books = [
  { title: 'Clean Code', author: 'Robert C. Martin' },
  { title: 'The Pragmatic Programmer', author: 'Andrew Hunt' },
];

// Definição do Schema (SDL - Schema Definition Language)
const typeDefs = gql`
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

// Resolvers
const resolvers = {
  Query: {
    books: () => books,
  },
  Mutation: {
    addBook: (_, { title, author }) => {
      const newBook = { title, author };
      books.push(newBook);
      return newBook;
    },
  },
};

// Inicializa o servidor Apollo
const server = new ApolloServer({ typeDefs, resolvers });

// Inicia o servidor
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
