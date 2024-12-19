import React, { useRef, useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io('https://meshonarzanjan.liara.run/:5000'); // Update with your server URL

const Streamer = () => {
  const localVideoRef = useRef(null);
  const [peerConnection, setPeerConnection] = useState(null);

  useEffect(() => {
    const pc = new RTCPeerConnection();

    pc.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit('candidate', event.candidate);
        console.log('ICE candidate sent');
      }
    };

    setPeerConnection(pc);
    console.log('Peer connection created');

    socket.on('answer', async (data) => {
      console.log('Answer received:', data);
      await pc.setRemoteDescription(new RTCSessionDescription(data));
      console.log('Remote description set');
    });

    socket.on('candidate', async (data) => {
      console.log('ICE candidate received:', data);
      try {
        await pc.addIceCandidate(new RTCIceCandidate(data));
        console.log('ICE candidate added');
      } catch (e) {
        console.error('Error adding received ICE candidate', e);
      }
    });

    return () => {
      pc.close();
      console.log('Peer connection closed');
    };
  }, []);

  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      localVideoRef.current.srcObject = stream;
      stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));
      console.log('Tracks added to peer connection');
      const offer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(offer);
      socket.emit('offer', offer);
      console.log('Offer created and sent');
    } catch (error) {
      console.error('Error accessing webcam:', error);
    }
  };

  const stopWebcam = () => {
    const stream = localVideoRef.current.srcObject;
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      localVideoRef.current.srcObject = null;
      console.log('Webcam stopped');
    }
  };

  return (
    <div className="container">
      <h1>Webcam Streamer</h1>
      <video ref={localVideoRef} autoPlay playsInline className="video-element"></video>
      <div className="buttons">
        <button onClick={startWebcam} className="btn btn-start">Start Webcam</button>
        <button onClick={stopWebcam} className="btn btn-stop">Stop Webcam</button>
      </div>
    </div>
  );
};

export default Streamer;
