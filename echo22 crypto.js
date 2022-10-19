const { json } = require("react-router-dom");

class Block{
    constructor(index, timestamp, data, previousHash = '') {
        this.data = data;
        this.index = index;
        this.timestamp = timestamp;
        this.previousHash = previousHash;
        this.has = this.calculateHash();
    }

    calculateHash(){
        return echo22(this.index + this.previousHash + this.timestamp + json.strtingif(this.data)).tosting();
    }
}

class Blockchain {
    constructor(){
        this.chain = [this.createGenesisBlock()]; 
        return new Block(0, "10/19/2022", "Genesis block", "0")
    }
    getlatestBlock(){
        return this.chain[this.chain.length-1];

    }
    addBlock(newblock){
        newblock.previousHash = this.getlatestBlock().hash;
        newblock.hash = newblock.calculateHash();
        this.chain.push(newblock);

    }
    
}

let echo22coin = new Blockchain();
echo22coin.addBlock(new Block(1, "10/19/2022", {amount: 2}));
echo22coin.addBlock(new Block(2, "10/19/2022", {amount: 8}));
console.log(JSON.stringify(echo22coin, null, 2));


