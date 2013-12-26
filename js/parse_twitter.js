// concept to hide iframe and parse in js from @sarim
// http://blog.sarim.me/2013/09/06/using-twitters-embedded-timeline-as-data-source/

function parsetwitter(){
    frms = document.getElementsByTagName("iframe");
    for (i=0;i<frms.length;++i){
        if (frms[i].id.search("twitter-widget-") != -1){
            tweets = frames[frms[i].id].document.body.getElementsByClassName("e-entry-content");
            if (tweets.length === 0) return setTimeout(parsetwitter,500);
            
            tweetmeta = frames[frms[i].id].document.body.getElementsByClassName("permalink");
            content = "";
            
            for (p=0;p<tweets.length;++p){
                txt = tweets[p].innerText;
                link = tweetmeta[p].href;
                media = tweets[p].getElementsByTagName('img');
                content += '<a href="'+link+'"><img src="'+media[0].src+'" title="'+txt+'"></a>';
                
            }
            
            document.getElementById('puppy').innerHTML = content;
        }
    }
}