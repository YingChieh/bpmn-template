import BpmnJS from "bpmn-js/dist/bpmn-modeler.development.js";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import diagramUrl from "../assets/diagram.bpmn";
import $ from 'jquery';

// export a modeler page component
// use the Modeler to instantiate a modeler instance
import React, { Component } from "react";

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Modeler</h1>
                <div id="container"></div>
            </div>
        );
    }

    componentDidMount() {
        //console.log(diagramUrl);
        $.get(diagramUrl, this.openDiagram, 'text');
    }

    /**
       * Open diagram in our modeler instance.
       *
       * @param {String} bpmnXML diagram to display
    */
    openDiagram(bpmnXML) {
        //console.log(bpmnXML);

        this.viewer = new BpmnJS();
        // import diagram
        this.viewer.attachTo("#container");
        try {
            //eslint-disable-next-line
            const { warnings } = this.viewer.importXML(bpmnXML);
            console.log("rendered");
        } catch (err) {
            console.log("error rendering", err);
        }
    }
}
