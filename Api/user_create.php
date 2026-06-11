<?php
include_once("dbconfig.php");
$data= json_decode(file_get_contents('php://input'),true);


$name= $data['fname'];
$Gender= $data['gender'];
$Address= $data['address'];
$District= $data['district'];


$db->query("INSERT INTO users (id,name,gender,address,district) VALUES(NULL,'$name','$Gender','$Address','$District')");


if($db->affected_rows>0){
    echo json_encode(["message"=> "user created successfully"]);
}else{
    echo json_encode(["message" => "something wrong"]);
}