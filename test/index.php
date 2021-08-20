<?php
    session_start();
    error_reporting(0);
    if($_SESSION['user'] AND $_SESSION['list']){
        header('Location: profile.php');
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Авторизация и регистрация</title>

    <link rel="stylesheet" href="assets/css/main.css">

</head>
<body>
    <!-- Форма авторизации -->

<form action="include/signin.php" method="post">
    <label>Логин</label>
    <input type="text" name="login" placeholder="Введите Логин" >
    <label>Пароль</label>
    <input type="password" name="password" placeholder="Введите Пароль">
    <button type="submit" >Войти</button>
    <p>
        У вас нет аккаунта? - <a href="register.php">Зарегистрируйтесь</a>
    </p>
    <?php
    if($_SESSION['message']){
        echo '<p class="msg">' . $_SESSION['message'] . '</p>';
    }
         unset ($_SESSION['message']);

         ?>
</form>

</body>
</html>