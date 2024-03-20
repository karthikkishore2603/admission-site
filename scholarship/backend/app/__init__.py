from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from .constants import *
import pymysql
from flask_cors import CORS

pymysql.install_as_MySQLdb()

app = Flask(__name__)

# FLASK_SECRET_KEY = "3aa9212bcfc423faa94573ffd859c1080a801e8527aaf36733f5a1898a648642"


# DATABASE_NAME = "admission"
# MYSQL_USER = "karthik"
# MYSQL_PASSWORD = "password"
# MYSQL_PORT = "localhost:3306"
# SQLALCHEMY_DATABASE_URL = (
#     f"mysql://{MYSQL_USER}:{MYSQL_PASSWORD}@{MYSQL_PORT}/{DATABASE_NAME}"
# )

app.config["SQLALCHEMY_DATABASE_URI"] = constants.SQLALCHEMY_DATABASE_URL
app.config["SECRET_KEY"] = constants.FLASK_SECRET_KEY 
app.config['SQLALCHEMY_POOL_SIZE'] = 10
app.config['SQLALCHEMY_POOL_TIMEOUT'] = 30
# db = SQLAlchemy(app)
engine = create_engine(constants.SQLALCHEMY_DATABASE_URL, connect_args={'charset': 'utf8mb4', 'autocommit': True})
connection = engine.connect()
db = SQLAlchemy(app)

 
print("Database connection established")

# with app.app_context():
#     from . import models
#     db.create_all()

from . import views, crud

        

