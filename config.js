/** Common config for bookstore. */

require("dotenv").config();

let DB_URI = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost`;

if (process.env.NODE_ENV === "test") {
  DB_URI = `${DB_URI}/books-test`;
} else {
  DB_URI = process.env.DATABASE_URL || `${DB_URI}/books`;
}



module.exports = { DB_URI };