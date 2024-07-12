import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

type AlertDialogProps = {
  open: boolean;
  handleClose: () => void;
  alertDialogTitle: string;
  alertDialogDescription: string;
  yes: (...args: any[]) => void;
};

const AlertDialog = (props: AlertDialogProps) => {
  const {
    open,
    handleClose,
    alertDialogTitle,
    alertDialogDescription,
    yes,
  } = props;
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{alertDialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {alertDialogDescription}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={yes}>Yes</Button>
          <Button onClick={handleClose} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AlertDialog;
