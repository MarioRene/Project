// === IMPORTACIONES DE IMÁGENES ===
// Serie IRTRA - Fotografía Institucional y de Eventos
import irtra1 from './irtra1.JPG';
import irtra2 from './irtra2.JPG';
import irtra3 from './irtra3.JPG';
import irtra4 from './irtra4.JPG';
import irtra5 from './irtra5.jpg';
import irtra6 from './irtra6.jpg';
import irtra7 from './irtra7.jpg';
import irtra8 from './irtra8.JPG';

// Serie MODELAJE - Fotografía de Retrato y Fashion
import model1 from './model1.jpg';
import model2 from './model2.jpg';
import model3 from './model3.jpg';
import model4 from './model4.png';
import model5 from './model5.jpg';
import model6 from './model6.jpg';
import model7 from './model7.jpeg';
import model8 from './model8.JPG';
import model9 from './model9.JPG';
import model10 from './model10.JPG';
import model11 from './model11.jpg'

// Serie MORAT - Fotografía Musical y Artística
import m1 from './M1.jpg';
import m2 from './M2.jpg';
import m3 from './M3.jpg';
import m4 from './M4.jpg';
import m5 from './M5.jpg';
import m6 from './M6.jpg';
import m7 from './M7.jpg';
import m8 from './M8.jpg';

// Serie ESCENOGRAFIA - Fotografía Artística
import es1 from './es1.jpg'
import es2 from './es2.jpeg'
import es3 from './es3.jpg'
import es4 from './es4.jpg'
import es5 from './es5.jpeg'
import es6 from './es6.jpeg'

const categories = [
  {
    title: 'IRTRA',
    subtitle: 'Institutional & Events',
    images: [irtra1, irtra2, irtra3, irtra4, irtra5, irtra6, irtra7, irtra8],
    color: 'irtra',
    description: 'Serie de fotografía institucional y eventos corporativos con enfoque en capturar la esencia profesional y momentos únicos.',
    
    // Configuración fotográfica típica para esta serie
    cameraSettings: {
      commonAperture: 'f/2.8-f/5.6',
      commonShutter: '1/125-1/250',
      commonISO: '200-800',
      lensType: '24-70mm f/2.8',
      lighting: 'Natural + Flash Fill'
    },
    
    // Metadatos técnicos
    metadata: {
      category: 'institutional',
      style: 'documentary',
      format: 'landscape',
      colorProfile: 'professional',
      editingStyle: 'natural',
      shootDate: '2024',
      location: 'Guatemala',
      equipment: 'Canon EOS R5'
    },
    
    // Etiquetas para búsqueda y organización
    tags: ['corporate', 'events', 'professional', 'institutional', 'documentary'],
    
    // Configuraciones de visualización
    displaySettings: {
      primaryColor: '#dc2626',
      accentColor: '#991b1b',
      thumbnailSize: 'medium',
      preferredLayout: 'grid'
    }
  },
  
  {
    title: 'MODELAJE',
    subtitle: 'Fashion & Portrait',
    images: [model1, model2, model3, model4, model5, model6, model7, model8, model9, model10, model11],
    color: 'modelo',
    description: 'Colección de fotografía de moda y retratos con enfoque en la expresión humana, iluminación dramática y composición artística.',
    
    cameraSettings: {
      commonAperture: 'f/1.4-f/2.8',
      commonShutter: '1/160-1/320',
      commonISO: '100-400',
      lensType: '85mm f/1.4, 50mm f/1.2',
      lighting: 'Studio + Natural'
    },
    
    metadata: {
      category: 'fashion',
      style: 'portrait',
      format: 'vertical',
      colorProfile: 'cinematic',
      editingStyle: 'editorial',
      shootDate: '2024',
      location: 'Studio & Exterior',
      equipment: 'Sony A7R IV'
    },
    
    tags: ['fashion', 'portrait', 'beauty', 'editorial', 'studio', 'lifestyle'],
    
    displaySettings: {
      primaryColor: '#dc2626',
      accentColor: '#ef4444',
      thumbnailSize: 'large',
      preferredLayout: 'masonry'
    }
  },
  
  {
    title: 'MORAT',
    subtitle: 'Music & Arts',
    images: [m1, m2, m3, m4, m5, m6, m7, m8],
    color: 'morat',
    description: 'Serie dedicada a la fotografía musical y artística, capturando la energía, emoción y creatividad del mundo del entretenimiento.',
    
    cameraSettings: {
      commonAperture: 'f/1.8-f/4.0',
      commonShutter: '1/125-1/500',
      commonISO: '800-3200',
      lensType: '24-105mm f/4, 70-200mm f/2.8',
      lighting: 'Stage + Available'
    },
    
    metadata: {
      category: 'music',
      style: 'concert',
      format: 'mixed',
      colorProfile: 'vibrant',
      editingStyle: 'artistic',
      shootDate: '2024',
      location: 'Concert Venues',
      equipment: 'Nikon Z9'
    },
    
    tags: ['music', 'concert', 'artistic', 'live', 'entertainment', 'performance'],
    
    displaySettings: {
      primaryColor: '#dc2626',
      accentColor: '#fbbf24',
      thumbnailSize: 'varied',
      preferredLayout: 'gallery'
    }
  },
  {
  title: 'ESCENOGRAFÍA',
  subtitle: 'Stage & Production Design',
  images: [es1, es2, es3, es4, es5, es6],
  color: 'esenografia',
  description: 'Colección de fotografía dedicada a escenarios, producción y ambientación artística para eventos y espectáculos.',

  cameraSettings: {
    commonAperture: 'f/2.8-f/5.6',
    commonShutter: '1/60-1/200',
    commonISO: '400-1600',
    lensType: '16-35mm f/2.8, 24-70mm f/2.8',
    lighting: 'Artificial + Ambient'
  },

  metadata: {
    category: 'stage',
    style: 'production',
    format: 'mixed',
    colorProfile: 'neutral',
    editingStyle: 'realistic',
    shootDate: '2025',
    location: 'Guatemala',
    equipment: 'Canon EOS R5'
  },

  tags: ['stage', 'production', 'design', 'artistic', 'scenography'],

  displaySettings: {
    primaryColor: '#9333ea',
    accentColor: '#c084fc',
    thumbnailSize: 'large',
    preferredLayout: 'gallery'
  }
}
];

