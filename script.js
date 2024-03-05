let allnews=[];
function Display(){
    let newDiv="";
    for(let i=0;  i< allnews.length; i++){
        newDiv += "<h1 class='title'>"+ (i+1) + ". " + allnews[i].title + "</h1>";
        newDiv += "<p class='body' >"+ allnews[i].body + "</p>"+ "<br>";
    }
    document.getElementById("news").innerHTML=newDiv;
}

function AddNews(){
    let newTitle= document.getElementById("title").value;
    let newBody= document.getElementById("body").value ;
    let newNews = {
        title: newTitle,
        body: newBody,
    };
    allnews.push(newNews);
    Display();
}