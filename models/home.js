// Core Module
const fs = require('fs');
const path = require('path')
const rootDir = require('../utils/pathUtil')

// demo database
let registeredHomes = [];

module.exports = class home{
    constructor(houseName, price, location, photoUrl){
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.photoUrl = photoUrl;
    }

    save(){
        registeredHomes.push(this);
        const homeDataPath = path.join(rootDir, 'data', 'homes.json');
        fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), error => {
            console.log("File Writing Concluded", error);
        })
    }

    static fetchAll(callback){
        const homeDataPath = path.join(rootDir, 'data', 'homes.json');
        fs.readFile(homeDataPath, (err, data) => {
            console.log("File read:", err, data);
            callback(!err ? JSON.parse(data): []);
        });
        
    }
}