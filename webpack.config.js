const path = require("path");

const clientConfig = {
  target: "web",
  entry: "./client/jsx/index.jsx",
  output: {
    filename: "client.bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
    ],
  },
};

const serverConfig = {
  target: "node",
  entry: "./src/server.js",
  output: {
    filename: "server.bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
    ],
  },
};

module.exports = [clientConfig, serverConfig];