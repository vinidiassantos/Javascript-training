<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document new</title>
</head>
<body>
    <h2>Javascript</h2>
    <p>Can you change a light function?</p>
    <button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

    <img id="myImage" src="https://www.w3schools.com/js/pic_bulboff.gif" style="width:100px">
    
    <button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>
</body>
</html>