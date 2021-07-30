import {require} from 'd3-require';
import * as d3 from 'd3';
import * as marked from 'marked'
import * as inputs from '@observablehq/inputs'
import * as d3annotation from 'd3-svg-annotation'

// Resolve "d3@5" module to current object `d3`
// Be careful: the 'd3@5' alias must be *exactly* the same string as in your
// notebook cell, `d3 = require("d3@5")` in our case. Setting 'd3' or
// 'd3@5.11.0' would not work
export const customResolve = require.alias({
  'd3@5': d3,
  'socket.io-client@4.1.2/dist/socket.io.js': './socket.io.js',
  "marked@0.3.12/marked.min.js":marked,
  "@observablehq/inputs@0.8.0/dist/inputs.umd.min.js":inputs,
  "https://cdnjs.cloudflare.com/ajax/libs/d3-annotation/2.3.0/d3-annotation.min.js":d3annotation,
}).resolve;
