'use client';

import { useState } from "react";

export default function EventForm() {
  const [eventTitle, setEventTitle] = useState("");
  const [date, setDate] = useState("");
  const[description, setDescription] = useState("");
  const [status, setStatus] = useState("active");
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Event: ${eventTitle}\nDate: ${date}\nStatus: ${status}\nShow: ${show}`);
  };

  return (
      <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 pt-9">
        <div className="max-w-md mx-auto mt-16 my-16 p-6 bg-black text-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">UpComming Create Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Event Title */}
        <div>
          <label className="block text-sm font-medium"> Event Title</label>
          <input
            type="text"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            className="mt-1 w-full p-2 border border-gray-600 rounded-lg bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter event title"
            required
          />
        </div>

    {/* Description */}
    <div>
      <label className="block text-sm font-medium">Description</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mt-1 w-full p-2 border border-gray-600 rounded-lg bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter event description"
        rows={4}
        required
      ></textarea>
    </div>


        {/* Date */}
        <div>
          <label className="block text-sm font-medium">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 w-full p-2 border border-gray-600 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Status */}
        {/* <div>
          <label className="block text-sm font-medium">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-1 w-full p-2 border border-gray-600 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div> */}

        {/* Show Checkbox */}
        {/* <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="showCheckbox"
            checked={show}
            onChange={() => setShow(!show)}
            className="form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-600 bg-black"
          />
          <label htmlFor="showCheckbox" className="text-sm font-medium">
            Show
          </label>
        </div> */}

        {/* Show Event Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Show Event
        </button>
      </form>
    </div>
      </div>
  );
}
