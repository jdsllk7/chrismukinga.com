<?php
//send email to Chris

if (isset($_GET['emailFrom']) && !empty($_GET['emailFrom'])) {

    $message = $_GET['message'];
    $emailFrom = $_GET['emailFrom'];
    $subject = $_GET['subject'];
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: < ' . $emailFrom . '>' . "\r\n";
    $emailTo = 'chrismukingaministries@gmail.com';
    if (mail($emailTo, $subject, $message, $headers)) {
        echo 'success';
    } else {
        echo 'error';
    }
} else {
    echo 'hi you';
}
