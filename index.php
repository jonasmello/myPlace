<?php
    $name = 'myPlace';
?><!doctype html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <title><?=$name?></title>
        <link rel="stylesheet" href="<?=$name?>.css">
        <script type="text/javascript" src="js/cssrefresh.js"></script>
</head>
<body>
    <h1><?=$name?> JQuery Plugin</h1>
    <h2>Please fill in the form:</h2>
    <form class="form">
        <input name="name" type="text" placeholder="name">
        <input name="address" type="text"  placeholder="address">
        <input name="city" type="text" placeholder="city">
        <input name="pass" type="password" placeholder="password">

    </form>
    <a href="http://github.com/jonasmello" target="_blank">by Jonas Mello</a> <br />
    <a href="http://codepen.io/lbebber/pen/uEHzD" target="_blank">Based on a Floating Labels by Lucas Bebber</a>



    <script type="text/javascript" src="//code.jquery.com/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="js/jquery.myPlace.min.js"></script>
    <script type="text/javascript" src="<?=$name?>.js"></script>


</body>
</html>




