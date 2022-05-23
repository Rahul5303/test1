
    let arrprod=JSON.parse(localStorage.getItem("products")) || [];

    let container=document.getElementById("all_products");
    container.innerHTML=null;

    arrprod.map(function(e,index){
        let box=document.createElement("div");

        let image=document.createElement("img");
        image.src=e.image;
    

        let typ=document.createElement("p");
        typ.innerText=e.type;

        let p=document.createElement("p");
        p.innerText=e.des;

        let pr=document.createElement("p");
        pr.innerText=e.price;

        let btn=document.createElement("button");
        btn.innerText="Remove Product";
        btn.addEventListener("click",function(){
            removedata(e,index);

        });

        box.append(image,typ,p,pr,btn);
         container.append(box);
        



    });





function removedata(e,index){
    console.log(e,index);
    arrprod.splice(index,1);
    localStorage.setItem("products",JSON.stringify(arrprod));
    window.location.reload();
}