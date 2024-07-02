"use strict";

/**
 * `page-populate-middleware` middleware
 */

const populate = {
  contentSections: {
    populate: {
      picture: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      buttons: {
        populate: true,
      },
      pictures: {
        populate: true,
      },
      button: {
        populate: true,
      },
      item: {
        populate: true,
      },
      items: {
        populate: {
          card: { populate: { fields: ["description", "icon"] } },
          title: { populate: "*" },
          subtitle: { populate: "*" },
          icon: { populate: "*" },
        },
      },
      smallGalery: {
        populate: {
          picture: { populate: "*" },
        },
      },
      feature: {
        populate: {
          fields: ["title", "description", "showLink", "newTab", "url", "text"],
          media: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      cardFeature: {
        populate: { fields: ["title", "description", "icon"] },
      },
      imageFeature: {
        populate: {
          fields: ["title", "description"],
          button: { populate: "*" },
          picture: { populate: "*" },
        },
      },
      card: {
        populate: { fields: ["description", "icon"] },
      },
      articles: {
        populate: {
          cover: { fields: ["url"] },
          category: { populate: "*" },
          authorsBio: {
            populate: "*",
          },
        },
      },
      cover: {
        populate: true,
      },
      testimonials: {
        populate: {
          picture: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      pictures: {
        populate: {
          fields: ["picture"],
          picture: {
            populate: true,
          },
        },
      },
      plans: {
        populate: ["product_features"],
      },
      submitButton: {
        populate: true,
      },
    },
  },
  seo: {
    fields: ["metaTitle", "metaDescription"],
    populate: { shareImage: true },
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query = {
      populate,
      filters: { slug: ctx.query.filters.slug },
      locale: ctx.query.locale,
    };

    console.log("page-populate-middleware.js: ctx.query = ", ctx.query);

    await next();
  };
};
