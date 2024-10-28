import './App.scss'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './components/pages/home/Home'
import Calendar from './components/pages/calendar/Calendar'
import Add from './components/pages/add/Add'
import Edit from './components/pages/edit/Edit'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' index element={<Home />} />
        <Route path='/add' element={<Add />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/calendar' index element={<Calendar />} />
      </Route>
    </Routes>
  )
}

export default App
