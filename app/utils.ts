export function crash(message: string): never {
  throw new Error(message);
}
