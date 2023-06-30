// Given movies 

let movies = [
    {
        title: "bahubali",
        rating: 4.3,
    },
    {
        title: "Adipurush",
        rating: 0.3,
    }, 
    {
        title: "drishyam",
        rating: 4.8,
    },
];

// Display Function 
let cnt = 0;
function display() {
    cnt = 0;
    let txt = "";
    movies.forEach((element) => {
        txt += `<tr><td>${element.title}</td>
          <td>${element.rating}</td>
          <td><button id="search" onclick="deleteData(${cnt++})">X</button></td></tr>`;
    });
    $("#table_body").html(txt);
}
display();

// Delete Function 
function deleteData(val) {
    movies.splice(val, 1);
    display();
}

// Add Function
function add() {
    let title = $("#title").val();
    let rating = $("#rating").val();
    let arr = { title: title, rating: rating };
    movies.push(arr);
    // console.log(movies);
    display();
}

// Filter Function 
function filtering() {
    let val1 = $("#filter_sort").val();
    let val2 = $("#filter_order").val();
    if (val1 && val2) {
        if (val1 == "rating") {
            if (val2 == "ascending") {
                movies = movies.sort(function (a, b) {
                    return a.rating - b.rating;
                });
            }
            else if (val2 == "descending") {
                movies = movies.sort(function (a, b) {
                    return b.rating - a.rating;
                });
            }
        }
        else if (val1 == "title") {
            if (val2 == "ascending") {
                movies = movies.sort((a, b) => (a.title > b.title) ? 1 : -1);
            }
            else if (val2 == "descending") {
                movies = movies.sort((a, b) => (a.title < b.title) ? 1 : -1);
            }
        }
        display()
    }
}
