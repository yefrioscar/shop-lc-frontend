export function containsPath(absolutePath, path) {
  let split = absolutePath.split("/");

  return split.includes(path);
}
