const ANGULAR_PRESENT_ATTRIBUTE_VALUE: string = '';

export function AngularResolveOptionalAttribute<T>(attributeValue: string | undefined, resultIfPresent: T, resultIfAbsent: T): T {
  if (!!attributeValue || attributeValue === ANGULAR_PRESENT_ATTRIBUTE_VALUE) {
    return resultIfPresent;
  }
  return resultIfAbsent;
}