<?php

$recepient = "stashenkodenis@gmail.com";
$sitename = "Заказ на вёрстку";

$name = trim($_POST["name"]);
$hide = trim($_POST["input-hidden"]);
$phone = trim($_POST["phone"]);

$message = "Форма: $hide \nИмя: $name \nТелефон: $phone";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
  mail(
    $email,
    'Thank you!',
    'Thank you! \r\n We will call you back now! Wait.', // ваш шаблон письма
    "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient"
  );
}