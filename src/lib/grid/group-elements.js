export default function groupElements(elements, divisor) {
  return elements.reduce((obj, element, index) => {
    // Divide `index` by `divisor` and truncate any decimals.
    // The resulting quotient now becomes the `key`.
    // `key` is used to identify which group identifier this option is in.
    const key = Math.trunc(index / divisor);

    // Assign the 
    return {
      ...obj,
      [key]: [
        ...obj[key] || [],
        element
      ],
    };
  }, {});
}
