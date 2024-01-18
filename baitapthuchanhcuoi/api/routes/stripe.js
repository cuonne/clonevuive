const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
require("dotenv").config();
const KEY = process.env.STRIPE_KEY;
const stripe = require("stripe")(KEY);
console.log(process.env.STRIPE_KEY);
router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
