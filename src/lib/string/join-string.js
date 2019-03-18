export default function joinString(values, separator, filterNullOrEmpty = false) {
  if (!filterNullOrEmpty) {
    return values.join(separator);
  }

  return values.filter(value => value).join(separator);
}
