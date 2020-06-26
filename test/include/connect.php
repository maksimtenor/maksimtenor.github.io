<?php

//myscqli_connect
    error_reporting(0);
    $connect = mysqli_connect('localhost', 'root', '', 'test');

    if(!$connect) {
        die('Error connect to DataBase');
    }