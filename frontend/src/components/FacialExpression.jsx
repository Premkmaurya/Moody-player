import React, { useRef, useEffect } from "react";
import * as faceapi from "face-api.js";

// const FaceDetection = () => {
//   const videoRef = useRef();
//   const canvasRef = useRef();

//   useEffect(() => {
//     const loadModels = async () => {
//       const MODEL_URL = "/models";
//       await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
//       await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);

//       startVideo();
//     };

//     const startVideo = () => {
//       navigator.mediaDevices.getUserMedia({ video: {} })
//         .then((stream) => {
//           videoRef.current.srcObject = stream;
//         })
//         .catch((err) => console.error("Camera error:", err));
//     };

//     loadModels();

//     return () => {
//       if (videoRef.current && videoRef.current.srcObject) {
//         videoRef.current.srcObject.getTracks().forEach(track => track.stop());
//       }
//     };
//   }, []);

//   const handleVideoPlay = () => {
//     const canvas = canvasRef.current;
//     const video = videoRef.current;

//     const displaySize = {
//       width: video.videoWidth,
//       height: video.videoHeight
//     };

//     faceapi.matchDimensions(canvas, displaySize);

//     setInterval(async () => {
//       const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
//         .withFaceExpressions();

//       const resized = faceapi.resizeResults(detections, displaySize);
//       canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

//       faceapi.draw.drawDetections(canvas, resized);
//       faceapi.draw.drawFaceExpressions(canvas, resized);

//       if (resized[0]) {
//         const expressions = resized[0].expressions;
//         const maxExp = Object.entries(expressions).reduce((max, curr) =>
//           curr[1] > max[1] ? curr : max
//         );
//         console.log("Detected Emotion:", maxExp[0]);
//       }
//     }, 300);
//   };

  return (
    <div style={{ position: "relative" }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        width="720"
        height="560"
        onPlay={handleVideoPlay}
        style={{ position: "absolute" }}
      />
      <canvas
        ref={canvasRef}
        width="720"
        height="560"
        style={{ position: "absolute" }}
      />
    </div>
  );

export default FaceDetection;
