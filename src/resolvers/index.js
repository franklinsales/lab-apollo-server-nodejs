import { mergeResolvers } from "@graphql-tools/merge";
import bookResolvers from "./book.js";


const resolvers = mergeResolvers([bookResolvers]);
export default resolvers;