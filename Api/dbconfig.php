<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json; charset=UTF-8");


$host = "localhost";
$user = "root";
$pass = "";
$dbname = "react_crud";
$db = new mysqli($host,$user,$pass,$dbname);