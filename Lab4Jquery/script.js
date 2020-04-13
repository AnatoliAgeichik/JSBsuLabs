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
    tt='<'+tag+'></'+tag+'>';
    var el = $(tt);
    $(el).attr('id',id)
    
    pid="#"+parentId;
    $(pid).append(el);
    $(el).append(document.createTextNode(text));
    $("#"+id).css("paddingRight","50px")
    
    /*
    pid="#"+parentId;
    $(pid).append($(tag));
    var elements = document.querySelectorAll(pid+'>'+tag+':last-child');
    
    //elements.;
    $(elements).attr('id',id);
    alert(elements.id);
    alert(elements)
    $(elements).append(document.createTextNode(text));
    $("#"+id).css("paddingRight","50px")
    */
    //alert(elements.id)
    
    //var el=document.createElement(tag);
    //el.id=id;
    //document.getElementById(parentId).appendChild(el);
   // document.getElementById(id).textContent=text;
    //document.getElementById(id).style.paddingRight="50px";
  
    
}

function addEl(parentId, tag, id){
    //var el=document.createElement(tag);
    //el.id=id;
    //document.getElementById(parentId).appendChild(el);
    tt='<'+tag+'></'+tag+'>';
    var el = $(tt);
    $(el).attr('id',id)
    
    pid="#"+parentId;
    $(pid).append(el);
    $("#"+id).css("paddingRight","50px")
    
}

function averagePrice(n){
    var el=document.body.firstElementChild;
   // var el = document.querySelectorAll('body >: first-child');
   
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
    
    $('#'+tmpid).css('color',"red");
    var tmpid="head"+1;
    addElWithText("head","td",tmpid,"Model");
    $('#'+tmpid).css('color',"red");
    var tmpid="head"+2;
    addElWithText("head","td",tmpid,"MaxSpeed");
    $('#'+tmpid).css('color',"red");
    var tmpid="head"+3;

    addElWithText("head","td",tmpid,"Price");
    $('#'+tmpid).css('color',"red");
}  



function addBtn(parentId,text, f, id){
	/*var el = document.createElement("input");
	el.setAttribute("type", "button");
	el.setAttribute("value", text);
	el.setAttribute("onclick", f);
	el.setAttribute("id", id);
	document.getElementById(parentId).appendChild(el);
    */
    
    var el = $('<input>');
    $(el).attr('id',id)
    $(el).attr('type','button');
    $(el).attr("value",text);
    $(el).attr("onclick",f);
    pid="#"+parentId;
    $(pid).append(el);
    //$(el).append(document.createTextNode(text));
    //$("#"+id).css("paddingRight","50px")
    
}
/*
function deleteEl(element){
	var index = parseInt(element.id);
	arr.splice(index, 1);
   document.getElementById('table').removeChild(document.getElementById('tr'+index));
   for(var i=index; i < arr.length; i++)
    {
        document.getElementById((i+1)).setAttribute("id",i);
        //document.getElementById('change'+(i+1)).setAttribute("id","change"+i);
        document.getElementById('tr'+(i+1)).setAttribute("id","tr"+i);
    }
    printAverage();
}
*/
function deleteEl(element){
    var n = parseInt(element.id);
    arr.splice(n, 1);
    $('#'+'tr'+n).remove();
   for(var i=n; i < arr.length; i++)
    {
     $('#'+(i+1)).attr('id',i);
        $('#'+'td'+(i+1)+"0").attr('id',"td"+i+"0");
        $('#'+'td'+(i+1)+"1").attr('id',"td"+i+"1");
        $('#'+'td'+(i+1)+"2").attr('id',"td"+i+"2");
        $('#'+'td'+(i+1)+"3").attr('id',"td"+i+"3");
        $('#'+'tr'+(i+1)).attr('id',"tr"+i);
    }
    
}
function getArr(){
	/*var xhr = new XMLHttpRequest();
    xhr.open('GET', "http://localhost:3000/",false);
    var tmp = [];
	xhr.onreadystatechange = function(){
		if(this.readyState == 4 && xhr.status == 200){
			tmp = JSON.parse(xhr.responseText);
			for(var i=0;i<tmp.length;i++)
				arr.push(new Auto(tmp[i].marka,tmp[i].model,tmp[i].maxSpeed,tmp[i].price));
		}
	}
    xhr.send();
    */
       $.ajax({
           url:"http://localhost:3000/",
           async:false,
           dataType:"json",
           success:function(data){
            arr=data;

           }
       });
    }

function fff(){
    var idTr;
    var idTd;
    //alert(arr.length)
    var marka, model, maxSpeed, price;
    marka = document.getElementById("inpMarka").value;
    model = document.getElementById("inpModel").value;
    maxSpeed = document.getElementById("inpMaxSpeed").value;
    price = document.getElementById("inpPrice").value;
    tmp = new Auto(marka, model, maxSpeed, price);
    l=arr.length;
    
    arr.push((tmp));
    idTr="tr"+(l);
    addEl("table","tr",idTr);
    
    idTd="td"+l+"0";
    addElWithText(idTr,"td",idTd, arr[arr.length-1].marka);
    idTd="td"+l+"1";
    addElWithText(idTr,"td",idTd, arr[arr.length-1].model);
    idTd="td"+l+"2";
    addElWithText(idTr,"td",idTd, arr[arr.length-1].maxSpeed);
    idTd="td"+l+"3";
    addElWithText(idTr,"td",idTd, arr[arr.length-1].price);
    addBtn(idTr,"delete","deleteEl(this)",l);
    //alert(arr.length)
}


printHead();
    
var idTr;
var idTd;
var n=4;
var arr=[];
/*var a=new Auto("Bmw","x6",256,250000);
var b=new Auto("Mercedes-benz","gelandewagen",356,360000);
var c=new Auto("Gelly","badCar",123,16000);
var d=new Auto("Lada","Vesta",153,23000);
arr.push(a);
arr.push(b);
arr.push(c);
arr.push(d);
*/
getArr();
for(var i=0;i<n;++i){
idTr="tr"+i;
addEl("table","tr",idTr);

idTd="td"+i+"0";
addElWithText(idTr,"td",idTd, arr[i].marka);
idTd="td"+i+"1";
addElWithText(idTr,"td",idTd, arr[i].model);
idTd="td"+i+"2";
addElWithText(idTr,"td",idTd, arr[i].maxSpeed);
idTd="td"+i+"3";
addElWithText(idTr,"td",idTd, arr[i].price);
addBtn(idTr,"delete","deleteEl(this)",i);

    
}

