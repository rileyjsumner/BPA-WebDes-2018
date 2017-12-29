<?php
    class User {
        private $conn;
        private $table_name = "users";

        public $id;
        public $member_id;
        public $name;
        public $state;
        public $chapter;
        public $email;
        public $officer_title;

        public function __construct($db) {
            $this->conn = $db;
        }

        function read() {
            $query = "SELECT * FROM users";

            $stmt = $this->conn->prepare($query);

            $stmt->execute();

            return $stmt;
        }
        function create() {
            
        }
    }
?>
