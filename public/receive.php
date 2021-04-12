<?php
if(isset($_POST['submit'])) {
$name = $_POST['full-name'];
$subject = 'Ati primit un nou mesaj de la best-tkd.ro !';
$message = $_POST['message'];
$mailFrom = $_POST['email'];
 

$mailTo = "alexie.popescu2019@yahoo.com";
$headers = "Form: ".$mailFrom;
$headers .= "MIME=Version: 1.0" . "\r\n";
$txt = "Ati primit un email de la ".$name.".\n\n".$message;
// Sending email
mail($mailTo, $subject, $txt,  $headers)
}
?>