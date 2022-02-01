module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '30076b170000823af43712263800d9fb'),
  },
});
