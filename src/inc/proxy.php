<?php
$url = str_replace("/proxy.php?url=", "", $_SERVER['REQUEST_URI']);
echo file_get_contents($url);
?>
