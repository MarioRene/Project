import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { videos } from "../data/videosData";
import "./VideoGallery.css";

const VideoGallery = () => {
  const navigate = useNavigate();
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const videoRefs = useRef([]);

  useEffect(() => {
    // Simular carga inicial
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoClick = (index) => {
    // Agregar efecto de transición antes de navegar
    const clickedCard = videoRefs.current[index];
    if (clickedCard) {
      clickedCard.style.transform = 'scale(0.95)';
      setTimeout(() => {
        navigate(`/video/${index}`);
      }, 200);
    }
  };

  const handleMouseEnter = (e, index) => {
    setHoveredVideo(index);
    const video = e.target;
    video.currentTime = 0; // Reiniciar desde el inicio
    video.play().catch(console.error);
  };

  const handleMouseLeave = (e, index) => {
    setHoveredVideo(null);
    const video = e.target;
    video.pause();
    video.currentTime = 0;
  };

  if (isLoading) {
    return (
      <div className="gallery-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Cargando experiencia audiovisual...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="gallery-container">
      {videos.map((video, index) => (
        <div 
          key={video.id} 
          className={`video-card ${hoveredVideo === index ? 'hovered' : ''}`}
          ref={el => videoRefs.current[index] = el}
          onClick={() => handleVideoClick(index)}
          style={{ 
            animationDelay: `${index * 0.1}s`,
          }}
        >
          <div className="video-container">
            <video
              src={video.src}
              muted
              loop
              preload="metadata"
              onMouseEnter={(e) => handleMouseEnter(e, index)}
              onMouseLeave={(e) => handleMouseLeave(e, index)}
            />
            <div className="video-overlay">
              <div className="play-button">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="11" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.8)" strokeWidth="1"/>
                  <path 
                    d="M10 8v8l6-4z" 
                    fill="rgba(255,255,255,0.95)"
                  />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="video-info">
            <span className="company">
              {video.company}
              <div className="company-underline"></div>
            </span>
            <span className="title">
              {video.title}
              <div className="title-glow"></div>
            </span>
            <span className="director">
              {video.director}
              <div className="director-accent"></div>
            </span>
          </div>
          
          <div className="video-status">
            <div className="status-dot"></div>
            <span>4K</span>
          </div>
        </div>
      ))}
      
      <div className="gallery-footer">
        <div className="video-count">
          <span className="count-number">{videos.length}</span>
          <span className="count-label">Proyectos</span>
        </div>
        <div className="gallery-signature">
          <span>Portfolio Audiovisual</span>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;