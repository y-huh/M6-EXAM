import React, { useState, useEffect } from "react"
import { Search, MoreHorizontal, Trash2 } from "lucide-react"
import { toast } from "react-hot-toast"
import AddTeacher from "./AddTeacher"
import TeacherDetailsModal from "../../components/TeacherDetailsModal"
import noteachers from "../../assets/images/noteachers.svg"

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center p-8 text-center rounded-lg">
    <img src={noteachers || "/placeholder.svg"} alt="No teachers" className="mb-4" />
    <h3 className="text-xl font-semibold mb-2">No Teachers at this time</h3>
    <p className="text-gray-500">Teachers will appear here after they enroll in your school.</p>
  </div>
)

const TeachersTable = ({ teachers, searchQuery, onDelete, onViewDetails }) => {
  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="py-3 px-4 text-left font-medium text-gray-600">Name</th>
            <th className="py-3 px-4 text-left font-medium text-gray-600">Subject</th>
            <th className="py-3 px-4 text-left font-medium text-gray-600">Class</th>
            <th className="py-3 px-4 text-left font-medium text-gray-600">Email address</th>
            <th className="py-3 px-4 text-left font-medium text-gray-600">Gender</th>
            <th className="py-3 px-4 text-left font-medium text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTeachers.map((teacher, index) => (
            <tr key={teacher.email} className={`border-b ${index % 2 === 0 ? "bg-white" : "bg-blue-50"}`}>
              <td className="py-3 px-4 flex items-center gap-3">
                <img
                  src={teacher.image ? URL.createObjectURL(teacher.image) : "/placeholder.svg?height=40&width=40"}
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                />
                {teacher.fullName}
              </td>
              <td className="py-3 px-4">{teacher.subject}</td>
              <td className="py-3 px-4">{teacher.class}</td>
              <td className="py-3 px-4">{teacher.email}</td>
              <td className="py-3 px-4">{teacher.gender}</td>
              <td className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <button onClick={() => onViewDetails(teacher)} className="p-1 hover:bg-gray-100 rounded">
                    <MoreHorizontal className="w-5 h-5 text-blue-600" />
                  </button>
                  <button onClick={() => onDelete(teacher.email)} className="p-1 hover:bg-red-50 rounded">
                    <Trash2 className="w-5 h-5 text-red-500" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Teachers() {
  const [searchQuery, setSearchQuery] = useState("")
  const [teachers, setTeachers] = useState([])
  const [showAddTeacher, setShowAddTeacher] = useState(false)
  const [selectedTeacher, setSelectedTeacher] = useState(null)

  useEffect(() => {
    const savedTeachers = localStorage.getItem("teachers")
    if (savedTeachers) {
      setTeachers(JSON.parse(savedTeachers))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("teachers", JSON.stringify(teachers))
  }, [teachers])

  const handleAddTeacher = (newTeacher) => {
    setTeachers((prev) => [...prev, newTeacher])
    setShowAddTeacher(false)
    toast.success("Teacher added successfully!")
  }

  const handleDeleteTeacher = (email) => {
    
      setTeachers((prev) => prev.filter((teacher) => teacher.email !== email))
      toast.success("Teacher deleted successfully!")
    
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Teachers</h1>
        <button
          onClick={() => setShowAddTeacher(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Teachers
        </button>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Search for a teachers by name or email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 pl-10 border rounded-md"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      </div>

      {teachers.length === 0 ? (
        <EmptyState />
      ) : (
        <TeachersTable
          teachers={teachers}
          searchQuery={searchQuery}
          onDelete={handleDeleteTeacher}
          onViewDetails={setSelectedTeacher}
        />
      )}

      {showAddTeacher && <AddTeacher onClose={() => setShowAddTeacher(false)} onAddTeacher={handleAddTeacher} />}

      {selectedTeacher && <TeacherDetailsModal teacher={selectedTeacher} onClose={() => setSelectedTeacher(null)} />}
    </div>
  )
}

