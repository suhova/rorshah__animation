const bc_Yellow = "#FBC020";
const bc_GRAY = "#949494";
const bc_DARK = "#38304d";

const man = document.getElementsByClassName("man_button").item(0);
const back = document.getElementsByClassName("bg").item(0);
const rain = document.getElementsByClassName("rain_block").item(0);
const snow = document.getElementsByClassName("snow_block").item(0);
const leaves = document.getElementsByClassName("leaves").item(0);
let mode = 0;
document.onclick = () => {
    if (mode === 2) {
        mode = 0
    } else {
        mode++;
    }
    switch (mode) {
        case 0:
            snow.style.visibility = "hidden";
            leaves.style.visibility = "visible";
            back.style.background = bc_Yellow;
            break;
        case 1:
            leaves.style.visibility = "hidden";
            rain.style.visibility = "visible";
            back.style.background = bc_DARK;
            break;
        case 2:
            rain.style.visibility = "hidden";
            snow.style.visibility = "visible";
            back.style.background = bc_GRAY;
            break;
    }
    console.log(mode);
};


let makeItRain = function () {
        let increment = 0;
        let drops = "";
        let backDrops = "";
        let dropsSnow = "";
        let backDropsSnow = "";
        while (increment < 100) {
            let randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
            let randoFiver = (Math.floor(Math.random() * (2 - 2 + 1) + 1));
            increment += randoFiver;
            drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.7' + randoHundo + 's;"></div></div>';
            backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.7' + randoHundo + 's;"></div></div>';
            dropsSnow += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 1.' + randoHundo + 's;"><div class="snow" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 5.' + randoHundo + 's;"></div></div>';
            backDropsSnow += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 1.' + randoHundo + 's;"><div class="snow" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 5.' + randoHundo + 's;"></div></div>';
            document.getElementsByClassName("front-row").item(0).innerHTML = drops;
            document.getElementsByClassName("back-row").item(0).innerHTML = backDrops;
            document.getElementsByClassName("back-row-snow").item(0).innerHTML = backDropsSnow;
            document.getElementsByClassName("front-row-snow").item(0).innerHTML = dropsSnow;
        }
    };
makeItRain();
