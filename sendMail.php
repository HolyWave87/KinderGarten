<?php

//получаем данные с формы в переменные

$userName = $_POST['user_name'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$message = $_POST['message'];

// отправляем данные с формы на почту

mail("newmontessori@mail.ru", "Message from Montessori-NewTon", "Name: $userName, Phone: $tel, Email: $email, Message: $message");

// отправляем на фронт ответ в формате json

$data = "ok"; // переменная с ответом
header("Content-type: application/json"); // спец метод
echo json_encode($data); // собственно сам json, вместо echo можно писать return разницы нет

// header("Location: index.html"); // это если надо чтобы страница перезагружалась после отправки формы и возвращала на главную
