<?php
$userName = $_POST['user_name'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$message = $_POST['message'];
// echo "Привет $userName", $tel, $email, $message ;
mail("holywave@yandex.ru", "Письмо с сайта детского сада", "Имя: $userName, Телефон: $tel, Email: $email, Сообщение: $message");

// header("Location: index.html");
