import { CollectionConfig } from "payload/types";
import adminsAndUser from "./access/adminsAndUser";
import { anyone } from "./access/anyone";
import { admins } from "./access/admins";
import { checkRole } from "./access/checkRole";
import { protectRoles } from "./hooks/protectRoles";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: adminsAndUser,
    create: anyone,
    update: adminsAndUser,
    delete: admins,
    admin: ({ req: { user } }) => checkRole(["admin"], user),
  },
  fields: [
    {
      name: "firstName",
      type: "text",
    },
    {
      name: "lastName",
      type: "text",
    },
    {
      name: "favourites",
      type: "array",
      fields: [
        {
          name: "listing",
          type: "relationship",
          relationTo: "listings",
        },
      ],
    },
    {
      name: "roles",
      type: "select",
      hasMany: true,
      hooks: {
        beforeChange: [protectRoles],
      },
      options: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "User",
          value: "user",
        },
      ],
    },
  ],
};

export default Users;
