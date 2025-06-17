# 🧠 Simon Says Game

Welcome to the **Simon Says Game**, a memory-based color sequence game built using **HTML**, **CSS**, and **JavaScript**. This is a fun and interactive project where the user has to memorize and repeat a sequence of button flashes.

🔗 **Live Demo**: _Add your GitHub Pages link here after deployment_

---

## 🎮 Game Rules

- The game starts when the player presses any key or taps the screen (mobile support included).
- A sequence of colors will flash one at a time.
- The player must click/tap the buttons in the **same order** as they appeared.
- With each level, the sequence gets longer by **one new color**.
- If the player clicks the wrong color, the game ends and their score is displayed.
- The **high score** is saved using `localStorage`.

---

## 📁 Project Structure

```
├── index.html       # HTML structure
├── style.css        # Styling and animations
└── app.js           # Game logic
```

---

## 📜 Code Highlights

- Uses `addEventListener("keypress", ...)` and `addEventListener("touchstart", ...)` to support desktop and mobile.
- Stores the game's pattern in `gameSeq` and user inputs in `userSeq`.
- Adds visual feedback with `.flash` and `.userflash` classes.
- Includes local storage support to track and show **high scores**.

---

## 🌟 Features

- Clean and minimalistic UI
- Smooth animations
- Increasing difficulty per level
- Responsive and touch-friendly design
- High score tracking

---

## 🧠 Future Improvements

- Add sound effects for each button
- Add a timer challenge mode
- Add a scoreboard or global leaderboard

---

## 🙌 Made with Love

This project was built as part of learning front-end web development. Pull requests and suggestions are welcome!

