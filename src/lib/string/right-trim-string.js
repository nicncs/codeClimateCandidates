// https://stackoverflow.com/questions/24282158/removing-the-white-space-at-the-start-of-the-string
export default function rightTrimString(str, replacementStr = '') {
  return str.replace(/\s+$/g, replacementStr);
}
