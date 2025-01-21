# LaFerrari Control

Este proyecto es una aplicación web para controlar un vehículo LaFerrari a través de una interfaz de usuario. La aplicación se comunica con un backend que publica acciones en un broker MQTT.

## Contenido

- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Dependencias](#dependencias)
- [Scripts](#scripts)
- [Configuración](#configuración)

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/laFerrari-control.git
    cd laFerrari-control
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
    ```
    PORT=3000
    MQTT_URL=tu_mqtt_url
    MQTT_CLIENT_ID=tu_mqtt_client_id
    MQTT_TOPIC=tu_mqtt_topic
    MQTT_USERNAME=tu_mqtt_username
    MQTT_PASSWORD=tu_mqtt_password
    ```

## Uso

1. Inicia el servidor en modo desarrollo:
    ```bash
    npm run dev
    ```

2. Abre tu navegador y navega a `http://localhost:3000` para ver la interfaz de control.

## Estructura del Proyecto

```
laFerrari-control/
├── public/
│   ├── css/
│   │   └── index.css
│   ├── js/
│   │   └── index.js
│   └── index.html
├── src/
│   ├── config/
│   │   └── envs.ts
│   ├── data/
│   │   └── mqtt/
│   │       └── mqtt.connection.ts
│   ├── presentation/
│   │   ├── app.routes.ts
│   │   └── control/
│   │       ├── control.controller.ts
│   │       └── control.routes.ts
│   └── server.ts
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Dependencias

- `express`: Framework web para Node.js.
- `cors`: Middleware para habilitar CORS.
- `dotenv`: Carga variables de entorno desde un archivo `.env`.
- `env-var`: Manejo de variables de entorno.
- `mqtt`: Cliente MQTT para Node.js.

## Scripts

- `dev`: Inicia el servidor en modo desarrollo.
- `build`: Compila el proyecto TypeScript a JavaScript.
- `start`: Compila y luego inicia el servidor.

## Configuración

El archivo `src/config/envs.ts` maneja la configuración del entorno utilizando variables de entorno definidas en el archivo `.env`.

```ts
import "dotenv/config";
import { get } from "env-var";

export const envs = {
  PORT: get("PORT").required().asPortNumber(),
  MQTT_URL: get("MQTT_URL").required().asString(),
  MQTT_CLIENT_ID: get("MQTT_CLIENT_ID").required().asString(),
  MQTT_TOPIC: get("MQTT_TOPIC").required().asString(),
  MQTT_USERNAME: get("MQTT_USERNAME").required().asString(),
  MQTT_PASSWORD: get("MQTT_PASSWORD").required().asString(),
};
```