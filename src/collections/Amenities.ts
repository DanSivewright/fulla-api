import { CollectionConfig } from "payload/types";
const Amenities: CollectionConfig = {
  slug: "amenities",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "label",
  },
  fields: [
    {
      name: "label",
      type: "text",
      required: true,
    },
  ],
};
export default Amenities;
