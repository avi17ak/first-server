const { app } = require("./app");

const port = 3000;
app.listen(port, () => {
  console.log(`FruityAPI is running on port ${port}`);
});
