const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const jokes = [
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "Why did the math book look sad? Because it had too many problems.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call cheese that isn’t yours? Nacho cheese!",
    "Why did the bicycle fall over? Because it was two-tired!"
];

app.get("/joke", (req, res) => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.json({ joke: randomJoke });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Joke API running on port ${PORT}`));
