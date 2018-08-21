var $hoge="";
var $fuga="";
var $piyo10="";
var $piyo1="";
var $hogera="";
var $error_hoge_="";
var $hoge_echo_="";
var $error_att_="";
var $fuga_echo_="";
var $error_10_="";
var $error_1_="";
var $piyo_echo_="";
var $error_hogera_="";
var $hogera_echo_="";
var ary="";

function valid_hoge($hoge) {
	$error_hoge="<div id=\"hoge_valid\"></div>";
	if (!$hoge||!document.getElementsByName('hoge_a').checked) {
		$error_hoge = "<div id=\"hoge_valid\"><p style=\"color:#ff2800;\">"+"入力されていません。"+"</p></div>";
	}else if (($hoge != "a") && ($hoge != "b") && ($hoge != "c")) {
        $error_hoge = "<div id=\"hoge_valid\"><p style=\"color:#ff2800;\">"+"不正なPOSTです。"+"</p></div>";
    }
  return $error_hoge;
}

function valid_hoge_echo($hoge)
{
  $hoge_echo ="";
  $hoge_ans=[/*文字列がキーの連想配列*/];
  $error_message = valid_hoge($hoge);
  if ($error_message==="<div id=\"hoge_valid\"></div>") {
    $hoge_echo = $hoge_ans[$hoge];
  }
    return $hoge_echo;
 }

function valid_fuga($fuga){
  $error_att="<div id=\"att_valid\"></div>";
  $fuga2 =[/*配列の中身*/];
    if ($fuga===[]) {
        $error_att = "<div id=\"att_valid\"><p style=\"color:#ff2800;\">"+"入力されていません。"+"</p></div>";
      }else{
        for ($i = 0; $i <$fuga.length ; $i++) {
          if (((parseInt($fuga[$i])<0||parseInt($fuga[$i])>($fuga2).length-1)||!Number.isInteger(parseInt($fuga[$i]))||!Array.isArray($fuga))&&parseInt($fuga[$i])==$fuga[$i]) {
            $error_att = "<div id=\"att_valid\"><p style=\"color:#ff2800;\">"+"不正なPOSTです。"+"</p></div>";
            break;
          }
        }
      }
      return $error_att;
}

function valid_fuga_echo($fuga)
{
  var $att_echo = "";
  $error_message = valid_fuga($fuga);
  $fuga2 =[/*配列の中身*/];
    var $array= new Array();
  if ($error_message==="<div id=\"att_valid\"></div>") {
  for(var i=0;i<$fuga.length;i++){
      if($att_echo!=="") $att_echo+=",";
      $att_echo+=$fuga2[parseInt($fuga[i])];
  };
  }
      return $att_echo;
}

function valid_piyo10($piyo10)
{
      $error_10="<div id=\"piyo10_valid\"></div>";
        if ((!$piyo10&&$piyo10!=0)||!document.getElementsByName('piyo10_a').checked) {
        $error_10 = "<div id=\"piyo10_valid\"><p style=\"color:#ff2800;\">"+"入力されていません。"+"</p></div>";
    } else if ((parseInt($piyo10)<0||parseInt($piyo10)>10)&&!Number.isInteger($piyo10)) {
        $error_10 = "<div id=\"piyo10_valid\"><p style=\"color:#ff2800;\">"+"不正なPOSTです。"+"</p></div>";
    }
  return $error_10;
}

function valid_piyo1($piyo1)
{
  $error_1="<div id=\"piyo1_valid\"></div>";
        if ((!$piyo1&&$piyo1!=0)||!document.getElementsByName('piyo1_a').checked) {
        $error_1 = "<div id=\"piyo1_valid\"><p style=\"color:#ff2800;\">"+"入力されていません。"+"</p></div>";
    } else if ((parseInt($piyo1)<0||parseInt($piyo1)>9)&&!Number.isInteger($piyo1)) {
        $error_1 = "<div id=\"piyo1_valid\"><p style=\"color:#ff2800;\">"+"不正なPOSTです。"+"</p></div>";
    }
    return $error_1;
}

function valid_piyo_echo($piyo10,$piyo1)
{
  $piyo_echo ="";
  $error_10=valid_piyo10($piyo10);
  $error_1=valid_piyo1($piyo1);
  if (($error_10==="<div id=\"piyo10_valid\"></div>")&&($error_1==="<div id=\"piyo1_valid\"></div>")) {
    $piyo_echo = $piyo10+$piyo1;
  }
  return $piyo_echo;
  }

function valid_hogera($hogera)
{
  $error_hogera="<div id=\"hogera_valid\"></div>";
        if ((!$hogera&&$hogera!=0)||!document.getElementsByName('hogera_a').checked) {
        $error_hogera = "<div id=\"hoge_valid\"><p style=\"color:#ff2800;\">"+"入力されていません。"+"</p></div>";
    } else if ((parseInt($hogera)<0||parseInt($hogera)>9)&&!isNumeric($hogera)) {
        $error_hogera = "<div id=\"hoge_valid\"><p style=\"color:#ff2800;\">"+"不正なPOSTです。"+"</p></div>";
    }
    return $error_hogera;
}

function valid_hogera_echo($hogera)
{
  $hogera_array =[/*配列の中身*/];
  $hogera_echo ="";
  $error_hogera ="";
  $error_message=valid_hogera($hogera);
  if ($error_message === "<div id=\"hogera_valid\"></div>") {
    $hogera_echo = $hogera_array[parseInt($hogera)];
  }
    return $hogera_echo;
}
$(function(){
       $("#hoge input").change(function(){
        $hoge=$("#hoge input:checked").val();
        $('div #hoge_valid').html(valid_hoge($hoge));
        $error_hoge_=valid_hoge($hoge);
        $hoge_echo_=valid_hoge_echo($hoge);
      });

      $("#fuga input").change(function(){
        ary=document.getElementsByName('fuga');
        count=0;
        $fuga=new Array();
        if (ary.length>1) {
          for (var i = 0; i <ary.length; i++) {
            if (ary[i].checked) {
              $fuga.push($(ary[i]).val());
              count+=1;
            }
          }
        }
        $error_att_=valid_fuga($fuga);
        $fuga_echo_=valid_fuga_echo($fuga);
        $('div #att_valid').html(valid_fuga($fuga));
      });

      $("#piyo10").change(function(){
        $piyo10=$("#piyo10 option:selected").val();
        $piyo1=$("#piyo1 option:selected").val();
        $('div #piyo10_valid').html(valid_piyo10($piyo10));
        $error_10_=valid_piyo10($piyo10);
        $piyo_echo_=valid_piyo_echo($piyo10, $piyo1);
      });
      $("#piyo1").change(function(){
        $piyo10=$("#piyo10 option:selected").val();
        $piyo1=$("#piyo1 option:selected").val();
        $('div #piyo1_valid').html(valid_piyo1($piyo1));
        $error_1_=valid_piyo1($piyo1);
        $piyo_echo_=valid_piyo_echo($piyo10, $piyo1);
      });

      $("#hogera input").change(function(){

        $hogera=$("#hogera input:checked").val();
        $('div #hogera_valid').html(valid_hogera($hogera));
        $error_hogera_=valid_hogera($hogera);
        $hogera_echo_=valid_hogera_echo($hogera);
      });
});

