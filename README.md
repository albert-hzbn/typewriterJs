
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

cursor-thickness : controls the width of the cursor.

typing-speed : controls the typing speed of a character.

backspace : Provide "yes" to delete the current word.

delete-speed : controls the speed of character deletion.

pause-before : Wait for that particular interval before start typing.

pause-aftert : Wait for that particular interval after typing.

loop : Provide "yes" if you want to repeat the process.


Note: Speed values in the options are actually time hence less time means more speed.
