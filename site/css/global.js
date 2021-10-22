$(document).ready(function(){

$('.read').hide();
$('.more').mouseover(function(){
$('.read').show('slow');

});

$('img').mouseover(function(){
$(this).fadeTo(500,0.3);
$(this).fadeTo(500,1);

});
$("img").simpletooltip();

});
function do_shurt(){
  var loading = '<img align="center" src="images/loading.gif" alt="Loading ..." title="Loading ..." border="0" />';
  $('#result').html(loading).show('slow');
  var link = $("input#link").val();
  var dataString = 'link='+link;
	$.ajax({
	  type: "POST",
	  url: "add_link.php",
	  data: dataString,
	  success: function(msg) {
		$('#result').html(msg)
		//.slideDown('slow');
		//$("#loading").hide();	
	  }
	});
}
$(document).ready(function(){ 
	  $('.ipt').each( function () {
	    $(this).val($(this).attr('defaultVal'));
    $(this).css({color:'#CCC'});
      });
	 
	  $('.ipt').focus(function(){
	    if ( $(this).val() == $(this).attr('defaultVal') ){
      $(this).val('');
	      $(this).css({color:'#005599'});
    }
   });
 $('.ipt').blur(function(){
	    if ($(this).val() == '' ){
      $(this).val($(this).attr('defaultVal'));
	      $(this).css({color:'#CCC'});
    }
   });
 
});