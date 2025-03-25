import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTime, SetDateTime } from './util';
import dayjs from 'dayjs';

interface MonthPickerProps {
  value: DateTime;
  setValue: SetDateTime;
}

function MonthPicker({
  value,
  setValue
}: MonthPickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DatePicker
        value={value}
        onChange={setValue}
        views={["year", "month"]}
        format="MM/YYYY"
        openTo="month"
        minDate={dayjs()}
        slotProps={{
          textField: {
            sx: {
              height: 30, "& .MuiInputBase-root": {
                height: 30,
                "& .MuiInputBase-input": {
                  padding: "2px 16px",
                  fontSize: "12px"
                },
              }
            },
          },
        }}
      />
    </LocalizationProvider >
  );
}

export default MonthPicker;
