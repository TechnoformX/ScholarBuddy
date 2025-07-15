from flask import Flask, request, jsonify
import pandas as pd

app = Flask(__name__)


df = pd.read_json("Scholarships.json")

@app.route('/filter_scholarships', methods=["POST"])
def filter_scholarships():
    user_input = request.json

    try:
        
        filtered_df = df[
            (df["gender"] == user_input["gender"]) &
            (df["religion"] == user_input["religion"]) &
            (df["income"] == user_input["income"]) &
            (df["education_qualification"] == user_input["education_qualification"]) &
            (df["annual-percentage"].fillna("").astype(str) == str(user_input["annual-percentage"])) &
            (df["country"] == user_input["country"])
        ]
        
        filtered_df = filtered_df.head(10)

        return jsonify(filtered_df.to_dict(orient='records'))

    except KeyError as e:
        return jsonify({"error": f"Missing or incorrect column in data: {str(e)}"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
