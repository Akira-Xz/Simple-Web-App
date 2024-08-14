import { funtionTest } from "./js"
import './css/index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Test from "./test";
import { useState } from "react";
const Index = () => {
    const [permiso, setPermiso] = useState(true)
    return <>
        <div>
            este es el home
        </div>
        <Routes>
            {/* aqui iran las reglas de negocio de los permisos */}
            {permiso && <Route path="/test" element={<Test />} />}
            {!permiso && <Route path="/test" element={<>401</>} />}
        </Routes>
    </>
}

export default Index