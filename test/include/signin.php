<?php
    session_start();
    error_reporting(0);
    require_once 'connect.php';

    $login = $_POST['login'];
    $password = md5($_POST['password']);

    $name_list = $_POST['name_list;'];
    $phone_list = $_POST['phone_list;'];
    $email_list = $_POST['email_list;'];
    
    $check_user = mysqli_query($connect, "SELECT * FROM `users` WHERE `login` = '$login' AND `password` = '$password'");
    $check_list = mysqli_query($connect, "SELECT * FROM `list` WHERE `name_list` = '$name_list' AND `phone_list` = '$phone_list' AND `email_list` = '$email_list' ");

    
    $list = mysqli_fetch_assoc($check_list);

    $_SESSION['list'] = [
        "id" => $list['id'],
        "name_list" => $list['name_list'],
        "phone_list" => $list['phone_list'],
        "email_list" => $list['email_list'],
    ];

    if (mysqli_num_rows($check_user) > 0) {

        $user = mysqli_fetch_assoc($check_user);

        $_SESSION['user'] = [
            "id" => $user['id'],
            "full_name" => $user['full_name'],
            "avatar" => $user['avatar'],
            "email" => $user['email'],
        ];

        header('Location: ../profile.php');

    } else {
        $_SESSION['message'] = 'Не верный логин или пароль';
        header('Location: ../index.php');
    }




?>
    <pre>
        <?php
        print_r($check_user); 
        print_r($user); 
        print_r($check_list); 
        print_r($list); 
        ?>
    </pre>

