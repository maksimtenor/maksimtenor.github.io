<?php
    session_start();
    // error_reporting(0);
    if(!$_SESSION['user'] AND $_SESSION['list']){
        header('Location: index.php');
    }

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Авторизация и регистрация</title>

    <link rel="stylesheet" href="assets/css/main.css">

       <!-- favicons
	================================================== -->
	<link rel="shortcut icon" href="favicon1.png" >
</head>
<body>
    <!-- Профиль  -->


 <!-- Navigation -->

            <div class="col-md-9 phpform">
                    <img class="profile__img" src="<?= $_SESSION['user']['avatar'] ?>" width="40" height="40">
                    <h2 class="profile__h2" style="margin: 10px 0;"><?= $_SESSION['user']['full_name'] ?></h2>
                    <a class="profile__link_email" href="#"><?= $_SESSION['user']['email'] ?></a>
                    <a class="profile__link_logout logout" href="include/logout.php">Выход</a>
            </div>
            <div class="cont-php">
                <?php
                    $link = mysqli_connect('localhost', 'root', '', 'test') 
                        or die("Ошибка " . mysqli_error($link)); 
                        
                    $query ="SELECT * FROM list";
                    
                    $result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
                    if($result)
                    {
                        $rows = mysqli_num_rows($result); // количество полученных строк
                        
                        echo "<table><tr><th>Имя</th><th>Телефон</th><th>Почта</th></tr>";
                        for ($i = 0 ; $i < $rows ; ++$i)
                        {
                            $row = mysqli_fetch_row($result);
                            echo "<tr>";
                                for ($j = 1 ; $j < 4 ; ++$j) echo "<td>$row[$j]</td>";
                            echo "</tr>";
                        }
                        echo "</table>";
                        
                        // очищаем результат
                        mysqli_free_result($result);
                    }
                    
                    mysqli_close($link);
                ?>
            </div>


</body>
</html>