module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ["of2kRfElIvSydvfUk5YMeA","s3YCuWYRjV0P++w+ppwbkA","aJtIwPkhezWgqJa/Yr8JfQ", "om/KGav7ZVMVUgl54Svsqw"])
  },
});
