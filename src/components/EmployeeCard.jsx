import React from "react";
import { IoCall, IoMail } from "react-icons/io5";
import { BsPhone } from "react-icons/bs";

const employeeData = [
  {
    name: "Mehmet Gök",
    position: "Geschäftsführung",
    phone: "+49 (0)7253 9583-791",
    mobile: "+49 (0)172 9264 414",
    email: "mehmet.goek@turom-gmbh.de",
  },
  {
    name: "Tanju Gök",
    position: "Kaufmännische Leitung",
    phone: "+49 (0)7253 5091 339",
    mobile: "+49 (0)176 2105 2120",
    email: "info@gundg-fugentechnik.de",
  },
  {
    name: "Alper Güney",
    position: "Technische Leitung",
    phone: "+49 (0)7253 5091 338",
    mobile: "+49 (0)176 7715 5484",
    email: "info@gundg-fugentechnik.de",
  },
];

const EmployeeCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container px-7 mx-auto p-4 pb-24">
      {employeeData.map((employee, index) => (
        <div
          key={index}
          className="bg-[#D6EFF6] rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {employee.name}
            </h3>
            <p className="text-cyan-600 font-medium tracking-wide">
              {employee.position}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center bg-white p-3 rounded-lg shadow-sm hover:shadow transition-shadow">
              <div className="bg-cyan-50 p-2 rounded-lg">
                <IoCall className="text-cyan-600 text-xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Telefon</p>
                <p className="text-gray-700 ">{employee.phone}</p>
              </div>
            </div>

            <div className="flex items-center bg-white p-3 rounded-lg shadow-sm hover:shadow transition-shadow">
              <div className="bg-cyan-50 p-2 rounded-lg">
                <BsPhone className="text-cyan-600 text-xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Mobil</p>
                <p className="text-gray-700">{employee.mobile}</p>
              </div>
            </div>

            <div className="flex items-center bg-white p-3 rounded-lg shadow-sm hover:shadow transition-shadow">
              <div className="bg-cyan-50 p-2 rounded-lg">
                <IoMail className="text-cyan-600 text-xl" />
              </div>
              <div className="ml-4">
                <button
                  onClick={() =>
                    (window.location.href = `mailto:${employee.email}`)
                  }
                  className="text-cyan-600 hover:text-cyan-700 font-medium transition-colors"
                >
                  E-Mail schreiben
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeCard;
