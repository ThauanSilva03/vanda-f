export default {
  api: {
    input: "http://0.0.0.0:8000/api/openapi.json",
    output: {
      mode: "split",
      target: "./src/api",
      client: "axios",
      schemas: "./src/api/schemas",
    },
  },
};
