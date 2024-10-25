import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import url from "../../config.json"


function RefreshToken() {
  const token = localStorage.getItem('token');
  const refresh = localStorage.getItem('refresh');
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const myHeaders = new Headers();
      myHeaders.append("accept", "application/json");
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("X-CSRFToken", "suAdFiV4TS429JyIf0LP0hxKoYL4IGxU5HHR9e52YQvsh6wbWiwScHXhWAwZgI24");

      const raw = JSON.stringify({ "token": token });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      try {
        const response = await fetch(`${url.baseUrl}/account/api/v1/jwt/verify/`, requestOptions);
        const result = await response.json();

        if (result.code === "token_not_valid") {
          const myHeadersRefresh = new Headers();
          myHeadersRefresh.append("accept", "application/json");
          myHeadersRefresh.append("Content-Type", "application/json");
          myHeadersRefresh.append("X-CSRFToken", "7x82a1WNLT9ulCcznShlrJoy85HoXsYTKKfGEX6LQRAUtZa24a2oD9O5GHsjvut3");

          const rawRefresh = JSON.stringify({ "refresh": refresh });

          const requestOptionsRefresh = {
            method: "POST",
            headers: myHeadersRefresh,
            body: rawRefresh,
            redirect: "follow"
          };

          const refresResponse = await fetch(`${url.baseUrl}/account/api/v1/jwt/refresh/`, requestOptionsRefresh);
          const refresResult = await refresResponse.json();

          if (refresResponse.ok) {
            localStorage.removeItem("token");
            localStorage.setItem('token', refresResult.access); 
          } else {
            navigate('/login');
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    verifyToken();
  }, [token, refresh, navigate]);

  return null;
}

export default RefreshToken;
