'use strict';

/**
 * order controller
 */
const stripe = require("stripe")(process.env.STRIPE_KEY)

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order',((strapi)=>{

}));
