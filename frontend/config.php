<?php
try {
  $pdo = new PDO(
    'mysql:host=127.0.0.1;dbname=portfolio_db;charset=utf8mb4',
    'pi_user',
    'strong_password',
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
  );
} catch (PDOException $e) {
  error_log('Database connection failed: ' . $e->getMessage());
  exit('Database connection error.');
}
