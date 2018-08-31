from flask import Flask, render_template

app = Flask(__name__, static_url_path="/static")


@app.route("/")
def main():
    return render_template('main.html')


@app.route("/<tag>")
@app.route("/<tag>/<card>")
def directLink(tag, card=""):
    return render_template("main.html", card=card, tag=tag)


# @app.route("/<tag>")
# def directList(tag):
#     return render_template("main.html", tag=tag)


@app.route("/answer")
def answer():
    return render_template("answer.html")


if __name__ == '__main__':
    app.run(debug=True)
