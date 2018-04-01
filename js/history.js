var happy = [0, 40, 75, 126, 235 ];
var meh = [0, 115, 125, 102, 76 ];
var sad = [0, 197, 100, 45, 39 ];

var words_p = [0, "brand", "navigation, dropdown, brand", "layout, structure, color", "brand, color, navigation, layout" ];
var words_m = [0, "navigation, typography", "color, gradient", "hierarchy, boxes", "visuals" ];
var words_s = [0, "color, hierarchy, buttons", "layout, typography", "navigation", "whitespace" ];

var comment_title = [0, "Too much green", "Navigation is strong", "Clear grid structure", "Amazing brand, color, and layout"];
var comment_body = [0, "All the green elements blend together. Hard to see.", "The navigation is very good, but the layout is confusing.", "The clear grid layout makes it easy to follow. Nice job!", "Although I wish there was more whitespace, I like how you've designed this."];

$(function(){
    $("#view-1").change(function(){
        var src= $("#view-1 option:selected").attr("value");
        var version = $("#view-1 option:selected").attr("name");
        $("#imgcomp1").attr("src", "images/" + src + ".jpg");
        $("#happybar1").css("width", happy[version]);
        $("#mehbar1").css("width", meh[version]);
        $("#sadbar1").css("width", sad[version]);
        
        $("#topics-p1 p").html(words_p[version]);
        $("#topics-m1 p").html(words_m[version]);
        $("#topics-n1 p").html(words_s[version]);
        
        $("#comment1 h2").html(comment_title[version]);
        $("#comment1 p").html(comment_body[version]);
        
        
    });
    
    $("#view-2").change(function(){
        var src= $("#view-2 option:selected").attr("value");
        var version = $("#view-2 option:selected").attr("name");
        $("#imgcomp2").attr("src", "images/" + src + ".jpg");
        $("#happybar2").css("width", happy[version]);
        $("#mehbar2").css("width", meh[version]);
        $("#sadbar2").css("width", sad[version]);
        
        $("#topics-p2 p").html(words_p[version]);
        $("#topics-m2 p").html(words_m[version]);
        $("#topics-n2 p").html(words_s[version]);
        
        $("#comment2 h2").html(comment_title[version]);
        $("#comment2 p").html(comment_body[version]);
        
    });
    
    
});