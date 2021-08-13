<?php
include_once 'dbConnection.php';
$ref=@$_GET['q'];
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$date=date("Y-m-d");
$time=date("h:i:sa");
$feedback = $_POST['feedback'];
$q=mysqli_query($con,"INSERT INTO feedback(name, email, subject, feedback, date, time) VALUES  ('$name', '$email' , '$subject', '$feedback' , '$date' , '$time')")or die ("Error");
header("location:$ref?q=Thank you for your valuable feedback");
?>