<?php

if (isset($_POST['sumbit'])) {
    $name = $_POST['name'];
    $emailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mailTo = 'MariosGalanis@outlook.com';
    $headers = "From: " . $emailFrom;
    $text = "You have received an e-mail from" . $name . "\n\n" . $message;

    mail($mailTo, $subject, $text, $headers);
    header("Location: index.html?mailsend");
}
