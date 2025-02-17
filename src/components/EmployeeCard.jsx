import React from "react";
import { IoCall, IoMail } from "react-icons/io5";
import { BsPhone } from "react-icons/bs";
import { motion } from "framer-motion";

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
    <div className="container grid grid-cols-1 gap-8 p-4 px-4 pb-20 mx-auto md:grid-cols-3 md:px-7">
      {employeeData.map((employee, index) => (
        <motion.div
          key={index}
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="bg-[#D6EFF6] rounded-2xl shadow-lg p-4 md:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
          <div className="mb-6 text-center">
            <h3 className="mb-2 text-base font-semibold text-gray-800 md:text-xl">
              {employee.name}
            </h3>
            <p className="text-sm font-medium tracking-wide text-cyan-600 md:text-base">
              {employee.position}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center p-3 transition-shadow bg-white rounded-lg shadow-sm hover:shadow">
              <div className="p-2 rounded-lg bg-cyan-50">
                <IoCall className="text-xl text-cyan-600" />
              </div>
              <div className="ml-4">
                <p className="text-xs text-gray-500 md:text-sm ">Telefon</p>
                <p className="text-sm text-gray-700 md:text-base">
                  {employee.phone}
                </p>
              </div>
            </div>

            <div className="flex items-center p-3 transition-shadow bg-white rounded-lg shadow-sm hover:shadow">
              <div className="p-2 rounded-lg bg-cyan-50">
                <BsPhone className="text-xl text-cyan-600" />
              </div>
              <div className="ml-4">
                <p className="text-xs text-gray-500 md:text-sm ">Mobil</p>
                <p className="text-sm text-gray-700 md:text-base">
                  {employee.mobile}
                </p>
              </div>
            </div>

            <div className="flex items-center p-3 transition-shadow bg-white rounded-lg shadow-sm hover:shadow">
              <div className="p-2 rounded-lg bg-cyan-50">
                <IoMail className="text-xl text-cyan-600" />
              </div>
              <div className="ml-4">
                <button
                  onClick={() =>
                    (window.location.href = `mailto:${employee.email}`)
                  }
                  className="text-sm transition-colors md:font-medium md:text-base text-cyan-600 hover:text-cyan-700"
                >
                  E-Mail schreiben
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default EmployeeCard;
