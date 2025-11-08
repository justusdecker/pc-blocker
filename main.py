from flask import Flask,jsonify, render_template

VERSION = '0_18'

app = Flask(__name__)

@app.route('/',methods = ['GET'])
def change_settings():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000)