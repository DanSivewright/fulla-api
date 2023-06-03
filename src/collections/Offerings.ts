import { CollectionConfig } from "payload/types";
const Offerings: CollectionConfig = {
  slug: "offerings",
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
export default Offerings;
