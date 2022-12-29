<?php

header('Content-Type: text/html; charset=utf-8');
date_default_timezone_set('America/Sao_Paulo');
setlocale(LC_TIME, 'pt_BR', 'pt_BR.utf-8', 'pt_BR.utf-8', 'portuguese');

class criptografiaExterna{

  public static function encriptacao_encode($uit) {
    $string = trim(strval(strtolower($uit)));

    $chavesCodigo = array(

      0 => array(
        "indice" => "a",
        "codigo" => "99Z73"
      ),

      1 => array(
        "indice" => "b",
        "codigo" => "ARC75"
      ),

      2 => array(
        "indice" => "c",
        "codigo" => "PLABJ"
      ),

      3 => array(
        "indice" => "d",
        "codigo" => "39546"
      ),

      4 => array(
        "indice" => "e",
        "codigo" => "76V51"
      ),

      5 => array(
        "indice" => "f",
        "codigo" => "7ED01"
      ),

      6 => array(
        "indice" => "g",
        "codigo" => "EXY7O"
      ),

      7 => array(
        "indice" => "h",
        "codigo" => "XX076"
      ),

      8 => array(
        "indice" => "i",
        "codigo" => "L75SN"
      ),

      9 => array(
        "indice" => "j",
        "codigo" => "4C80M"
      ),
  
      10 => array(
        "indice" => "k",
        "codigo" => "4YY67"
      ),

      11 => array(
        "indice" => "l",
        "codigo" => "D09AH"
      ),

      12 => array(
        "indice" => "m",
        "codigo" => "KC690"
      ),

      13 => array(
        "indice" => "n",
        "codigo" => "PQP01"
      ),

      14 => array(
        "indice" => "o",
        "codigo" => "7546Q"
      ),

      15 => array(
        "indice" => "p",
        "codigo" => "G43I6"
      ),

      16 => array(
        "indice" => "q",
        "codigo" => "PAOLZ"
      ),

      17 => array(
        "indice" => "r",
        "codigo" => "MN81A"
      ),  

      18 => array(
        "indice" => "s",
        "codigo" => "FIA4A"
      ),

      19 => array(
        "indice" => "t",
        "codigo" => "TAIWA"
      ),

      20 => array(
        "indice" => "u",
        "codigo" => "C0BAS"
      ),

      21 => array(
        "indice" => "v",
        "codigo" => "PXS87"
      ),

      22 => array(
        "indice" => "w",
        "codigo" => "N1G84"
      ),

      23 => array(
        "indice" => "x",
        "codigo" => "S3CH1"
      ),

      24 => array(
        "indice" => "y",
        "codigo" => "9GPP9"
      ),

      25 => array(
        "indice" => "z",
        "codigo" => "S41Y5"
      ),

      26 => array(
        "indice" => "0",
        "codigo" => "159AR"
      ),  

      27 => array(
        "indice" => "1",
        "codigo" => "RAZAY"
      ),

      28 => array(
        "indice" => "2",
        "codigo" => "KKLZE"
      ),

      29 => array(
        "indice" => "3",
        "codigo" => "SHIF1"
      ),

      30 => array(
        "indice" => "4",
        "codigo" => "BOXAP"
      ),

      31 => array(
        "indice" => "5",
        "codigo" => "KKX40"
      ),

      32 => array(
        "indice" => "6",
        "codigo" => "E1590"
      ),

      33 => array(
        "indice" => "7",
        "codigo" => "59HAN"
      ),

      34 => array(
        "indice" => "8",
        "codigo" => "XK658"
      ),

      35 => array(
        "indice" => "9",
        "codigo" => "O840O"
      ),

      36 => array(
        "indice" => ".",
        "codigo" => "0B949"
      ),

      37 => array(
        "indice" => ",",
        "codigo" => "18P3I"
      ),
      
      38 => array(
        "indice" => "?",
        "codigo" => "J69U9"
      ),

      39 => array(
        "indice" => "/",
        "codigo" => "X71VB"
      ),

      40 => array(
        "indice" => " ",
        "codigo" => "NM017"
      ),

      41 => array(
        "indice" => "'",
        "codigo" => "PT502"
      ),

      42 => array(
        "indice" => ":",
        "codigo" => "K96GB"
      ),

      43 => array(
        "indice" => ";",
        "codigo" => "K1KK3"
      ),

      44 => array(
        "indice" => "ç",
        "codigo" => "Q4L6B"
      ),

      45 => array(
        "indice" => "_",
        "codigo" => "U29TT"
      ),

      46 => array(
        "indice" => "-",
        "codigo" => "XOX1N"
      ),

      47 => array(
        "indice" => "@",
        "codigo" => "E48B0"
      )

    );
    
    $saidaString = "";

    for($i = 0; $i < strlen($string); $i++){
      for($j = 0; $j < count($chavesCodigo); $j++){
        if($chavesCodigo[$j]["indice"] == $string[$i]){
          $saidaString .= $chavesCodigo[$j]["codigo"];
        }
      }
    }
    
    return $saidaString;
  }

