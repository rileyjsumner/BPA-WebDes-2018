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

    $user->id = $data->id;
    $user->member_id = $data->member_id;
    $user->name = $data->name;
    $user->state = $data->state;
    $user->chapter = $data->chapter;
    $user->email = $data->email;
    $user->password = $data->password;
    $user->officer_title = $data->officer_title;

    if($user->create()) {
        echo '{';
            echo '"message":"User Was Created"';
        echo '}';
    }
    else {
        echo '{';
            echo '"message":"Unable to Register User"';
        echo '}';
    }
?>