// === FUNCIONES AUXILIARES PARA EL PORTFOLIO ===

export const getPortfolioStats = () => {
  const stats = {
    totalCategories: categories.length,
    totalImages: categories.reduce((total, category) => total + category.images.length, 0),
    totalTags: [...new Set(categories.flatMap(cat => cat.tags))].length,
    
    // Desglose por categoría
    categoriesBreakdown: categories.map(cat => ({
      name: cat.title,
      subtitle: cat.subtitle,
      count: cat.images.length,
      color: cat.color,
      style: cat.metadata.style,
      equipment: cat.metadata.equipment
    })),
    
    // Análisis de configuraciones
    equipmentUsed: [...new Set(categories.map(cat => cat.metadata.equipment))],
    photographyStyles: [...new Set(categories.map(cat => cat.metadata.style))],
    locations: [...new Set(categories.map(cat => cat.metadata.location))],
    
    // Configuraciones de cámara más comunes
    commonSettings: {
      apertures: categories.map(cat => cat.cameraSettings.commonAperture),
      shutterSpeeds: categories.map(cat => cat.cameraSettings.commonShutter),
      isoRanges: categories.map(cat => cat.cameraSettings.commonISO)
    }
  };
  
  return stats;
};

/**
 * Busca categoría por nombre o título
 */
export const getCategoryByName = (categoryName) => {
  return categories.find(cat => 
    cat.title.toLowerCase() === categoryName.toLowerCase() ||
    cat.subtitle.toLowerCase().includes(categoryName.toLowerCase())
  );
};

/**
 * Obtiene imágenes aleatorias para hero/preview
 */
export const getRandomImages = (count = 8) => {
  const allImages = categories.flatMap(cat => 
    cat.images.map((img, index) => ({
      src: img,
      category: cat.title,
      subtitle: cat.subtitle,
      color: cat.color,
      style: cat.metadata.style,
      equipment: cat.metadata.equipment,
      settings: `${cat.cameraSettings.commonAperture} • ${cat.cameraSettings.commonShutter} • ${cat.cameraSettings.commonISO}`,
      tags: cat.tags.slice(0, 3), // Solo las primeras 3 etiquetas
      index: index + 1,
      total: cat.images.length
    }))
  );
  
  // Algoritmo de mezcla Fisher-Yates
  const shuffled = [...allImages];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled.slice(0, count);
};

/**
 * Busca imágenes por etiquetas
 */
export const searchImagesByTags = (searchTags) => {
  return categories.filter(category =>
    searchTags.some(tag => 
      category.tags.some(categoryTag => 
        categoryTag.toLowerCase().includes(tag.toLowerCase())
      )
    )
  );
};

/**
 * Obtiene configuraciones EXIF simuladas para una imagen
 */
export const generateExifData = (categoryIndex, imageIndex) => {
  const category = categories[categoryIndex];
  if (!category) return null;
  
  // Datos EXIF simulados basados en la categoría
  const baseSettings = {
    camera: category.metadata.equipment,
    lens: category.cameraSettings.lensType,
    aperture: category.cameraSettings.commonAperture.split('-')[0],
    shutter: category.cameraSettings.commonShutter.split('-')[0],
    iso: category.cameraSettings.commonISO.split('-')[0],
    focalLength: '85mm',
    colorSpace: 'sRGB',
    whiteBalance: 'Auto',
    meteringMode: 'Matrix',
    flashMode: 'Off',
    orientation: 'Horizontal',
    copyright: '© 2024 Visual Storytelling Portfolio'
  };
  
  return baseSettings;
};

/**
 * Configuración de colores y temas por categoría
 */
const categoryThemes = {
  irtra: {
    primary: '#dc2626',
    secondary: '#991b1b',
    accent: '#fee2e2',
    gradient: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
    mood: 'professional',
    description: 'Corporate elegance with bold red accents'
  },
  modelo: {
    primary: '#dc2626',
    secondary: '#ef4444',
    accent: '#fecaca',
    gradient: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
    mood: 'artistic',
    description: 'Fashion-forward with dynamic red tones'
  },
  morat: {
    primary: '#dc2626',
    secondary: '#fbbf24',
    accent: '#fed7aa',
    gradient: 'linear-gradient(135deg, #dc2626 0%, #fbbf24 100%)',
    mood: 'energetic',
    description: 'Musical energy with warm accent colors'
  }
};

/**
 * Configuraciones de visualización responsiva
 */
const responsiveSettings = {
  breakpoints: {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
    large: 1200
  },
  
  gridColumns: {
    mobile: 1,
    tablet: 2,
    desktop: 3,
    large: 4
  },
  
  imageSizes: {
    thumbnail: { width: 300, height: 200 },
    medium: { width: 600, height: 400 },
    large: { width: 1200, height: 800 },
    fullscreen: { width: 1920, height: 1080 }
  }
};

// Exportación por defecto
export default categories;

// Exportaciones nombradas para funcionalidades específicas
export {
  categoryThemes,
  responsiveSettings
};