song1="";
song2="";
leftWristX=0;
rightWristX=0;
function preload(){
    song1=loadSound("EveryBreathYouTake.mp3");
    song2=loadSound("MySonSoDumb.mp3")
    }
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
    }
    function modelLoaded(){
        console.log("Posenet Initialized")
    }
    function gotPoses(results){
        if(results.length > 0){
        console.log(results);
        
        leftWristX = results[0].pose.leftWrist.x;
        console.log("leftWristX ="+leftWristX);
    
        rightWristX = results[0].pose.rightWrist.x;
        console.log("rightWristX ="+rightWristX);
        }
    }
function draw(){
    image(video,0,0,600,500);
    
    }