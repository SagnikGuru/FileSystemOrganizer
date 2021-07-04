
// Help fn
function helpFn() {
  console.log(`
  List of All the commands:
               node app.js tree "directoryPath"
              node app.js organize "directoryPath"
              node app.js help
              `);
}
module.exports={
  helpKey: helpFn
}
