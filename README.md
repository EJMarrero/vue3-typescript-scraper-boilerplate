# Proyecto de Análisis de Sentimientos

Este proyecto es una solución full-stack que realiza análisis de sentimientos usando Web Scraping, la API de OpenAI y almacenamiento en una base de datos SQLite. Además, expone una API REST usando Flask y muestra los datos en un frontend implementado con Vue 3, Vite y TypeScript, siguiendo un patrón repositorio en la capa de servicios.

## Arquitectura y Módulos

- **Scraper**  
  - `scraper_analysis.py`: Realiza scraping de opiniones, análisis de sentimiento y guarda los resultados.
  - `twitter_trends_scraper.py`: Extrae trending topics desde Trends24.

- **Database**  
  - `init_db.py`: Inicializa y migra la base de datos SQLite.
  - `models.py`: Define los modelos de datos (Opiniones y Trending).

- **Backend**  
  - `api_app.py`: Aplicación Flask con endpoints:
    - `/`: Mensaje de bienvenida.
    - `/api/opiniones`: Retorna opiniones analizadas.
    - `/api/trending`: Retorna trending topics.
  - `config.py`: Configuraciones de la aplicación.
  - `blueprints/`: Contiene los endpoints modularizados.
  - `tests/`: Pruebas unitarias e integración para el backend (con pytest).

- **Frontend**  
  - Implementado con Vue 3, Vite y TypeScript.
  - Estructura:
    - `components/`: Componentes reutilizables (ReviewCard, TrendingCard).
    - `views/`: Vistas principales (HomeView).
    - `store/`: Gestión de estado global con Pinia.
    - `services/`: Capa repositorio para llamadas al backend.
    - `models/`: Definición de interfaces y tipos.

## Configuración del Entorno

1. **Variables de entorno**  
   Crea un archivo `.env` basado en `.env.example`:

   ```dotenv
   OPENAI_API_KEY=tu_openai_api_key_aqui
   DATABASE_URL=sqlite:///database.db
   VITE_API_URL=http://localhost:3000/api
   ```

2. **Backend**  
   - Instalar dependencias: `pip install -r requirements.txt`
   - Ejecutar la aplicación: `python backend/api_app.py`

3. **Scraper**  
   - Ejecutar el scraper de opiniones: `python scraper/scraper_analysis.py`
   - Ejecutar el scraper de trending topics: `python scraper/twitter_trends_scraper.py`

4. **Frontend**  
   - Navegar a la carpeta `frontend` y ejecutar:
     ```bash
     npm install
     npm run dev
     ```

## Testing y CI/CD

- Se incluyen pruebas unitarias para el backend en `backend/tests/`.
- Se incluye una prueba end-to-end en `tests/e2e/spec.cy.ts` para el frontend (usando Cypress).
- Un pipeline de CI/CD está configurado en `.github/workflows/ci.yml`.

## Despliegue

Se incluye ejemplo de despliegue con Docker y Docker Compose:
- `Dockerfile`: Para el backend.
- `docker-compose.yml`: Para levantar backend y frontend en contenedores.

## Contribución y Convenciones

- Se emplean buenas prácticas de desarrollo, logging y manejo de errores.
- Documentación y comentarios en cada módulo.
- Se utilizan herramientas de linting (Black, ESLint/Prettier) para garantizar la calidad del código.

---

¡Disfruta desarrollando y ampliando esta solución! 