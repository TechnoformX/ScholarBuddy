# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from filter_scholarships import filter_scholarships  # ✅ Import logic

# app = Flask(__name__)
# CORS(app, origins=["http://localhost:5173"])

# @app.route('/filter_scholarships', methods=["POST"])
# def handle_filter():
#     return filter_scholarships(request)  # ✅ Just call the function

# if __name__ == '__main__':
#     app.run(debug=True)
from flask import Flask, request, jsonify
from flask_cors import CORS
from filter_scholarships import filter_scholarships  # ✅ Import logic

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])

@app.route('/filter_scholarships', methods=["POST"])
def handle_filter():
    return filter_scholarships(request)  # ✅ Your logic here

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    message = data.get('message', '')

    # ✅ Dummy AI logic
    bot_reply = f" {message}. Im ScholarBuddy, here to assist you!"

    return jsonify({'response': bot_reply})

if __name__ == '__main__':
    app.run(debug=True)
