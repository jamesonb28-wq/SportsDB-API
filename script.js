async function getTeams() {
    try {
        // 1. Get the search term from the search box, 
        const searchTerm = document.getElementById("search").value

        //          send a request to the API
        const url = "https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=" + searchTerm;
        //          decode the response as JSON
        const response = await fetch(url)
        const json = await response.json();

        const teamHolder = document.getElementById("teamHolder");

        for (team of json.teams) {
            //  Create a div to hold each image and title 
            let divContainer = document.createElement('div');
            //  Give the div the css class of CARD
            divContainer.classList.add("card")
            // Create an image element
            let img = document.createElement('img');
            //      point it to the image from this team     
            img.src = team.strBadge;
            img.width = 100;

            // Create a CONTAINER div to hold the title and year.
            let card = document.createElement('div')
            // Give the CONTAINER div the style of container
            card.classList.add('container')
            let titleHeader = document.createElement("h3");
            titleHeader.textContent = team.strTeam + ": " + team.intFormedYear
            card.appendChild(titleHeader)
            // Add the CONTAINER to the CARD
            divContainer.appendChild(img);
            divContainer.appendChild(card)
            // Add all the elements to the teamHolder element
            teamHolder.appendChild(divContainer)
        }
    }
    catch (error) {
        console.log(error)
    }
}