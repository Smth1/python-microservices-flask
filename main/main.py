from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from sqlalchemy import UniqueConstraint, create_engine

app=Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = 'mysql://root:root@db/main'

engine = create_engine('mysql+mysqldb://root:root@db/main')


CORS(app)

db = SQLAlchemy(app)

migrate = Migrate(app, db)

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True, auto_increment=False)
    title = db.Column(db.String(200))
    image = db.Column(db.String(200))


class ProductUser(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    product_id = db.Column(db.Integer)

    UniqueConstraint('user_id', 'product_id', name='user_product_unique')


@app.route('/')
def slash():
    return 'Hello'


@app.route('/index')
def index():
    return 'index'

if __name__ == '__main__':
    #DEBUG is SET to TRUE. CHANGE FOR PROD
    app.run(host='0.0.0.0',port=5000,debug=True)
