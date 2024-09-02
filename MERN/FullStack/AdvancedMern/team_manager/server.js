const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/routes/jokes.routes')(app);

app.listen(port, () => console.log(`Server running on port ${port}`));