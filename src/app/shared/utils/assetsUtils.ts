import { environment } from "src/environments/environment";

export function getImagePath(path: string): string {
  return `${environment.assetsUrlBase}/${path}`;
}