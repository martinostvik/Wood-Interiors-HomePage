<?php
$data = json_decode(file_get_contents("php://input"), TRUE);
$name = $data['name'];
$email = $data['email'];
$subject = $data['subject'];
$body = $data['body'];
$to      = 'adam@woodinteriors.se';
$message = $body;
$headers = 'From: ' . $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?>