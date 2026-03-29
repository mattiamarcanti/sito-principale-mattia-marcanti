<?php
declare(strict_types=1);

$name    = filter_input(INPUT_GET, 'name',    FILTER_SANITIZE_SPECIAL_CHARS) ?? '';
$surname = filter_input(INPUT_GET, 'surname', FILTER_SANITIZE_SPECIAL_CHARS) ?? '';
$email   = filter_input(INPUT_GET, 'email',   FILTER_SANITIZE_EMAIL)         ?? '';
$message = filter_input(INPUT_GET, 'message', FILTER_SANITIZE_SPECIAL_CHARS) ?? '';
$date    = date('Y-m-d');

if (!$name || !$surname || !filter_var($email, FILTER_VALIDATE_EMAIL) || !$message) {
    http_response_code(400);
    exit('Invalid input');
}

$dsn = 'mysql:host=89.46.111.236;dbname=Sql1639727_1;charset=utf8mb4';
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, 'Sql1639727', 'Morgana10!', $options);

    $stmt = $pdo->prepare(
        'INSERT INTO messaggi_sito (nome, cognome, email, messaggio, data)
         VALUES (:name, :surname, :email, :message, :date)'
    );
    $stmt->execute([
        ':name'    => $name,
        ':surname' => $surname,
        ':email'   => $email,
        ':message' => $message,
        ':date'    => $date,
    ]);

    http_response_code(200);
} catch (PDOException $e) {
    http_response_code(500);
    exit('Database error');
}
