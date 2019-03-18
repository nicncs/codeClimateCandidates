import indexOf from 'lodash/indexOf';
import without from 'lodash/without';

// https://gist.github.com/chodorowicz/1a77655681a3f67ea36de974a1357882#file-toggleiteminarray-js
export default function toggleItemInArray(collection, item) {
  const index = indexOf(collection, item);

  if (index !== -1) {
    return without(collection, item);
  }

  return [
    ...collection,
    item,
  ];
}
