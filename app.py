import os
from flask import Flask, render_template

app = Flask(__name__, template_folder="templates")  # Explicitly set templates folder

@app.route("/")
def index():
    print("Looking for:", os.path.abspath("templates/index.html"))  # Debugging print
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
