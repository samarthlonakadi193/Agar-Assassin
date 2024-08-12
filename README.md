# Agar-Assassin
Agar Assassin is a multiplayer online game inspired by the popular game "Agar.io". Players control a cell that must grow by absorbing orbs and other players in a shared environment. The objective is to become the largest cell in the game.

# Features
- Multiplayer Gameplay: Compete against other players in real-time.

- Dynamic Environment: The game world is populated with orbs that players can absorb to grow.

- Leaderboard: Keep track of the top players in the game.

- Responsive Design: The game interface adapts to different screen sizes.

# Getting Started
Prerequisites:

   Make sure you have the following installed on your machine:

   Node.js (v14.x or higher)

   npm (v6.x or higher)

# Istallation
Clone the repository:
```
  git clone https://github.com/samarthlonakadi193/Agar-Assassin.git
  cd Agar-Assassin
```

Install the dependencies:
```
  npm install
```
Running the Server:
```
  node index.js
```
Open your web browser and navigate to http://localhost:9000 to start playing the game.
# File Structure

```
📦 Agar-Assassin
├─ expressStuff
│  └─ expressMain.js
├─ public
│  ├─ images
│  ├─ UIStuff.js
│  ├─ canvasStuff.js
│  ├─ index.html
│  ├─ socketStuff.js
│  └─ styles.css
├─ socketStuff
│  ├─ classes
│  │  ├─ Orb.js
│  │  ├─ Player.js
│  │  ├─ PlayerConfig.js
│  │  ├─ PlayerData.js
│  │  └─ checkCollisions.js
│  └─ socketMain.js
├─ README.md
├─ index.js
├─ package-lock.json
├─ package.json
└─ server.js
```
# How to Play
   1) Enter your name and start the game.
   2) Move your mouse to control the direction of your cell.
   3) Absorb orbs to grow larger.
   4) Absorb other players to become the biggest cell in the game.
   5) Avoid larger players who can absorb you.
# Controls
   Mouse: Move your cell in the direction of the cursor.
