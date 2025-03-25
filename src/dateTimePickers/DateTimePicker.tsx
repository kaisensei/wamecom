import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker as MuiDateTimePicker } from '@mui/x-date-pickers';
import { DateTime, SetDateTime } from "./util";
import dayjs from 'dayjs';
interface DateTimePickerProps {
  value: DateTime;
  setValue: SetDateTime;
}

function DateTimePicker({
  value,
  setValue,
}: DateTimePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <MuiDateTimePicker
        value={value}
        minDate={dayjs()}
        onChange={setValue}
        slotProps={{
          textField: {
            sx: {
              width: "100%",
              height: 30, "& .MuiInputBase-root": {
                height: 30,
                "& .MuiInputBase-input": {
                  padding: "0px 16px",
                  color: "gray",
                },
              }
            },
          },
        }}
      />
    </LocalizationProvider >
  );
}

export default DateTimePicker;