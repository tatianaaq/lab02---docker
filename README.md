# Laboratorio 02 - Docker Compose

Proyecto de Docker Compose que contiene una API construida localmente y una base de datos PostgreSQL ejecutada mediante contenedores Docker.

## Estructura del proyecto

```text
LAB02/
│
├── api/
│   ├── Dockerfile
│   ├── server.js
│   └── package.json
│
├── .env
├── .env.example
├── .gitignore
├── compose.yaml
└── README.md
```

## Autor

Tatiana Antonella Quevedo Alayo

## Objetivo

Desplegar 3 copias de una API construida localmente y una base de datos PostgreSQL utilizando Docker Compose.

La API se construye localmente desde:

```yaml
build: ./api
```

La ejecución de las 3 copias se realizó mediante:

```bash
docker compose up --build --scale api=3
```

La respuesta de la API utiliza variables de entorno configuradas en el archivo `.env`.

## Variables de entorno

Se utilizó `.env.example` como referencia:

```env
MESSAGE=Hola desde Tatiana API
PORT=3000
POSTGRES_USER=tatiana
POSTGRES_PASSWORD=tatiana2026
POSTGRES_DB=lab02
```

Los valores utilizados por los servicios son obtenidos desde `.env`.

## Base de datos

Se utilizó PostgreSQL versión 16.

Configuración:

```yaml
POSTGRES_USER: ${POSTGRES_USER}
POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
POSTGRES_DB: ${POSTGRES_DB}
```

## Volumen utilizado

Se configuró un volumen para mantener los datos de PostgreSQL:

```yaml
pgdata:/var/lib/postgresql/data
```

Volumen creado:

```text
lab02_pgdata
```

## Tipos de volúmenes en Docker

- Named Volume: volumen administrado por Docker.
- Anonymous Volume: volumen creado sin nombre.
- Bind Mount: conecta una carpeta del equipo con el contenedor.

En este laboratorio se utilizó un Named Volume.

## Tipos de redes en Docker

- Bridge: permite la comunicación entre contenedores.
- Host: utiliza la red del equipo anfitrión.
- None: contenedor sin conexión de red.
- Overlay: comunicación entre diferentes hosts.
- Macvlan: conexión con una red física.

Se utilizó una red tipo Bridge:

```text
lab02_app-network
```

## Comandos utilizados

### Docker

- `docker build -t tatiana-api .` : construye la imagen de la API.
- `docker compose up --build --scale api=3` : ejecuta los servicios.
- `docker compose ps` : muestra los contenedores activos.
- `docker volume ls` : muestra los volúmenes creados.
- `docker network ls` : muestra las redes creadas.
- `docker compose down` : detiene los servicios.

### Git

- `git init` : inicia el repositorio.
- `git status` : muestra los cambios realizados.
- `git add .` : agrega los archivos.
- `git commit` : crea un commit.

## .gitignore

El archivo `.gitignore` evita subir archivos privados o innecesarios.

```text
.env
node_modules/
```

## Conventional Commits

Se utilizó la estructura:

```text
tipo: descripción
```

Ejemplos:

- `feat`: incorporación de funcionalidades.
- `docs`: cambios de documentación.
- `chore`: cambios de configuración.