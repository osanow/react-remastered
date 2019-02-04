import algoliasearch from 'algoliasearch';

const client = algoliasearch('OXQ8KAAM4Z', 'd7a059ef708facff5868a6b8ce2c38ff');
const index = client.initIndex('navtitles');

export default index;
