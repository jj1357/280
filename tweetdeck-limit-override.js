TD.services.TwitterClient.prototype.update=function(a,b,c,d,e,f,g){this.makeTwitterCall(this.API_BASE_URL+"statuses/update.json",{status:a,in_reply_to_status_id:b,lat:c,"long":d,place_id:e,weighted_character_count:!0},"POST",this.processTweet,f,g)};twttrTxt=Object.assign({},twttr.txt,{isInvalidTweet:function(){return!1},getTweetLength:function(){return twttr.txt.getTweetLength.apply(this,arguments)-140}});