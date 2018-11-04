import paho.mqtt.client as mqtt

def enable():
    mqttc = mqtt.Client()

    mqttc.connect(
        'broker.mqttdashboard.com',
        1883,
        60
    )

    # Our actions
    def on_connect(client, userdata, flags, rc):
        # subscribe to the channel
        client.publish('covhack/superior-siege-weapon')
        client.disconnect()

    mqttc.on_connect = on_connect

    mqttc.loop_forever()
