import SearchBox from "../searchBox/SearchBox";
import jsonData from "../../assets/students.json";
import DataTable from "../dataTable/DataTable";
const StudentTable = () => {
  return (
    <div>
      {/*Begin Students table */}
      <section className="py-24 lg:pt-[120px] lg:pb-28">
        <div className="container">
          <div className="mb-16 flex flex-col items-center">
            <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
              <span className="text-[#00CC8C]">Students</span> of the Year
            </h2>
            {/* Search Box */}
            <SearchBox />
            {/* Search Box Ends */}
          </div>
          <div className="max-w-[848px] mx-auto overflow-auto">
            {/* Studnet Table  */}
            <DataTable students={jsonData} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentTable;
