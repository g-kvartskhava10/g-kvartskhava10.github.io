var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus est sed ante rhoncus iaculis.";

var id = "container";

var el = document.getElementById(id);

for (var i = 0; i < 8; i++) {
    var row = document.createElement("div");
    row.classList.add("row");
    for (var p = 0; p < 8; p++) {
        var col = document.createElement("div");
        col.classList.add("col");
        if (i % 2 == p % 2 )
        {
            var color="black"
        }
        else {
            var color="white"
        }
        col.innerHTML = lorem;
        col.style.backgroundColor=color;
        row.appendChild(col);
    }
    el.appendChild(row);
}
