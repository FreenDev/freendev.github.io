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
   document.getElementById('forward').addEventListener("click", function() {
      socket.emit('sev', "forward");
   });
   document.getElementById('left').addEventListener("click", function() {
      socket.emit('sev', "left");
   });
   document.getElementById('down').addEventListener("click", function() {
      socket.emit('sev', "down");
   });
   document.getElementById('right').addEventListener("click", function() {
      socket.emit('sev', "right");
   });
}