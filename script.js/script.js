// ..........navigation..........
{
    const nav1 = ["services","projects", "news", "contact","register"];
    let innav1=["services.html","projects.html", "news.html", "contact.html","register.html"];
    let navsigdze1 = nav1.length;
    let text1 = "<ul>";
    for(let i = 0; i<navsigdze1; i++){
        text1 +=`<li><a href="${innav1[i]}">${nav1[i]}</a></li>`;
        }
        text1 += "</ul>";
     document.getElementById("nav1").innerHTML  = text1;
}
let navigation =() => {
     let navopen = document.getElementById("open").src ;
     if(navopen !== "file:///home/gogliko/Desktop/finaluri%20proeqti/img/close.png"){
     document.getElementById("open").src ="img/close.png ";
     document.getElementById("nav1").style.display ="block";
     }
     else{
    document.getElementById("open").src ="img/menu.png ";
    document.getElementById("nav1").style.display ="none";
     }
}
// .............................slider...................................
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayHoverPause:focus,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        414:{
            items:2
        },
        1024:{
            items:4
        }
    }
})
//.......................... mesage..................
let mesage = () => {
    document.getElementById("textbox").style.display = "block";
    document.getElementById("msglogo").style.display ="none";
}
let close1 = () => {
    document.getElementById("textbox").style.display = "none";
    document.getElementById("msglogo").style.display ="block";
}