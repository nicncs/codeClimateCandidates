const prod = process.env.NODE_ENV === "production";

module.exports = {
  "process.env.API_URL": prod ? "http://localhost:8000" : "http://localhost:8000",
};
