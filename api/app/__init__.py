from flask import Flask
from flask_redis import FlaskRedis
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__, instance_relative_config=True)

# Enable the Redis
redis_store = FlaskRedis(app)

# Load our user details.
app.config['PRIMING_CODE'] = os.environ['PRIMING_CODE']
app.config['TFA_NUMBER'] = os.environ['TFA_NUMBER']

from app import views
