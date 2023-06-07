import { CollectionConfig } from "payload/types";
import { checkRole } from "./access/checkRole";
const ListingReviews: CollectionConfig = {
  slug: "listing-reviews",
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      name: "review",
      type: "text",
      required: true,
    },
    {
      name: "rating",
      type: "number",
      required: true,
      min: 1,
      max: 5,
    },
    {
      name: "listing",
      type: "relationship",
      relationTo: "listings",
      required: true,
    },
  ],
};
export default ListingReviews;
