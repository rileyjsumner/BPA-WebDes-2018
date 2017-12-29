<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    include_once '../Config/database.php';
    include_once '../Beans/User.php';

    $database = new Database();
    $db = $database->getConnection();

    $user = new User($db);

    $stmt = $user->read();
    $num = $stmt->rowCount();

    if($num>0) {
        $user_arr = array();
        $user_arr["records"] = array();

        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            extract($row);

            $user_data = array(
                "id"=> $id,
                "member_id"=>$member_id,
                "name"=>$name,
                "state"=>$state,
                "chapter"=>$chapter,
                "email"=>$email,
                "officer_title"=>$officer_title
            );

            array_push($user_arr["records"], $user_data);
        }
        echo json_encode($user_arr);
    } else {
        echo json_encode(array(
            "message"=>"No User Found"
        ));
    }
?>
