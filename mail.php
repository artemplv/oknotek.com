<?php

if (isset($_POST['type'])) {
    $type = $_POST['type'];

    switch ($type) {
        case 'callback':
            $header = 'Заявка на обратный звонок';
            break;
        case 'metering':
            $header = 'Заявка на бесплатный замер';
            break;
        case 'credit':
            $header = 'Заявка на рассрочку';
            break;
        case 'question':
            $header = 'Новый вопрос';
            break;
    }

    $message  = '<head><style>p{font-size:16px}</style></head>';
    $message .= '<body>';
    $message .= '<h2>'.$header.'</h2>';
    $message .= 'Имя: '.filter_var($_POST['name'], FILTER_SANITIZE_STRING)."<br/>";
    if ($type == 'callback' || $type == 'metering' || $type == 'credit') {
        $message .= 'Телефон: <a href="tel:'.filter_var($_POST['phone'], FILTER_SANITIZE_STRING).'">
        '.filter_var($_POST['phone'], FILTER_SANITIZE_STRING).'</p>';
    }
    elseif ($type == 'question'){
        $message .= 'E-mail: <a href="mailto:'.filter_var($_POST['email'], FILTER_SANITIZE_STRING).'">
        '.filter_var($_POST['email'], FILTER_SANITIZE_STRING).'<br/>';
        $message .= 'Вопрос: '.filter_var($_POST['text'], FILTER_SANITIZE_STRING)."</p>";
    }
    $message .= '</body>';

    $headers  = "Content-type: text/html; charset=utf-8";
    $to = 'privet@oknotek.net';
//    $to = 'iazyryanov@yandex.ru';
//    $to = 'st.pawlo@gmail.com';
//      $to = 'artemplv@gmail.com';
    mail($to, $header, $message, $headers);
}
?>
