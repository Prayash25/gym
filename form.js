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

