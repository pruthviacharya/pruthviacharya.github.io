<!DOCTYPE html>
<html>
<head>
  <title>My Interactive Website</title>
</head>
<body>
  <h1>My Interactive Website</h1>
  <button id="button">Click Me</button>
  <p id="text"></p>

  <script>
    // Select the button and text elements
    var button = document.getElementById("button");
    var text = document.getElementById("text");

    // Add a click event listener to the button
    button.addEventListener("click", function() {
      text.innerHTML = "Hello, World!";
    });
  </script>
</body>
</html>

