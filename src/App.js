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

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ShowNews" element={<ShowNews />} />
        <Route path="/SignUP" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/ShowPost" element={<ShowPostComment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
