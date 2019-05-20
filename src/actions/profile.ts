import fixWidth from "../utils/fix_width";
import Column from "./column";

export default class Profile extends Column {
  constructor() {
    super("profile", "expanded-profile");

    fixWidth(".app-academy .info");
    fixWidth(".sf-state .info");
    fixWidth(".about .info");
  }
}
