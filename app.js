
function getKanye(){
    let ajax = new XMLHttpRequest();
ajax.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) {
        let kanyeQoute=  JSON.parse(this.responseText);
        document.getElementById('kanye-quote').innerHTML = kanyeQoute.quote;
    }
}

ajax.open("GET", "https://api.kanye.rest/", true);
ajax.send()
}


document.getElementById('refresh-kanye').addEventListener('click', getKanye )