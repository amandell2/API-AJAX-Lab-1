const redditPromise = fetch("https://www.reddit.com/r/aww/.json");
redditPromise.then(response => response.json())
.then(data =>{
    //console.log(data);
    const articleContainer = document.getElementById("articleContainer")
    for(let child of data.data.children){
        let newArticle = document.createElement('div');
        newArticle.setAttribute("class", "article")
        let newTitle = document.createElement('h2');
        newTitle.innerText = child.data.title;
        let newImage = document.createElement('img')
        newImage.setAttribute("class","newImage");
        newImage.src = child.data.thumbnail;
        let newLink = document.createElement("a");
        newLink.setAttribute("href", "https://www.reddit.com"+child.data.permalink);
        newLink.innerText = "Check out full article here!";
        newArticle.append(newTitle);
        newArticle.append(newImage);
        newArticle.append(newLink);
        articleContainer.append(newArticle);
    }
    //Manipulaate and create HTML elements
});