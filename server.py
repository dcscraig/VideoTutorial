from flask import Flask, render_template,request

import os
def create_app():
    app = Flask(__name__)
    @app.route("/")
    def hello_world():
        print(os.getcwd())
        folders = os.listdir("/home/tech/VideoTutorial/static/videos/")
        videos = []
        for folder in folders:
            temp = [folder,[]]
            for video in os.listdir("/home/tech/VideoTutorial/static/videos/"+folder):
                 print(video)
                 temp[1].append(folder+"/"+video.split(".")[0])
            videos.append(temp)
        print(videos)
        return render_template("base.html", videos=videos)
    @app.route('/log',methods=['POST'])
    def log_post():
        data = request.form.to_dict(flat=False)
        print(data)
        # f = open("log.txt","a")
        # f.write(str(data)+"\n")
        # f.close()
        return []
    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
