import { CollectionConfig } from "payload/types";
const Highlights: CollectionConfig = {
  slug: "highlights",
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
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
    {
      name: "icon",
      label: "Icon Key",
      type: "text",
      required: true,
    },
  ],
};
export default Highlights;
