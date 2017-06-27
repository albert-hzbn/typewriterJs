
Installation
------------

Include the js and css fles,add an id "typewriter" on the tag, provide options and you are good to go

~~~ javascript
<script src="tyewriter.js"></script>
...

<span id="typewriter" cursor-thickness="5" typing-speed="100" backspace="yes" delete-speed="20" pause-before="500"  pause-after="1000" loop="yes">programming|javascript</span>
~~~


Options
------------

cursor-thickness : controls the width of the cursor.</br>
typing-speed : controls the typing speed of a character.</br>
backspace : Provide "yes" to delete the current word.</br>
delete-speed : controls the speed of character deletion.</br>
pause-before : Wait for that particular interval before start typing.</br>
pause-aftert : Wait for that particular interval after typing.</br>
loop : Provide "yes" if you want to repeat the process.</br>

</br>
Note: Speed values in the options are actually time hence less time means more speed.
