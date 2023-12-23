////jsDom
const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view2");
console.log(view2);
const view3 = document.getElementsByClassName(".item");
console.log(view3);
const view4 = document.querySelectorAll(".item");
console.log(view4);
const view5 = view1.querySelectorAll("h3");
console.log(view5);
const view6 = view1.getElementsByTagName("h3");
console.log(view6);
//selector
const view7 = view1.querySelectorAll("h3:nth-of-type4n");
console.log(view7);
for(i=0;i<view7.length;i++){
    view7[i].style.color="green";
}
const view8 = document.querySelector("section main h1");
console.log(view8);
view8.innerHTML = "tittle of content......."   

//view1.style.display = "none";
view2.style.display = "none";
//////storage api
document.addEventListener("readystatechange",(event)=>{
   if(event.target.readyState === "complete"){
    console.log("complete");
    initApp();
   }
});
const initApp =()=>{
    const myobj ={
        name:"luvin",
        openTime:1.03,
        using:["main","middle","end"],
        action:function(){
            console.log(this.name);
        }

    }

    window.sessionStorage.setItem("firstData",JSON.stringify(myobj));
    window.localStorage.setItem("firstData",JSON.stringify(myobj));
    //key
    const mykey = sessionStorage.key(1);
    console.log(mykey);
    //get function
    const mydata = JSON.parse(window.sessionStorage.getItem(mykey));
    console.log(mydata);

}
