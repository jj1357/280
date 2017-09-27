/*
  This snippet should have functioning DMs and retweets, at the cost of the character counter being always broken.
  
  My patched twttr.txt.getTweetLength function returns negative where the tweet is shorter than 140 characters,
  and DMs and retweets are only allowed in the UI when tweet length > 0.
  
  This snippet makes Twitter believe your tweet length is always 1.
*/
TD.services.TwitterClient.prototype.makeTwitterCall=function(b,e,f,g,c,d,h){c=c||function(){};d=d||function(){};b=this.request(b,{method:f,params:Object.assign(e,{weighted_character_count:!0}),processor:g,feedType:h});return b.addCallbacks(function(a){c(a.data)},function(a){d(a.req,"",a.msg,a.req.errors)}),b};
twttrTxt=Object.assign({},twttr.txt,{isInvalidTweet:function(){return!1},getTweetLength:function(){return 1}});