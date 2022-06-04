// npm - global command, Comes with node
// npm --version

//local depencency - use it only in this particular project.
// npm i <packageName>


//glabel dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac/linux)


// package.json - manefest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties ect)
// npm init (step by step, press enter to skip)
// npm init -y (everything defualt)

const _ = require('lodash');

const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems)