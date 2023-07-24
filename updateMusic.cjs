const fs = require("fs");
fs.readdir("./public/music/", (err, files)=>{
    fs.writeFile("./public/music/songs.json", JSON.stringify(files), 'utf8', (err)=>{
        if (err) console.log(err);
    });
});
