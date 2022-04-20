const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //your MySql username,
        user: 'root',
        //Your MySql password
        password: 'Veronichka88$$',
        database: 'election'
    },
    console.log('Connected to the election database.')
);
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });
//GET a single candidate
db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
    if (err) {
        console.log(err);
    }
    console.log(row);
});
//delete a d=candidate
db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
  //create candidate
  const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
               VALUES (?,?,?,?)`;
  const params = [1, 'Ronald', 'Fairbank', 1];

  db.query(sql, params, (err, result) => {
      if (err) {
          console.log(err);
      }
      console.log(result);
  });

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});