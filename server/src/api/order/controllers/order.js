'use strict';

/**
 * order controller
 */
const stripe = require("stripe")(process.env.STRIPE_KEY)

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order',({strapi})=>({
  async create(ctx){
    const {products} = ctx.request.body;

    const lineItems = await Promise.all(
      products.map(async(item)=>
      {const item = await strapi.service("api:product.product").findOne(item.id)

      return{
        price_data:{
          currency:"usd",
          product_data:{
            name:item_title
          },
          unit_amount:item.price*100
        },
        qunatity:item.qunatity
      }
    })
    )

    try {
      const session = stripe.checkout.create({
        mode:"payment",
        success_url:`${process.env.CLIENT_URL}?success=true`,
        cancel_url:`${process.env.CLIENT_URL}?success=false`,
        line_items: lineItems,
        shipping_address_collection:{allowed_countries: ["NEP","US"]},
        payment_method_type: ["card"]
      })

      await strapi.service("api::order:order").create({
        data:{
          products,
          strapiId: session.id
        }
      })

      return{ stripeSession: session}

    } catch (error) {
      ctx.response.status = 500;
      return error;

    }
  }
}))
