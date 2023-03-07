/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

function initMap(): void {
  const flightPlanCoordinates = [
    {lat:6.909857477092524,lng:79.90000262460455},
{lat:6.892312715224115,lng:79.87701162186033},
{lat:6.889067607385608,lng:79.88091691818602},
{lat:6.887127277770555,lng:79.88396390762693},
{lat:6.887018988429013,lng:79.88716110077269},
{lat:6.8915887364814665,lng:79.8883165792876},
{lat:6.889904049836473,lng:79.88464731735523},
{lat:6.8918195152392565,lng:79.88569874328907},
{lat:6.891583411146554,lng:79.88829512161549},
{lat:6.896196152716394,lng:79.8905234033335},
{lat:6.901759563409906,lng:79.8941445350647},
{lat:6.905028260364582,lng:79.89460655822103},
{lat:6.9059012616710564,lng:79.89388277652553},
{lat:6.905725076407465,lng:79.89237001064113},
{lat:6.90836616091293,lng:79.89479501224889},
{lat:6.908094118040038,lng:79.89571232773199},
{lat:6.906758648656833,lng:79.9014071297226},
{lat:6.910023009911592,lng:79.90307643613562},
{lat:6.909329813048904,lng:79.89845204443972},
{lat:6.909515760364082,lng:79.89630627722781},
{lat:6.910074112090523,lng:79.89469469328228},
{lat:6.911838506738725,lng:79.8948880706649},
{lat:6.913411713660179,lng:79.89502429962158},
{lat:6.912216678527055,lng:79.89302132133095},
{lat:6.9084977402247025,lng:79.89245204597226},
{lat:6.911332498387527,lng:79.87930478774412}
];
  const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 14,
    center: flightPlanCoordinates[Math.round(flightPlanCoordinates.length / 2)],
    mapTypeId: "terrain",
    }
  );

  let num = 1;
  flightPlanCoordinates.forEach(coord => {
    new google.maps.Marker({
      position: coord,
      map,
      label: `${num++}`,
    });
  });

  flightPath.setMap(map);
  
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
