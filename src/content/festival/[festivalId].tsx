import { Box } from "@mui/material";
import { useSearchParams } from "next/navigation";

const Festival = () => {
  const params = useSearchParams();
  const festivalId = params.get("festivalId");
  if (festivalId && Array.isArray(festivalId)) return null;
  return <Box>{festivalId}</Box>;
};

export default Festival;
