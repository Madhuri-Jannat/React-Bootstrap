<?php
include_once("dbconfig.php");

$sql=$db->query("SELECT * FROM users");



// echo "<pre>";
// print_r($rawData);
$records = [];
while($raw = $sql->fetch_assoc())
{
    $records[] =$raw ;

}


// echo "<pre>";
echo json_encode($records);

?>