import React from "react";
import Particles from "react-particles";

function ParticleBackground() {
     return (
          <Particles
               style={{ position: "fixed", zIndex: "-1", height: "100%", width: "100%" }}
               params={{
                    particles: {
                         number: {
                              value: 200,
                              density: {
                                   enable: true,
                                   value_area: 1000,
                              }
                         },
                    },
               }}
          // params={{
          //      "particles": {
          //           "number": {
          //                "value": 50
          //           },
          //           "size": {
          //                "value": 3
          //           }
          //      },
          //      "interactivity": {
          //           "events": {
          //                "onhover": {
          //                     "enable": true,
          //                     "mode": "repulse"
          //                }
          //           }
          //      }
          // }}
          />
     )
}

export default ParticleBackground;
