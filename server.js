// init project
const express = require('express');
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
const  cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// the api returns request info
app.get("/api/whoami", (req, res) => {
  let ip = req.get('x-forwarded-for');
  ip = ip.substring(0,ip.indexOf(','));
  res.json({"ipaddress": ip, "language": req.get('Accept-Language'), "software": req.get('User-Agent')});
});


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
