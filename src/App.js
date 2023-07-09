import { Routes, Route } from "react-router-dom";
import {
  SignUp,
  SignIn,
  Header,
  ShowPostComment,
  ShowNews,
  Landing,
  Footer,
} from "./component/index";
import ViewNews from "./component/News/ViewNews";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ShowNews" element={<ShowNews />} />
        <Route path="/ViewNews/:index" element={<ViewNews />} />
        <Route path="/SignUP" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/ShowPost" element={<ShowPostComment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
