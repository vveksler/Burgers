<?php

    $name = $_POST['user-name'];
    $tel = $_POST['user-tel'];
    $street = $_POST['user-street'];
    $house = $_POST['user-house'];
    $housing = $_POST['user-housing'];
    $apart = $_POST['user-apart'];
    $floor = $_POST['user-floor'];
    $message = $_POST['message'];
    $pay = $_POST['pay-option'];
    
    $disturb = $_POST['dont-disturb']; // 1 или null
    $disturb = isset($disturb) ? 'НЕТ' : 'ДА';

    $mail_message = '
    <html>
    <head>
        <title>Заявка</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li>Имя:'.$name.'</li>
            <li>Tel:'.$tel.'</li>
            <li>Улица:'.$street.'</li>
            <li>Дом:'.$house.'</li>
            <li>Корпус:'.$housing.'</li>
            <li>Квартира:'.$apart.'</li>
            <li>Этаж:'.$floor.'</li>
            <li>Комментарий:'.$message.'</li>
            <li>Способ оплаты:'.$pay.'</li>
            <li>Нужно ли перезванивать клиенту:'.$disturb.'</li>
        </ul>
    </body>
    </html>';

    $headers = "From: Администратор сайта <http://reyzele.com/burger-landding/>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('vbulka1986@gmail.com', 'Заказ', $mail_message, $headers);

    $data = [];

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    } else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }

    echo json_encode($data);

?>