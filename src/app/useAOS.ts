"use client";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

export function useAOS() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);
}