  public static function encriptacao_decode($val){
    $string = trim(strval($val));
    
    $chavesCodigo = array(
      "99Z73" => "a",
      "ARC75" => "b", 
      "PLABJ" => "c", 
      "39546" => "d", 
      "76V51" => "e", 
      "7ED01" => "f", 
      "EXY7O" => "g", 
      "XX076" => "h", 
      "L75SN" => "i", 
      "4C80M" => "j", 
      "4YY67" => "k", 
      "D09AH" => "l", 
      "KC690" => "m", 
      "PQP01" => "n", 
      "7546Q" => "o", 
      "G43I6" => "p", 
      "PAOLZ" => "q", 
      "MN81A" => "r", 
      "FIA4A" => "s", 
      "TAIWA" => "t", 
      "C0BAS" => "u", 
      "PXS87" => "v", 
      "N1G84" => "w", 
      "S3CH1" => "x", 
      "9GPP9" => "y", 
      "S41Y5" => "z", 
      "159AR" => "0",
      "RAZAY" => "1", 
      "KKLZE" => "2", 
      "SHIF1" => "3", 
      "BOXAP" => "4", 
      "KKX40" => "5", 
      "E1590" => "6", 
      "59HAN" => "7", 
      "XK658" => "8", 
      "O840O" => "9",
      "0B949" => ".",
      "18P3I" => ",",
      "J69U9" => "?",
      "X71VB" => "/",
      "NM017" => " ",
      "PT502" => "'",
      "K96GB" => ":",
      "K1KK3" => ";",
      "Q4L6B" => "ç",
      "U29TT" => "_",
      "XOX1N" => "-",
      "E48B0" => "@"
    );
    
    $nmrCaracE = 5;
    $saidaString = "";
    
    for ($i = 0; $i <= strlen($string); $i++) {
      if(($i % $nmrCaracE) == 0 && $i !== 0){
        $posicao1 = strval($string[($i - $nmrCaracE)]);
        $posicao2 = strval($string[($i - $nmrCaracE + 1)]);
        $posicao3 = strval($string[($i - $nmrCaracE + 2)]);
        $posicao4 = strval($string[($i - $nmrCaracE + 3)]);
        $posicao5 = strval($string[($i - $nmrCaracE + 4)]);
        
        $strPosicao = $posicao1 . $posicao2 . $posicao3 . $posicao4 . $posicao5;
        
        foreach($chavesCodigo as $key => $value){
          if($key == $strPosicao){
            $saidaString .= $value;
          }
        }
      }
    }
    
    return $saidaString;
  }
}

class BD{

  static $conexao = '';

  function __construct(){
    self::conectarAoBD();
  }

  private static function conectarAoBD(){
    
    $config['host'] = 'localhost';
    $config['dbname'] = 'teste_formulario_mensagem';
    $config['dbuser'] = 'root';
    $config['dbpass'] = "";
    $config['charset'] = 'utf8mb4';
    
    try{
      self::$conexao = new PDO('mysql:host='.$config['host'].';dbname='.$config['dbname'].';charset='.$config['charset'],$config['dbuser'],$config['dbpass']);
      self::$conexao -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      
      return (self::$conexao) ? self::$conexao : false;
    }catch(Exception $e){
      // echo 'Problema na conexao com o Banco de Dados '. $e -> getMessage();
    }
  }

