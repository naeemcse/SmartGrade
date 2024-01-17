
import './App.css'
import Hero from './components/hero/Hero'
import Navbr from './components/navbar/Navbr'
import StudentTable from './components/studenttable/StudentTable'

function App() {

  return (
    <div  className="bg-[#172227] font-[Inter] text-white">
     <Navbr />
     {/* Hero Section */}
     <Hero />
      {/* Hero Section Ends */}
      {/* Student Table */}
      <StudentTable />
    </div>
  )
}

export default App
