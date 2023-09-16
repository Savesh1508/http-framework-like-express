const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3030
const Application = require('./framework/application');
const app = new Application()

const mongoose = require('mongoose');

const jsonParser = require('./framework/parse_json.js');
const parseUrl = require('./framework/parse_url.js')


const userRouter = require('./src/routes/user-router.js');

app.use(jsonParser);
app.use(parseUrl('http://localhost:5000'));


app.addRouter(userRouter)



const start = async() => {
  try {
    await mongoose.connect('mongodb+srv://Savesh2004:oqA9unkTZzFAOLb7@cluster2.jdlnnvn.mongodb.net/?retryWrites=true&w=majority')
    app.listen(PORT, () => {
      console.log(`Server works on ${PORT} - port`);
    })
  } catch (error) {
    console.log(error);
  }
}

start()
