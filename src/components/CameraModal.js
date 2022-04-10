import React, { useCallback, useRef } from "react";
import "./Camera.css";
import Webcam from "react-webcam";

const CameraModal = () => {
  const videoConstraints = {
    width: 600,
    height: 350,
    facingMode: "user",
  };

  const webcamRef = useRef(null);
  const capture = useCallback(()=>{
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
  },[webcamRef]);

  return (
    <div>
      <div className="camera">
        <Webcam
          ref={webcamRef}
          audio={false}
          height={350}
          screenshotFormat="image/jpeg"
          width={600}
          videoConstraints={videoConstraints}
        />
      </div>
      <div className="button" onClick={capture}>
        <div className="photo-button">
          <div className="circle"></div>
          <div className="ring"></div>
        </div>
      </div>
    </div>
  );
};

export default CameraModal;
