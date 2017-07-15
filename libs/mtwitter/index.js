const Twitter = require('twitter');
const {twitter_conf} = require('config');

const client = new Twitter({
  consumer_key: twitter_conf.consumer_key,
  consumer_secret: twitter_conf.consumer_secret,
  access_token_key: twitter_conf.access_token_key,
  access_token_secret: twitter_conf.access_token_secret
});

module.exports = (username)=>{
  return client.get('statuses/user_timeline', {screen_name: username, count: twitter_conf.count})
  .then(tweets=>{
    const results = [];

    tweets.forEach(tweet=>{
      results.push({
        created_at: tweet.created_at,
        id_str: tweet.id_str,
        text: tweet.text,
        lang: tweet.lang
      });
    });

    return results;
  });
};
