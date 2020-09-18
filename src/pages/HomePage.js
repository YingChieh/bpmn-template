import BpmnJS from "bpmn-js/dist/bpmn-modeler.development.js";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import diagramUrl from "../assets/diagram.bpmn";
import $ from 'jquery';

// export a modeler page component
import React, { Component } from "react";

export default class HomePage extends Component {
    constructor(){
        super();
        this.viewer = new BpmnJS();
        this.openDiagram=this.openDiagram.bind(this);
    }

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
