<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];
$sms = $_POST['sms'];
$email = $_POST['email'];
$region = $_POST['region'];
$car = $_POST['car'];
$my_car = $_POST['my_car'];
$date = $_POST['e_date'];

// echo '변수값 출력 테스트';
// echo $name;

// 데이터베이스 연결하기 절차지향 스타일
$mysql_host = 'localhost';
$mysql_user = 'root';
$mysql_password = '1234';
$mysql_db = 'product';

$conn = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $mysql_db);

// 데이터베이스 연결 확인
if(!$conn){
  die('연결실패 : ' . mysqli_connect_error());
}

// 데이터베이스 연결 성공이면 아래 쿼리문 실행
$query = "insert into test_drive (name, phone, sms, email, region, s_car, my_car, e_date)values('$name', '$phone', '$sms', '$email', '$region', '$car', '$my_car', '$date')";

$result = mysqli_query($conn, $query);

echo'입력완료';

?>