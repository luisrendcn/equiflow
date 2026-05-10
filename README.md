# EquiFlow - Plataforma Integral de Gestión de Equipos Académicos

## Descripción

EquiFlow es una plataforma profesional e interactiva diseñada para presentar de manera ejecutiva un proyecto integral de gestión y fortalecimiento de equipos académicos en contextos universitarios.

Este sitio web es una **presentación ejecutiva interactiva** del proyecto académico que combina:

- **Intervención Técnica**: Gestión de roles, tareas, tiempos y reportes
- **Intervención Humana**: Comunicación asertiva, trabajo en equipo, liderazgo colaborativo

## Características

✨ **Diseño Moderno y Profesional**
- Interfaz limpia y tecnológica
- Paleta visual: Azul Eléctrico (#007BFF), Negro, Blanco, Grises suaves
- Tipografía: Inter y Poppins

🎯 **Navegación Interactiva**
- Menú de navegación fijo con 11 secciones
- No depende únicamente del scroll vertical
- Transiciones animadas suaves entre secciones
- Respuesta visual en tiempo real

🎨 **Animaciones Modernas**
- Fade-in y slide transitions
- Reveal animations progresivas
- Tarjetas expandibles
- Acordeones interactivos
- Efectos hover elegantes
- Glassmorphism ligero

📱 **Diseño Completamente Responsivo**
- Adaptación perfecta a escritorio, tablet y móvil
- Menú hamburguesa en dispositivos pequeños
- Interfaz táctil optimizada

## Estructura del Sitio

1. **Hero Section / Portada** - Presentación inicial del proyecto
2. **Introducción** - Contexto y validación del problema
3. **Declaración del Problema** - Tarjetas expandibles con puntos críticos
4. **Solución Propuesta** - Tabs interactivos (Técnica y Humana)
5. **Matriz DOFA** - Visualización en 4 cuadrantes
6. **Análisis PESTEL** - 6 tarjetas animadas
7. **Modelo Canvas** - Diagrama interactivo de 9 bloques
8. **Inversión de $20.000.000** - Tabla y visualización de distribución
9. **Riesgos y Mitigación** - Acordeón interactivo
10. **Plan de Trabajo** - Timeline de 6 meses
11. **Conclusiones** - Resumen visual del proyecto

## Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con animaciones y gradientes
- **JavaScript Vanilla** - Interactividad sin dependencias externas
- **Font Awesome** - Iconografía minimalista
- **Google Fonts** - Tipografía profesional

## Contenido

Todo el contenido de la página se extrae **exclusivamente** del documento académico "RFP Final.docx.pdf":

- Autores: Juan Camilo Ossa Gutiérrez, Luis Fernando Rendón López
- Institución: Universidad Católica Luis Amigó
- Facultad: Ingeniería
- Línea de investigación: Rendimiento de equipos de trabajo
- Ubicación: Medellín, Colombia
- Año: 2026

## Características de Interacción

### Navegación
- 11 botones de navegación con estado activo visible
- Cada botón lleva a su sección correspondiente
- Microanimaciones hover elegantes
- Resaltado de sección activa

### Tarjetas Expandibles
- Click para expandir/contraer
- Transiciones suaves
- Solo una tarjeta expandida a la vez

### Tabs Interactivos
- Toggle entre Intervención Técnica y Humana
- Cambio suave de contenido

### Acordeones
- Cada riesgo expandible con información detallada
- Origen y estrategia de mitigación visible

### Timeline
- Visualización de 6 meses
- Indicadores visuales progresivos
- Información detallada de cada mes

## Responsividad

La página está optimizada para:

- **Escritorio** (1200px+): Diseño completo con menú horizontal
- **Tablet** (768px-1199px): Adaptación flexible con ajustes
- **Móvil** (<768px): Menú hamburguesa, una columna

## Instalación y Uso

### Opción 1: Uso Local
1. Descargar o clonar el repositorio
2. Abrir `index.html` en un navegador web
3. No requiere servidor backend

### Opción 2: Servidor Web
```bash
# Usando Python
python -m http.server 8000

# Usando Node.js (con http-server)
npx http-server
```

Luego acceder a `http://localhost:8000`

## Estructura de Archivos

```
equiflow/
├── web/
│   ├── index.html      # Página principal
│   ├── styles.css      # Estilos y animaciones
│   ├── script.js       # Interactividad
│   └── README.md       # Este archivo
```

## Navegación por Teclado

- **Alt + 1 a 9**: Saltar a secciones numéricas
- **ESC**: Cerrar menú móvil
- **Tab**: Navegar entre elementos interactivos

## Accessibilidad

- Roles ARIA apropiados
- Soporte para `prefers-reduced-motion`
- Navegación por teclado completa
- Contraste de colores accesible

## Rendimiento

- Cero dependencias externas (solo Google Fonts para tipografía)
- JavaScript optimizado sin frameworks
- CSS minificado y eficiente
- Animaciones GPU-aceleradas
- Lazy loading ready

## Compatibilidad

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Dispositivos móviles modernos

## Autor

**Proyecto de Investigación**: EquiFlow

- Juan Camilo Ossa Gutiérrez
- Luis Fernando Rendón López

Universidad Católica Luis Amigó | Facultad de Ingeniería | Medellín, Colombia | 2026

## Licencia

Proyecto académico. Derechos reservados 2026.

## Restricciones de Contenido

✅ Todo el contenido es 100% del documento original
❌ Sin contenido inventado
❌ Sin estadísticas ficticias
❌ Sin testimonios ficticios
❌ Sin gráficos con datos inexistentes
❌ Sin modificación de cifras

## Notas de Desarrollo

- **Sin Backend**: La página es estática y no requiere servidor backend
- **SPA Simulada**: Simula un Single Page Application con navegación interactiva
- **Extensible**: Fácil de agregar más secciones o funcionalidades
- **Mantenible**: Código bien estructurado y documentado

## Próximas Mejoras Opcionales

- Integración con analytics
- Modo oscuro
- Exportación a PDF
- Integración con plataformas de presentación
- Idioma múltiple

---

**Última actualización**: Mayo 2026
**Estado**: Producción ✓
