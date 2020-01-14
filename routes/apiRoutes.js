

module.exports = function(app){

    app.get("/api/notes", function(req, res){
        fs.readFile("../db/db.json", "utf-8", function(err, data){
            if (err) throw err;
            res.json(data);
        });
    })

    app.post("/api/notes", function(req, res){
        fs.appendFile("../db/db.json",json.stringify(req.body), function(err){
            if (err)
            throw err;
        });
    });

    app.delete("api/notes/:id", function(req, res){
        fs.readFile("../db/db.json", "utf-8", function(err, data){
            for(entry in data){
                if(entry.id == id)
                data.splice(id,1)
            }
        });
    });
}