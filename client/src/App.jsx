import { Route, Routes } from "react-router"
import { path } from "./utils/constant"
import { Home, Login } from './containers/Public'
function App() {
  return (
    <div className="h-screen w-screen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />} >
          <Route path={path.LOGIN} element={<Login />} />

        </Route>
      </Routes>
    </div>
  )
}

export default App
