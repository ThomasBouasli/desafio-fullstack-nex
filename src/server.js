require('./database');
const Express = require("express");
const routes = require("./routes");

const app = Express();

app.use(Express.json());
app.use(routes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
