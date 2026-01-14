var materialContainer = document.getElementById("materials")
var search = document.getElementById("search")
var materiallist = materialContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase()

        for(count=0;count<materiallist.length;count=count+1)
    {
        var materialname = materiallist[count].querySelector("p").textContent

        if(materialname.toUpperCase().indexOf( enteredValue)<0)
        {
          materiallist[count].style.display="none"
        }

        else{
            materiallist[count].style.display="block"
        }
    }
})