import { useEffect, useState } from 'react';
import { formatToHHMMSS } from '../utils/date';

type TimeTickerProps = {
  timestamp: number;
};

const TimeTicker = ({ timestamp }: TimeTickerProps) => {
  // Calculate how many seconds have passed
  const [secondsPassed, setSecondsPassed] = useState(() => {
    const currentTimeInSeconds = Math.floor(Date.now() / 1000);
    return currentTimeInSeconds - timestamp;
  });

  const fullDayNumber = Math.floor(secondsPassed / 86400);
  const dayLabel = fullDayNumber === 1 ? 'day' : 'days';

  const remainingSecondsSinceFullDay = secondsPassed % 86400;
  const timeFormat = formatToHHMMSS(remainingSecondsSinceFullDay);
  const displayTimeText =
    fullDayNumber > 0 ? `${fullDayNumber} ${dayLabel} ${timeFormat}` : timeFormat;

  useEffect(() => {
    const timeTicker = setInterval(() => {
      setSecondsPassed((previousSeconds) => previousSeconds + 1);
    }, 1000);

    return () => clearInterval(timeTicker);
  }, []);

  return <span className="text-gray-400 pl-4">{displayTimeText}</span>;
};

export default TimeTicker;
