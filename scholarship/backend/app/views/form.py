from flask import Flask, request, jsonify
from flask_cors import CORS

from .. import app,crud


CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})  # Allow requests from http://localhost:5173


#FORMONE
@app.route('/api/formone', methods=['POST'])
def submit_formone():
    try:
        form_data = request.json  # Assuming the data is sent as JSON
        # Process the form data here
        print("Received form data:", form_data)

        # print("Checking if formone data already exists with phone number:", form_data['phone'])

        crud.store_scholarship(form_data)
        # if crud.store_scholarship(form_data['phone']):
        #     print("Formone data already exists with phone number:", form_data['phone'])
        # else:
        #     crud.store_formone(form_data)
        #     print("Formone data stored successfully")
        #     # display_formone()

        alert_message = "This is an alert message from Flask!"
        return jsonify(alertMessage=alert_message)
    except Exception as e:
        print("Error processing form:kjhjkhkj", str(e))
        return jsonify({"error": "An error occurred while processing the form data"}), 500

# def display_formone():
#     formone_data = crud.get_formone()
#     print("Formone data:", formone_data)
#     print("phone number:", formone_data[0].phone)
