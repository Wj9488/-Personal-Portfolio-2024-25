"use client"

import { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date());
    };

    updateTime();
    const intervalId = setInterval(updateTime, 55000);

    return () => clearInterval(intervalId);
  }, []);

  if (!time) return (
    <div>
        <p className="opacity-50 lg:text-lg text-sm mb-2">Local Time (UK)</p>
        <p className="text-[3rem] lg:text-[4rem] leading-[1] font-thin lowercase">
        00:00
        </p>
    </div>
  );

  const timeString = time.toLocaleTimeString('en-GB', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div>
      <p className="opacity-50 lg:text-lg text-sm mb-2 pc">Local Time (UK)</p>
      <p className="text-[3rem] lg:text-[4rem] leading-[1] lowercase pc font-light">
        {timeString}
      </p>
    </div>
  );
};

export default Clock;
