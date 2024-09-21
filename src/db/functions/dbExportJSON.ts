import {RxDumpCollection} from "rxdb";
import {writeFileSync} from "fs";

/**
 * Export a collection as JSON.
 * @function dbExportJSON
 * @param obj
 * @param filename
 */
export default function dbExportJSON(obj: RxDumpCollection<any>, filename: string) {
  writeFileSync(filename, JSON.stringify(obj, null, 2));
}