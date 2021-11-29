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
// let total=0;
let discount=0;
function selecttimefunc(val)
{
  discountper=parseInt(val.options[val.selectedIndex].value,10);
  console.log(discountper);
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
      console.log(opt.value);
      total+=parseInt(opt.value);
    }
  }
  console.log(total);
  discount= (total*discountper)/100;
let fp=0;
fp=total-discount;
console.log(fp);
let val=document.getElementById("final");
// val.style(color: aqua)
val.innerText= fp;
val.style.fontSize="20px";
val.style.color="black"
val.style.fontWeight="bolder";
}


// function calc(){
// console.log(typeOf(total), "total")




// let chng= document.getElementById("final");
// chng.innerText(fp);

// console.log(selected);






