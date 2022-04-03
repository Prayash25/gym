$(document).ready(function(){
 
 $('select.dropdown')
 .dropdown()
;
$('.max.example .ui.special.dropdown')
 .dropdown({
   useLabels: false,
   maxSelections: 3,
   clearable: true
 });
});
$('.clear.example .button')
  .on('click', function() {
    $('.clear.example .ui.dropdown')
      .dropdown('clear')
    ;
  })
;
// let selected = [];
//  userdata = function() {
 
//   for (let option of document.getElementById('plans').options)
//   {
//       if (option.selected) {
//           selected.push(option.value);
//       }
//   }
 
// }
let discountper=0;
let tl=0;
let discount=0;
function tprice(){
  let fp=0;
  discount= (tl*discountper)/100;
  fp = tl-discount;
  let val=document.getElementById("final");
  if(tl!=0 && discountper!=0){
  // val.style(color: aqua)
   if(discountper==5){
    
    val.innerText= fp;
   }
   else if(discountper==10)
   {
   val.innerText=fp*6;
   }
   else if(discountper==20)
   {
   val.innerText=fp*12;
   }
  }
  else
  {
    val.innerText=0;
  }
  val.style.fontSize="20px";
  val.style.color="black"
  val.style.fontWeight="bolder";
}
function selecttimefunc(val)
{
  discountper=parseInt(val.options[val.selectedIndex].value,10);
  // console.log(discountper);
  tprice();
}

let total= function(sel) {
  var opts = [],
    opt;
    let total=0;
  var len = sel.options.length;
  for (var i = 0; i < len; i++) {
    opt = sel.options[i];

    if (opt.selected) {
      opts.push(opt);
      // console.log(opt.value);
      total+=parseInt(opt.value);
    }
  }
  // console.log(total);
// let fp=0;
tl=total;
tprice();
// console.log(fp);
}
// form validation...
function validation()
{
  var name=document.getElementById('spname').value;
  var age=document.getElementById('spage').value;
  var bg=document.getElementById('spbg').value;
  var num=document.getElementById('spnum').value;
  var email=document.getElementById('spemail').value;
  var nmchk=/^[a-zA-Z]{3,40}$/;
  var agechk=/^[1-70]{1}$/;
  var bgchk=/^[a-zA-Z]{1,2}[+-]{1}$/;
  var numchk=/^[56789]{1}[0-9]{9}$/;
  var emailchk=/^[a-zA-Z0-9_]{2,}[@]{1}[a-z][.]{1}[a-z]{7}$/;
  if (nmchk.test(name)){
    document.getElementById(innm).innerHTML="";
  }
 else{
  document.getElementById(innm).innerHTML=" invalid name";
   return false;
 }
  if (agechk.test(age)){
    document.getElementById(inage).innerHTML=" ";
  }
 else{
  document.getElementById(inage).innerHTML=" unsuitable age";
   return false;
 }
  if (bgchk.test(bg)){
    document.getElementById(inbg).innerHTML=" ";
  }
 else{
  document.getElementById(inbg).innerHTML=" invalid";
   return false;
 }
  if (numchk.test(num)){
    document.getElementById(innum).innerHTML=" ";
  }
 else{
  document.getElementById(innum).innerHTML=" invalid number";
   return false;
 }
  if (emailchk.test(email)){
    document.getElementById(inemail).innerHTML=" ";
  }
 else{
  document.getElementById(inemail).innerHTML=" invalid mail";
   return false;
 }
}










