import requests
import json

class NexmoTwoFactor:

    def __init__(self, API_KEY, API_SECRET, brand):
        self.API_KEY = API_KEY
        self.API_SECRET = API_SECRET
        self.brand = brand

    def getCode(self, number):
        r = requests.post(
            'https://api.nexmo.com/verify/json',
            data={
                'api_key': self.API_KEY,
                'api_secret': self.API_SECRET,
                'brand': self.brand,
                'number': number
            }
        )
        code = None
        try:
            code = r.json()['request_id']
        except KeyError:
            pass
        return code

    def verifyCode(self, request_id, code):
        r = requests.post(
            'https://api.nexmo.com/verify/check/json',
            data={
                'api_key': self.API_KEY,
                'api_secret': self.API_SECRET,
                'request_id':  request_id,
                'code': code
            }
        )
        return r.json()['status'] == '0'

