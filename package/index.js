import {demo} from "./demo/index.js";
import {demo2} from "./demo2/index.js";



const components = [demo, demo2];
const install = (app) => {
    components.forEach(component => {
        app.component(component.name, component)
    })
}
export {demo,demo2}
export default {
    install,
    ...components
}
