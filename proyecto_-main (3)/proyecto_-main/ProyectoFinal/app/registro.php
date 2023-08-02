<?php
//inclucion de conexion
include '../app/conexion.php';
// validacion de variables
$email = $_GET['email'];
$password = $_GET['password'];
$nombre = $_GET['nombre'];
$apellido = $_GET['apellido'];
$tipoDocumento = $_GET['tipoDocumento'];
$Ciudad= $_GET['ciudad'];
$telefono=$_GET['telefono'];
$direccion = $_GET['direccion'];
$genero =$_GET['genero'];
$documento =$_GET['documento'];

$sql = "SELECT * FROM cliente WHERE cliCorreo='$email' and cliContraseña='$password' ";

//print_r($sql);die;
$result = $mysqli->query($sql);
//print_r($result->num_rows);
if ($result->num_rows > 0) {// se cambia == 0
    $mensaje = 'Consulta no válida: ' . mysqli_error($mysqli) . "\n";
    // header("Location: ../index.php");
    
}else{
    $prueba = "insert into cliente values(0,'$nombre','$apellido','$telefono','$email','$direccion', 1 ,'$tipoDocumento',
    '$documento','$genero','$password')";
    $result = $mysqli->query($prueba);
    print_r('ok exito');
}
while ($rows = mysqli_fetch_all($result)) {
    echo json_encode($rows);
}
?>