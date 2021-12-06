function incrementButton(){
    var audio = document.getElementById("#audio");
    var count = document.getElementById("#count");

    var num = parseInt(count.textContent);
    num++;
    count.textContent = num.toString();

    audio.load();
    audio.play();
}

