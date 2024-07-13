import { color } from '@/styles/colors';
import { Chip } from '@mui/material';

type StatusChipProps = {
  message: string;
  isActive: boolean | undefined;
};

const StatusChip = (props: StatusChipProps) => {
  const { message, isActive } = props;

  const style = {
    position: 'absolute',
    bottom: 120,
    left: 10,
    color: 'white',
    backgroundColor: isActive ? color.main.green : color.main.red,
  };

  return <Chip label={message} sx={style} />;
};

export default StatusChip;
