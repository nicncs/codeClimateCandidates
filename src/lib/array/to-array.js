export default function toArray(arrayOrString) {
  return Array.isArray(arrayOrString)
    ? arrayOrString
    : (!!arrayOrString
        ? [arrayOrString]
        : []
      );
}
