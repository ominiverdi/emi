window.onload = function(){
  // alert('aaa')
  createKeyboard();
};
var factor1='';
var factor2='';
var factSwitch='factor1';

var keys = [1,2,3,4,5,6,7,8,9,0];

function createKeyboard () {

  for (var i = 0; i < keys.length; i++) {
    $('.keyboard').append("<span>"+keys[i]+"</span>");
  }
  //symbol X
  $('.keyboard').append("<span>x</span>");
  //symbol cancel
  $('.keyboard').append("<span>canc</span>");
  //symbol =
  $('.keyboard').append("<span>=</span>");
  //click on keyboard actions
  $('.keyboard span').click(keyboardClick);
}

function keyboardClick(e){

    console.log("factors - "+factor1+" - "+factor2);

    console.log($(this).html());
    var key = $(this).html();
    if(key=="="){
      factSwitch='results';
      createResultSet();
      return;
    }
    if(key=="canc"){
      console.log(factor1 + "  " + factor2);
      $('.factor1').html("");
      $('.factor2').html("");
      $('.results').html("");
      factSwitch="factor1";
      factor1='';
      factor2='';
      return;
    }
    if(key=="x"){
      factSwitch=(factSwitch=='factor1')?'factor2':'factor1';
      console.log(factor1 + "  " + factor2);
      return;
    }
    if(factSwitch=='factor2') {
      if(factor2.length>=2){
        return alert("déjà assez");
      }
      $('.factor2').append("<span>"+key+"</span>");
      factor2 = factor2+''+key;
    } else if (factSwitch=='factor1'){
      if(factor1.length>=4){
        return alert("déjà assez");
      }
      $('.factor1').append("<span>"+key+"</span>");
      factor1 = factor1+''+key;
    }
    if(factSwitch=='results') {
      let resultValue = $('.result-query').attr('id');
      $('.result-query').html(key);
      $('.result-error').html(key);

      //
      if(resultValue==key){
        $('.result-query').removeClass('result-error');
        $('.result-query').addClass('result-positive');
        $('.result-query').html(key);
        $('.result-query').removeClass('result-query');
      } else {
        $('.result-query').addClass('result-error');
      }

      //remove class query-border if positive

    }

}

function createResultSet() {
  $('.results').html("");
  console.log("createResultSet: "+factor1+"x"+factor2);
  //count factor1 digits
  var f1d = factor1.length;
  //count factor1 digits
  var f2d = factor2.length;

  console.log(f1d + "  "+ f2d);
  //avoid factors = 0
  if(f1d==0 || f2d == 0)
    return console.log('no go: factors eq 0');

  //calculate factors per line
  var af1d = (""+factor1).split("");
  var af2d = (""+factor2).split("");
  var basedigit = af2d[af2d.length-1];
  var seconddigit = af2d[af2d.length-2];
  console.log("basedigit: "+ basedigit);
  console.log("seconddigit: "+ seconddigit);
  console.log("factor1: "+ factor1);
  line1 = basedigit*factor1;
  line2 = seconddigit*factor1;
  console.log("line1: "+ line1);
  var aline1 = (""+line1).split("");
  var aline2 = (""+line2).split("");
  console.log(aline1);
  // aline1.reverse();
  // console.log(aline1);
  //create empty buttons
  for (var i = 0; i < aline1.length; i++) {
    $('.results').append("<span id='"+aline1[i]+"'>?</span>");
  }
  $('.results').append("<br>");
  if(seconddigit){
    for (var i = 0; i < aline2.length; i++) {
      $('.results').append("<span id='"+aline2[i]+"'>?</span>");
    }
    $('.results').append("<span class='result-empty'>&nbsp;</span>");
  }
  $('.results span').click(checkResultClick);
}

function checkResultClick(e){
  // console.log(e);

  console.log('result click: '+$(this).attr('id'));
  //clean other buttons clicked
  $('.result-query').removeClass('result-query');
  //add the query class to target events
  $(this).addClass('result-query');
  //show the value
  // $(this).html($(this).attr('id'));
}
