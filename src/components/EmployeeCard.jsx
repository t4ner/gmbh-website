import React from "react";
import { IoCall, IoMail } from "react-icons/io5";
import { BsPhone } from "react-icons/bs";

const employeeData = [
  {
    name: "Tanju Gök",
    position: "Betriebsleitung",
    phone: "+49 (0)7253 5091 339",
    mobile: "+49 (0)176 2105 2120",
    email: "info@gundg-fugentechnik.de",
  },
];

const EmployeeCard = () => {
  return (
    <div className="container px-4 mx-auto mb-20 md:px-7">
      {employeeData.map((employee, index) => (
        <div
          key={index}
          className="bg-[#D6EFF6]  rounded-2xl shadow-lg p-4 md:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0 md:mr-32">
              <h3 className="mb-2 text-base font-semibold text-gray-800 md:text-xl">
                {employee.name}
              </h3>
              <p className="text-sm font-medium tracking-wide md:text-lg text-cyan-600">
                {employee.position}
              </p>
            </div>

            <div className="grid flex-1 grid-cols-1 gap-4">
              <div className="flex items-center p-4 transition-all duration-300 shadow-sm bg-white/80 backdrop-blur-sm rounded-xl hover:shadow group">
                <div className="p-3 transition-colors rounded-lg bg-cyan-50 group-hover:bg-cyan-100">
                  <IoCall className="text-xl text-cyan-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Telefon</p>
                  <p className="text-sm text-gray-700 md:font-medium md:text-base">
                    {employee.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-center p-4 transition-all duration-300 shadow-sm bg-white/80 backdrop-blur-sm rounded-xl hover:shadow group">
                <div className="p-3 transition-colors rounded-lg bg-cyan-50 group-hover:bg-cyan-100">
                  <BsPhone className="text-xl text-cyan-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Mobil</p>
                  <p className="text-sm text-gray-700 md:font-medium md:text-base">
                    {employee.mobile}
                  </p>
                </div>
              </div>

              <div className="flex items-center p-4 transition-all duration-300 shadow-sm bg-white/80 backdrop-blur-sm rounded-xl hover:shadow group">
                <div className="p-3 transition-colors rounded-lg bg-cyan-50 group-hover:bg-cyan-100">
                  <IoMail className="text-xl text-cyan-600" />
                </div>
                <div className="ml-4">
                  <button
                    onClick={() =>
                      (window.location.href = `mailto:${employee.email}`)
                    }
                    className="text-sm transition-colors md:font-medium text-cyan-600 hover:text-cyan-700 md:text-base"
                  >
                    E-Mail schreiben
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeCard;
