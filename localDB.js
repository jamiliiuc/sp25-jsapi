// visitedCountries: [
// {
//     cca2: af,
//     flagurl: ""
// },
// {
//     cca2: bd,
//     flagurl: ""
// },
// {
//     cca2: in,
//     flagurl: ""
// } ]


function addVisitedCountryToLS(flagURL, cca2) {
    const country = { "cca2": cca2, "flagurl": flagURL };
    const visitedCountries = JSON.parse(localStorage.getItem("visitedCountries"))
    console.log(visitedCountries);
    visitedCountries.push(country);
    localStorage.setItem("visitedCountries", JSON.stringify(visitedCountries));
}

function isVisited(cca2) {
    const visitedCountries = JSON.parse(localStorage.getItem("visitedCountries"))
    const visited = visitedCountries.find(country => country.cca2 === cca2)
    // if(!visited) return false;
    // else return true;
    
    return !!visited;
}

function loadVisitedCountries() {
    let visitedCountryContainer = document.getElementById("visitedCountryContainer").innerHTML;
    const visitedCountries = JSON.parse(localStorage.getItem("visitedCountries"))
    visitedCountries.forEach(country => {
        visitedCountryContainer += `<img class="w-20" src="${country.flagurl}" alt="">`
    });
    document.getElementById("visitedCountryContainer").innerHTML = visitedCountryContainer;
}