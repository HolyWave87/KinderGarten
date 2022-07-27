<?php
$userName = $_POST['user_name'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$message = $_POST['message'];
// echo "Привет $userName", $tel, $email, $message ;
mail("holywave@yandex.ru", "Тестовое письмо", "name: $userName, tel: $tel, email: $email, message: $message");
