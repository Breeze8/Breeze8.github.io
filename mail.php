<?php

$recepient = "stashenkodenis@gmail.com";
$sitename = "Dadabazar";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$plan = trim($_POST["plan"]);


$message = "Имя: $name \nТелефон: $phone \nТарифный план: $plan";

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