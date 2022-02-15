import React, { Component } from "react";


import * as Survey from "survey-react";



import "survey-react/modern.css";
import "./index.css";

Survey.StylesManager.applyTheme("modern");

class SurveyComponent extends Component {
    constructor() {
        super();
        
    }
    render() {
        

    var surveyValueChanged = function (sender, options) {
    var el = document.getElementById(options.name);
    if(el) {
        el.value = options.value;
    }
};

const json = {
    title: "Dog Decider",
    showProgressBar: "bottom",
    firstPageIsStarted: true,
    startSurveyText: "Begin",
    pages: [
      {
        "elements": [
          {
            "type": "html",
            "html": "This quiz should lend a hand in deciding what kind of dog you should get! <br/>Please answer the questions as accurately as possible<br/>and click begin whenever you're ready."
          }
        ]
      },
      {
        "elements": [
          {
            "type": "radiogroup",
            "name": "currentDog",
            "showPrevButton": true,
            "isRequired": true,
            "title": "What size dog do you currently own?",
            "choices": [ "Large", "Medium", "Small", "None" ]
          }
        ]
      },
      {
        "elements": [
          {
            "type": "radiogroup",
            "name": "freeTime",
            "isRequired": true,
            "showPrevButton": true,
            "title": "How much free time do you have per day?",
            "choices": [ "<1 hour", "1-3 hours", "3< hours" ]
          }
        ]
      },
      {
        "elements": [
          {
            "type": "radiogroup",
            "name": "yardSize",
            "isRequired": true,
            "showPrevButton": true,
            "title": "How large is your yard?",
            "choices": [ "No private yard/apartment/condo", "Small", "Medium", "Large" ]
          }
        ]
      },
      {
        "elements": [
          {
            "type": "radiogroup",
            "name": "homeSize",
            "isRequired": true,
            "showPrevButton": true,
            "title": "How large is your home?",
            "choices": [ "<800 sqft", "800-1200 sqft", "1200< sqft" ]
          }
        ]
      }
    ],
    completedHtml: "<h4>The correct breed will be displayed here from the microservice list based on options selected</b>as well as a link to some information about the breed.</h4>"
  };
const survey = new Survey.Model(json);

        

        

        return (
            <Survey.Survey
                model={survey}
            />
        );
    }
}

export default SurveyComponent;
