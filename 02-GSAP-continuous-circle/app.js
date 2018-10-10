let line = '.container div span'
let animation = new TimelineMax({repeat: -1, repeatDelay: 1})

animation.from(line, 1, {scale: 0})
    .to(line, 1, {y: '-100px', scaleX: 0.25})
    .timeScale(3);
