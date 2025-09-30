import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import './PortfolioSlider.css';
import categories from './images/portfolioData';

const PortfolioSlider = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [isGridView, setIsGridView] = useState(true);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  // Efecto de typewriter para el título
  const [titleText, setTitleText] = useState('');
  const fullTitle = 'VISUAL STORYTELLING';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullTitle.length) {
        setTitleText(fullTitle.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Función para abrir imagen en modal con navegación
  const openImageModal = (image, categoryIndex, imgIndex) => {
    setSelectedImage(image);
    setSelectedCategory(categoryIndex);
    setImageIndex(imgIndex);
  };

  // Navegación en modal
  const navigateModal = (direction) => {
    if (selectedCategory === null) return;
    
    const currentCategory = categories[selectedCategory];
    const maxIndex = currentCategory.images.length - 1;
    
    let newIndex;
    if (direction === 'next') {
      newIndex = imageIndex >= maxIndex ? 0 : imageIndex + 1;
    } else {
      newIndex = imageIndex <= 0 ? maxIndex : imageIndex - 1;
    }
    
    setImageIndex(newIndex);
    setSelectedImage(currentCategory.images[newIndex]);
  };

  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const categoryVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: -15
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateY: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      rotateY: 5,
      z: 50,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const masonryImageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="portfolio-container" ref={containerRef}>
      {/* Header Hero Section */}
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div 
          className="hero-background"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {titleText}
            <motion.span 
              className="cursor"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              |
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Capturing moments • Creating emotions • Telling stories
          </motion.p>

          {/* View Toggle */}
          <motion.div 
            className="view-toggle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <button 
              className={`toggle-btn ${isGridView ? 'active' : ''}`}
              onClick={() => setIsGridView(true)}
            >
              <span className="icon">⊞</span> Grid
            </button>
            <button 
              className={`toggle-btn ${!isGridView ? 'active' : ''}`}
              onClick={() => setIsGridView(false)}
            >
              <span className="icon">≣</span> Gallery
            </button>
          </motion.div>
        </div>

        {/* Floating Camera Icon */}
        <motion.div 
          className="floating-camera"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          📸
        </motion.div>
      </motion.section>

      {/* Portfolio Content */}
      <motion.div
        className={`portfolio-content ${isGridView ? 'grid-view' : 'gallery-view'}`}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {isGridView ? (
          // Grid Layout - Masonry Style
          <div className="masonry-grid">
            {categories.map((category) => 
              category.images.map((image, imgIndex) => {
                const globalIndex = categories.slice(0, categories.indexOf(category)).reduce((sum, cat) => sum + cat.images.length, 0) + imgIndex;
                return (
                  <motion.div
                    key={`${category.title}-${imgIndex}`}
                    className={`masonry-item ${globalIndex % 3 === 0 ? 'tall' : globalIndex % 5 === 0 ? 'wide' : ''}`}
                    variants={masonryImageVariants}
                    custom={globalIndex * 0.1}
                    whileHover="hover"
                    onHoverStart={() => setHoveredImage(`${category.title}-${imgIndex}`)}
                    onHoverEnd={() => setHoveredImage(null)}
                    onClick={() => openImageModal(image, categories.indexOf(category), imgIndex)}
                  >
                    <div className="masonry-image-container">
                      <img 
                        src={image} 
                        alt={`${category.title} ${imgIndex + 1}`}
                        className="masonry-image"
                        loading="lazy"
                      />
                      
                      {/* Overlay con información */}
                      <motion.div 
                        className="masonry-overlay"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="overlay-content">
                          <h4>{category.title}</h4>
                          <div className="image-controls">
                            <button className="control-btn view-btn">
                              <span>👁️</span>
                            </button>
                            <button className="control-btn share-btn">
                              <span>📤</span>
                            </button>
                            <button className="control-btn like-btn">
                              <span>❤️</span>
                            </button>
                          </div>
                        </div>
                      </motion.div>

                      {/* Efecto de scan */}
                      <motion.div
                        className="scan-line"
                        animate={hoveredImage === `${category.title}-${imgIndex}` ? {
                          y: ["-100%", "100%"],
                          opacity: [0, 1, 0]
                        } : {}}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                    </div>
                  </motion.div>
                );
              })
            )}
          </div>
        ) : (
          // Gallery Layout - Categories
          categories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="category-section"
              variants={categoryVariants}
            >
              <motion.div 
                className="category-header"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="category-title">{category.title}</h2>
                <div className="category-line"></div>
                <span className="image-count">{category.images.length} SHOTS</span>
              </motion.div>

              <div className="category-gallery">
                {category.images.map((image, imgIndex) => (
                  <motion.div
                    key={imgIndex}
                    className="gallery-item"
                    variants={imageVariants}
                    whileHover="hover"
                    onHoverStart={() => setHoveredImage(`${categoryIndex}-${imgIndex}`)}
                    onHoverEnd={() => setHoveredImage(null)}
                    onClick={() => openImageModal(image, categoryIndex, imgIndex)}
                  >
                    <div className="gallery-image-container">
                      <img 
                        src={image} 
                        alt={`${category.title} ${imgIndex + 1}`}
                        className="gallery-image"
                        loading="lazy"
                      />
                      
                      {/* Frame effect */}
                      <div className="image-frame"></div>
                      
                      {/* Lens flare effect */}
                      <motion.div 
                        className="lens-flare"
                        animate={hoveredImage === `${categoryIndex}-${imgIndex}` ? {
                          scale: [0, 1, 0],
                          rotate: [0, 180, 360]
                        } : {}}
                        transition={{ duration: 0.8 }}
                      />

                      {/* Info overlay */}
                      <motion.div 
                        className="image-info"
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="info-line">
                          <span className="label">SHOT</span>
                          <span className="value">{String(imgIndex + 1).padStart(2, '0')}</span>
                        </div>
                        <div className="info-line">
                          <span className="label">SERIES</span>
                          <span className="value">{category.title}</span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))
        )}
      </motion.div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="modal-backdrop"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="modal-container"
              initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotateY: 90 }}
              transition={{ 
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="modal-header">
                <div className="modal-info">
                  <h3>{selectedCategory !== null ? categories[selectedCategory].title : ''}</h3>
                  <span>{imageIndex + 1} / {selectedCategory !== null ? categories[selectedCategory].images.length : 0}</span>
                </div>
                <button 
                  className="modal-close"
                  onClick={() => setSelectedImage(null)}
                >
                  ✕
                </button>
              </div>

              {/* Main Image */}
              <div className="modal-image-container">
                <img
                  src={selectedImage}
                  alt="Full size"
                  className="modal-image"
                />
                
                {/* Navigation */}
                <button 
                  className="modal-nav prev"
                  onClick={() => navigateModal('prev')}
                >
                  ‹
                </button>
                <button 
                  className="modal-nav next"
                  onClick={() => navigateModal('next')}
                >
                  ›
                </button>

                {/* Camera Settings UI */}
                <div className="camera-settings">
                  <div className="setting">
                    <span className="setting-label">f/</span>
                    <span className="setting-value">2.8</span>
                  </div>
                  <div className="setting">
                    <span className="setting-label">1/</span>
                    <span className="setting-value">125</span>
                  </div>
                  <div className="setting">
                    <span className="setting-label">ISO</span>
                    <span className="setting-value">400</span>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="modal-footer">
                <div className="modal-actions">
                  <button className="action-btn download">
                    <span>⬇️</span> Download
                  </button>
                  <button className="action-btn share">
                    <span>📤</span> Share
                  </button>
                  <button className="action-btn fullscreen">
                    <span>⛶</span> Fullscreen
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioSlider;