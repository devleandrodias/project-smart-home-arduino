import johnny from "johnny-five";

const board = new johnny.Board();

board.on("ready", function () {
  var motion = new johnny.Motion({
    pin: 13,
  });

  var piezo = new johnny.Piezo({
    pin: 3,
  });

  motion.on("calibrated", function () {
    console.log("calibrated");
  });

  motion.on("motionstart", function () {
    piezo.frequency(12500, 1500);
    console.log("motionstart");
  });

  motion.on("motionend", function () {
    console.log("motionend");
  });
});
