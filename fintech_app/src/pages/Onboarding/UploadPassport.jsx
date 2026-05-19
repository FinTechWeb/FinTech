// import React, { useRef, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export default function UploadPassport() {
//   const navigate = useNavigate();
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);

//   const [stream, setStream] = useState(null);
//   const [capturedImage, setCapturedImage] = useState(null);

//   // Start Camera
//   const startCamera = async () => {
//     try {
//       const mediaStream = await navigator.mediaDevices.getUserMedia({
//         video: true
//       });
//       setStream(mediaStream);
//       videoRef.current.srcObject = mediaStream;
//     } catch (err) {
//       alert("Camera access denied or not available");
//     }
//   };

//   // Stop Camera
//   const stopCamera = () => {
//     stream?.getTracks().forEach(track => track.stop());
//   };

//   // Capture Image
//   const capturePhoto = () => {
//     const canvas = canvasRef.current;
//     const video = videoRef.current;

//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;

//     const ctx = canvas.getContext("2d");
//     ctx.drawImage(video, 0, 0);

//     const imageData = canvas.toDataURL("image/png");
//     setCapturedImage(imageData);

//     stopCamera();
//   };

//   // Restart camera if retake
//   const retake = () => {
//     setCapturedImage(null);
//     startCamera();
//   };

//   useEffect(() => {
//     startCamera();

//     return () => stopCamera(); // cleanup
//   }, []);

//   return (
//     <div style={{ background: "#fff", height: "100vh", fontFamily: "Arial" }}>
      
//       <div style={{ padding: "40px 80px" }}>
        
//         {/* Steps */}
//         <div style={{ display: "flex", gap: "20px", justifyContent:"center",alignItems: "center" }}>
//           <div style={stepDone}>✓</div>
//           <span>Sign up</span>

//           <div style={stepDone}>✓</div>
//           <span>Verify Email</span>

//           <div style={stepActive}>3</div>
//           <span>Upload credentials</span>
//         </div>

//         <hr style={{ margin: "20px 0", borderColor: "#eee" }} />

//         {/* Title */}
//         <div style={{ textAlign: "center", marginTop: "40px" }}>
//           <h2>Take a passport photograph</h2>
//         </div>

//         {/* Camera Circle */}
//         <div style={circle}>
//           {!capturedImage ? (
//             <video
//               ref={videoRef}
//               autoPlay
//               playsInline
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//                 borderRadius: "50%"
//               }}
//             />
//           ) : (
//             <img
//               src={capturedImage}
//               alt="captured"
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//                 borderRadius: "50%"
//               }}
//             />
//           )}
//         </div>

//         {/* Hidden canvas */}
//         <canvas ref={canvasRef} style={{ display: "none" }} />

//         {/* Buttons */}
//         <div style={{ textAlign: "center", marginTop: "20px" }}>
//           {!capturedImage ? (
//             <button style={captureBtn} onClick={capturePhoto}>
//               Capture
//             </button>
//           ) : (
//             <button style={retakeBtn} onClick={retake}>
//               Retake
//             </button>
//           )}
//         </div>

//         {/* Next Button */}
//         <div style={{ textAlign: "center", marginTop: "30px" }}>
//           <button
//             style={nextBtn}
//             onClick={() => navigate("/set-pin")}
//             disabled={!capturedImage}
//           >
//             Next
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }

// const stepDone = {
//   width: "30px",
//   height: "30px",
//   borderRadius: "6px",
//   background: "#eee",
//   display: "inline-flex",
//   justifyContent: "center",
//   alignItems: "center",
//   color: "red",
//   fontWeight: "bold",
//   marginRight: "5px"
// };

// const stepActive = {
//   width: "30px",
//   height: "30px",
//   borderRadius: "6px",
//   background: "red",
//   color: "#fff",
//   display: "inline-flex",
//   justifyContent: "center",
//   alignItems: "center",
//   marginRight: "5px"
// };

// const circle = {
//   width: "180px",
//   height: "180px",
//   borderRadius: "50%",
//   background: "#333",
//   margin: "40px auto",
//   overflow: "hidden"
// };

// const captureBtn = {
//   background: "black",
//   color: "#fff",
//   padding: "10px 20px",
//   border: "none",
//   borderRadius: "6px",
//   cursor: "pointer"
// };

// const retakeBtn = {
//   background: "#777",
//   color: "#fff",
//   padding: "10px 20px",
//   border: "none",
//   borderRadius: "6px",
//   cursor: "pointer"
// };

// const nextBtn = {
//   background: "red",
//   color: "#fff",
//   padding: "12px 40px",
//   border: "none",
//   borderRadius: "6px",
//   cursor: "pointer"
// };

import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/PageCommon.css";

export default function UploadPassport() {
  const navigate = useNavigate();

  return (
    <div className="upp-wrapper">

      {/* Steps - desktop only */}
      <div className="upp-steps">
        <div className="upp-step">
          <div className="upp-step-done">✓</div>
          <span className="upp-step-label">Sign up</span>
        </div>
        <div className="upp-step">
          <div className="upp-step-done">✓</div>
          <span className="upp-step-label">Verify Email</span>
        </div>
        <div className="upp-step">
          <div className="upp-step-active">3</div>
          <span className="upp-step-label">Upload credentials</span>
        </div>
      </div>

      <hr className="upp-divider" />

      {/* Title */}
      <div className="upp-title-wrap">
        <h2 className="upp-title">Take a passport photograph</h2>
      </div>

      {/* Circle placeholder */}
      <div className="upp-circle"></div>

      {/* Next Button */}
      <div className="upp-btn-wrap">
        <button className="upp-next-btn" onClick={() => navigate("/set-pin")}>
          Next
        </button>
      </div>

    </div>
  );
}