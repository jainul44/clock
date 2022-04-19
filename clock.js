var inner_clock = document.createElement('div')
document.getElementById('clock').appendChild(inner_clock)

function presentTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let whichM = 'AM';

    // if (h == 0){ h = 12; }
    // if (h > 12){ h = h -12; }

    (h == 0) ? h = 12 : (h > 12) ? (h = h - 12, whichM = 'PM') : h;

    // h = (h < 10) ? "0" + h : h;
    // m = (m < 10) ? "0" + m : m;
    // s = (s < 10) ? "0" + s : s;

    h = addZero(h);
    m = addZero(m);
    s = addZero(s);

    function addZero(i) {
        return (i < 10) ? "0" + i : i;
    }

    // document.getElementById('clock').innerHTML = h + " : " + m + " : " + s + " " + whichM;    

    inner_clock.innerHTML = h + " : " + m + " : " + s + " " + whichM;
    setTimeout(presentTime, 1000);
}

