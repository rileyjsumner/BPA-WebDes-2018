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

        public function __construct(PDO $db) {
            $this->conn = $db;
        }

        function read() {
            $query = "SELECT * FROM users";
            $stmt = $this->conn->prepare($query);

            $stmt->execute();

            return $stmt;
        }
        function create() {
            $query = "INSERT INTO ".$this->table_name." SET
                id=:id,
                member_id=:member_id,
                name=:name,
                state=:state,
                chapter=:chapter,
                email=:email,
                officer_title=:officer_title";
            $stmt = $this->conn->prepare($query);

            $this->id=htmlspecialchars(strip_tags($this->id));
            $this->member_id=htmlspecialchars(strip_tags($this->member_id));
            $this->name=htmlspecialchars(strip_tags($this->name));
            $this->state=htmlspecialchars(strip_tags($this->state));
            $this->chapter=htmlspecialchars(strip_tags($this->chapter));
            $this->email=htmlspecialchars(strip_tags($this->email));
            $this->officer_title=htmlspecialchars(strip_tags($this->officer_title));

            $stmt->bindParam(":id", $this->id);
            $stmt->bindParam(":member_id", $this->member_id);
            $stmt->bindParam(":name", $this->name);
            $stmt->bindParam(":state", $this->state);
            $stmt->bindParam(":chapter", $this->chapter);
            $stmt->bindParam(":email", $this->email);
            $stmt->bindParam(":officer_title", $this->officer_title);

            return $stmt->execute() ? true:false;
        }
        function readOne() {
            $query = "SELECT * FROM users WHERE id = ?";

            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(1, $this->id);

            $stmt->execute();

            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            $this->id = $row['id'];
            $this->member_id = $row['member_id'];
            $this->name = $row['name'];
            $this->state = $row['state'];
            $this->chapter = $row['chapter'];
            $this->email = $row['email'];
            $this->officer_title = $row['officer_title'];
        }
        function update() {
            $query = "UPDATE ".$this->table_name." SET
                    member_id=:member_id,
                    name=:name,
                    state=:state,
                    chapter=:chapter,
                    email=:email,
                    officer_title=:officer_title
                WHERE id = :id";
            $stmt = $this->conn->prepare($query);

            $this->member_id=htmlspecialchars(strip_tags($this->member_id));
            $this->name=htmlspecialchars(strip_tags($this->name));
            $this->state=htmlspecialchars(strip_tags($this->state));
            $this->chapter=htmlspecialchars(strip_tags($this->chapter));
            $this->email=htmlspecialchars(strip_tags($this->email));
            $this->officer_title=htmlspecialchars(strip_tags($this->officer_title));

            $stmt->bindParam(":member_id", $this->member_id);
            $stmt->bindParam(":name", $this->name);
            $stmt->bindParam(":state", $this->state);
            $stmt->bindParam(":chapter", $this->chapter);
            $stmt->bindParam(":email", $this->email);
            $stmt->bindParam(":officer_title", $this->officer_title);
            $stmt->bindParam(":id", $this->id);

            return $stmt->execute() ? true:false;
        }
        function delete() {
            $query = "DELETE FROM ".$this->table_name." WHERE id = ?";

            $stmt = $this->conn->prepare($query);
            $this->id=htmlspecialchars(strip_tags($this->id));

            $stmt->bindParam(1, $this->id);

            return $stmt->execute() ? true:false;
        }
    }
?>
