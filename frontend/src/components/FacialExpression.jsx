import React, { useRef, useEffect } from "react";
import * as faceapi from "face-api.js";

const FaceDetection = () => {
  const videoRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = "/models";
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);

      startVideo();
    };

    const startVideo = () => {
      navigator.mediaDevices.getUserMedia({ video: {} })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((err) => console.error("Camera error:", err));
    };

    loadModels();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const handleVideoPlay = () => {
    setInterval(async () => {
      const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();

      console.log(detections)
    }, 300);
  };

  return (
    <>
    <div className="container">
    <div className="videoDiv" style={{ position: "relative" }}>
       <video
      className="videoElm"
        ref={videoRef}
        autoPlay
        muted
        onPlay={handleVideoPlay}
        style={{ position: "absolute" }}
      /> 
    </div>
    <button onclick={handleVideoPlay} className="btn">Detect Mood</button>
  </div>
    </>
  );
};

export default FaceDetection;
