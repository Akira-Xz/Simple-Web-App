import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/home'
const LayoutTest = (props) => {
    const { children } = props
    return <>
        <div>
            <div>
                este es un layaut
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home/*" element={<Home />} />
            </Routes>
        </div>
    </>
}

export default LayoutTest