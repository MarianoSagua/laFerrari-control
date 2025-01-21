import mqtt from "mqtt";
import { envs } from "../../config/envs";

const data = {
  clientId: envs.MQTT_CLIENT_ID,
  clean: true,
  connectTimeout: 4000,
  username: envs.MQTT_USERNAME,
  password: envs.MQTT_PASSWORD,
  reconnectPeriod: 1000,
};

export const client = mqtt.connect(envs.MQTT_URL, data);

client.on("connect", () => {
  console.log("Conectado al broker MQTT!!!");
});
