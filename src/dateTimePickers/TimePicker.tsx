import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker as MuiTimePicker } from '@mui/x-date-pickers/TimePicker';
import { SetDateTime, DateTime } from './util';

interface TimePickerProps {
  value: DateTime;
  setValue: SetDateTime;
}

function TimePicker({ value, setValue }: TimePickerProps) {
  return (
    < LocalizationProvider dateAdapter={AdapterDayjs} >
      <MuiTimePicker
        value={value}
        onChange={setValue}
        slotProps={{
          textField: {
            sx: {
              height: 30, "& .MuiInputBase-root": {
                height: 30,
                "& .MuiInputBase-input": {
                  padding: "0px 16px",
                },
              }
            },
          },
        }}
      />
    </LocalizationProvider >
  );
}

export default TimePicker;
