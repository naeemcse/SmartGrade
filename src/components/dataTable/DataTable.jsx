// DataTable.jsx

import React from 'react';

const DataTable = ({ students }) => {
  const renderStudentRows = (className, classStudents) => {
    return classStudents.map((student, index) => (
      <React.Fragment key={student.id}>
        {index === 0 && (
          <tr key={`${className}-header`} className="bg-white/5">
            <td className="p-5 text-sm md:text-xl" colSpan={4}>
              {className}
            </td>
          </tr>
        )}
        <tr className="border-b border-[#7ECEB529]">
          <td className="p-5 text-sm md:text-xl">{student.id}</td>
          <td className="p-5 text-sm md:text-xl">
            <div className="flex space-x-3 items-center">
              <img className="w-8 h-8 rounded-full person-photo" src={student.image} width={32} height={32} alt={student.name} />
              <span className="whitespace-nowrap">{student.name}</span>
            </div>
          </td>
          <td className="p-5 text-sm md:text-xl text-center">{student.score}</td>
          <td className="p-5 text-sm md:text-xl text-center">{student.percentage}%</td>
        </tr>
      </React.Fragment>
    ));
  };

  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-[#FFFFFF0D]">
          <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
            ID
          </th>
          <th className="p-5 text-sm md:text-xl font-semibold text-left">
            Name
          </th>
          <th className="p-5 text-sm md:text-xl font-semibold">
            Scores
          </th>
          <th className="p-5 text-sm md:text-xl font-semibold">
            Percentage
          </th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(students).map(([className, classStudents]) => (
          renderStudentRows(className, classStudents)
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
