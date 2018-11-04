#!/usr/bin/env python

import serial
import serial.tools.list_ports
import time
import paho.mqtt.client as mqtt

class Device:
    def __init__(self, details):
        self.ser = serial.Serial(details)
    def close(self):
        self.ser.close()
    def write(self, message):
        self.ser.write(message)

class SerialDevices:
    @staticmethod
    def select_device(details):
        return details
    @staticmethod
    def list_devices():
        return serial.tools.list_ports.comports()


class Motor(Device):
    def __init__(self, device):
        Device.__init__(self, device)
    def rotate(self, direction, sleep_time):
        self.write(str.encode(str(direction)))
        time.sleep(sleep_time)
        self._stop()
        pass
    def _stop(self):
        self.write(str.encode(str(0)))

def main():
    mqttc = mqtt.Client()

    mqttc.connect(
        'broker.mqttdashboard.com',
        1883,
        60
    )

    device_list = SerialDevices.list_devices()
    device = Motor(
        SerialDevices.select_device(device_list[0].device)
    )

    # Our actions
    def on_connect(client, userdata, flags, rc):
        # subscribe to the channel
        client.subscribe('covhack/superior-siege-weapon')

    def on_message(client, userdata, msg):
        device.rotate(1, 15)

    mqttc.on_connect = on_connect
    mqttc.on_message = on_message

    mqttc.loop_forever()


if __name__ == "__main__":
    main()
