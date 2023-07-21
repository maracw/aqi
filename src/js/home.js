import './general';
const regeneratorRuntime = require("regenerator-runtime");
import getNavBar from './navbar'; 
getNavBar("Home");

function helloWorld(){
    alert("hello");
}
window.onload = helloWorld();