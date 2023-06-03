import { CollectionConfig } from "payload/types";
const Categories: CollectionConfig = {
  slug: "categories",
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
export default Categories;
