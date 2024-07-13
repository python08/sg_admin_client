import Snackbar from '@mui/material/Snackbar';
import { Alert, AlertColor, Fade } from '@mui/material';
import { uniqueId } from 'lodash';
import { apiClientError, apiServerError, apiSuccess } from '..';
import { useEffect, useState } from 'react';

type ApiAlertProps = {
  responseStatus: number;
};

const ApiAlert = ({ responseStatus }: ApiAlertProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, [responseStatus]);

  const handleClose = () => {
    setOpen(false);
  };

  if (responseStatus) {
    if (apiSuccess(responseStatus)) {
      return (
        <TransitionsSnackbar
          open={open}
          severity="success"
          message="Data saved successfully"
          handleClose={handleClose}
          key={uniqueId()}
        />
      );
    } else if (apiClientError(responseStatus)) {
      return (
        <TransitionsSnackbar
          open={open}
          severity="warning"
          message="Please enter the required fields"
          handleClose={handleClose}
          key={uniqueId()}
        />
      );
    } else if (apiServerError(responseStatus)) {
      return (
        <TransitionsSnackbar
          open={open}
          severity="error"
          message="unable to save data"
          handleClose={handleClose}
          key={uniqueId()}
        />
      );
    }

    return (
      <TransitionsSnackbar
        open={open}
        severity="error"
        message="Something went wrong"
        handleClose={handleClose}
        key={uniqueId()}
      />
    );
  }
};

export default ApiAlert;

type TransitionsSnackbarProps = {
  open: boolean;
  message: string;
  severity: AlertColor | undefined;
  handleClose: () => void;
  key: string;
};

export const TransitionsSnackbar = ({
  open,
  message,
  severity,
  handleClose,
}: TransitionsSnackbarProps) => (
  <div>
    <Snackbar
      open={open}
      TransitionComponent={Fade}
      autoHideDuration={4000}
      onClose={handleClose}
    >
      <Alert severity={severity} variant="filled" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  </div>
);
