const app = require('./config/server');


const PORT = (process.env.PORT || 3001);
app.listen(PORT);