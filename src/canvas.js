let cc = document.getElementById('canvas')
if (cc.getContext('2d')) {
    var cxt = cc.getContext("2d");
    cxt.lineWidth = 2;//如果不写linewidth属性默认为1px
    cxt.strokeRect(50, 100, 50, 100);//在画布坐标x:50,y:100 位置开始画一个宽50，高100的矩形F
    cxt.beginPath()
    cxt.lineWidth = 10
    cxt.moveTo(0, 100)
    cxt.lineTo(100, 0)
    cxt.stroke()
}