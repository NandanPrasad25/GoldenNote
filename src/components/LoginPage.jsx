import Header from "../components/Login/Header";
import Login from "./Login/Login";

const LoginPage = () => {
  return (
    <>
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet?"
        linkName="Signup"
        linkUrl="/signup"
      />
      <Login />
    </>
  );
};

export default LoginPage;
