const path = require("path");
const glob = require("glob");

module.exports = {
  // Enable relative path for next assets
  // Ref: https://github.com/zeit/next.js#cdn-support-with-asset-prefix
  assetPrefix: "./",
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: "emit-file-loader",
        options: {
          name: "dist/[path][name].[ext]",
        },
      },
      {
        test: /\.css$/,
        use: ["babel-loader", "raw-loader", "postcss-loader"],
      },
      {
        test: /\.wav$/,
        use: "file-loader",
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          "babel-loader",
          "raw-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              includePaths: ["styles", "node_modules"]
                .map(d => path.join(__dirname, d))
                .map(g => glob.sync(g))
                .reduce((a, c) => a.concat(c), []),
            },
          },
        ],
      },
    );
    return config;
  },
};
