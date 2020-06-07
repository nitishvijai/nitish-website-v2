<?php

if (isset($_POST['submit'])) {
    $name = $_POST['fullname'];
    $sender = $_POST['mailadd'];
    $message = $_POST['subject'];

    $recipient = "nitishv@umich.edu";
    $headers = "New Message From Website - ".$sender;
    $txt = "There's a new message from your website from ".$sender.".\n\n".$message;

    mail($recipient, "New Message From Website", $txt, $headers);
}