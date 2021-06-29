// Setup Server
const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

// Serve Static Folder
app.use(express.static("public"));
// Cors
app.use(cors());
// Body Parser
app.use(bodyParser.json());
// File Upload
app.use(fileUpload({ createParentPath: true }));
// End Setup Server

app.get("/", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send(
    Buffer.from(
      "<h1><center>REST API For <a href='http://103.4.52.202:8080'>Subs-Form</a></h1></center>"
    )
  );
});

// Route
const userRouter = require('./src/route/user')

// Route List
app.use('/user', userRouter)

app.listen(port, () => {
  console.log(`server berjalan di http://localhost:${port}`);
});
