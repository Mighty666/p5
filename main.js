
function preload(){

}
function setup(){
    canvas = createCanvas(400,400)
    video = createCapture(VIDEO)
    canvas.center()
    video.hide()

}
function draw(){
    image(video,100,100,200,200)
    fill('yellow')
    circle(20,60,40)
    circle(380,60,40)
    circle(20,340,40)
    circle(380,340,40)
    fill("blue")
    rect(40,45,320,30)
    rect(10,80,30,240)
    rect(40,325,320,30)
    rect(365,80,30,240)
    
}
function saves(){
    save("myphoto.png")
}