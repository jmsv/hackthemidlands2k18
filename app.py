import nexmo
from decouple import config

app_name = 'hacc'

client = nexmo.Client(key=config('NEXMO_KEY'), secret=config('NEXMO_SECRET'))

client.send_message({
    'from': app_name,
    'to': config('TEST_NUMBER'),
    'text': 'everything is working!',
})
