// Core Module
const fs = require('fs');
const path = require('path')
const rootDir = require('../utils/pathUtil')

const homeDataPath = path.join(rootDir, 'data', 'homes.json');

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
        this.id = Math.random().toString();
        registeredHomes.push(this);
        fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), error => {
            console.log("File Writing Concluded", error);
        })
    }

    static fetchAll(callback){
        fs.readFile(homeDataPath, (err, data) => {
            // console.log("File read:", err, data);
            callback(!err ? JSON.parse(data): []);
        });
    }

    static findById(homeId, callback) {
        this.fetchAll(homes => {
            const homeFound = homes.find(home => home.id === homeId);
            callback(homeFound);
        })
    }
};