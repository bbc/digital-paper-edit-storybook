// https://github.com/storybooks/storybook/issues/270#issuecomment-318101549
// this config augments the storybook one with support for css modules
// storybook does not have support for css modules out of the box
// if CRA were to be present, storybook webpack augment those configs
// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.module.css$/,
//         use: [
//           {
//             loader: "style-loader"
//           },
//           {
//             loader: "css-loader",
//             options: {
//               modules: true
//             }
//           }
//         ]
//       },
//       {
//         test: /\.scss$/,
//         use: [
//           {
//             loader: "style-loader"
//           },
//           {
//             loader: "css-loader",
//             options: {
//               sourceMap: true
//             }
//           },
//           {
//             loader: "sass-loader",
//             options: {
//               sourcemap: true
//             }
//           }
//         ]
//       }
//     ]
//   }
// };


const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });


  config.module.rules.push({
    test: /\.module.css$/,
    use: ['style-loader', 'css-loader'],
    include: path.resolve(__dirname, '../'),
  });

  // Return the altered config
  return config;
};