const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/support', (req, res) => {
  const input = req.body;
  console.log('Received support request:', input);
  res.json({
    message: "Support request received successfully!",
    data: input
  });
});

app.get('/', (req, res) => {
  res.send("Sophia is live.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
