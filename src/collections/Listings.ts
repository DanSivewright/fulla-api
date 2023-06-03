import { CollectionConfig } from "payload/types";
const Listings: CollectionConfig = {
  slug: "listings",
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  admin: {
    useAsTitle: "title",
  },
  versions: {
    drafts: true,
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "description", type: "text", required: true },
    {
      name: "category",
      relationTo: "categories",
      type: "relationship",
      required: true,
    },
    {
      name: "offerings",
      relationTo: "offerings",
      hasMany: true,
      type: "relationship",
      required: true,
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      required: true,
      defaultValue: ({ user }) => user.id,
      admin: { position: "sidebar" },
    },
    {
      name: "amenities",
      relationTo: "amenities",
      hasMany: true,
      type: "relationship",
      required: true,
    },
    { name: "type", relationTo: "types", type: "relationship", required: true },
    { name: "province", type: "text", required: true },
    { name: "street", type: "text", required: true },
    { name: "unitNumber", type: "text", required: true },
    { name: "suburb", type: "text", required: true },
    { name: "city", type: "text", required: true },
    { name: "postalCode", type: "text", required: true },
    { name: "location", type: "point", label: "Location" },
    { name: "featureImage", type: "upload", relationTo: "media" },
    { name: "featureImage", type: "upload", relationTo: "media" },
    {
      name: "images",
      label: "Images",
      type: "array",
      minRows: 4,
      maxRows: 4,
      fields: [
        {
          name: "image",
          label: "Image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
    { name: "roomCount", type: "number", required: true, admin: { step: 1 } },
    { name: "bedCount", type: "number", required: true, admin: { step: 1 } },
    {
      name: "bathroomCount",
      type: "number",
      required: true,
      admin: { step: 1 },
    },
    { name: "guestCount", type: "number", required: true, admin: { step: 1 } },
  ],
};
export default Listings;
