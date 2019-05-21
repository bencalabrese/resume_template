import { fixAllWidths } from "../utils/fix_width";
import Column from "./column";

export default class History extends Column {
  constructor() {
    super("history", "expanded-history");

    fixAllWidths(".history .info");
  }
}
