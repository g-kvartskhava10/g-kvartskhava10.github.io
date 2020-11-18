var dropdownButtons = document.getElementsByClassName("dropdown-btn");
/* ქმნის ცვლადს სახელად dropdownbuttons და უთითებს, რომ მოძებნოს დოკუმენტში ელემენტი კლასის სახელით dropdown-btn */

for (var i=0; i<dropdownButtons.length; i++){
    /* აკეთებს ლუპს ცვლადისთვის i, რომლის საწყისი მნიშვნელობაა 0 და იზრდება მანამ, სანამ ნაკლებია ცვლად dropdownbuttonsის სიგრძეზე */
    dropdownButtons[i].addEventListener("click", function (){
       // dropdownList.style.display = "flex";
        /* dropdownButtons-ს, რომელიც არის i-ური ელემენტი, აბამს eventlistenerს და ანიჭებს ფუნქციას. eventlistenerის
        * მიბმა საჭიროა იმისთვის, რომ ყოველი დაჭერისას შესრულდეს ფუნქცია. */
        this.parentElement.getElementsByClassName("dropdown-list")[0].style.display= "flex";
    })  /* დაკლიკული ელემენტის მშობელი ელემენტის შიგნით, ეძებს სხვა ელემენტებს კლასის სახელის მიხედვით */
}

var textCols = document.getElementsByClassName("col");
/* ქნის ცვლადს სახელად textcols და უთითებს, რომ დოკუმენტში მოძებნოს ელემენტი კლასის სახელით */
var dropdownItems = document.getElementsByClassName("dropdown-item");
/* ქმნის ცვლადს dropdownitems და უთითებს, რომ დოკუმენტში მოძებნოს ელემენტის კლასის სახელით */
for(var i=0; i<dropdownItems.length; i++)
{ /* აკეთებს ლუპს ცვლადისთვის i, რომლის საწყისი მნიშვნელობაა 0 და იზრდება მანამ, სანამ ნაკლებია ცვლად dropdownitemsის სიგრძეზე */
    dropdownItems[i].addEventListener("click", function (){
        /* dropdownitems-ს, რომელიც არის i-ური ელემენტი, აბამს eventlistenerს და ანიჭებს ფუნქციას */
        for (var j=0; j<textCols.length; j++){
            textCols[j].style.display = "none";
        } /* ქმნის ცვლადს j, რომლის საწყისი მნიშვნელობაა 0 და იზრდება მანამ, სანამ ნაკლებია textcolsის სიგრძეზე.
          შემდეგ კი სტილში უთითებს, რომ ის უნდა დამალოს. */
        this.parentElement.parentElement.getElementsByClassName("dropdown-btn")[0].innerHTML = this.innerHTML;  /* მშობლის მშობელ ელემენტში (ადის 2 საფეხურით მაღლა) ეძებს ელემენტს კლასის სახელით და შიგნით ათავსებს ინფორმაციას თითოეული ელემტისთვის */
        this.parentElement.style.display = "none"; /* უზრუნველყოფს მეორე buttonის სიის დამალვას მეორედ დაკლიკებისას */
        document.getElementById(this.dataset.target).style.display = "flex";
        /* აიდის საშუალებით ეძებს დოკუმენტში ელემენტს, ოღონდ ფრჩხილებში უთითებს იმ აიდის, რომელის შენახულია datasetში, თითოეული ელემენტისთვის სხვადასხვა. საჭიროა იმისთვის, რომ განისაზღვროს
        * დაჭერისას რა ტექსტი უნდა გამოვიდეს. */
    });
}