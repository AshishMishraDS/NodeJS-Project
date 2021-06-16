const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("Hello World...!");
});

app.get('/about', (req, res) => {
    res.send("<h1>I am About..!</h1>")
})

app.get('/contact', (req, res) => {
    res.send('<h2>Contact me at +91-9874397<h2>')
});

app.get('/services', (req, res) => {
    res.send('<ul><li>Logo Design</li><li>Web Design</li><li>Hacking</li></ul>')
})

app.post('/login', (req, res) => {
    res.send('login sucessfull');
});
 
app.delete('/delete', (req, res) => {
    res.send('delete success..!')
})

app.get("/user/:id/status/:status_id", (req, res) => {
  res.send(req.params);
});

app.get('/flight/:from-:to', (req, res) => {
    res.send(req.params);
});

app.get("/about-us", (req, res) => {
  //res.status(200).json({ user: "ashish", balance: "9000", id: "13hk2dy78" });
    res.status(500).json({ error: "Something went wrong" });
});


app.listen(3000, () => console.log("Server is running at port 3000...."));