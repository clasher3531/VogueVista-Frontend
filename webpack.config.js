const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
  const isProd = argv.mode === "production";

  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.[contenthash].js",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpg|gif|svg|webp)$/,
          type: "asset/resource",
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "public/**/*.{png,json,ico}",
            to({ context, absoluteFilename }) {
              // Preserve folder structure under 'public'
              const relPath = path.relative(context, absoluteFilename);
              return relPath.replace(/^public[\\/]/, "");
            },
          },
        ],
      }),
    ],
    devServer: {
      static: "./dist",
      hot: true,
      historyApiFallback: true,
      port: process.env.PORT || 3000,
    },
    performance: isProd
      ? {
          maxAssetSize: 600000,
          maxEntrypointSize: 600000,
          hints: false, // No warnings in production
        }
      : {
          maxAssetSize: 3000000,
          maxEntrypointSize: 3000000,
          hints: "warning", // Show warnings in development
        },
    mode: isProd ? "production" : "development",
  };
};
