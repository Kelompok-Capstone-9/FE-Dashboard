import { Route, Routes } from "react-router-dom";
import React from "react";
import ManageTraining from "../pages/ManagesTraining/ManageTraining";
import LevelDetail from "../pages/ManagesTraining/LevelDetail";
import WorkoutDetail from "../pages/ManagesTraining/WorkoutDetail";

const LayoutTraining = () => {
    return(
        <>
        <Routes>
            <Route path="training" element={<ManageTraining/>}/>
            <Route path="levelDetail/:level" element={<LevelDetail/>}/>
            <Route path="levelDetail/:level/:id" element={<LevelDetail/>}/>
            <Route path="levelDetail/:level/:id/workoutDetail" element={<WorkoutDetail/>}/>
            <Route path="levelDetail/:level/:id/workoutDetail/:idWorkout" element={<WorkoutDetail/>}/>
        </Routes>
        </>
    )
}

export default LayoutTraining