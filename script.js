var s = 0;
var t = 1;
var start = 1;
var circles = [0];
var squares = [0];
var won=0;
var player1 = "";
var player2 = "";
function starting() {
    player1 = document.getElementById('name1').value;
    player2 = document.getElementById('name2').value;
    if (player1 && player2) {
        document.getElementById('player1').innerHTML = player1;
        document.getElementById('player2').innerHTML = player2;
        document.getElementById('scorecard').style.display = 'none';
        document.getElementById('container').style.display = 'block';
        document.getElementById('head').innerHTML = "Please start Your Game " + player1;
        tictactoe();
    }
}
function tictactoe() {
    var can = document.getElementById('mycanvas');
    var ctx = can.getContext('2d');
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(100, 0);
    ctx.lineTo(100, 300);
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(200, 0);
    ctx.lineTo(200, 300);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, 100);
    ctx.lineTo(300, 100);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, 200);
    ctx.lineTo(300, 200);
    ctx.stroke();
}
function circle(p, q, r) {
    start = 1;
    if (s == 0 && start == 1) {
        var can = document.getElementById('mycanvas');
        var ctx = can.getContext('2d');
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.arc(p, q, 30, 0, 2 * Math.PI);
        ctx.strokeStyle = "lightgreen";
        ctx.stroke();
        t = 0;
        s = 1;
        start = 0;
        circles.push(r);
        forcirclesonly(circles);
        check();
       
        document.getElementById('circle' + r).style.display = "none";
         if (won==0) {
        document.getElementById('head').innerHTML = "Now " + player2 + " Turn";
    }
    }
}
function square(p, q, r) {
    if (t == 0 && start == 1) {
        var can = document.getElementById('mycanvas');
        var ctx = can.getContext('2d');
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(p, q);
        ctx.lineTo(p + 60, q + 60);
        ctx.strokeStyle = "skyblue";
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(p + 60, q);
        ctx.lineTo(p, q + 60);
        ctx.stroke();
        s = 0;
        t = 1;
        start = 0;
        squares.push(r);
        console.log(squares);
        check();
        forsquaresonly(squares);
        
        document.getElementById('circle' + r).style.display = "none";
        if(won==0){
        document.getElementById('head').innerHTML = "Now " + player1 + " Turn";
    }
    }
}
function check() {
    if ((circles.includes(1) || squares.includes(1)) && (circles.includes(2) || squares.includes(2)) && (circles.includes(3) || squares.includes(3)) && (circles.includes(4) || squares.includes(4)) && (circles.includes(5) || squares.includes(5)) && (circles.includes(6) || squares.includes(6)) && (circles.includes(7) || squares.includes(7)) && (circles.includes(8) || squares.includes(8)) && (circles.includes(9) || squares.includes(9))) {
        setTimeout(function() {
            document.getElementById('mycanvas').style.display = 'none'
            document.getElementById('newcanvas').style.display = 'block';
            var can = document.getElementById('newcanvas');
            var ctx = can.getContext('2d');
            ctx.lineWidth = 30;
            ctx.beginPath();
            ctx.moveTo(50, 50);
            ctx.lineTo(250, 250);
            ctx.strokeStyle = "skyblue";
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(250, 50);
            ctx.lineTo(50, 250);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(150, 150, 100, 0, 2 * Math.PI);
            ctx.strokeStyle = "lightgreen";
            ctx.stroke();
            document.getElementById('head').innerHTML = "Match Drawn";
            won=1;
        }, 1000);
    }
}
function forcirclesonly(a) {
    if (a.length >= 4 && ((a.includes(1) && a.includes(2) && a.includes(3)) || (a.includes(4) && a.includes(5) && a.includes(6)) || (a.includes(7) && a.includes(8) && a.includes(9)) || (a.includes(1) && a.includes(4) && a.includes(7)) || (a.includes(2) && a.includes(5) && a.includes(8)) || (a.includes(3) && a.includes(6) && a.includes(9)) || (a.includes(1) && a.includes(5) && a.includes(9)) || (a.includes(3) && a.includes(5) && a.includes(7)))) {
        for (var i = 1; i < 10; i++) {
            document.getElementById('circle' + i).style.display = "none";
        }
        document.getElementById('head').innerHTML = player1 + " Won The Game";
        won=1;
        circledrawer(a);
    }
}
function forsquaresonly(a) {
    if (a.length >= 4 && ((a.includes(1) && a.includes(2) && a.includes(3)) || (a.includes(4) && a.includes(5) && a.includes(6)) || (a.includes(7) && a.includes(8) && a.includes(9)) || (a.includes(1) && a.includes(4) && a.includes(7)) || (a.includes(2) && a.includes(5) && a.includes(8)) || (a.includes(3) && a.includes(6) && a.includes(9)) || (a.includes(1) && a.includes(5) && a.includes(9)) || (a.includes(3) && a.includes(5) && a.includes(7)))) {
        for (var i = 1; i < 10; i++) {
            document.getElementById('circle' + i).style.display = "none";
        }
        document.getElementById('head').innerHTML = player2 + " Won The Game";
        won=1;
        squaredrawer(a);
    }
}
function circledrawer(a) {
    var can = document.getElementById('mycanvas');
    var ctx = can.getContext('2d');
    ctx.lineWidth = 10;
    ctx.strokeStyle = "lightgreen";
    if (a.includes(1) && a.includes(2) && a.includes(3)) {
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(250, 50);
        ctx.stroke();
    } else if (a.includes(4) && a.includes(5) && a.includes(6)) {
        ctx.beginPath();
        ctx.moveTo(50, 150);
        ctx.lineTo(250, 150);
        ctx.stroke();
    } else if (a.includes(7) && a.includes(8) && a.includes(9)) {
        ctx.beginPath();
        ctx.moveTo(50, 250);
        ctx.lineTo(250, 250);
        ctx.stroke();
    } else if (a.includes(1) && a.includes(4) && a.includes(7)) {
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(50, 250);
        ctx.stroke();
    } else if (a.includes(2) && a.includes(5) && a.includes(8)) {
        ctx.beginPath();
        ctx.moveTo(150, 50);
        ctx.lineTo(150, 250);
        ctx.stroke();
    } else if (a.includes(3) && a.includes(6) && a.includes(9)) {
        ctx.beginPath();
        ctx.moveTo(250, 50);
        ctx.lineTo(250, 250);
        ctx.stroke();
    } else if (a.includes(1) && a.includes(5) && a.includes(9)) {
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(250, 250);
        ctx.stroke();
    } else if (a.includes(3) && a.includes(5) && a.includes(7)) {
        ctx.beginPath();
        ctx.moveTo(250, 50);
        ctx.lineTo(50, 250);
        ctx.stroke();
    }
    setTimeout(function() {
        var element = document.getElementById("mycanvas");
        element.parentNode.removeChild(element);
        var para = document.createElement("canvas");
        para.setAttribute('id', 'newcanvas');
        para.setAttribute('style', 'position: absolute;top: 30%;left: 40%;');
        para.setAttribute('width', '300');
        para.setAttribute('height', '300');
        var element = document.getElementById("body");
        element.appendChild(para);
        var can = document.getElementById('newcanvas');
        var ctx = can.getContext('2d');
        ctx.lineWidth = 20;
        ctx.beginPath();
        ctx.arc(150, 150, 100, 0, 2 * Math.PI);
        ctx.strokeStyle = "lightgreen";
        ctx.stroke();
    }, 1000);
}
function squaredrawer(a) {
    var can = document.getElementById('mycanvas');
    var ctx = can.getContext('2d');
    ctx.lineWidth = 10;
    ctx.strokeStyle = "skyblue";
    if (a.includes(1) && a.includes(2) && a.includes(3)) {
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(250, 50);
        ctx.stroke();
    } else if (a.includes(4) && a.includes(5) && a.includes(6)) {
        ctx.beginPath();
        ctx.moveTo(50, 150);
        ctx.lineTo(250, 150);
        ctx.stroke();
    } else if (a.includes(7) && a.includes(8) && a.includes(9)) {
        ctx.beginPath();
        ctx.moveTo(50, 250);
        ctx.lineTo(250, 250);
        ctx.stroke();
    } else if (a.includes(1) && a.includes(4) && a.includes(7)) {
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(50, 250);
        ctx.stroke();
    } else if (a.includes(2) && a.includes(5) && a.includes(8)) {
        ctx.beginPath();
        ctx.moveTo(150, 50);
        ctx.lineTo(150, 250);
        ctx.stroke();
    } else if (a.includes(3) && a.includes(6) && a.includes(9)) {
        ctx.beginPath();
        ctx.moveTo(250, 50);
        ctx.lineTo(250, 250);
        ctx.stroke();
    } else if (a.includes(1) && a.includes(5) && a.includes(9)) {
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(250, 250);
        ctx.stroke();
    } else if (a.includes(3) && a.includes(5) && a.includes(7)) {
        ctx.beginPath();
        ctx.moveTo(250, 50);
        ctx.lineTo(50, 250);
        ctx.stroke();
    }
    setTimeout(function() {
        var element = document.getElementById("mycanvas");
        element.parentNode.removeChild(element);
        var para = document.createElement("canvas");
        para.setAttribute('id', 'newcanvas');
        para.setAttribute('style', 'position: absolute;top: 30%;left: 40%;');
        para.setAttribute('width', '300');
        para.setAttribute('height', '300');
        var element = document.getElementById("body");
        element.appendChild(para);
        var can = document.getElementById('newcanvas');
        var ctx = can.getContext('2d');
        ctx.lineWidth = 30;
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(250, 250);
        ctx.strokeStyle = "skyblue";
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(250, 50);
        ctx.lineTo(50, 250);
        ctx.stroke();
    }, 1000);
}