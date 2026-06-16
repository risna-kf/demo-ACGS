import React, { useState, useEffect } from 'react';
import '../styles/Contact.css';

export default function LiveStatus() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeStr, setTimeStr] = useState('');
  const [todayIdx, setTodayIdx] = useState(0); // 0 = Sun, 1 = Mon, etc.

  const checkStatus = () => {
    // 1. Get current date/time in UTC
    const d = new Date();
    const utc = d.getTime() + d.getTimezoneOffset() * 60000;
    
    // 2. Convert to Sri Lanka time (UTC + 5:30)
    const slTime = new Date(utc + (3600000 * 5.5));
    
    const day = slTime.getDay();
    const hours = slTime.getHours();
    const minutes = slTime.getMinutes();
    const totalMinutes = (hours * 60) + minutes;

    setTodayIdx(day);

    // Format current Sri Lanka time for display
    const timeFormatted = slTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
    setTimeStr(timeFormatted);

    // 3. Evaluate Open/Closed
    // Monday (1) - Friday (5): 8:30 AM - 5:00 PM (510 mins to 1020 mins)
    // Saturday (6): 9:00 AM - 1:00 PM (540 mins to 780 mins)
    // Sunday (0): Closed
    let open = false;
    if (day >= 1 && day <= 5) {
      if (totalMinutes >= 510 && totalMinutes < 1020) {
        open = true;
      }
    } else if (day === 6) {
      if (totalMinutes >= 540 && totalMinutes < 780) {
        open = true;
      }
    }
    setIsOpen(open);
  };

  useEffect(() => {
    checkStatus();
    // Refresh every 30 seconds
    const interval = setInterval(checkStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  const schedule = [
    { label: 'Sunday', time: 'Closed', idx: 0 },
    { label: 'Monday – Friday', time: '8:30 AM – 5:00 PM', idx: [1, 2, 3, 4, 5] },
    { label: 'Saturday', time: '9:00 AM – 1:00 PM', idx: 6 }
  ];

  const isToday = (itemIdx) => {
    if (Array.isArray(itemIdx)) {
      return itemIdx.includes(todayIdx);
    }
    return itemIdx === todayIdx;
  };

  return (
    <div className="liveStatusCard">
      <div className="liveHeader">
        <span className="liveTitle">Office Hours</span>
        <div className={`statusBadge ${isOpen ? 'badge-open' : 'badge-closed'}`}>
          <span className={`statusDot ${isOpen ? 'blink' : ''}`}></span>
          {isOpen ? 'Open Now' : 'Closed'}
        </div>
      </div>
      
      <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginTop: '-0.5rem' }}>
        Current Sri Lanka Time: <strong>{timeStr}</strong>
      </p>

      <div className="hoursSchedule">
        {schedule.map((item, index) => (
          <div 
            key={index} 
            className={`scheduleRow ${isToday(item.idx) ? 'todayHighlight' : ''}`}
          >
            <span>
              {item.label}
              {isToday(item.idx) && <span className="todayIndicator">Today</span>}
            </span>
            <span>{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
