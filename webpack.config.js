const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/main/index.tsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main-bundle-[hash].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", "scss"],
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
  devServer: {
    contentBase: "./public",
    writeToDisk: true,
    historyApiFallback: true,
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  plugins: [new CleanWebpackPlugin()],
};
