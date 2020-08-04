const fs = require(`fs`);
const util = require(`util`);

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const readFromDb = async (file) => {
    const data = await readFile(file); 
    const notes = JSON.parse(data);
    return notes;
};

const writeToDb = async (file, data, options = {flag: `w`}) => {
    await writeFile(file, data, options);
}

let entryId = 0;
const generateId = () => {
    entryId += 1;
    return entryId;
};

const dbUtils = {
    readFromDb: readFromDb,
    writeToDb: writeToDb,
    generateId: generateId,
}

module.exports = dbUtils;