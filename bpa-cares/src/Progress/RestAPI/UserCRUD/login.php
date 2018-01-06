<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once '../Config/database.php';
    include_once '../Beans/User.php';

    $database = new Database();
    $db = $database->getConnection();

    $user = new User($db);

    $data = json_decode(file_get_contents("php://input"));

    $user->email = $data->email;
    $user->password = $data->password;

    /*if($user->login()) {
        echo '{';
            echo '"message": "User was Logged In"';
        echo '}';
    } else {
        echo '{';
            echo '"message": "Login Failed"';
        echo '}';
    }*/
    echo '{"message":'.$user->login'}';
?>
