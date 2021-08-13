module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: env("AWS_ACCESS_KEY_ID"),
      secretAccessKey: env("AWS_ACCESS_SECRET"),
      region: "us-east-1",
      params: {
        Bucket: "personal-backend-bucket",
      },
    },
  },
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_API_KEY"),
    },
    settings: {
      defaultFrom: "glasgowrandy@gmail.com",
      defaultReplyTo: "glasgowrandy@gmail.com",
      testAddress: "glasgowrandy@gmail.com",
    },
  },
  // ...
});
