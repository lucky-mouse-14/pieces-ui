import { App } from "vue";

import PiButton from "./button/index";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";

// 导出单独组件
export { PiButton, SFCButton, JSXButton };

// 编写一个插件，实现一个install方法
export default {
  install(app: App): void {
    app.component(PiButton.name, PiButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  },
};
