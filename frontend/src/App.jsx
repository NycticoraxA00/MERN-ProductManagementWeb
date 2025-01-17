import { Box } from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import Navbar from "./components/Navbar"
function App() {
  return (
    <Box minH="100vh" bg="gray.100" p={4}>
      <Navbar/>
      <Routes>
        <Route path="/" element ={<HomePage/>}></Route>
        <Route path="/create" element ={<CreatePage/>}></Route>
      </Routes>
    </Box>
    
  )
}

export default App
