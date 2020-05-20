const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const res = document.querySelector("p");


function getStatus(){
    var flames = ['F','L','A','M','E','S'];
    var person1 = p1.value.toUpperCase().split("");
    var person2 = p2.value.toUpperCase().split("");
    var len1 = person1.length-1;
    for(var i = 0 ; i<=len1; i++){
        for(var j = 0; j<person2.length; j++){
            if(person1[i] == person2[j]){
                if (i > -1) {
                    person1.splice(i, 1);
                    i--;
                    }
                if (j > -1) {
                    person2.splice(j, 1);
                    }
                break;
            }
        }
    }
    let count = person1.length + person2.length;
    console.log(count);
    while(flames.length>1){
        for(var x=1;x<=count;x++){
            if(x<count){
                let el = flames.shift();
                flames.push(el);
            }else{
                flames.shift();
                console.log(flames);
            }
        }
        
    }
    let result = flames[0];
    console.log(result);
    switch(result){
        case 'F': res.innerHTML = `${p2.value} is your Friend.`;
                    break;
        case 'L': res.innerHTMLt = `${p2.value} is your Lover.`;
                    break;
        case 'A': res.innerHTML = `${p2.value} is your Affectionate.`;
                    break;
        case 'M': res.innerHTML = `${p2.value} is your Marriage partner.`;
                    break;
        case 'E': res.innerHTML = `${p2.value} is your Enemy.`;
                    break;
        case 'S': res.innerHTML = `${p2.value} is your Sibling.`;
                    break;
        default: res.innerHTML = `Bhool ja usko!!! `;        
    }
}

function check(){
    if(p1.value == p2.value)
    res.innerHTML = "Both the fields are same change atleast one";    
    else if(p1.value && p2.value)
    getStatus();
    else
    res.innerHTML = "Please fill both the fields"; 
}