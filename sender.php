<?php

    $name = $_POST['name'];
	$phone = $_POST['phone'];

	$to = "vitavita-98@yandex.ru";
	$date = date ("d.m.Y");
	$time = date ("h:i");
	$from = "JetSkim@JetSkim.ru";
	$subject = "JetSkim - Заявка c сайта";


	$msg="
	У вас новая заявка:
    Имя: $name
    Телефон: $phone";
	mail($to, $subject, $msg, "From: $from ");

	header('Location:https://ya.ru');
?>

