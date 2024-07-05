export default function cleanSet(set, startString) {
  return Array.from(set).filter((item) => (startString ? item.startsWith(startString) : 0))
    .map((item) => item.replace(startString, '')).join('-');
}
