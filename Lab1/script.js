function fff(){
    var s=document.getElementById('arr').value;
    
    var arr=s.match(/\d+/g);
    console.log(arr);
    var sum=0;
    for(var i=0;i<arr.length;++i){
        arr[i]=+arr[i];
        sum+=arr[i];
    }
    console.log(arr);
    //console.log(++arr[1]);
    console.log(arr[1]);
    sort(arr,0,arr.length-1);
    console.log(arr);
    var out=document.getElementById('out');
    var osum=document.getElementById('sum');
    var min=document.getElementById('min');
    var max=document.getElementById('max');
    //out.innerHTML=arr;
    for(var i=0;i<arr.length;++i){
        out.innerHTML=out.innerHTML+arr[i]+' ';
    }
    osum.innerHTML=osum.innerHTML+sum;
    min.innerHTML=min.innerHTML+arr[0];
    max.innerHTML=max.innerHTML+arr[arr.length-1]

}


function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function sort(arr, left, right) {
   
    var piv   = arr[Math.floor((right + left) / 2)], 
        i       = left, 
        j       = right;
    
    if (arr.length > 1) {
        while (i <= j) {
            while (arr[i] < piv) {
                i++;
            }
            while (arr[j] > piv) {
                j--;
            }
            if (i <= j) {
                swap(arr, i, j); 
                i++;
                j--;
            }
        }
        
        if (left < i - 1) {
            sort(arr, left, i - 1);
        }
        if (i < right) { 
            sort(arr, i, right);
        }
    }
    return arr;
}