from dataclasses import dataclass
import requests

from flask import Flask, jsonify, abort
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from sqlalchemy import UniqueConstraint, create_engine

from producer import  publish

app=Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = 'mysql://root:root@db/main'

engine = create_engine('mysql+mysqldb://root:root@db/main')


CORS(app)

db = SQLAlchemy(app)

migrate = Migrate(app, db)

@dataclass
class Product(db.Model):
    id:int
    title:str
    image:str

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


@app.route('/api/products')
def index():
    return jsonify.(Product.query.all())


@app.route('/api/products/<id:int>/like', methods=['POST'])
def like(id):
    req = requests.get('http://localhost:8000/api/user')
    json = req.json()

    try:
        productUser = ProductUser(user_id=json['id'], product_id=id)
        db.session.add(productUser)
        db.session.commit()

        publish('product_liked', id)
    except:
        abort(400, 'you already liked this product')

    return jsonify({
        'message' : 'success'
    })


if __name__ == '__main__':
    #DEBUG is SET to TRUE. CHANGE FOR PROD
    app.run(host='0.0.0.0',port=5000,debug=True)
