import { b as attr } from "./index.js";
function BranchMark($$renderer, $$props) {
  let { size = 50 } = $$props;
  $$renderer.push(`<img${attr("width", size)}${attr("height", size)} src="/black-logo-main.webp" alt="BCS Berkshire"/>`);
}
export {
  BranchMark as B
};
