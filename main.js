function StartClassification() {
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/YopWH8Bfa/model.json" , ModelReady)
}
function ModelReady() {
    classifier.classify(GotResults)
}
function GotResults(error,results) {
    if(error) {
       console.error(error)
    }
    else {
        console.log(results)
        document.getElementById("sound").innerHTML = "Detected Voice Is Of - " + results[0].label
        if(results[0].label == "Bark") {
            document.getElementById("imgg").src = "dog.png"
        }
      else if(results[0].label == "Meow") {
            document.getElementById("imgg").src = "cat.png"
        }
        else {
            document.getElementById("imgg").src = "earr.png" 
        }
    }
}