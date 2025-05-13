// Here we are importing the mergeTypeDefs function from @graphql-tools/merge to combine multiple GraphQL schemas into one.
import { mergeTypeDefs } from '@graphql-tools/merge';

// Our schema is defined in separate files for better organization and maintainability.
import bookSchema from './book';

// We are merging the schemas into a single schema that can be used by Apollo Server.
export default mergeTypeDefs([bookSchema]);

// The purpose of this code is to create a single GraphQL schema that combines multiple schemas (in this case, just the book schema) into one. This allows us to keep our code organized and modular, making it easier to maintain and scale as our application grows.
