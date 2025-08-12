require('dotenv').config()

const { app } = require("./app");
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`FruityAPI is running on port ${port}`);
});
