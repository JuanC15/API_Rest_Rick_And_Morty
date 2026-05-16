# Entregable API REST — Frontend

Resumen corto
---------------
Aplicación frontend creada con Vite + React para consumir y mostrar datos de la API REST RIck & Morty del entregable del curso. Proporciona vistas de listado de personajes, detalle individual y opciones de filtrado.

Características principales
-------------------------
- Páginas: Home, Characters, Details, Error
- Componentes reutilizables: `Header`, `Nav`, `CardCharacter`, `Footer`
- Filtrado y búsqueda de personajes según criterios del enunciado
- Responsive: adaptado para móviles y escritorio

Requisitos
---------
- Node.js v16+
- npm

Instalación
-----------
Clona el repositorio e instala dependencias:

```bash
git clone <repo-url>
cd Entregable_API_Rest
npm install
```

Ejecución en desarrollo
-----------------------
Inicia el servidor de desarrollo y abre la URL que muestra Vite:

```bash
npm run dev
```

Build / Producción
-------------------
Genera los archivos de producción y prueba el `preview`:

```bash
npm run build
npm run preview
```

Variables de entorno
--------------------
- `VITE_API_BASE_URL=https://rickandmortyapi.com/api/character`

API / Endpoints
-------------------------
- `GET /characters` — lista de personajes paginada
- `GET /characters/:id` — detalle de un personaje

Estructura del proyecto
-----------------------
- `src/` — código fuente: componentes, páginas, estilos
- `public/` — assets estáticos
- `package.json` — scripts y dependencias

Scripts útiles
--------------
- `npm run dev` — servidor de desarrollo
- `npm run build` — construir para producción
- `npm run preview` — servir build localmente

Despliegue
---------
Desplegado en Vercel:
https://api-rest-rick-and-morty.vercel.app/

Autor y licencia
-----------------
- Autor: Juan Carlos Aroca Valenzuela

Referencias y entregables
------------------------
Las referencias de este entregable se encuentran en el PDF inmerso en el proyecto "Requerimientos del Entregable API Rest.pdf".