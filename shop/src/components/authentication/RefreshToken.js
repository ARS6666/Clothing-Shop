import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import url from "../../config.json";

function RefreshToken() {
  const token = localStorage.getItem('token');
  const refresh = localStorage.getItem('refresh');
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({ "token": token });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      try {
        const response = await fetch(`${url.baseUrl}/auth/jwt/verify/`, requestOptions);
        const result = await response.json();

        if (result.code === "token_not_valid") {
          const myHeadersRefresh = new Headers();
          myHeadersRefresh.append("Accept", "application/json");
          myHeadersRefresh.append("Content-Type", "application/json");

          const rawRefresh = JSON.stringify({ "refresh": refresh });

          const requestOptionsRefresh = {
            method: "POST",
            headers: myHeadersRefresh,
            body: rawRefresh,
            redirect: "follow"
          };

          const refresResponse = await fetch(`${url.baseUrl}/auth/jwt/refresh/`, requestOptionsRefresh);
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
