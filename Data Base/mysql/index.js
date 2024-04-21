const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const expree = require("express");
const app = expree();
const path = require("path");
const methodovver = require("method-override");

app.use(methodovver("_method"));
app.use(expree.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "node",
  password: "",
});

app.get("/", (req, res) => {
  let q = "SELECT count(*) FROM user";
  try {
    con.query(q, (err, reult) => {
      if (err) throw err;
      const count = reult[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("error");
  }
});
app.get("/show", (req, res) => {
  let q = "SELECT * FROM user";
  try {
    con.query(q, (err, datas) => {
      if (err) throw err;
      //   console.log(users)
      res.render("showuser.ejs", { datas });
    });
  } catch (err) {
    console.log(err);
    res.send("error");
  }
});
app.get("/edit/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);
  let q = `SELECT * FROM user where id='${id}'`;
  try {
    con.query(q, (err, data) => {
      if (err) throw err;
      data = data[0];
      console.log(data);
      res.render("edit.ejs", { data });
    });
  } catch (err) {
    console.log(err);
    res.send("error");
  }
});

app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { username: username, password: password } = req.body;
  let q = `SELECT * FROM user where id='${id}'`;
  try {
    con.query(q, (err, data) => {
      if (err) throw err;
      data = data[0];
      if (password != data.password) {
        res.send("Enter of Reait Password");
      } else {
        let q2 = `UPDATE user SET username='${username}' where id='${id}'`;
        con.query(q2, (err, data) => {
          try {
            if (err) throw err;
            res.redirect("/show");
          } catch (err) {
            res.send(err);
          }
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("error");
  }
});

app.get("/delete/:id", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user where id='${id}'`;
  try {
    con.query(q, (err, data) => {
      if (err) throw err;
      data = data[0];
      console.log(data);
      res.render("delet.ejs", { data });
    });
  } catch (err) {
    console.log(err);
    res.send("error");
  }
});

app.delete("/delete/:id", (req, res) => {
  let { id } = req.params;
  let { email: email, password: password } = req.body;
  let q = `SELECT * FROM user where id='${id}'`;
  try {
    con.query(q, (err, data) => {
      if (err) throw err;
      data = data[0];
      if (email == data.email && password == data.password) {
        let q2 = `DELETE FROM user WHERE id='${id}'`;
        try {
          con.query(q2, (err, reult) => {
            if (err) throw err;
            res.redirect("/show");
          });
        } catch (err) {
          res.send(err);
        }
      } else {
        res.send("Email and Password is Woring Try Again");
      }
    });
  } catch (err) {
    console.log(err);
    res.send("error");
  }
});

app.get('/add',(req,res) =>{
    res.render('add.ejs')
});

app.post("/add",(req,res) => {
    let idg =  () => faker.string.uuid();
    let newid = idg();
    let {id:id,username:username,email:email,password:password} = req.body;
    let q = `INSERT INTO user (id, username, email, password) VALUES (?,?,?,?)`;
    let data = [];
    data.push(newid,username,email,password);
    try {
        con.query(q,data,(err,reult) => {
            if(err) throw err;
            console.log(reult);
            res.redirect("/show");
        })
    } catch (err) {
        console.log(err);
        res.send(err)
    }
})

app.listen("8080", () => {
  console.log("server is running");
});

// console.log(randomUser());
// let t_create = `CREATE TABLE user (
//   id VARCHAR(60) PRIMARY KEY,
//   username VARCHAR(60) UNIQUE,
//   email VARCHAR(60) UNIQUE NOT NULL,
//   password VARCHAR(60) NOT NULL
//   );`;

//   let u_query = `INSERT INTO user (id, username, email, password) VALUES ? `;

//   try {
//     con.query(u_query, [data], (err, reult) => {
//       console.log(reult);
//       if (err) {
//         throw err;
//       }
//     });
//   } catch (err) {
//     console.log(err);
//   }
