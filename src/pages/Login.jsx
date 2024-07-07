import Header from "../components/PublicHome/Login/Header";
import FormAction from "../components/PublicHome/Login/FormAction";
import FormExtra from "../components/PublicHome/Login/FormExtra";
import Login from "../components/PublicHome/Login/Login";
import Layout from "../utils/Layout";

const LoginPage = () => {
  return (
    <Layout>
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet?"
        linkName="Signup"
        linkUrl="/signup"
      />
      <Login />
      <FormExtra />
      <FormAction />
    </Layout>
  );
};

export default LoginPage;
