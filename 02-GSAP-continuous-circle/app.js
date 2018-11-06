let line = ".container div span";
let tl = new TimelineMax({ repeat: -1, repeatDelay: 1 });

tl.from(line, 1, { scale: 0 })
  .to(line, 1, { y: "-150em", scaleX: 0.25 })
  .to(line, 1, { scaleX: 1 })
  .to(line, 1, {borderRadius: "50%"})
  .to(elements, 1, {y: '-300px', delay: 0.5})
  .timelineScale(3);