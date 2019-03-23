const fs = require('fs');

const fiberLibrary = 'contracts/FiberAPI.sol';
fs.readFile(fiberLibrary, 'utf-8', (err, contents) => {
    if (err) throw err;

    fs.readFile('build/contracts/Fiber.json', 'utf-8', (err, data) => {
        if (err) throw err;
        
        const fiberAddress = JSON.parse(data).networks['1'].address;
        let update = contents.split('\n');
        update.splice(19, 1, `\t\tif(fiberExists(${fiberAddress}) > 0) {`);
        update.splice(21, 1, `\t\t\tfiber = Fiber(${fiberAddress}); // mainnet`);
        update = update.join('\n')

        fs.writeFile(fiberLibrary, update, (err) => {
            if (err) throw err;
        });
    });
});