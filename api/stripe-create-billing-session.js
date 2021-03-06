const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const requireAuth = require("./_require-auth.js");
const { getUser } = require("./_db.js");

exports.handler = requireAuth(async (event, context, callback) => {
  const user = event.user;

  try {
    const { stripeCustomerId } = await getUser(user.uid);

    // Create a billing portal session
    const session = await stripe.billingPortal.sessions.create({
      customer: stripeCustomerId,
      return_url: `${process.env.STRIPE_DOMAIN}/settings/general`,
    });

    // Return success response
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ status: "success", data: session }),
    });
  } catch (error) {
    console.log("stripe-create-billing-session error", error);

    // Return error response
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        status: "error",
        code: error.code,
        message: error.message,
      }),
    });
  }
});
