import http from "k6/http";

export let options = {
    duration: "10s",
    vus: 100
};

export default function() {
  http.get("http://localhost:8081");
};
