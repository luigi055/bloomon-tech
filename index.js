#!/usr/bin/env node
const yargs = require("yargs");
const addStreamStructure = require("./cmds/produce");

const produceDesc = `Enter Design bouquets format and flowers in the following order:

design rule1
design rule2
<empty line>
flower1
flower2
flower3
...
`;

const argv = yargs
  .usage("$node index.js produce --add <Design Spec with rules>")
  .command("produce", produceDesc, yargs => {
    yargs.positional("add", {
      type: "string",
      describe: produceDesc,
      demand: true,
      alias: "a"
    });
  })
  .help("h")
  .alias("h", "help")
  .epilog("copyright 2017 -- Luigi Doganieri").argv;

const command = argv._[0];

if (command === "produce") {
  addStreamStructure(argv.add);
}
