<?php
$name = $_POST['username'];
$surname = $_POST['email'];
$message = $_POST['message'];
$file = fopen("file.txt","at");
fwrite($file,"\n $name:$surname:$message \n");
fclose($file);
?>