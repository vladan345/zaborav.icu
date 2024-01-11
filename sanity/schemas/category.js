export default {
  name: "category",
  title: "Categories",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "id",
      title: "Id",
      type: "string",
    },
    {
      name: "post",
      title: "Post",
      type: "reference",
      to: [{ type: "post" }],
    },
  ],
};
