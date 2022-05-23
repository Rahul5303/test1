//store the products array in localstorage as "products"

function Produce(t,d,p,i){
    this.type=t;
    this.des=d;
    this.price=p;
    this.image=i;
}


function prod(e){

    e.preventDefault();

    let form=document.getElementById("products");

    let type=form.type.value;

    let des=form.desc.value;

    let price=form.price.value;

    let image=form.image.value;

    // console.log(type,des,price,image);

    let p1=new Produce(type,des,price,image);
    console.log("p1:",p1);

    let arrprod=JSON.parse(localStorage.getItem("products")) || [];
    arrprod.push(p1);

    
    
    // console.log(arrprod);
    localStorage.setItem("products",JSON.stringify(arrprod));

}
