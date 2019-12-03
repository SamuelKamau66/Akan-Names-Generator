function submit(){

   var month=document.getElementById("month").value;
   var mm=parseInt(month);
   var day=document.getElementById("day").value;
   var dd=parseInt(day);
   var year=document.getElementById("year").value;
   var yy=parseInt(year);
   var cc=(yy-1)/100+1;
