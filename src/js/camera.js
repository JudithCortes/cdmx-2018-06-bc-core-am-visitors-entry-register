var player = document.getElementById('player');
var snapshotCanvas = document.getElementById('snapshot');
var captureButton = document.getElementById('capture');
var canvasToPng = document.getElementById('img-type');
var videoTracks;

var handleSuccess = function(stream) {
  // Attach the video stream to the video element and autoplay.
  player.srcObject = stream;
  videoTracks = stream.getVideoTracks();
};

captureButton.addEventListener('click', function() {
  var context = snapshot.getContext('2d');
  console.log(snapshotCanvas);
  // Draw the video frame to the canvas.
  context.drawImage(player, 0, 0, snapshotCanvas.width, snapshotCanvas.height);
  console.log(snapshotCanvas);
  let imagekeeper = snapshotCanvas;
  console.log(imagekeeper);
  //guardar canvas a img png
  var datos = snapshotCanvas.toDataURL();
  document.getElementById('img-type').src = datos;
  console.log(datos);
  //enviar la img en base 64 a Fibrebase, usar la función que transformará la base 64 a una png visible

  // Stop all video streams.
  videoTracks.forEach(function(track) {
    track.stop();
  });
});

navigator.mediaDevices.getUserMedia({ video: true }).then(handleSuccess);
