var socket;
window.onload=function(){
   socket=io.connect("https://488e-136-169-214-0.eu.ngrok.io");
   socket.on('connect', function() {
      socket.emit('cev', 'Android');
      console.log("Соединение есть!");
   });
   socket.on('disconnect', function() {
      console.log('Соединение пропало!');
   });
   document.getElementById("forward").addEventListener("touchstart", function() {
      socket.emit('sev', "forward_press");
   });
   document.getElementById("forward").addEventListener("touchend", function() {
      socket.emit('sev', "forward_unpress");
   });
   document.getElementById("left").addEventListener("touchstart", function() {
      socket.emit('sev', "left_press");
   });
   document.getElementById("left").addEventListener("touchend", function() {
      socket.emit('sev', "left_unpress");
   });
   document.getElementById("right").addEventListener("touchstart", function() {
      socket.emit('sev', "right_press");
   });
   document.getElementById("right").addEventListener("touchend", function() {
      socket.emit('sev', "right_unpress");
   });
   document.getElementById("down").addEventListener("touchstart", function() {
      socket.emit('sev', "down_press");
   });
   document.getElementById("down").addEventListener("touchend", function() {
      socket.emit('sev', "down_unpress");
   });
}