window.onload = function () {
    var elem = document.getElementById("typewriter");
    elem.style.height = "120%";
    var txt = elem.textContent;
    elem.textContent = "";

    var cursorThickness = elem.getAttribute("cursor-thickness");
    elem.style.borderRightWidth = cursorThickness + "px";
    var typingSpeed = elem.getAttribute("typing-speed");
    var deleteSpeed = elem.getAttribute("delete-speed");
    var backspace = elem.getAttribute("backspace");
    var pauseAfter = elem.getAttribute("pause-after");
    var pauseBefore = elem.getAttribute("pause-before");
    var loop = elem.getAttribute("loop");
    var speed = typingSpeed;

    var txtArr = txt.split("|");
    var txtArrLen = txtArr.length;

    var ind = i = 0, interval, blinkerInterval, type = true, forward = true;
    addTxtInterval();
    function addTxtInterval() {
        clearInterval(blinkerInterval);
        elem.style.borderColor = "black";
        interval = setInterval(function () {

            if (forward && elem.textContent != txtArr[ind]) {
                speed = deleteSpeed;
                elem.textContent += txtArr[ind][i++];
            }
            else if (!forward && backspace == "yes") {
                speed = typingSpeed;
                type = false;
                elem.textContent = elem.textContent.substring(0, elem.textContent.length - 1);
                if (elem.textContent == txtArr[ind])
                    clearInterval(blinkerInterval);

                if (elem.textContent == "") {
                    ind += 1;
                    i = 0;

                    if (loop == "yes" && txtArrLen == ind)
                        ind = 0;

                    startBlinking(pauseBefore, true);
                }
            }

            else {
                startBlinking(pauseAfter, false);
            }

        }, speed);
    }

    function startBlinking(pause, dirCursor) {
        clearInterval(interval);

        var blinkedTimes = 0;
        blinkerInterval = setInterval(function () {
            var col = elem.style.borderColor;
            elem.style.borderColor = col === "transparent" ? "black" : "transparent";
            blinkedTimes++;
            if ((blinkedTimes * 500) > pause) {
                forward = dirCursor;
                type = true;
                addTxtInterval();

            }
        }, 500);
    }
}