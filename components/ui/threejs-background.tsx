"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

interface ThreeJSBackgroundProps {
  color1?: string; // Primary gradient color
  color2?: string; // Secondary gradient color
}

export function ThreeJSBackground({ 
  color1, 
  color2 
}: ThreeJSBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const { theme } = useTheme();
  
  // Set default colors based on theme
  const themeColor1 = color1 || (theme === 'dark' ? "#0f172a" : "#ffffff");
  const themeColor2 = color2 || (theme === 'dark' ? "#64f5ff" : "#64f5ff");
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      70, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    camera.position.z = 5;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Transparent background
    
    // Clear existing content and append renderer
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(renderer.domElement);
    }
    
    rendererRef.current = renderer;
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    
    const posArray = new Float32Array(particlesCount * 3);
    const scaleArray = new Float32Array(particlesCount);
    
    // Fill position array with random positions
    for (let i = 0; i < particlesCount * 3; i++) {
      // Distribute particles in a spherical formation
      posArray[i] = (Math.random() - 0.5) * 10;
      
      // Store random scale in a separate array for animation
      if (i % 3 === 0) {
        scaleArray[i / 3] = Math.random();
      }
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Create material with custom shader to have color gradient
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.025,
      sizeAttenuation: true,
      transparent: true,
      opacity: theme === 'dark' ? 0.8 : 0.5,
      color: new THREE.Color(themeColor2),
    });
    
    // Create points mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Create connecting lines between close particles
    const linesMaterial = new THREE.LineBasicMaterial({ 
      color: new THREE.Color(themeColor2),
      transparent: true,
      opacity: theme === 'dark' ? 0.1 : 0.05,
    });
    
    // Animation variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    // Listen for mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation function
    const clock = new THREE.Clock();
    
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      
      // Smooth mouse follow
      targetX = mouseX * 0.1;
      targetY = mouseY * 0.1;
      
      // Rotate slightly based on mouse position
      particlesMesh.rotation.x += 0.005 * (targetY - particlesMesh.rotation.x);
      particlesMesh.rotation.y += 0.005 * (targetX - particlesMesh.rotation.y);
      
      // Gentle wave animation
      const positions = particlesGeometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        const y = positions[i3 + 1];
        const z = positions[i3 + 2];
        
        // Apply a subtle wave movement
        positions[i3 + 1] = y + Math.sin(elapsedTime + x * 0.5) * 0.01 * scaleArray[i];
        positions[i3 + 2] = z + Math.cos(elapsedTime + x * 0.5) * 0.01 * scaleArray[i];
      }
      
      particlesGeometry.attributes.position.needsUpdate = true;
      
      // Render
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      scene.remove(particlesMesh);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [themeColor1, themeColor2, theme]);
  
  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${themeColor1} 0%, ${themeColor1}cc 100%)`,
        maxWidth: '100vw',
        width: '100%',
        left: 0,
        right: 0
      }}
    />
  );
}
