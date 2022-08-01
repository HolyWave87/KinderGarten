<?php
$userName = $_POST['user_name'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$message = $_POST['message'];

mail("holywave@yandex.ru", "Письмо с сайта детского сада", "Имя: $userName, Телефон: $tel, Email: $email, Сообщение: $message");
return json_encode("ok");

// header("Location: index.html");
