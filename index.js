
var videoElement = document.querySelector('video');
var constraints = {
  audio: true,
  video: true
};

navigator.mediaDevices.getUserMedia(constraints)
  .then(gotStream).catch(handleError);

  function gotStream (stream) {
    window.stream = stream; // make stream available to console
    videoElement.srcObject = stream;
  }

  function handleError (error) {
    console.log('Error: ', error);
  }
