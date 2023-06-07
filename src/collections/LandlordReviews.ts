import { CollectionConfig } from "payload/types";
const LandlordReviews: CollectionConfig = {
  slug: "landlord-reviews",
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
      name: "landlord",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
  ],
};
export default LandlordReviews;
