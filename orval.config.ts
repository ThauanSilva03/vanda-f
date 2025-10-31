export default {
  api: {
    input: `${process.env.NEXT_PUBLIC_API_URL}/openapi.json`,
    output: {
      mode: "split",
      target: "./src/api",
      client: "axios",
      schemas: "./src/api/schemas",
    },
  },
};
