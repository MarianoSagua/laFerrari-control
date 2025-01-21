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
