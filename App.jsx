import Home from './Pagas/home'
import { Route, Routes } from 'react-router-dom'
import Notification from './Pagas/Notification'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/answer" element={<Home />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/clipboard" element={<Home />} />
        <Route path="/group" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
