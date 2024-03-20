# Secret key for flask
FLASK_SECRET_KEY = "3aa9212bcfc423faa94573ffd859c1080a801e8527aaf36733f5a1898a648642"


# SQL database constants
DATABASE_NAME = "admission"
MYSQL_USER = "karthik"
MYSQL_PASSWORD = "password"
MYSQL_PORT = "localhost:3306"
SQLALCHEMY_DATABASE_URL = (
    f"mysql://{MYSQL_USER}:{MYSQL_PASSWORD}@{MYSQL_PORT}/{DATABASE_NAME}"
)
# create a database login first
"""
# see https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04
CREATE USER 'karthik'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'karthik'@'localhost' WITH GRANT OPTION;
"""
