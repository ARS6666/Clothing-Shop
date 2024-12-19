import React, { useRef, useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io('https://meshonarzanjan.liara.run/:5000'); // Update with your server URL

const Client = () => {
  const remoteVideoRef = useRef(null);
  const [peerConnection, setPeerConnection] = useState(null);
  const [connectionState, setConnectionState] = useState('closed');

  useEffect(() => {
    const pc = new RTCPeerConnection();

    pc.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit('candidate', event.candidate);
        console.log('ICE candidate sent');
      }
    };

    pc.ontrack = (event) => {
      console.log('Track received:', event);
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = event.streams[0];
      }
    };

    setPeerConnection(pc);
    console.log('Peer connection created');

    socket.on('offer', async (data) => {
      console.log('Offer received:', data);
      try {
        await pc.setRemoteDescription(new RTCSessionDescription(data));
        console.log('Remote description set');
        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);
        console.log('Answer created and set', answer);
        socket.emit('answer', answer);
      } catch (error) {
        console.error('Error setting remote description or creating answer:', error);
      }
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
      setConnectionState('closed');
      console.log('Peer connection closed');
    };
  }, [connectionState]);

  const handleConnectionOpen = () => {
    setConnectionState('open');
    console.log('Connection state set to open');
  };

  return (
    <div className="container">
      <h1>Webcam Client</h1>
      <video ref={remoteVideoRef} autoPlay playsInline className="video-element"></video>
      <div className="buttons">
        <button onClick={handleConnectionOpen} className="btn btn-connect">Connect</button>
      </div>
    </div>
  );
};

export default Client;
