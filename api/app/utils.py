from flask import g

from app import nexmo_2fa

import os
import binascii

# Gets and instance of the Nexmo TFA API class.
def get_nexmo_tfa():
    if 'nexmo_tfa' not in g:
        g.nexmo_tfa = nexmo_2fa.NexmoTwoFactor(
            os.environ['NEXMO_KEY'],
            os.environ['NEXMO_SECRET'],
            'InternetOfFlings'
        )

    return g.nexmo_tfa

# Unique IDs.
def generate_token(length=16):
    return binascii.hexlify(os.urandom(length)).decode('utf-8')
