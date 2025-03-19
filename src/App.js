import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter, Routes, Route, Navigate} from 'react-router-dom';
import Layout from "./Layout";
import Home from "./MainContent/Home/Home";
import Experience from "./MainContent/Experience/Experience";
import Projects from "./MainContent/Projects/Projects";
import Publications from "./MainContent/Publications/Publications";

import Hobbies from "./MainContent/Hobbies/Hobbies";
import RocksElement from "./MainContent/Hobbies/RocksFolder/RocksPage";
import UltimateElement from "./MainContent/Hobbies/UltimateFolder/UltimatePage";
import TransElement from "./MainContent/Hobbies/TransFolder/TransPage";
import ChessElement from "./MainContent/Hobbies/ChessFolder/ChessPage";
import FoodElement from "./MainContent/Hobbies/FoodFolder/FoodPage";
import CarsElement from "./MainContent/Hobbies/CarsFolder/CarsPage";
import LiftingElement from "./MainContent/Hobbies/LiftingFolder/LiftingPage";
import EcuElement from "./MainContent/Hobbies/EcuFolder/EcuPage";
import TabletennisElement from "./MainContent/Hobbies/TabletennisFolder/TabletennisPage";
import BackpackingElement from "./MainContent/Hobbies/BackpackingFolder/BackpackingPage";
import ClimbingElement from "./MainContent/Hobbies/ClimbingFolder/ClimbingPage";
import CyclingElement from "./MainContent/Hobbies/CyclingFolder/CyclingPage";
import BoardingElement from "./MainContent/Hobbies/BoardingFolder/BoardingPage";
import BaseballElement from "./MainContent/Hobbies/BaseballFolder/BaseballPage";
/*
*/
function App() {
    return (
        <>
            <HashRouter>
                <div className="site-container">
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/experience" element={<Experience />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/publications" element={<Publications />} />

                            <Route path="/hobbies" element={<Hobbies />} />
                            <Route path="/hobbies/rocks-path" element={<RocksElement />} />
                            <Route path="/hobbies/ultimate-path" element={<UltimateElement />} />
                            <Route path="/hobbies/trans-path" element={<TransElement />} />
                            <Route path="/hobbies/chess-path" element={<ChessElement />} />
                            <Route path="/hobbies/food-path" element={<FoodElement />} />
                            <Route path="/hobbies/cars-path" element={<CarsElement />} />
                            <Route path="/hobbies/lifting-path" element={<LiftingElement />} />
                            <Route path="/hobbies/ecu-path" element={<EcuElement />} />
                            <Route path="/hobbies/tabletennis-path" element={<TabletennisElement />} />
                            <Route path="/hobbies/backpacking-path" element={<BackpackingElement />} />
                            <Route path="/hobbies/climbing-path" element={<ClimbingElement />} />
                            <Route path="/hobbies/cycling-path" element={<CyclingElement />} />
                            <Route path="/hobbies/boarding-path" element={<BoardingElement />} />
                            <Route path="/hobbies/baseball-path" element={<BaseballElement />} />

                            <Route path="*" element={<Navigate to="/" replace />} />

                        </Routes>
                    </Layout>
                </div>
            </HashRouter>
        </>
    );
}

export default App;