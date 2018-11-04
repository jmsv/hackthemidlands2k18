from flask import Flask, request
import json

from app import utils
from . import app, redis_store

# Activate the siege weapon...
# No turning back now.
@app.route('/enable', methods=['POST'])
def enable():
    body = request.get_json()
    # Validate the their token.
    if 'tfa_token' not in body or 'priming_token' not in body:
        return json.dumps(
            {
                'message': 'missing required tokens.'
            }
        )

    # Now check our tokens are in the database and valid.
    valid = True
    if redis_store.get(
            'tfa:{}'.format(body['tfa_token'])) != b'tfa':
        valid = False
    if redis_store.get(
            'priming:{}'.format(body['priming_token'])) != b'priming':
        valid = False

    if valid is False:
        return json.dumps(
            {
                'message': 'The tokens provided are invalid'
            }
        )
    # Send a message to the controller.

    # Done!
    return json.dumps(
        {
            'message': 'firing the weapon.'
        }
    )

# Two factor  

@app.route('/getCode')
def getCode():
    nexmoTFA = utils.get_nexmo_tfa()
    request_id = nexmoTFA.getCode(app.config['TFA_NUMBER'])
    return json.dumps(
        {
            'message': 'Sent TFA to authorized number.',
            'request_id': request_id
        }
    )

@app.route('/verifyCode', methods=['POST'])
def verifyCode():
    body = request.get_json()

    if 'tfa_code' not in body or 'request_id' not in body:
        return json.dumps(
            {
                'message': 'Please provide the TFA code and request id'
            }
        )
    # get a nexmo 2fa instance.
    nexmoTFA = utils.get_nexmo_tfa()

    if nexmoTFA.verifyCode(body['request_id'], body['tfa_code']):
        tfa_token = utils.generate_token()
        # store in database
        redis_store.set('tfa:{}'.format(tfa_token), 'tfa')
        # respond
        return json.dumps(
            {
                'message': 'TFA code is correct',
                'tfa_token': tfa_token
            }
        )
    return json.dumps(
        {
            'message': 'TFA Code is incorrect.'
        }
    )

# Get a token to use. You get one by sending the priming code as a post
# request
@app.route('/getToken', methods=['POST'])
def getToken():
    body = request.get_json()
    if 'priming_code' not in body:
        return json.dumps(
            {
                'message': 'Provide a priming code'
            }
        )
    if body['priming_code'] == app.config['PRIMING_CODE']:
        priming_token = utils.generate_token()
        # store in database.
        redis_store.set('priming:{}'.format(priming_token), 'priming')
        # respond
        return json.dumps(
            {

                'message': 'Priming code is correct.',
                'priming_token': priming_token
            }
        )
    return json.dumps(
        {
            'message': 'Priming code is incorrect.'
        }
    )

@app.route('/')
def index_page():
    return json.dumps(
        {
            'name': 'superior-siege-weapon API'
        }
    )
