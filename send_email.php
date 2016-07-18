<?php
    $email_to = "jane.mitchell@lyndalecare.co.uk";
    $email_subject = "Lyndale Website Email";
     
    $msg_Name = $_POST['msgName']; // required
    $msg_msg = $_POST['msgTextArea']; // required
    $msg_email = $_POST['msgEmailAddress']; // not required
    $msg_contactnumber = $_POST['msgContactNumber']; // not required   
     
    $email_message ."First Name: ".$msg_Name."\n";
    $email_message .= "Message: ".$msg_msg."\n";
    $email_message .= "Email: ".$msg_email."\n";
    $email_message .= "Contact Number: ".$msg_contactnumber."\n";
     
    $headers = "From:" . $msg_email;
    mail($email_to, $email_subject, $email_message, $headers); 


?>
 