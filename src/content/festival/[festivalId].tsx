import { Box } from "@mui/material";
import { useRouter } from "next/navigation";

const Festival = () => {
  const router = useRouter();
  const { festivalId } = router.query;
  if (festivalId && Array.isArray(festivalId)) return null;
  return <Box>{festivalId}</Box>;
};

export default Festival;
