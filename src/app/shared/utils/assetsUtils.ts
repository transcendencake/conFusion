import { environment } from "src/environments/environment";
import { IMAGES_PATH } from "../constants/assetsPaths.constants";

export function getImagePath(path: string): string {
  return `${environment.assetsUrlBase}${IMAGES_PATH}/${path}`;
}