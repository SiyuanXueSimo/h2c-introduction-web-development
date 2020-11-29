console.log("The javascript is loaded successfully");
// #2 - print dom tree
console.log("Show entire dom");
console.log(document);
console.dir(document);
// #4
// Using unique id to get element
let demoParagraph = document.getElementById("demo-paragraph");
console.log("Get element by id");
console.log(demoParagraph);
// Using CSS selector to get element
demoParagraph = document.querySelector("#demo-paragraph");
console.log("Get element by CSS selector");
console.log(demoParagraph);

// #5
// Using querySelectorAll to get element collection
let liCollection = document.querySelectorAll("ul>li");
console.log("Get element collections by querySelectorAll");
console.log(liCollection);
// Loop through element collection
liCollection.forEach(element => {
    console.log(element);
});

// #6
// Using getElementsByClassName to get element collection
let liSLCollection = document.getElementsByClassName("script-lang");
console.log("Get element collections by getElementsByClassName");
console.log(liSLCollection);
// Loop through element collection
for (let item of liSLCollection) {
    console.log(item);
}

// Using getElementsByTagName to get element collection
let allLiCollection = document.getElementsByTagName("li");
console.log("Get element collections by getElementsByClassName");
console.log(allLiCollection);
// Loop through element collection
for (let item of allLiCollection) {
    console.log(item);
}

// #7
// Compare live and static collections
const liLive = document.getElementsByClassName("script-lang");
console.log("Collections returned by getElementsByXXX() are 'live': they are updated when the document is changed.");
console.log(liLive);

const liStatic = document.querySelectorAll(".script-lang");
console.log("Collections returned by querySelectorAll() are 'static': they reflect the state of the document when the query was made, and aren't updated afterwards");
console.log(liStatic);
// Add class name [script-lang] to "Hack" li element
// and console.log(liLive) and console.log(liStatic) to show the live or static

// #8 - Add element to the dom tree
// Add new header (h2) with text: ""
// Declare a new element
const newHeader = document.createElement("h2");
// Add content to the new element
const headerContent = document.createTextNode("A new header!");
// Append the text to the header element
newHeader.appendChild(headerContent);
document.getElementById("new-header-container").appendChild(newHeader);

// #9
document.getElementById("demo-paragraph").innerText = "Change text to Hello World";

// #10
// Create a new paragraph with innerHTML
const newParagraph = document.createElement("p");
newParagraph.innerHTML = "<strong>Great</strong> job!";
document.getElementById("new-paragraph-container").appendChild(newParagraph);

// #11
// Remove elements from the dom tree
const removeElement = document.getElementById("demo-paragraph");
const parent = removeElement.parentNode;
parent.removeChild(removeElement);

// #12 - 15
// Documentfragment
// Create a fragment as insertion template
const fragment = document.createDocumentFragment();
const tr = document.createElement("tr");
const td1 = document.createElement("td");
const td2 = document.createElement("td");
tr.appendChild(td1);
tr.appendChild(td2);
fragment.appendChild(tr);
// Using fragment to insert table row with two columns
let clonedRow = fragment.cloneNode(true);
let firstTd = clonedRow.querySelector("td");
let secTd = clonedRow.querySelector("td:last-child");
firstTd.innerText = "Jack";
secTd.innerText = "31";
const tableBody = document.querySelector("#table-container > table > tbody");
console.log(tableBody);
tableBody.appendChild(clonedRow);

// #20
document.getElementById("demo-button").onclick = function () {
    let event = arguments[0];
    console.log(event);
    alert(`You have click the button[id="${this.id}"]`);
    event.target.style.color = "red";
}

// #22 - 23
// AddEventListener
// Event propagation - event bubbling (bottom - top) or event capturing (top - bottom)
function whereIsTheEventNow() {
    let event = arguments[0];
    console.log(this);
    alert(`Where does the event propage to: ${this.id}`);
    event.preventDefault();
}

let jsLink = document.getElementById("js-link");
jsLink.addEventListener("click", whereIsTheEventNow);


let googleUl = document.getElementById("google-ul");
googleUl.addEventListener("click", whereIsTheEventNow);

// #26 Demonstration for jQuery
// When the DOM tree is loaded completely, start to load the function
$(document).ready(function () {
    // Add click event handler to the button
    $("#demo-jquery-button").click(function () {
        // Append html element to the new paragraph container
        $("#new-paragraph-container").append(`<p id="new-paragraph-jquery">Append this to the new paragraph container</p>`);
        // Modify the appended paragraph element background color
        $("#new-paragraph-jquery").css("background-color", "gray");
        // Print the html (innerHTML) of the div[id="new-paragraph-container"]
        // the .html() can be used to get and set the innerHTML of the selected element
        console.log($("#new-paragraph-container").html());
        // Print the text (innerText) of the div[id="new-paragraph-jquery"]
        // the .text() can be used to get and set the innerText of the selected element
        console.log($("#new-paragraph-jquery").text());
        // Demo the Effect function of jQuery
        setTimeout(function () {
            // The paragraph element [id='new-paragraph-jquery'] will be hided after 3 seconds
            $("#new-paragraph-jquery").hide();
            // After the paragraph element is hided, the paragraph element will fade in. 
            $("#new-paragraph-jquery").fadeIn(5000);
        }, 3000); // Wait for 5s to hide the element
    });
    //jQuery - AJAX demonstration
    $("#demo-ajax-button").click(function () {
        $.ajax({
            url: "./data/test.json",
            method: "GET"
        }).done(function (data) {
             console.log(data.name);
        });
    });
});

// AJAX demo
document.getElementById("demo-ajax-button").addEventListener('click', makeRequest);
function makeRequest() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        // the transfer complete
        if (xhr.readyState == 4) {
            // the transfer successful
            if (xhr.status == 200) {
                // the transferred data handled here
                console.log(xhr.responseText); // property of the xhr-object
            }
            else {
                // handle the error
                // error text in the property xhr.statusText
                console.error("There was a problem with the request.");
            }
        }
    }
    xhr.open("GET", "./data/test.json", true);
    xhr.send();
}
