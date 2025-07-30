from flask import Flask, request, jsonify
import pandas as pd

app = Flask(__name__)

df = pd.read_json("Scholarships.json")
df["name"] = df["name"].astype(str).str.strip()

@app.route('/filter_scholarships', methods=['POST'])
def filter_scholarships():
    user_input = request.json


    filtered_df = df[
        (df["gender"] == user_input["gender"]) &
        (df["religion"] == user_input["religion"]) &
        (df["income"] == user_input["income"]) &
        (df["education_qualification"] == user_input["education_qualification"]) &
        (df["annual-percentage"].astype(str) == user_input["annual-percentage"]) &
        (df["country"] == user_input["country"])
    ]


    grouped_df = filtered_df.groupby("name", as_index=False).first()

    
    top_results = grouped_df.head(10)

 
    return jsonify(top_results.to_dict(orient="records"))
