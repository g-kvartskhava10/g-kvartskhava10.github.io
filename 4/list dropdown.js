var dropdownButtons = document.getElementsByClassName("dropdown-btn");


for (var i=0; i<dropdownButtons.length; i++){
    dropdownButtons[i].addEventListener("click", function (){
        this.parentElement.getElementsByClassName("dropdown-list")[0].style.display= "flex";
    })
}

var textCols = document.getElementsByClassName("col");

var dropdownItems = document.getElementsByClassName("dropdown-item");

for(var i=0; i<dropdownItems.length; i++)
{
    dropdownItems[i].addEventListener("click", function (){
        for (var j=0; j<textCols.length; j++){
            textCols[j].style.display = "none";
        }
        this.parentElement.parentElement.getElementsByClassName("dropdown-btn")[0].innerHTML = this.innerHTML;
        this.parentElement.style.display = "none";
        document.getElementById(this.dataset.target).style.display = "flex";

    });
}







