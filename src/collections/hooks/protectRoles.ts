import type { FieldHook } from "payload/types";
import { User } from "../../payload-types";

// ensure there is always a `user` role
// do not let non-admins change roles
// eslint-disable-next-line consistent-return
export const protectRoles: FieldHook<User & { id: string }> = async ({
  req,
  data,
}) => {
  const isAdmin = req.user?.roles.includes("admin");
  if (!isAdmin) {
    return ["user"];
  }

  return [...(data?.roles || []), "user"];
};
