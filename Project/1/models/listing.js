const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    default:
      "https://cdn.louisfeedsdc.com/wp-content/uploads/green-certified-homes-florida-home-brokers_4111117.jpg",
    set: (v) =>
      v === ""
        ? "https://cdn.louisfeedsdc.com/wp-content/uploads/green-certified-homes-florida-home-brokers_4111117.jpg"
        : v,
  },
  price: String,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
