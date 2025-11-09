from flask import Flask,jsonify, render_template, request, redirect

VERSION = '0_18'

app = Flask(__name__)

LOGIN_API_KEY = '1234'

@app.route('/send',methods = ['POST'])
def send():
    print(request.data)
    return jsonify(request.args), 200
    
@app.route('/status',methods = ['GET'])
def status():
    API_KEY = request.args.get('api_key')
    if API_KEY != LOGIN_API_KEY:
        return jsonify({'error': 'Invalid API Key'}), 403
    return render_template('status.html')

@app.route('/user-login',methods = ['GET'])
def user_login():
    return render_template('user-login.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000)