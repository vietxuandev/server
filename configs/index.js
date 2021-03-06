module.exports = {
  mongodbUri: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  auth: {
    google: {
      CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET
    },
    facebook: {
      CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
      CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET
    }
  }
}