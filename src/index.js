const app = require('./infra/server.js');
require('dotenv').config()

app.listen(process.env.PORT || 8000, () => {
   console.log('Server runing!')
})
