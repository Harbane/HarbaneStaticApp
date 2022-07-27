import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const DarkenBg = document.querySelector('.Placeholder')

const DarkenBgTimeline = new scroll.Timeline({
      scrollOffsets: [
          { target: DarkenBg, edge: "end", threshold: "1" },
          { target: DarkenBg, edge: "start", threshold: "1" }
      ]
})

DarkenBg.animate(   {
                    transform: ['rotateX(45deg)' , 'roatate(0)']
          },

          {
                    duration: 1,
                    timeline: DarkenBgTimeline,
          }
)