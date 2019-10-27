<?php

require 'PHPMailer/PHPMailerAutoload.php';

// ==== Принудительный захват массива переменных ==========================
// ==== раскомментировать, если письма отправляются без значений полей ====
$text       = '';
$adminEmail = 'kacevnik@yandex.ru';
$email      = $_POST['email'];     	if($email){$text      = 'E-mail пользователя: '.$email.'<br>';}
$phone      = $_POST['phone'];     	if($phone){$text      = $text.'Телефон пользователя: '.$phone.'<br>';}
$name       = $_POST['name'];     	if($name){$text       = $text.'Имя пользователя: '.$name.'<br>';}
$name       = $_POST['format'];     if($name){$text       = $text.'Формат заведения: '.$name.'<br>';}
$name       = $_POST['city'];       if($name){$text       = $text.'Город: '.$name.'<br>';}
$form       = $_POST['form'];



$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';
//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';                         // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'zhk.veneciya@mail.ru';           // SMTP username zhk.veneciya@mail.ru
$mail->Password = 'Z9564665z';                        // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->setFrom('zhk.veneciya@mail.ru', '');
$mail->addAddress($adminEmail, $adminEmail);          // Add a recipient            

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = $form;
$mail->Body    = $text;


if(!$mail->send()) {
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    //echo 'Message has been sent';
}