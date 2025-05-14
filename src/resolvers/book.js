import { books} from '../data/books.js';

const resolvers = {
  Query: {
    books: () => books,
  },
  Mutation: {
    addBook:(_, { title, author }) => {
      if(!title || !author) {
        throw new Error('Title and author are required');
      }
      const newBook = { title, author };
      books.push(newBook);
      return newBook;
    }
  }
};

export default resolvers;