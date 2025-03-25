import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTime, SetDateTime } from './util';
import dayjs from 'dayjs';

interface DatePickerProps {
  value: DateTime;
  setValue: SetDateTime;
}

function DatePicker({ value, setValue }: DatePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <MuiDatePicker
        value={value}
        minDate={dayjs()}
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

export default DatePicker;
