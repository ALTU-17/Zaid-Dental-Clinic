// Clinic sessions: 11:00 AM - 3:00 PM, 6:30 PM - 10:30 PM, Sunday by appointment.
export const getOpenStatus = () => {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday
  const mins = now.getHours() * 60 + now.getMinutes();
  const startMorning = 11 * 60;
  const endMorning = 15 * 60;
  const startEvening = 18 * 60 + 30;
  const endEvening = 22 * 60 + 30;

  const openMorning = day !== 0 && mins >= startMorning && mins < endMorning;
  const openEvening = day !== 0 && mins >= startEvening && mins < endEvening;

  if (openMorning) return { open: true, label: 'Open Now', sub: 'Closes at 3:00 PM' };
  if (openEvening) return { open: true, label: 'Open Now', sub: 'Closes at 10:30 PM' };
  if (day === 0) return { open: false, label: 'Closed Today', sub: 'Sunday - by appointment' };
  if (mins < startMorning) return { open: false, label: 'Closed', sub: 'Opens at 11:00 AM' };
  if (mins < startEvening) return { open: false, label: 'Closed', sub: 'Opens at 6:30 PM' };
  return { open: false, label: 'Closed Now', sub: 'Opens tomorrow at 11:00 AM' };
};