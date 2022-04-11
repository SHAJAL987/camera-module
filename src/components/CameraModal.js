import React, { useCallback, useRef, useState } from "react";
import "./Camera.css";
import Webcam from "react-webcam";

const CameraModal = () => {
  const [image, setImage] = useState("");
  const videoConstraints = {
    width: 500,
    height: 280,
    facingMode: "user",
  };

  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    console.log(imageSrc);
  }, [webcamRef]);

  return (
    <div className="root">
      <div className="lside">
        <div className="camera">
          <Webcam
            ref={webcamRef}
            audio={false}
            height={280}
            screenshotFormat="image/jpeg"
            width={500}
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
      <div className="rside">
        <div className="uside">
          <img src={image ? image : "/loading.gif"} />
        </div>
        <div className="bside">
          <button class="glow-on-hover">SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default CameraModal;
