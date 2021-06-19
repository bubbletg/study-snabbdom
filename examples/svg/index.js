import { init, attributesModule, h } from "../../build/index.js";

const patch = init([attributesModule]);

window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  // 执行 h 函数
  // /src/h.ts   返回一个 vnode
  const vnode = h("div", [
    h("svg", { attrs: { width: 100, height: 100 } }, [
      h("circle", {
        attrs: {
          cx: 50,
          cy: 50,
          r: 40,
          stroke: "green",
          "stroke-width": 4,
          fill: "yellow",
        },
      }),
    ]),
  ]);
  
  // 执行patch  在 /src/init.ts
  patch(container, vnode);
});
