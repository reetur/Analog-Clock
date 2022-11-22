var hour = document.getElementById('hour')
var min = document.getElementById('minutes')
var sec = document.getElementById('sceonde')


function clock(){
        var clock_Obj = new Date()
        hr = clock_Obj.getHours()*30;
        mi = clock_Obj.getMinutes()*6;
        s = clock_Obj.getSeconds()*6
        hour.style.transform=`rotate(${(hr) + (mi/12)}deg)`
        min.style.transform=`rotate(${mi}deg)`
        sec.style.transform=`rotate(${s}deg)`
}
clock()

setInterval(clock,1000)