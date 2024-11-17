# 🚍 Proyecto Dashboard de Buses - CIVA

## ✨ Introducción

Este proyecto es una solución Full Stack diseñada para gestionar y visualizar información sobre buses. Combina un backend robusto desarrollado con **Spring Boot** y un frontend moderno construido en **React**. 

La solución permite realizar operaciones como búsqueda avanzada, paginación, y manejo de datos mediante una interfaz intuitiva, siguiendo las mejores prácticas de desarrollo.

---

## 🛠️ Cómo ejecutar el proyecto

### Requisitos previos
1. **Backend**:
   - **JDK 17 o superior** instalado.
   - **Maven** instalado.
   - **MySQL** instalado y configurado.

2. **Frontend**:
   - **Node.js** y **npm** instalados.
   - **React** configurado.

---

### ⚙️ Backend

#### Pasos para ejecutar:
1. Clona el repositorio:
   ```bash
   git clone <repositorio-backend-url>
   cd backend

2. Configura la conexión a la base de datos en el archivo application.yml:
```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:<PUERTO>/civa
    username: <USUARIO>
    password: <CONTRASEÑA>
```
Nota: No es necesario crear las tablas manualmente. Flyway gestionará las migraciones automáticamente al iniciar el proyecto.

3. Crea una base de datos vacía llamada civa.
4. Compila y ejecuta el proyecto:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

   El backend estará disponible en http://localhost:8080.

---

### 💻 Frontend

#### Pasos para ejecutar:
1. Clona el repositorio:
    ```bash
    git clone <repositorio-frontend-url>
    cd frontend
     ```
2. Instala las dependencias:
    ```bash
    npm install
     ```
3. Ejecuta el proyecto:
    ```bash
    npm run dev
     ```
5. Accede al frontend en http://localhost:5173.

---

## 🚀 Backend

### Tecnologías utilizadas
- **Spring Boot 3**
- **Java 17**
- **Spring Data JPA**
- **Hibernate Validator** (Validaciones)
- **Flyway** (Migraciones)
- **MapStruct** (Mapeo de objetos)
- **Lombok**

### Descripción
1. **Arquitectura:**
   - API RESTful implementada con métodos CRUD básicos.
   - Listado de buses con paginación y búsqueda personalizada utilizando Query Methods de JPA.

2. **Capas adicionales:**
   - Uso de DTOs para mejorar la seguridad y separar la lógica de negocio.
   - Manejador global de excepciones con un catálogo de excepciones personalizadas.

3. **Migraciones:**
   - Flyway se utilizó para gestionar la evolución de la base de datos.

---

### Endpoints del Backend

| Método   | Endpoint                                              | Descripción                                          |
|----------|-------------------------------------------------------|------------------------------------------------------|
| GET      | `http://127.0.0.1:8080/buses/v1/api`                  | Lista todos los buses.                              |
| GET      | `http://127.0.0.1:8080/buses/v1/api/{id}`             | Obtiene información de un bus por su ID.            |
| POST     | `http://127.0.0.1:8080/buses/v1/api`                  | Crea un nuevo bus.                                  |
| PUT      | `http://127.0.0.1:8080/buses/v1/api/{id}`             | Actualiza la información de un bus.                 |
| DELETE   | `http://127.0.0.1:8080/buses/v1/api/{id}`             | Elimina un bus por su ID.                           |
| GET      | `http://127.0.0.1:8080/buses/v1/api/page?page={page}&size={size}` | Lista los buses paginados.                         |
| GET      | `http://127.0.0.1:8080/buses/v1/api/plate?plateNumber={placa}` | Busca buses que coincidan con el número de placa.  |

---

## 🌐 Frontend

### Tecnologías utilizadas
- **React 18+**
- **TypeScript**
- **TailwindCSS**
- **Fetch API**

### Descripción
1. **Funcionalidades:**
   - Listado de buses con paginación.
   - Búsqueda avanzada por ID o placa.
   - Estados de carga y manejo de errores implementados.

2. **Componentes clave:**
   - **Header:** Barra de navegación principal.
   - **SearchBar:** Barra de búsqueda configurable.
   - **Table:** Componente para mostrar los datos en tabla.
   - **Pagination:** Navegación entre páginas.

---

## 🗄️ Base de Datos

- **Motor utilizado:** MySQL.
- El esquema fue gestionado automáticamente mediante **Flyway**, garantizando consistencia y rastreo del progreso de la base de datos.

---

## ✅ Cumplimiento de requisitos

1. **Requisitos obligatorios:**
   ✔️ Completamente implementados.

2. **Requisitos opcionales:**
   ✔️ La mayoría fueron implementados, incluyendo:
   - Paginación.
   - Búsqueda avanzada.
   - Uso de TypeScript en el frontend.

---

## 🔍 Conclusiones

El proyecto demuestra una integración exitosa entre un backend robusto y un frontend moderno. Se implementaron las mejores prácticas, logrando un sistema escalable, modular y fácil de mantener. Además, se añadieron funcionalidades opcionales que enriquecen la experiencia del usuario final.

---

## 🚀 Posibles mejoras

1. **Gestión de buses:**
   - Implementar un dashboard para crear, actualizar y eliminar buses desde el frontend.

2. **Seguridad:**
   - Añadir autenticación y autorización tanto en la API como en el frontend.

3. **Pruebas:**
   - Implementar pruebas unitarias y de integración para garantizar calidad en el sistema.

4. **Optimización UX/UI:**
   - Mejorar la experiencia visual con animaciones y transiciones dinámicas.

---

## 📞 Contacto

- **Nombre:** Garyn Fernando
- **Correo:** garyn.fernando.hr@gmail.com

---



