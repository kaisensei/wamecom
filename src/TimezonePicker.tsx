import { useState } from 'react';
import TimezoneSelect, { type ITimezone } from 'react-timezone-select';

function TimezonePicker() {
  const [selectedTimezone, setSelectedTimezone] = useState<ITimezone>(
    Intl.DateTimeFormat().resolvedOptions().timeZone,
  );

  return (
    <div className="App">
      <h2>react-timezone-select</h2>
      <blockquote>Please make a selection</blockquote>
      <div className="select-wrapper">
        <TimezoneSelect value={selectedTimezone} onChange={setSelectedTimezone} />
      </div>
      <h3>Output:</h3>
      <div
        style={{
          backgroundColor: '#ccc',
          padding: '20px',
          margin: '20px auto',
          borderRadius: '5px',
          maxWidth: '600px',
        }}
      >
        <pre
          style={{
            margin: '0 20px',
            fontWeight: 500,
            fontFamily: 'monospace',
          }}
        >
          {JSON.stringify(selectedTimezone, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default TimezonePicker;
