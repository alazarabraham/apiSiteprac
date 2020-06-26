const button = document.getElementById("button");
button.addEventListener("click", firstApi);

function firstApi() {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=22b4f551eb2d41ebbab0d1184579863c`)
        .then(response => {
            if (response.status !== 200) {
                console.log("error")
                throw Error(response.statusText)
            } else {
                return response.json();
            }
        })
        .then(data => {
            let outputh1 = document.getElementById("outputh1");
            let outputparagraph = document.getElementById("outputparagraph");
            let outputimg = document.getElementById("outputimg")
            outputh1.innerHTML = data.articles[0].title;
            outputparagraph.innerHTML = data.articles[0].description;
            outputimg.src = `${data.articles[0].urlToImage}`
            outputimg.width = "500";
            outputimg.height = "300"
            console.log(data.articles[0]);
            for (i = 0; i < data.articles.length; i++) {
                let header = document.createElement("h1");
                let paragraph = document.createElement("p");

                header.innerHTML = data.articles[i].title;

                outputh1.appendChild(header);
                paragraph.innerHTML = data.articles[i].description;
                outputparagraph.appendChild(paragraph);
                let image = document.createElement("IMG");
                image.src = `${data.articles[i].urlToImage}`;
                outputimg.appendChild(image);


            }
        })
}