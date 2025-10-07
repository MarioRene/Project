import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Interceptor para agregar token de autenticación si existe
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para manejar errores de respuesta
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/inicio';
    }
    return Promise.reject(error);
  }
);

// ========== VIDEOS ==========
export const videoService = {
  getAll: () => api.get('/videos/'),
  getById: (id) => api.get(`/videos/${id}/`),
  create: (data) => api.post('/videos/', data),
  update: (id, data) => api.put(`/videos/${id}/`, data),
  delete: (id) => api.delete(`/videos/${id}/`),
  getDestacados: () => api.get('/videos/destacados/'),
  getPorCategoria: (categoria) => api.get(`/videos/por_categoria/?categoria=${categoria}`),
  incrementarVistas: (id) => api.post(`/videos/${id}/incrementar_vistas/`),
};

// ========== FOTOGRAFÍAS ==========
export const fotografiaService = {
  getAll: () => api.get('/fotografias/'),
  getById: (id) => api.get(`/fotografias/${id}/`),
  create: (data) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });
    return api.post('/fotografias/', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  },
  update: (id, data) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });
    return api.put(`/fotografias/${id}/`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  },
  delete: (id) => api.delete(`/fotografias/${id}/`),
  getDestacadas: () => api.get('/fotografias/destacadas/'),
  getPorCategoria: (categoria) => api.get(`/fotografias/por_categoria/?categoria=${categoria}`),
};

// ========== PLANES ==========
export const planService = {
  getAll: () => api.get('/planes/'),
  getById: (id) => api.get(`/planes/${id}/`),
  create: (data) => api.post('/planes/', data),
  update: (id, data) => api.put(`/planes/${id}/`, data),
  delete: (id) => api.delete(`/planes/${id}/`),
  getDestacados: () => api.get('/planes/destacados/'),
};

// ========== AUTENTICACIÓN ==========
export const authService = {
  register: (userData) => api.post('/auth/register/', userData),
  login: async (credentials) => {
    const response = await api.post('/auth/login/', credentials);
    if (response.data.user) {
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response;
  },
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
  getCurrentUser: () => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },
  isAuthenticated: () => {
    return !!localStorage.getItem('user');
  }
};

// ========== CONTACTO ==========
export const contactoService = {
  enviar: (data) => api.post('/contacto/', data),
  getAll: () => api.get('/contacto/'),
  marcarLeido: (id) => api.post(`/contacto/${id}/marcar_leido/`),
};

// ========== CLIENTES ==========
export const clienteService = {
  getMiPerfil: () => api.get('/clientes/mi_perfil/'),
  getAll: () => api.get('/clientes/'),
  getById: (id) => api.get(`/clientes/${id}/`),
  update: (id, data) => api.put(`/clientes/${id}/`, data),
  asignarPlan: (clienteId, planId) => api.post(`/clientes/${clienteId}/asignar_plan/`, { plan_id: planId }),
};

// ========== PROYECTOS ==========
export const proyectoService = {
  getAll: () => api.get('/proyectos/'),
  getMisProyectos: () => api.get('/proyectos/mis_proyectos/'),
  getById: (id) => api.get(`/proyectos/${id}/`),
  create: (data) => api.post('/proyectos/', data),
  update: (id, data) => api.put(`/proyectos/${id}/`, data),
  delete: (id) => api.delete(`/proyectos/${id}/`),
  cambiarEstado: (id, estado) => api.patch(`/proyectos/${id}/cambiar_estado/`, { estado }),
};

export default api;