import { buildConfig } from "payload/config";
import path from "path";
// import Examples from './collections/Examples';
import Users from "./collections/Users";
import Listings from "./collections/Listings";
import Categories from "./collections/Categories";
import Types from "./collections/Types";
import Offerings from "./collections/Offerings";
import Amenities from "./collections/Amenities";
import { Media } from "./collections/Media";

export default buildConfig({
  serverURL: "http://localhost:8000",
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Listings,
    Categories,
    Types,
    Offerings,
    Amenities,
    Media,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "../../fulla/types/payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
