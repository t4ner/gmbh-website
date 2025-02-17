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
    <div className="container grid grid-cols-1 gap-8 p-4 pb-24 mx-auto md:grid-cols-3 px-7">
      {employeeData.map((employee, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="bg-[#D6EFF6] rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
          <div className="mb-6 text-center">
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              {employee.name}
            </h3>
            <p className="font-medium tracking-wide text-cyan-600">
              {employee.position}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center p-3 transition-shadow bg-white rounded-lg shadow-sm hover:shadow">
              <div className="p-2 rounded-lg bg-cyan-50">
                <IoCall className="text-xl text-cyan-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Telefon</p>
                <p className="text-gray-700 ">{employee.phone}</p>
              </div>
            </div>

            <div className="flex items-center p-3 transition-shadow bg-white rounded-lg shadow-sm hover:shadow">
              <div className="p-2 rounded-lg bg-cyan-50">
                <BsPhone className="text-xl text-cyan-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Mobil</p>
                <p className="text-gray-700">{employee.mobile}</p>
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
                  className="font-medium transition-colors text-cyan-600 hover:text-cyan-700"
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
