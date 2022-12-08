<?php
    if(isset($_POST['submitButton'])) {
        $nameThing = $_POST['nameThing'];
    }
    $server_name= 'localhost';
    $username= 'root';
    $password= '';
    $database_name= 'to_do_list';
    
    $conn=mysqli_connect($server_name,$username,$password,$database_name);

    if(!$con) {
        echo "connection failed" . mysqli_connect_error();
    }
?>
