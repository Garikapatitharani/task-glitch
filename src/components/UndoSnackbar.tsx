import { Snackbar, Button } from '@mui/material';

interface Props {
  open: boolean;
  onClose: () => void;
  onUndo: () => void;
}

export default function UndoSnackbar({ open, onClose, onUndo }: Props) {
  const handleUndo = () => {
    onUndo();
    onClose(); 
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={onClose} 
      message="Task deleted"
      action={
        <Button color="secondary" size="small" onClick={handleUndo}>
          Undo
        </Button>
      }
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    />
  );
}
