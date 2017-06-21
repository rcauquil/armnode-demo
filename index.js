const rpio = require('rpio');

rpio.open(12, rpio.OUTPUT, rpio.LOW);

for (let i = 0; i < 5; i++) {
  /* On for 1 second */
  rpio.write(12, rpio.HIGH);
  rpio.sleep(1);

  /* Off for half a second (500ms) */
  rpio.write(12, rpio.LOW);
  rpio.msleep(500);
}
