import lines from './lines';

export default function linesLength(str) {
  return lines(str).length - (navigator.userAgent.indexOf("MSIE") != -1);
}
