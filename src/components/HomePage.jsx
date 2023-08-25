import EmployeeList from './EmployeeList'
import Header from './Header'
import SearchBar from './SearchBar'
import './homePage.css'

export default function Homepage() {
  return (
    <div className='homepage'>
    <Header title="Employee Directory"/>
    <SearchBar />
    <EmployeeList />
    </div>
  )
}
