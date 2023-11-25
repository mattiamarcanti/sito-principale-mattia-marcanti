<?php

$name = $_GET['name'];
$surname = $_GET['surname'];
$email = $_GET['email'];
$message = $_GET['message'];
$date = date("Y-m-d");

$servername = "89.46.111.236";
$username = "Sql1639727";
$password = "Morgana10!";
$dbname = "Sql1639727_1";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO messaggi_sito (nome, cognome, email, messaggio, data)
VALUES ('". $name ."', '". $surname ."', '". $email ."','". $message ."','". $date ."')";

$conn->query($sql);
$conn->close();
exit;
?>