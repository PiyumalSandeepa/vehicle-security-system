const express = require('express');
const firebase = require('./config/firebase');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Example route for testing Firebase
app.get('/test', (req, res) => {
  firebase.firestore().collection('test').get()
    .then(snapshot => {
      const data = snapshot.docs.map(doc => doc.data());
      res.json(data);
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
