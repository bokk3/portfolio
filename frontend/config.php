<?php
$pdo = new PDO(
  'mysql:host=127.0.0.1;dbname=portfolio_db;charset=utf8mb4',
  'pi_user',
  'strong_password',
  [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
);
