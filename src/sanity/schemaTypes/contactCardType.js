import { defineField, defineType } from "sanity";

export default defineType({
  name: "contactCard",
  title: "Contact Card",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Full name or display name",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "email",
      description: "Contact email address",
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      description: "Phone or mobile number",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "City, state, or general location",
    }),
  ],
  preview: {
    select: {
      name: "name",
      email: "email",
    },
    prepare({ name, email }) {
      const displayName = name || "Contact Info";
      const subtitle = email || "Contact Card";
      
      return {
        title: displayName,
        subtitle,
      };
    },
  },
});