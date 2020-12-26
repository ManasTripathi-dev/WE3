
function consoleClear() {
    console.clear();
    console.log("Console cleared is expected");
}



let x = new XMLHttpRequest();
x.open("GET", "https://restcountries.eu/rest/v2/all");
x.send();
x.onload = function () {
    let res;
    var man = [];
    res = JSON.parse(x.responseText);
    console.log(res);
}


function fetchAllCountries() {
    try {
        let x = new XMLHttpRequest();
        x.open("GET", "https://restcountries.eu/rest/v2/all");
        x.send();
        x.onload = function () {
            let res;
            var man = [];
            res = JSON.parse(x.responseText);
            console.log(res.filter(elem => {
                return elem.region === 'Asia';
            }).map(elem => elem.name));
        }
    }
    catch (ex) {
        console.log(ex)
    }
}

function basedOnPopulation() {
    try {
        let x = new XMLHttpRequest();
        x.open("GET", "https://restcountries.eu/rest/v2/all");
        x.send();
        x.onload = function () {
            let res;
            var man = [];
            res = JSON.parse(x.responseText);
            console.log(res.filter(i => i.population > 200000).map(i => i.name))
        }
    }
    catch (ex) {
        console.log(ex);
    }
}

function PrintusingForEach() {
    try {
        let x = new XMLHttpRequest();
        x.open("GET", "https://restcountries.eu/rest/v2/all");
        x.send();
        var man = [];
        x.onload = function () {
            let res;
            res = JSON.parse(x.responseText);
            res.forEach(element => {
                a = {};
                a.name = element.name;
                a.flag = element.flag;
                a.capital = element.capital;
                man.push(a);
            });
        }
        console.log(man);
    }
    catch (ex) {
        console.log(ex);
    }
}

function Totalpopulation() {
    try {
        let x = new XMLHttpRequest();
        x.open("GET", "https://restcountries.eu/rest/v2/all");
        x.send();
        var man = [];
        x.onload = function () {
            let res;
            res = JSON.parse(x.responseText);
            console.log(res.reduce((i, elem) => i + elem.population, 0))
        }
    }
    catch (ex) {
        console.log(ex);
    }
}

function TotalpopulationinAsia() {
    try {
        let x = new XMLHttpRequest();
        x.open("GET", "https://restcountries.eu/rest/v2/all");
        x.send();
        var man = [];
        x.onload = function () {
            let res;
            res = JSON.parse(x.responseText);
            console.log(res.filter(elem => elem.region === 'Asia').reduce((i, elem) => i + elem.population, 0))
        }
    }
    catch (ex) {
        console.log(ex);
    }
}
/*not req
function sortBasedOnPoplution() {
    let x = new XMLHttpRequest();
    x.open("GET", "https://restcountries.eu/rest/v2/all");
    x.send();
    var man = [];
    x.onload = function () {
        let res;
        res = JSON.parse(x.responseText);
        console.log("Total population :", res.reduce((tot, ele) => tot += ele.population, 0));
    }
}
*/

function Getdollarcountries() {
    let x = new XMLHttpRequest();
    x.open("GET", "https://restcountries.eu/rest/v2/all");
    x.send();
    var man = [];
    x.onload = function () {
        let res;
        res = JSON.parse(x.responseText);
        console.log(res.filter(i => i.currencies[0].symbol == "$"));
    }
}

