var express = require("express");
var app = express();
const http = require("http");
var session = require("express-session");
const path = require("path");
const socket = require("socket.io");
const server = http.createServer(app);
const io = socket(server);

// Requiring passport as we've configured it
var passport = require("./config/passport");
// Sets up the Express App
var PORT = process.env.PORT || 3001;
// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));
app.use(session({ 
  secret: "keyboard cat", 
  resave: true, 
  saveUninitialized: true 
}));
app.use(passport.initialize());
app.use(passport.session());

require("./routes/posts.js")(app);
require("./routes/userdata.js")(app);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
const users = {};

const socketToRoom = {};

io.on('connection', socket => {
    socket.on("join room", roomID => {
        if (users[roomID]) {
            const length = users[roomID].length;
            if (length === 4) {
                socket.emit("room full");
                return;
            }
            users[roomID].push(socket.id);
        } else {
            users[roomID] = [socket.id];
        }
        socketToRoom[socket.id] = roomID;
        const usersInThisRoom = users[roomID].filter(id => id !== socket.id);

        socket.emit("all users", usersInThisRoom);
    });

    socket.on("sending signal", payload => {
        io.to(payload.userToSignal).emit('user joined', { signal: payload.signal, callerID: payload.callerID });
    });

    socket.on("returning signal", payload => {
        io.to(payload.callerID).emit('receiving returned signal', { signal: payload.signal, id: socket.id });
    });

    socket.on('disconnect', () => {
        const roomID = socketToRoom[socket.id];
        let room = users[roomID];
        if (room) {
            room = room.filter(id => id !== socket.id);
            users[roomID] = room;
        }
    });

});
db.sequelize.sync({ force: false }).then(function () {
  server.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
