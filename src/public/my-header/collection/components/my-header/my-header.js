export class MyHeader {
    render() {
        return (h("header", null,
            h("nav", null,
                h("li", null, this.first),
                h("li", null, this.second),
                h("li", null, this.third))));
    }
    static get is() { return "my-header"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "first": { "type": String, "attr": "first" }, "second": { "type": String, "attr": "second" }, "third": { "type": String, "attr": "third" } }; }
    static get style() { return "/**style-placeholder:my-header:**/"; }
}
