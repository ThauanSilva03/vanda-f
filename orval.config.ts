export default {
  api: {
    input: "http://computacao.unir.br/vanda/api/openapi.json",
    output: {
      mode: "split",
      target: "./src/api",
      client: "axios",
      schemas: "./src/api/schemas",
    },
  },
};
