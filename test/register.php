<?php
    session_start();
    error_reporting(0);
    if($_SESSION['user']){
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
    <!-- Форма регистрации -->

<form action="include/signup.php" method="post" enctype="multipart/form-data">
    <label>ФИО</label>
    <input name="full_name" type="text" placeholder="Введите свое полное имя" >
    <label>Логин</label>
    <input name="login" type="text" placeholder="Введите свой логин" >
    <label>Почта</label>
    <input name="email" type="email" placeholder="Введите ваш Email">
    <label>Изображение профиля</label>
    <input name="avatar" type="file">
    <label>Пароль</label>
    <input name="password" type="password" placeholder="Придумайте пароль" >
    <label>Подтверждение пароля </label>
    <input name="password_confirm" type="password" placeholder="Подтвердите ваш пароль" >
    <button type="submit" >Регистрация</button>
    <p>
    У вас уже есть аккаунт? - <a href="index.php">Авторизируйтесь!</a>
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