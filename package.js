const tag = process.env.npm_config_tag; // get the tag variable value from the npm_config_tag environment variable

if (tag) { // if the tag variable is set
  const packageName = 'imps-platform-detect'; // replace this with your actual package name
  const version = tag.replace(/^v/, ''); // remove the "v" prefix from the tag (if it exists)
  const indexFile = version === '2' ? 'index.v2.js' : 'index.v3.js'; // set the correct index file name based on the tag value
  const outputFile = 'index.js'; // set the output file name

  console.log(`Compiling ${indexFile} to ${outputFile}...`); // output a message to the console

  const { execSync } = require('child_process'); // import the execSync function from the child_process module
  execSync(`npx babel ${indexFile} --out-file ${outputFile}`, { stdio: 'inherit' }); // run the babel compiler and show the output in the console
}
