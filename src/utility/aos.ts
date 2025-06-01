"use client"
import { useEffect } from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Aos() {
    useEffect(() => {
        AOS.init();
    }, [])
    return null
}