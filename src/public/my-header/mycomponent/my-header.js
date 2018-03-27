/*! Built with http://stenciljs.com */
const { h } = window.mycomponent;

class MyHeader {
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
    static get style() { return "*{\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\nheader{\n    padding: 1rem;\n    max-width: 100rem;\n    margin-left:auto;\n    margin-right: auto;\n    background-color: rgb(255, 195, 127);\n    color: #3E3A4A;\n\n}\n\nnav{\n    display: flex;\n    list-style: none;\n    justify-content: space-around;\n    width: 90%;\n    margin-left: 2rem;\n    padding: .2rem;\n}\n\nli{\n    background-color: rgb(236, 139, 13);\n    padding: .4rem;\n    width: 30%;\n    font-size: 1.3rem;\n    text-align: center;\n    letter-spacing: .1rem;\n    color: rgb(255, 255, 255);\n    box-shadow: 0 .2rem .2rem black;\n}"; }
}

export { MyHeader };