  public static function criarNovaMensagem($dadosMensagem){
    try{

      $nome = $dadosMensagem['nome'];
      $nome = trim($nome);
      $nome = strtr($nome, 0, 30);
      $nome = ucwords($nome);

      $email = $dadosMensagem['email'];
      $email = trim($email);
      $email = strtr($email, 0, 50);
      $email = strtolower($email);
      
      if(filter_var($email, FILTER_VALIDATE_EMAIL)){
        $validacaoEmail = TRUE;
      }else{
        $validacaoEmail = FALSE;
      }

      $mensagem = $dadosMensagem['mensagem'];
      $mensagem = trim($mensagem);
      $mensagem = strtr($mensagem, 0, 200);

      if($validacaoEmail){

        $requisicao = self::conectarAoBD() -> prepare("INSERT INTO mensagens (nome_mensagem, email_mensagem, mensagem) VALUES (:nome_mensagem, :email_mensagem, :mensagem)");
        $requisicao -> bindValue(":nome_mensagem", $nome);
        $requisicao -> bindValue(":email_mensagem", $email);
        $requisicao -> bindValue(":mensagem", $mensagem);
        $requisicao -> execute();

        return true;
      }
      
    }catch(Exception $e){
      // echo 'Ocorreu um erro no envio dos dados para o Banco de Dados ' . $e -> getMessage();
      return false;
    }
  }

  public static function verificarExistenciaMaximoMensagens($email){
    
    $email = strtolower($email);

    try{
      
      $requisicao = self::conectarAoBD() -> prepare("SELECT count(*) AS quantidade_mensagens FROM mensagens WHERE email_mensagem = :email_mensagem AND status_mensagem = 1");
      $requisicao -> bindValue(':email_mensagem', $email);
      $requisicao -> execute();

      $quantidadeMensagens = null;

      foreach($requisicao as $key => $value){
        $quantidadeMensagens = htmlentities($value['quantidade_mensagens']);
      }

      if($quantidadeMensagens >= 5){
        return true;
      }else if(empty($quantidadeMensagens)){
        return false;
      }else{
        return false;
      }

    }catch(Exception $e){
      // echo '' . $e -> getMessage();
    }
  }
}

$abc = new BD();

$retorno = array();

if($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST)){
  
  $nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_SPECIAL_CHARS);
  $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_SPECIAL_CHARS);
  
  if(filter_var($email, FILTER_VALIDATE_EMAIL)){
    $retorno['email'] = true;
  }else{
    $retorno['email'] = false;
  }
  
  $mensagem = filter_input(INPUT_POST, 'mensagem', FILTER_SANITIZE_SPECIAL_CHARS);
  $chaveAPI = filter_input(INPUT_POST, 'chaveAPI', FILTER_SANITIZE_SPECIAL_CHARS);

  if(strtoupper(criptografiaExterna::encriptacao_decode($chaveAPI)) == '96474J?HH.-HMB-ABDHA54-H-'){
    $retorno['chaveAPI'] = true;
  }else{
    $retorno['chaveAPI'] = false;
  }

  if($retorno['email'] && $retorno['chaveAPI']){

    if(!BD::verificarExistenciaMaximoMensagens($email)){
      $dadosMensagem = array(
        'nome' => $nome,
        'email' => $email,
        'mensagem' => $mensagem
      );
      
      if(BD::criarNovaMensagem($dadosMensagem)){
        $retorno['situacao'] = true;
      }else{
        $retorno['situacao'] = false;
      }


    }else{
      $retorno['situacao'] = 'excesso';
    }


  }else{
    $retorno['situacao'] = false;
  }

}else{
  $retorno['erro'] = "Houve um erro no recebimento das informações";
  $retorno['situacao'] = false;
}

$retorno;

echo json_encode($retorno);

?>