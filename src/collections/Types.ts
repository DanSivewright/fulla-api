import { CollectionConfig } from "payload/types";
const Types: CollectionConfig = {
  slug: "types",
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
    {
      name: "description",
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
export default Types;
