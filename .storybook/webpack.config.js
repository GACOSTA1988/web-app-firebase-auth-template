const path = require('path')

module.exports = async ({ config }) => {
  // fonts
  config.module.rules.push({
    test: /\.(woff|woff2)$/,
    use: [
      {
        loader: 'file-loader',
        query: {
          name: '[name].[ext]',
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  })

  // don't forget to return.
  return config
}