// Import Observable library
import {Runtime, Inspector, Library} from '@observablehq/runtime';
import {customResolve} from './customResolve';
import $ from 'jquery'
import 'jquery-ui'

// Load modules locally
const runtime = new Runtime(new Library(customResolve));

// Render selected notebook cells into DOM elements of this page
export function render(notebook) {
  var nh;
  var width;
  var height;
  var Mheight;
  var MMheight;
  var disp;
  runtime.module(notebook, name => {
    switch (name) {
      case 'StartCo':
        // render 'viewof c' notebook cell into <div id="game"></div>
        return new Inspector(document.querySelector('#StartCo'));
        break;
      case 'Update':
        return new Inspector(document.querySelector('#Update'));
        break;
      case 'viewof ColorScaleChose':
        // render 'viewof c' notebook cell into <div id="game"></div>
        return new Inspector(document.querySelector('#ColorScaleChose'));
        break;
      case 'viewof Reverse':
        // render 'viewof c' notebook cell into <div id="game"></div>
        return new Inspector(document.querySelector('#Reverse'));
        break;
      case 'viewof DynScale':
        // render 'viewof c' notebook cell into <div id="game"></div>
        return new Inspector(document.querySelector('#DynScale'));
        break;
      case 'viewof Nwidth':
        // render 'viewof c' notebook cell into <div id="game"></div>
        return new Inspector(document.querySelector('#nw'));
        break;
      case 'viewof ZoomSelect':
        // render 'viewof c' notebook cell into <div id="game"></div>
        return new Inspector(document.querySelector('#nr'));
        break;
      case 'viewof ZoomSelect2':
        // render 'viewof c' notebook cell into <div id="game"></div>
        return new Inspector(document.querySelector('#nr2'));
        break;
      case 'viewof Nheight':
        // render 'viewof c' notebook cell into <div id="game"></div>
        return new Inspector(document.querySelector('#nh'));
        break;
      case 'legendzoomed2':
        // render 'viewof c' notebook cell into <div id="game"></div>
        return new Inspector(document.querySelector('#legendzoomed2'));
        break;
      case 'Fzoom2':
        // render 'viewof c' notebook cell into <div id="game"></div>
        return new Inspector(document.querySelector('#Fzoom2'));
        break;
      case 'legendzoomed':
        // render 'viewof c' notebook cell into <div id="game"></div>
        return new Inspector(document.querySelector('#legendzoomed'));
        break;
      case 'Fzoom':
        // render 'viewof c' notebook cell into <div id="game"></div>
        return new Inspector(document.querySelector('#Fzoom'));
        break;
      case 'legendbrushable':
        // render 'viewof c' notebook cell into <div id="game"></div>
        return new Inspector(document.querySelector('#legendbrushable'));
        break;
      case 'Fbrushable':
        // render 'viewof c' notebook cell into <div id="game"></div>
        return new Inspector(document.querySelector('#Fbrushable'));
        break;
      case 'viewof Nwidthmult':
        // render 'viewof c' notebook cell into <div id="game"></div>
        return new Inspector(document.querySelector('#Nwidthmult'));
        break;
      case 'nh':
        return {
          fulfilled(value) {
            nh = value;
          }
        };
        break;
      case 'MMheight':
        return {
          fulfilled(value) {
            MMheight = value;
            document.querySelector('#Fbrushable').style.height = MMheight + 'px';
            document.querySelector('#Fzoom').style.height = MMheight + 'px';
            document.querySelector('#Fzoom2').style.height = Mheight + 'px';
          }
        };
        break;
      case 'Mheight':
        return {
          fulfilled(value) {
            Mheight = value;
            document.querySelector('#Fbrushable').style.height = MMheight + 'px';
            document.querySelector('#Fzoom').style.height = MMheight + 'px';
            document.querySelector('#Fzoom2').style.height = Mheight + 'px';
            var AllColorBar = document.querySelectorAll('.colorbar');
            AllColorBar.forEach(function (item) {
              item.style.paddingTop = 0.025 * Mheight + 'px';
            });
          }
        };
        break;

      case 'width':
        return {fulfilled(value){
          width = value;
          var AllColorBar = document.querySelectorAll('.colorbar');
          AllColorBar.forEach(function (item) {
            item.style.paddingLeft = width + 20 + 'px';
          });
        }
      };
        break;
      case 'height':
        return {
          fulfilled(value) {
            height = value
            var AllColorBar = document.querySelectorAll('.colorbar');
            AllColorBar.forEach(function (item) {
              item.style.paddingTop = 0.025 * Mheight + 'px';
            });
          }
        };
        break;
      case 'ChangeParam':
        // render 'viewof c' notebook cell into <div id="game"></div>
        return new Inspector(document.querySelector('#ChangeParam'));
        break;
      case 'viewof Title':
        // render 'viewof c' notebook cell into <div id="game"></div>
        return new Inspector(document.querySelector('#placeTitle'));
        break;
      case 'viewof Description':
          // render 'viewof c' notebook cell into <div id="game"></div>
          return new Inspector(document.querySelector('#placeDescription'));
          break;
      case 'Laptop':
            // render 'viewof c' notebook cell into <div id="game"></div>
            return new Inspector(document.querySelector('#Laptop'));
            break;
      case 'Amigo':
        // render 'viewof c' notebook cell into <div id="game"></div>
        return new Inspector(document.querySelector('#Amigo'));
        break;
      case 'co':
          // render 'viewof c' notebook cell into <div id="game"></div>
          return {
            fulfilled(value) {
              console.log(value);
              if (value == true) {
                document.querySelector('.welcome').style.display = "none";
              }
            }
  
          }
          break;
      case 'boolAmigo':
        // render 'viewof c' notebook cell into <div id="game"></div>
        return {
          fulfilled(value) {
            disp = value;
            if (disp == true) {
            }
          }

        }
        break;
      default:
        // force the evaluation of all the notebook cells (required for this notebook)
        return true;
    }
  });
}

$(document).ready(function () {
  $("#idParam").click(function () {
    var wWidth = $(window).width();
    var dWidth = wWidth * 0.4;
    var wHeight = $(window).height();
    var dHeight = wHeight * 0.5;
    $("#dialog").dialog({
      width: dWidth,
      height: dHeight
    });
  });
});

$(document).ready(function () {
  $("#idDescri").click(function () {
    var wWidth = $(window).width();
    var dWidth = wWidth * 0.4;
    var wHeight = $(window).height();
    var dHeight = wHeight * 0.5;
    $("#dialog2").dialog({
      width: dWidth,
      height: dHeight
    });
  });
});