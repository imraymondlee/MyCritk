$(function(){
    
    var init_url = 'https://watson-api-explorer.mybluemix.net/natural-language-understanding/api/v1/analyze?version=2017-02-27&url=http%3A%2F%2Fwww.sfu.ca%2F~taw5%2Findex2.html&features=concepts%2Ckeywords%2Csentiment&return_analyzed_text=true&clean=false&fallback_to_raw=true&language=en&concepts.limit=8&emotion.document=true&entities.limit=50&entities.mentions=false&entities.emotion=false&entities.sentiment=false&keywords.limit=50&keywords.emotion=false&keywords.sentiment=true&relations.model=en-news&semantic_roles.limit=50&semantic_roles.entities=false&semantic_roles.keywords=false&sentiment.document=true';
    $.getJSON(init_url, function(data) {
        
        var obj = JSON.parse(JSON.stringify(data));
        
        for(var i=0; i < obj.keywords.length; i++){

            var word_score = obj.keywords[i].sentiment.score;
            var relevance = obj.keywords[i].relevance;
            var text_color = "#000";

            if(word_score > 0.5){
                text_color = "#15e35d";
            }else if(word_score > 0){
                text_color = "#96dd0f";
            }else if(word_score > -0.5){
                text_color = "#cca500";
            }else{
                text_color = "#cc5e00";
            }
            
            if(relevance > 0.55){
                $("#comments-content").append("<a href='#' class='keyword' style=' margin: 0 5px; color:" + text_color + ";'>" + obj.keywords[i].text + "</a>");
            }
        }
    });
    
    window.setTimeout(function(){
        
        $("a.keyword").click(function(){
        var query = $(this).text();
        console.log("ASD");
        $("#custom-topics").val(query);
        
        $( "#runJSON" ).click();
    });

        
    }, 2000);
    
$("#runJSON").click(function () {
    
    var custom_topics = $("#custom-topics").val();
    console.log(custom_topics);
    var res = custom_topics.replace(",", "%2c");
    $("#topics-content").empty();
    //'https://watson-api-explorer.mybluemix.net/natural-language-understanding/api/v1/analyze?version=2017-02-27&url=http%3A%2F%2Fwww.sfu.ca%2F~taw5%2Findex2.html&features=concepts%2Ckeywords%2Csentiment&return_analyzed_text=true&clean=false&fallback_to_raw=true&language=en&concepts.limit=8&emotion.document=true&entities.limit=50&entities.mentions=false&entities.emotion=false&entities.sentiment=false&keywords.limit=50&keywords.emotion=false&keywords.sentiment=true&relations.model=en-news&semantic_roles.limit=50&semantic_roles.entities=false&semantic_roles.keywords=false&sentiment.document=true&sentiment.targets=color%2Cnavigation%2Cdesign%2Cmenu'
    var url = 'https://watson-api-explorer.mybluemix.net/natural-language-understanding/api/v1/analyze?version=2017-02-27&url=http%3A%2F%2Fwww.sfu.ca%2F~taw5%2Findex2.html&features=concepts%2Ckeywords%2Csentiment&return_analyzed_text=true&clean=false&fallback_to_raw=true&language=en&concepts.limit=8&emotion.document=true&entities.limit=50&entities.mentions=false&entities.emotion=false&entities.sentiment=false&keywords.limit=50&keywords.emotion=false&keywords.sentiment=true&relations.model=en-news&semantic_roles.limit=50&semantic_roles.entities=false&semantic_roles.keywords=false&sentiment.document=true&sentiment.targets=';
    
//    $("div").css("background-color", "transparent");
//    $("div:contains(" + res + ")").css("background-color", "yellow");
    
      $('div.comment').fadeOut();
    $("div:contains(" + res + ")").fadeIn();
    
    $.getJSON(url + res, function(data) {
    //data is the JSON string
        console.log(data);
        
        var obj = JSON.parse(JSON.stringify(data));


        for(var i=0; i < obj.sentiment.targets.length; i++){
            console.log(obj.sentiment.targets[i].score);

            var word_score = obj.sentiment.targets[i].score;
            var text_color = "#000";

            if(word_score > 0.5){
                text_color = "#15e35d";
            }else if(word_score > 0){
                text_color = "#96dd0f";
            }else if(word_score > -0.5){
                text_color = "#cca500";
            }else{
                text_color = "#cc5e00";
            }

            $("#topics-content").append("<h1 style='display: inline; margin: 0 5px; color:" + text_color + ";'>" + obj.sentiment.targets[i].text + " </h1>");
            $("#search-item").css("color", text_color);
            $("#rightbar h2#rightbar-title").text("All comments related to: ");
            $("#search-item").text(obj.sentiment.targets[i].text);
        }
        
        
    
    
    }); //END JSON FUNCTION
    
}); //END CLICK FUNCTION
    
        
}); //END READY FUNCTION