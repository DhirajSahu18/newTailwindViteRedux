import React, { useState } from "react";

const dummyLectures = {
  "2025-02-01": [
    { subject: "Mathematics", batch: "Batch A" },
    { subject: "Physics", batch: "Batch B" }
  ],
  "2025-02-02": [
    { subject: "Chemistry", batch: "Batch A" },
    { subject: "Mathematics", batch: "Batch A" },
    { subject: "Physics", batch: "Batch B" }
  ],
  "2025-02-03": [
    { subject: "Biology", batch: "Batch C" },
    { subject: "English", batch: "Batch A" }
  ]
};

function formatDate(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const DarkThemeCalendar = ({ selectedDate, setSelectedDate, setLectures }) => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setLectures(dummyLectures[formatDate(date)] || []);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(parseInt(e.target.value));
  };

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value));
  };

  const generateCalendarDays = () => {
    const daysInMonth = [];
    const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1);
    const lastDayOfMonth = new Date(selectedYear, selectedMonth + 1, 0);
    let startDate = new Date(firstDayOfMonth);
    startDate.setDate(startDate.getDate() - ((startDate.getDay() + 6) % 7)); // Start from Monday

    while (daysInMonth.length < 42) { // Ensures a 6-row calendar view
      daysInMonth.push(new Date(startDate));
      startDate.setDate(startDate.getDate() + 1);
    }

    return daysInMonth;
  };

  const calendarDays = generateCalendarDays();
  return (
    <div className="bg-[#222] p-4 rounded-lg text-white">
      <div className="flex justify-between items-center mb-4">
        <select
          value={selectedMonth}
          onChange={handleMonthChange}
          className="bg-[#333] text-white p-2 rounded"
        >
          {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month, index) => (
            <option key={index} value={index}>{month}</option>
          ))}
        </select>
        <select
          value={selectedYear}
          onChange={handleYearChange}
          className="bg-[#333] text-white p-2 rounded"
        >
          <option value={new Date().getFullYear()}>{new Date().getFullYear()}</option>
          <option value={new Date().getFullYear() + 1}>{new Date().getFullYear() + 1}</option>
        </select>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {calendarDays.map((date, index) => (
          <div
            key={index}
            className={`cursor-pointer p-2 rounded border text-center ${
              selectedDate && selectedDate.toDateString() === date.toDateString() ? "bg-blue-500 text-white" : "bg-[#333]"
            }`}
            onClick={() => handleDateClick(date)}
          >
            {date.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
};

const AttendancePage = () => {
  const role = "teacher";
  const [activeTab, setActiveTab] = useState("daily");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [lectures, setLectures] = useState([]);

  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col items-center">
      <div className="w-full max-w-4xl mt-8 p-6 bg-[#1e1e1e] rounded-lg shadow-lg">
        <div className="flex justify-between border-b border-gray-600 mb-4">
          <button
            className={`p-3 w-1/2 ${activeTab === "daily" ? "bg-[#3182ce]" : "bg-[#333]"}`}
            onClick={() => setActiveTab("daily")}
          >
            Daily Attendance
          </button>
          <button
            className={`p-3 w-1/2 ${activeTab === "defaulters" ? "bg-[#3182ce]" : "bg-[#333]"}`}
            onClick={() => setActiveTab("defaulters")}
          >
            Defaulters
          </button>
        </div>

        {activeTab === "daily" ? (
          <div>
            <h2 className="text-xl font-semibold mb-4">Daily Attendance</h2>
            <DarkThemeCalendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} setLectures={setLectures} />
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Lectures for {selectedDate.toDateString()}</h3>
              {lectures.length > 0 ? (
                <ul className="mt-2">
                  {lectures.map((lecture, index) => (
                    <li key={index} className="bg-[#333] p-2 rounded mt-2">{lecture.subject} - {lecture.batch}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2">No lectures available.</p>
              )}
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-4">Defaulters</h2>
            <p>Dummy defaulter data coming soon.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttendancePage;
