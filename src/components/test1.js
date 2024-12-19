import React, { useRef, useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Update with your server URL

const Client = () => {
  const remoteVideoRef = useRef(null);
  const [peerConnection, setPeerConnection] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

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
      remoteVideoRef.current.srcObject = event.streams[0];
    };

    pc.onconnectionstatechange = () => {
      if (pc.connectionState === 'connected') {
        setIsConnected(true);
        console.log('Peer connection established');
      } else if (pc.connectionState === 'closed' || pc.connectionState === 'failed') {
        setIsConnected(false);
        console.log('Peer connection closed or failed');
      }
    };

    setPeerConnection(pc);

    socket.on('offer', async (data) => {
      console.log('Offer received:', data);
      try {
        if (pc.signalingState === 'closed') {
          console.log('Re-initializing peer connection');
          const newPc = new RTCPeerConnection();
          setPeerConnection(newPc);
          newPc.onicecandidate = pc.onicecandidate;
          newPc.ontrack = pc.ontrack;
          newPc.onconnectionstatechange = pc.onconnectionstatechange;
        }
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
        if (isConnected) {
          await pc.addIceCandidate(new RTCIceCandidate(data));
          console.log('ICE candidate added');
        }
      } catch (e) {
        console.error('Error adding received ICE candidate', e);
      }
    });

    return () => {
      pc.close();
      console.log('Peer connection closed');
    };
  }, [isConnected]);

  const handleConnectionOpen = () => {
    setIsConnected(true);
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

export default Client