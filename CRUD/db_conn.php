<?php
$sname = 'mysql-3df37299-insanhindfas-3f9c.l.aivencloud.com';
$unmae = 'avnadmin';  
$password = 'AVNS_Pv2R7nkvEVHMwtSpy57';  
$db_name = 'defaultdb'; 


$conn = mysqli_connect($sname, $unmae, $password, $db_name, 13415);

if (!$conn) {
    echo "Connection failed!";
    exit();
}
?>
