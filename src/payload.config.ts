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
import Highlights from "./collections/Highlights";
import LandlordReviews from "./collections/LandlordReviews";
import ListingReviews from "./collections/ListingReviews";

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
    Highlights,
    LandlordReviews,
    ListingReviews,
  ],
  cors: [
    process.env.PAYLOAD_PUBLIC_SERVER_URL,
    process.env.PAYLOAD_PUBLIC_SITE_URL,
  ],
  csrf: [
    process.env.PAYLOAD_PUBLIC_SERVER_URL,
    process.env.PAYLOAD_PUBLIC_SITE_URL,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
