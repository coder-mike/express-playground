(function() {
  var socket = io.connect();
  // Reload when server restarts
  socket.on('disconnect', function() {
    console.log("Socket disconnected - reloading page");
    setTimeout(function() {
      window.location.reload();
    }, 200);
  });
})();