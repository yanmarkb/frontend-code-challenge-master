const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users");
const logger = require("./lib/logger");
const app = express();

app.use(bodyParser.json());

app.use(express.static("public"));

app.use("/users", usersRouter);

logger(app);

const port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log(`Server is running on http://localhost:${port}`);
});
