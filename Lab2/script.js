class Auto{
    
   constructor(marka, model, maxSpeed, price) {
        this.marka=marka;
        this.model=model;
    //    this.checkSpeed(maxSpeed);
        this.maxSpeed=maxSpeed;
        this.price=price;
        
            
        }
        
    }
    
    

function addElWithText(parentId, tag, id, text){
    var el=document.createElement(tag);
    el.id=id;
    document.getElementById(parentId).appendChild(el);
    document.getElementById(id).textContent=text;
    document.getElementById(id).style.paddingRight="50px";
  
    
}

function addEl(parentId, tag, id){
    var el=document.createElement(tag);
    el.id=id;
    document.getElementById(parentId).appendChild(el);
   
}

function averagePrice(n){
    var el=document.body.firstElementChild;
    const countPinObject=3;
    var avPrice=0;
    for(var i=0;i<n;++i){
        avPrice+=parseFloat(document.body.firstElementChild.children[i+1].children[countPinObject].innerHTML);
    }
    //console.log(avPrice);
    return avPrice/n;
}
function printHead(){
    addEl("table","tr","head");
    var tmpid="head"+0;
    addElWithText("head","td",tmpid,"Marka");
    document.getElementById(tmpid).style.color="red";
    var tmpid="head"+1;
    addElWithText("head","td",tmpid,"Model");
    document.getElementById(tmpid).style.color="red";
    var tmpid="head"+2;
    addElWithText("head","td",tmpid,"MaxSpeed");
    document.getElementById(tmpid).style.color="red";
    var tmpid="head"+3;

    addElWithText("head","td",tmpid,"Price");
    document.getElementById(tmpid).style.color="red";
    
}  



printHead();
    
var idTr;
var idTd;
var n=4;
var arr=[];
var a=new Auto("Bmw","x6",256,250000);
var b=new Auto("Mercedes-benz","gelandewagen",356,360000);
var c=new Auto("Gelly","badCar",123,16000);
var d=new Auto("Lada","Vesta",153,23000);
arr.push(a);
arr.push(b);
arr.push(c);
arr.push(d);

for(var i=0;i<n;++i){
idTr="tr"+i;
addEl("table","tr",idTr);

idTd="td"+i+0;
addElWithText(idTr,"td",idTd, arr[i].marka);
idTd="td"+i+1;
addElWithText(idTr,"td",idTd, arr[i].model);
idTd="td"+i+2;
addElWithText(idTr,"td",idTd, arr[i].maxSpeed);
idTd="td"+i+3;
addElWithText(idTr,"td",idTd, arr[i].price);

    
}

var el=document.createElement('span');
    el.id="avPrice";
    document.body.appendChild(el);
    document.getElementById("avPrice").textContent="Average Price:  "+averagePrice(4);
    

console.log(averagePrice(4));


