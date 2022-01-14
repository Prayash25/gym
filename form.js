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
  if(tl!=0 && discountper!=0){
    let fp=0;
    discount= (tl*discountper)/100;
    fp = tl-discount;
    let val=document.getElementById("final");
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
  val.style.fontSize="20px";
  val.style.color="black"
  val.style.fontWeight="bolder";
  }
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

// function calc(){
// console.log(typeOf(total), "total")



  
 

// let chng= document.getElementById("final");
// chng.innerText(fp);

// console.log(selected);






