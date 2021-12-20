Splitting();
const typed = new Typed(".typing .txt", {
  strings: [
    "i am little <strong>slow</strong>",
    "but,try <strong>steadily</strong>",
    "I want to be a <strong>full stack developer</strong>.",
    "my name is <strong>Jang jae yul</strong>",
    "keep an <strong>eyes on me.</strong>",
  ],
  typeSpeed: 50,
  startDelay: 1000,
  backSpeed: 20,
  backDelay: 3000,
  loop: true,
});

gsap.defaults({
  duration: 1,
  ease: "back",
});
ScrollTrigger.defaults({
  markers: true,
});
const introTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#intro",
    start: "top top",
    end: "bottom top",
    onUpdate: function (self) {
      //console.log(self);
      gsap.set("#intro", { filter: `blur(${self.progress * 10}px)` });
    },
  },
});

const profileTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#profile",
    start: "top-=100 top",
    end: "bottom top",
    pin: true,
    scrub: 1,
  },
});
profileTL
  .from("#profile h2 .char", {
    x: "+=100",
    opacity: 0,
    stagger: {
      each: 0.1,
    },
  })
  .from("#profile h2", {
    borderBottomWidth: 0,
  })

  .from("#profile .contents .char", {
    x: "+=100",
    opacity: 0,
    stagger: {
      each: 0.1,
    },
  })
  .from("#profile .contents .jy_picture", {
    x: "+=100",
    opacity: 0,
    stagger: {
      each: 0.1,
    },
  });

const careerTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#career",
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: 1,
  },
});
careerTL
  .from("#career h2 .char", {
    x: "+=100",
    opacity: 0,
    stagger: {
      each: 0.1,
    },
  })
  .from("#career h2", {
    borderBottomWidth: 0,
  })

  .from("#career .contents .char", {
    x: "+=100",
    opacity: 0,
    stagger: {
      each: 0.1,
    },
  });

const mySkill = {
  markup: $("#skill ul li").eq(0).find(".num").data("percent"),
  _css: $("#skill ul li").eq(1).find(".num").data("percent"),
  js: $("#skill ul li").eq(2).find(".num").data("percent"),
  android: $("#skill ul li").eq(3).find(".num").data("percent"),
  php: $("#skill ul li").eq(4).find(".num").data("percent"),
  mysql: $("#skill ul li").eq(5).find(".num").data("percent"),
};
const skillTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#skill",
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: 1,
  },
});
skillTL
  .from("#skill h2 .char", {
    x: "+=100",
    opacity: 0,
    stagger: {
      each: 0.1,
    },
  })
  .from("#skill h2", {
    borderBottomWidth: 0,
  })
  .from(
    "#skill ul li",
    {
      y: "-100",
      opacity: 0,
      stagger: {
        each: 0.1,
      },
    },
    "circleStart"
  )
  .to(
    "#skill ul li:nth-child(1) circle ",
    {
      strokeDashoffset: -570 * 0.3,
      ease: "linear",
      duration: 3,
    },
    "circleStart+=1"
  )
  .to(
    "#skill ul li:nth-child(2) circle ",
    {
      strokeDashoffset: -570 * 0.6,
      ease: "linear",
      duration: 3,
    },
    "circleStart+=1"
  )
  .to(
    "#skill ul li:nth-child(3) circle ",
    {
      strokeDashoffset: -570 * 0.7,
      ease: "linear",
      duration: 3,
    },
    "circleStart+=1"
  )
  .to(
    "#skill ul li:nth-child(4) circle ",
    {
      strokeDashoffset: -570 * 0.6,
      ease: "linear",
      duration: 3,
    },
    "circleStart+=1"
  )
  .to(
    "#skill ul li:nth-child(5) circle ",
    {
      strokeDashoffset: -570 * 0.5,
      ease: "linear",
      duration: 3,
    },
    "circleStart+=1"
  )
  .to(
    "#skill ul li:nth-child(6) circle ",
    {
      strokeDashoffset: -570 * 0.4,
      ease: "linear",
      duration: 3,
    },
    "circleStart+=1"
  )
  .from(
    mySkill,
    {
      markup: 0,
      _css: 0,
      js: 0,
      android: 0,
      php: 0,
      mysql: 0,
      duration: 3,
      ease: "linear",
      onUpdate: function () {
        console.log(mySkill.css);
        $("#skill li").eq(0).find(".num").text(Math.floor(mySkill.markup));
        $("#skill li").eq(1).find(".num").text(Math.floor(mySkill._css));
        $("#skill li").eq(2).find(".num").text(Math.floor(mySkill.js));
        $("#skill li").eq(3).find(".num").text(Math.floor(mySkill.android));
        $("#skill li").eq(4).find(".num").text(Math.floor(mySkill.php));
        $("#skill li").eq(5).find(".num").text(Math.floor(mySkill.mysql));
      },
    },
    "circleStart+=1"
  );

const portfolioTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#portfolio",
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: 1,
  },
});
portfolioTL
  .from("#portfolio h2 .char", {
    x: "+=100",
    opacity: 0,
    stagger: {
      each: 0.1,
    },
  })
  .from("#portfolio h2", {
    borderBottomWidth: 0,
  })
  .from("#portfolio h3 .char", {
    x: "+=100",
    opacity: 0,
    stagger: {
      each: 0.1,
    },
  })

  .from("#portfolio .contents .w_page", {
    x: "+=100",
    opacity: 0,
    stagger: {
      each: 0.1,
    },
  })

  .from("#portfolio .contents .txtBox li", {
    x: "+=100",
    opacity: 0,
    stagger: {
      each: 0.1,
    },
  });
