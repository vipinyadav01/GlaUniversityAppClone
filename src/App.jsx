import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AttendancePage from "./pages/AttendancePage";
import FeeDetail from "./components/FeeDetail";
import HierarchyPage from "./pages/HierarchyPage";
import ResultsPage from "./pages/ResultsPage";
import Library from "./components/Library";
import Calendar from "./components/Calendar";
import Placement from "./components/Placement";
import Message from "./components/Message";
import Profile from "./components/Profile";
import Notification from "./components/Notification";
import TimeTable from "./pages/Timetable";
import SubjectiveQuestions from "./components/SubjectiveQuestions";
import QuickActionPanel from "./components/QuickActionPanel";
import TodaysLectures from "./components/TodaysLectures";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/attendance" element={<AttendancePage />} />
        <Route path="/Fee-Details" element={<FeeDetail />} />
        <Route path="/hierarchy" element={<HierarchyPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/library" element={<Library />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/messages" element={<Message />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/timetable" element={<TimeTable />} />
        <Route path="/subjective-quiz" element={<SubjectiveQuestions />} />
        <Route path="/quick-action-panel" element={<QuickActionPanel />} />
        <Route path="/todays-lectures" element={<TodaysLectures />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
export default App;
