import pandas as pd
from flask import jsonify

def filter_scholarships(request):
    user_input = request.json
    df = pd.read_json("Scholarships.json")
    
    df["name"] = df["name"].astype(str).str.strip()

    try:
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

    except KeyError as e:
        return jsonify({"error": f"Missing column: {str(e)}"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500
