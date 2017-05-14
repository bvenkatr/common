/**
 * A script to generate Pull Request in Github
 */
let execSync = require("child_process").execSync;
let urlOfPR = `https://github.com/bvenkatr/common/compare/master...codingbranch?expand=1`;
execSync(`open ${urlOfPR}`);
