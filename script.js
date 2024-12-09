
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(to bottom, #ade9f4, #ffffff);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  text-align: center;
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

h1 {
  font-family: 'Comic Sans MS', cursive;
  font-size: 2.5em;
  color: #ff6666;
  margin-bottom: 20px;
}

.cat-image {
  width: 150px;
  height: auto;
  margin: 20px 0;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

button {
  font-size: 1em;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s;
}

#noButton {
  background-color: #ff6666;
  color: white;
}

#yesButton {
  background-color: #66cc66;
  color: white;
}

button:hover {
  transform: scale(1.1);
}

Nadhirah, [10/12/2024 12:37 AM]
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Could We Go On A Date?</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Could We Go On A Date?</h1>
    <img src="cute-cat.png" alt="Cute Cat" class="cat-image">
    <div class="buttons">
      <button id="noButton">No</button>
      <button id="yesButton">Yes</button>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>
