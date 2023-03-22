import React, { useEffect, useRef } from 'react';

function getUserMedia(constraints, successCallback, errorCallback) {
  if (!navigator.mediaDevices) {
    console.log('getUserMedia is not supported');
    return;
  }

  navigator.mediaDevices.getUserMedia(constraints)
    .then(successCallback)
    .catch(errorCallback);
}

function MediaCapture() {
  const videoRef = useRef(null);

  useEffect(() => {
    getUserMedia({ video: true, audio: true },
      (stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      },
      (error) => {
        console.error('Error accessing media devices.', error);
      }
    );
  }, []);

  return (
    <video ref={videoRef} autoPlay muted />
  );
}

export default MediaCapture;
