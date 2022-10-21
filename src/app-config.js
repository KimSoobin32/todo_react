let backendHost;

const hostname = window && window.location && window.location.hostname;

if(hostname === "localhost"){
    backendHost = "http://localhost:8080";
}

export const API_BASE_URL = `${backendHost}`;   //백틱 : 자바스크립트에서 문자열 만들 때 사용