module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "akademiarozwojurudaslaska@gmail.com",
        defaultReplyTo: "akademiarozwojurudaslaska@gmail.com",
      },
    },
  },
});
