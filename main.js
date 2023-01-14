function doNothing(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9zENfpMI8/model.json', modelLoaded)
}

function modelLoaded(){
    classifier.classify(getResults);
}

function getResults(error, results){
    if (error){
        console.error(error)
    } else {
        console.log(results[0])
        var rnum = Math.floor(Math.random() * 255) + 1
        var gnum = Math.floor(Math.random() * 255) + 1
        var bnum = Math.floor(Math.random() * 255) + 1

        document.getElementById("wow").style.color = "rgb(" + rnum + "," + gnum + "," + bnum + ")";
        document.getElementById("sound-type-disp-type").innerText = results[0].label;
        document.getElementById("sound-acc-disp-acc").innerText = Math.floor(results[0].confidence * 100)

        var img = document.getElementById("img");
        if (results[0].label == "Dog"){
            img.src = "dog.jpg"
        } else if (results[0].label == "Elephant"){
            img.src = "elephant.jpg"
        } else {
            img.src = ""
        }
    }
}