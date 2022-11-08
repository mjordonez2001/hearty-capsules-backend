const { PORT = 8000 } = process.env;
const app = require("./app");

const listener = () => console.log(`Server started on ${PORT}`);
app.listen(PORT, listener);