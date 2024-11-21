from flask import Flask, request, jsonify
from model import get_summary  
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/summary', methods=['POST'])
def summarize():
    
    data = request.json
    input_text = data.get('text') 
    if not input_text:
        return jsonify({'error': 'No input text provided'}), 400
    
    summary = get_summary(input_text)
    
    return jsonify({'summary': summary})

if __name__ == '__main__':
    app.run(debug=True)
