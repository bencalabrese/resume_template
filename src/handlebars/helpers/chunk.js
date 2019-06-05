import { chunk } from "lodash";

export default function(array, size) {
  return chunk(array, size);
}
