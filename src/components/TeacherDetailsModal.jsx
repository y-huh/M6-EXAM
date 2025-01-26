import React from "react"
import { X, GraduationCap, Phone, Mail } from "lucide-react"

export default function TeacherDetailsModal({ teacher, onClose }) {
  if (!teacher) return null

  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
        <button onClick={onClose} className="absolute right-8 top-8 text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>

        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
            <img
              src={teacher.image ? URL.createObjectURL(teacher.image) : ""}
              alt={teacher.fullName}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-semibold">{teacher.fullName}</h2>
          <p className="text-gray-500">{teacher.email}</p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">About</h3>
            <p className="text-gray-600">{teacher.about || "No description provided."}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-gray-500">Subject</h4>
              <p>{teacher.subject}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Class</h4>
              <p>{teacher.class}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Age</h4>
              <p>{teacher.age}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Gender</h4>
              <p>{teacher.gender}</p>
            </div>
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <button className="p-3 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100">
              <GraduationCap size={24} />
            </button>
            <button className="p-3 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100">
              <Phone size={24} />
            </button>
            <button className="p-3 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100">
              <Mail size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

