import pandas as pd
import json


df = pd.read_json("Scholarships.json")


user_gender = input("Enter gender (e.g., Male/Female): ")
user_religion = input("Enter religion (e.g., Muslim/Christian): ")
user_income = input("Enter income (e.g., 'Upto 1.5L'): ")
user_education = input("Enter education qualification (e.g., Undergraduate): ")
user_annualpercentage = input("Enter your marks percentage: ")
user_country = input("Enter your country (e.g., India): ")

user_input = {
    "gender": user_gender,
    "religion": user_religion,
    "income": user_income,
    "education_qualification": user_education,
    "annual-percentage": user_annualpercentage ,
    "country": user_country
}


filtered_df = df[
    (df["gender"] == user_input["gender"]) &
    (df["religion"] == user_input["religion"]) &
    (df["income"] == user_input["income"]) &
    (df["education_qualification"] == user_input["education_qualification"]) &
    (df["annual-percentage"].astype(str) == user_input["annual-percentage"]) &
    (df["country"] == user_input["country"])
]



print("Matching Scholarships:")
for name in filtered_df["name"].unique():
    print("-", name)
