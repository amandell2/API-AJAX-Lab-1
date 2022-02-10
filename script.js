let submit = document.getElementById("theForm");

//event listener that displays subreddit given by user
submit.addEventListener("submit", (event)=>{
    event.preventDefault();
    const userInput = document.getElementById("userInput");
    console.log(userInput.value);
    const title = document.getElementById("title");
    title.innerText = userInput.value + " " + "Subreddit Posts";

//changed the API that is being fetched based on user input from above event listener
const redditPromise = fetch("https://www.reddit.com/r/"+ userInput.value + "/.json");
redditPromise.then(response => response.json())
.then(data =>{
    //remove previous article container
    const articleContainer = document.getElementById("articleContainer");
    if(articleContainer){
        articleContainer.remove();
    };
    //add new article container
    const newContainer = document.createElement("div");
    newContainer.setAttribute("id", "articleContainer");
    document.body.append(newContainer);
    
    //Extended Challenge-only show first 10 results
    let newArray = data.data.children.slice(0,10);
    //console.log(newArray);

    //appending subreddit items to page
    for(let item of newArray){
        let newArticle = document.createElement('div');
        newArticle.setAttribute("class", "article")
        let newTitle = document.createElement('h2');
        newTitle.innerText = item.data.title;
        let newImage = document.createElement('img')
        newImage.setAttribute("class","newImage");
        newImage.src = item.data.thumbnail;
        let newLink = document.createElement("a");
        newLink.setAttribute("href", "https://www.reddit.com"+item.data.permalink);
        newLink.innerText = "Check out full article here!";
        newArticle.append(newTitle);
        newArticle.append(newImage);
        newArticle.append(newLink);
        newContainer.append(newArticle);
    }
});
});