/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Sunflower","Trip","Supernova","Thief"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images_links = ["https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Ff8df6f94846dc4a8f2e1b94d7abd1cb5.1000x1000x1.jpg", "https://static.spin.com/files/2018/08/Ella-Mai-Press-Photo_Photo-Credit_Jonathan-Mannion-1533309795-640x455.jpg", "http://cdn02.cdn.justjared.com/wp-content/uploads/headlines/2018/01/ansel-elgort-debuts-music-video-for-new-song-supernova.jpg", "https://cps-static.rovicorp.com/3/JPG_500/MI0004/188/MI0004188527.jpg?partner=allrovi.com"];
var length = ["2:41", "3:38", "2:34", "3:40"];
var links = ["https://www.youtube.com/watch?v=ApXoWvfEYVU", "https://www.youtube.com/watch?v=JfGD75vHWrU", "https://www.youtube.com/watch?v=Q-oM2BQ8Jow", "https://www.youtube.com/watch?v=ulAakKHUp5g"];
var artists = ["Post Malone ft. Swae Lee", "Ella Mae", "Ansel Elgort", "Ansel Elgort"];


function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    images_links.forEach(function(pic){
        $("#images").append("<div> <img src =\"" + pic + "\"></div>");
    });
    
    songs.forEach(function(name){
       $("#songs").append("<div>" + name + "</div>");
    });
    
    length.forEach(function(length){
       $("#lengths").append("<div>" +length + "</div>");
    });
    
    links.forEach(function(link){
        $("#links").append("<div> <a href=" + link + " target=_blank> Listen To Song </a> </div>");
    });
    
    artists.forEach(function(artist){
        $("#artists").append("<div>" + artist + "</div>");
    });
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#lengths").empty();
    $("#links").empty();
    $("#artists").empty();
}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    var S = $("#song").val();
    songs.push(S);
    
    var A = $("#artist").val();
    artists.push(A);
    
    var L = $("#link").val();
    links.push(L);
    
    var I = $("#image").val();
    images_links.push(I);
    
    var l = $("#length").val();
    length.push(l);
    
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
