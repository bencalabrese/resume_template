import { SafeString } from "handlebars";

export default function(number) {
  let blocks = new Array(number).fill("<span></span>").join("");
  return new SafeString(blocks);
}
