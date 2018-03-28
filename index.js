
import { rgb } from "d3-color";
import { scaleOrdinal, scaleLinear, scalePow } from "d3-scale";
import { axisBottom, axisLeft } from 'd3-axis';
import { forceSimulation, forceCollide,forceManyBody, forceX, forceY } from "d3-force";
import { select, selectAll } from "d3-selection";
import { csv} from "d3-request";
import { extent } from "d3-array";
import { format } from "d3-format";
import { transition } from "d3-transition";

export default {
    rgb: rgb,
    scaleLinear: scaleLinear,
    scaleOrdinal: scaleOrdinal,
    scalePow: scalePow,
    axisBottom: axisBottom,
    axisLeft: axisLeft,
    forceSimulation: forceSimulation,
    forceCollide: forceCollide,
    forceManyBody: forceManyBody,
    forceX: forceX,
    forceY: forceY,
    select: select,
    selectAll: selectAll,
    csv: csv,
    extent: extent,
    format: format,
    transition: transition 
}