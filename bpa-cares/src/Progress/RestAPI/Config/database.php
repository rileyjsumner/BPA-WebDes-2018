<?php
    class Database {
        private $host = 'localhost';
        private $db_name = 'bpa_cares';
        private $db_user = 'rileyODS';
        private $db_pass = 'riley4ODS!';

        public $conn;

        public function getConnection() {
            $this->conn = null;

            try {
                $this->conn = new PDO("mysql:host=".$this->host.";dbname=".$this->db_name, $this->db_user, $this->db_pass);
                $this->conn->exec("set names utf8");
            } catch(PDOException $exception) {
                echo "Connection error: ".$exception->getMessage();
            }

            return $this->conn;
        }
    }
?>
