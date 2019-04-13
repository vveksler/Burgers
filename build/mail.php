<?php

    $name = $_POST['user-name'];
    $tel = $_POST['user-tel'];
    $street = $_POST['user-street'];
    $house = $_POST['user-house'];
    $housing = $_POST['user-part'];
    $apart = $_POST['user-apart'];
    $floor = $_POST['user-floor'];
    $message = $_POST['user-message'];
    $pay = $_POST['payment'];
    
    $disturb = $_POST['callback']; // 1 или null
    $disturb = isset($disturb) ? 'НЕТ' : 'ДА';

    $mail_message = '
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
        </ul>';

    $from = 'Order';
    $to = '<vbulka1986@gmail.com>';
    $headers .= "From: reyzele.com <vbulka1986@gmail.com>\r\n"; 
    $headers .= "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";

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

