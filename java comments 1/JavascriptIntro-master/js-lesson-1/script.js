
var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus est sed ante rhoncus iaculis. " +
    "Pellentesque nec risus lectus. Sed euismod diam et justo molestie, ut tincidunt lorem tincidunt. " +
    "Cras iaculis nisi placerat, varius justo at, consectetur lectus. Etiam porttitor sapien nibh, " +
    "non cursus massa finibus et. Fusce rhoncus accumsan purus, sit amet maximus nisl varius vitae. Maecenas " +
    "tincidunt placerat nibh eu convallis. Aenean vitae felis vitae metus iaculis pulvinar nec eu orci. Aliquam a " +
    "aliquam leo. Quisque feugiat ligula vel efficitur porttitor. Curabitur congue ex quis urna gravida aliquet. " +
    "Mauris arcu enim, pulvinar vitae nulla at, dignissim pharetra libero. ";
/* ქმნის ცვლას სახელად loremს და ანიჭებს მნიშვნელობას ამ ტექსტის სახით */


var id = "container";
/* ქმნის ცვლადს სახელდად id და ანიჭებს მნიშვნელობას ტექსტის სახით - "container" */

var el = document.getElementById(id);
/* ქმნის ცვლადს სახელად id და უთითებს მასში, რომ დოკუმენტში უნდა მოიძებნოს ელემენტი, რომლის id არის კონტეინერი. ფრჩხილებს უთითებს ცვლადს, სწორედ რომლის მნიშვნელობაც არის container. */

for (var i = 0; i < 10; i++) {
    /* ქმნის ცვლადს i, რომლის თავდაპირველი მნიშვნელობა არის 0 და ის იზრდება ერთით მანამ სანამ, i ნაკლებია 10ზე */
    var row = document.createElement("div");
    /* ქმნის ცვლადს სახელად row, რომელშიც უთითებს, რომ დოკუმენტში უნდა შეიქმნას ელემენტი თეგით div */
    row.classList.add("row");
    /* ცვლად rowს ყოველ ელემენტს ანიჭებს კლასს სახელად row */
    for (var j = 0; j < 3; j++) {
        /* ქმნის ცვლადს სახელად j, რომლის თავდაპირველი მნიშვნელობაა 0 და ის იზრდება ერთით სანამ j<3 */
        var col = document.createElement("div");
        /* ცვლადში სახელად col უთითებს, რომ დოკუმენტში შეიქმნას ახალი ელემენტი თეგით div */
        col.classList.add("col");
        /* ცვლად colის ყოველ ელემენტს ანიჭებს კლასს სახელად col */
        col.innerHTML = lorem;
        /* ცვლად colის innerHTMLში სვამს ცვლადს lorem, რომლის მნიშვნელობაც მაღლაა მითითებული */
        col.style.backgroundColor = "#5" + i + j * 4;
        /* ანიჭებს ფერს (კარგად ვერ გავიგე ეს ჩანაწერი) */
        row.appendChild(col);
        /* ქმნის rowს შვილობილ ელემენტ colს */
    }
    el.appendChild(row);
    /* ქმნის elის შვილობილ ელემენტ rowს */
}

