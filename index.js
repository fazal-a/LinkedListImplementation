console.log("start-----------------------------------------")

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const getName = (callback) => {
        rl.question("What is your name? ", (name) => {
           callback(name)
    });
};


const printMyName = async () => {
    let name = await getName();
    console.log("Hello " + name);
    rl.close();
}
printMyName();


console.log("end-----------------------------------------")
