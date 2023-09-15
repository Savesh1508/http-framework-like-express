const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3030
const Application = require('./framework/application');
const app = new Application()

const jsonParser = require('./framework/parse_json.js');
const parseUrl = require('./framework/parse_url.js')


const userRouter = require('./src/user-router.js');

app.use(jsonParser);
app.use(parseUrl('http://localhost:5000'));


app.addRouter(userRouter)

app.listen(PORT, () => {
  console.log(`Server works on ${PORT} - port`);
})


