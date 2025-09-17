<?php
require 'config.php';
$projects = $pdo->query('SELECT * FROM projects')->fetchAll();

?>
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>My Portfolio</title></head>
<body>
  <h1>Projects</h1>
  <?php foreach ($projects as $p): ?>
    <article>
      <h2><?= htmlspecialchars($p['title']) ?></h2>
      <p><?= htmlspecialchars($p['description']) ?></p>
    </article>
  <?php endforeach; ?>
</body>
</html>
