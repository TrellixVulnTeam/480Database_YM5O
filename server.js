// https://www.youtube.com/watch?v=SccSCuHhOw0

const express = require('express')
// pointing to router folder
const app = express("/server/database.js")
// database 
let db = require('./server/database/database')
let bodyParser = require("body-parser")



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended : true}))
// parse application/json
app.use(bodyParser.json())
// setting the ejs engin, change html files extension to .ejs
app.set('view engine', 'ejs')




app.get('/', (req, res)=>{
    res.render('../views/index', {message: "hello from kim"})
})

app.post('/form', (req, res)=>{
    // res.send("Hello")
    // res.send(JSON.stringify(req.body))
    console.log(req.body.firstName)

    res.render('../views/index', {message: "hello from kim", path: "/"})
})

// it will takes care of individual page routes
app.use('/insert', require('./router/insert.js'))
app.use('/update', require('./router/update.js'))
app.use('/delete', require('./router/delete.js'))
app.use('/search', require('./router/search.js'))
app.use('/table', require('./router/table.js'))

app.listen(3000)











// // https://www.youtube.com/watch?v=SccSCuHhOw0

// const express = require('express')
// const app = express();
// app.set('view engine', 'ejs')
// let db = require('./server/database/database');



// app.get('/', (req, res)=>{
//     // res.send("Hello")
//     console.log(res);
//     res.render('./views/index', {message: "hello from kim"})
// });




// // it will takes care of individual page routes
// app.use('/insert', require('./router/insert.js'));
// app.use('/update', require('./router/update.js'));
// app.use('/delete', require('./router/delete.js'));
// app.use('/search', require('./router/search.js'));
// app.use('/table', require('./router/table.js'));

// app.listen(3000, console.log("Server running on port 3000"));










//     // let sql = sql = `CREATE TABLE Customer(id INTEGER PRIMARY KEY, first_name, last_name, phone)`
//     // db.run(sql);

//     // // check if it is already exists.
//     // sql = `INSERT INTO Customer(first_name, last_name, phone) VALUES (?, ?, ?)`;
//     // db.run(sql, ["luke", "Kim", 394222333], (err)=>{
//     // if(err) return console.log(err.message);

//     // sql = `SELECT * FROM Customer;`
//     // db.all(sql, [], (err, rows)=>{
//     // if(err) return console.log(err.message)
//     // rows.forEach(row=>{
//     //     console.log(row);
//     // })
//     // })


//     // })
