import { Request, Response } from "express";
import { client } from "../../data/mqtt/mqtt.connection";
import { envs } from "../../config/envs";

export class ControlController {
  public mover = (req: Request, res: Response) => {
    const { action } = req.body;

    if (action) {
      client.publish(envs.MQTT_TOPIC, action, (error) => {
        if (error)
          res.status(500).json({ error: "Error al publicar en MQTT!!" });
        
        res.json({ message: `Acción "${action}" publicada en MQTT!!!` });
      });
    } else {
      res.status(400).json({ error: "No se ha recibido ninguna acción!!!" });
    }
  };
}
