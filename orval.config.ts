export default {
  api: {
    input: "http://10.99.0.73:8000/api/openapi.json",
    output: {
      mode: "split",
      target: "./src/api",
      client: "axios",
      schemas: "./src/api/schemas",
    },
  },
};
