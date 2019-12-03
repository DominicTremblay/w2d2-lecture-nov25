const request = require('sync-request');
require('dotenv').config();

const getRepoContributors = (repoOwner, repoName) => {
  const res = request(
    'GET',
    `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`,
    {
      headers: {
        'User-Agent': 'request',
        Authorization: `token ${process.env.GIT_HUB_TOKEN}`,
      },
    }
  );
  return res;
};

const startTime = Date.now();
const response = getRepoContributors('lighthouse-labs', 'laser_shark');
console.log(response.getBody().toString());

const elapseTime = Date.now() - startTime;

console.log('The next statements cannot execute until the request is finished');
console.log(`The request took ${elapseTime} ms to execute...}`);
