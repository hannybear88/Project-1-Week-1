// select elements and store them in variables
const apiKeyYouTube = "AIzaSyBT5Jp3mNr4LyeII6cjqzdru5xFWPs-Prw";
let categoryContainerEl = document.querySelector("#category-buttons-container");
let iframeContainerEl = document.querySelector("#iframe-container");
let allCategories=["Calligraphy", 
                "Scrapbooking",
                "Knitting",
                "Jewelry Making",
                "Drawing",
                "Candles",
                "Polymer Clay",
                "Metal Stamping",
                "Crocheting",];
 


function getProjectIdeas(cat) {
    //
    // let catString = cat.trim().replace(" ", "+");
    let queryString = `${cat.trim().replace(" ", "+")}+DIY+HowTo`
    console.log("queryString: ", queryString);
    
    urlYouTubeSearch = `https://www.googleapis.com/youtube/v3/search?key=${apiKeyYouTube}&q=${queryString}+DIY+howto&kind=video&part=snippet`;
    fetch(urlYouTubeSearch)
    .then(function(response){
        return response.json();
    })
    .then (function(data){
        console.log("YouTube Search data: ", data);
        // get video id from data
        let videoId = data.items[0].id.videoId;
        console.log("video id: ", videoId);
        // podYoutubeEl.setAttribute("src", `https://www.youtube.com/embed/${videoId}`); 
        template = `
            <iframe class="mb-5"
                width="480" 
                    height="270" 
                    src="https://www.youtube.com/embed/${videoId}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
            </iframe>
        `;         
        iframeContainerEl.innerHTML = template;   
        // get embed HTML by video id
        // let urlGetVideoById =`https://youtube.googleapis.com/youtube/v3/videos?key=${apiKeyYouTube}&part=player&id=${videoId}`;
        // fetch(urlGetVideoById)
        // .then(function(response){
        //     return response.json();
        // })
        // .then(function(data){
        //     console.log("Get Video by ID data: ", data);
        //     let embedHtml = data.items[0].player.embedHtml;
        //     console.log("embed HTML: ", embedHtml);


        // });
    });
}

// when the page is loaded, get Project of the day form YouTube
categoryContainerEl.addEventListener("click", function(event){
    if (event.target.matches("button")) {
        category = event.target.textContent;
        getProjectIdeas(category);
    }
});




