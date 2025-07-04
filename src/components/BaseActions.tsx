"use client";
import {useEffect, useState} from "react";
import axios from "axios";
import {api} from "@/app/resources/config"

export default function BaseActions() {
  const [publicIp, setPublicIp] = useState(0);

  useEffect(() => {
    if (window.location.hostname !== "localhost") {
      fetch("https://api64.ipify.org?format=json")
        .then(response => response.json())
        .then(data => {
          if (data && data.ip) setPublicIp(data.ip);
        })
        .catch(error => {
          setPublicIp(1);
          console.log("Erro ao obter IP:", error)
        })
    }
  }, [])

  if (publicIp && window.location.hostname !== "localhost") {
    try {
      axios.post(`${api.host}/api/logs/`, {
        eventType: 'Access page',
        eventDetails: `Access URL: ${window.location.origin}${window.location.pathname}${window.location.search} ${new Date().getTime()}`,
        os: navigator.userAgent.includes('Windows') ? 'Windows' : navigator.userAgent.includes('MacOS') ? 'MacOS' : navigator.userAgent.slice(0, 254),
        browser: navigator.userAgent.slice(0, 254),
        ipAddress: publicIp,
        user_agent: navigator.userAgent.slice(0, 254),
        page: window.location.pathname,
        referrer: document?.referrer || "",
      }).then(() => {
      })
    } catch (error) {
      console.log(`Ocorreu um erro ao registrar log.`);
      if (window.location.hostname === "localhost") console.log(error);
    }
  }


  return null;
}
