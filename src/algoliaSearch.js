import algoliasearch from 'algoliasearch';

const client = algoliasearch('OXQ8KAAM4Z', '28f08a7f0d481e60ee4b6c76bd602b8c');
const index = client.initIndex('navtitles');
index.setSettings({
    hitsPerPage: 5,
    attributesToHighlight: [
        'subtitle'
    ],
    attributesToSnippet: [
        'content:15'
    ],
    highlightPreTag: '<em class="search-highlight">',
    highlightPostTag: '</em>',

})

export default index;
