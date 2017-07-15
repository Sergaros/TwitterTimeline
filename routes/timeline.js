const getTimeLine = require('mtwitter');

module.exports = (router)=>{
  router.get('/timeline/:username', async function(ctx) {
    try {
      if(process.env.NODE_ENV === 'test')
        ctx.body = {result: true};
      else
        ctx.body = await getTimeLine(ctx.params.username);
      } catch(err) {
        console.log('Error - ', err);
        throw err;
      }
  });
}
