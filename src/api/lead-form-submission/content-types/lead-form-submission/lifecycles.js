module.exports = {
  async afterCreate(event) {
    const { result } = event;
    try {
      await strapi.plugins["email"].services.email.send({
        to: "akademiarozwojurudaslaska@gmail.com",
        from: "akademiarozwojurudaslaska@gmail.com",
        subject: "Nowa wiadomość z Akademii Rozwoju Dziecka",
        text: `Wiadomość od ${result.name} mail: ${result.email} ${result.message}`,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
