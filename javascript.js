const cameraButton = document.getElementById('cameraButton');
const videoElement = document.getElementById('videoElement');

function openCamera() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
    
      videoElement.srcObject = stream;
    })
    .catch(function (error) {
      console.log('Kamera erişimi reddedildi: ', error);
    });
}
cameraButton.addEventListener('click', openCamera);

