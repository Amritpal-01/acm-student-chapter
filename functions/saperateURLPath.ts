import { checkpointMap } from "@/types/type";

const saperateURLPath = (path: string): checkpointMap[] => {
  if (path == "/") return [];

  const arr = path.split("/");
  let url: string = "";
  let chackpointMap: checkpointMap[] = [];

  arr.map((checkpoint) => {
    url = url + checkpoint + "/";
    chackpointMap.push({
      url: url,
      checkpoint: checkpoint,
    });
  });

  return chackpointMap;
};

export default saperateURLPath;
