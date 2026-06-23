let IS_PROD=true;

const server=IS_PROD ?  "https://apna-video-call-backend-d01j.onrender.com":
    "http://localhost:8000"
   


export default server;