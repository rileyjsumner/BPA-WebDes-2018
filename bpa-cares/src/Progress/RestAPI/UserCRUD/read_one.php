<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET");
    header("Access-Control-Allow-Credentials: true");
    header('Content-Type: application/json');

    include_once '../Config/database.php';
    include_once '../Beans/User.php';

    $database = new Database();
    $db = $database->getConnection();

    $user = new User($db);

    $user->id = isset($_GET['id']) ? $_GET['id'] : die();

    $user->readOne();

    $user_arr = array(
        "id"=> $user->id,
        "member_id"=>$user->member_id,
        "name"=>$user->name,
        "state"=>$user->state,
        "chapter"=>$user->chapter,
        "email"=>$user->email,
        "officer_title"=>$user->officer_title
    );

    print_r(json_encode($user_arr));
?>
