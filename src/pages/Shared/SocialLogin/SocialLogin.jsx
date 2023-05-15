import { useContext } from "react";
import { FaGoogle,FaLinkedinIn,FaFacebookF } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => console.log(error))
    }


  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
      <button onClick={handleGoogleSignIn} className="btn btn-outline btn-circle mr-2">
            <FaGoogle></FaGoogle>
        </button>
      <button className="btn btn-circle btn-outline mr-2 text-blue-800">
      <FaLinkedinIn></FaLinkedinIn>
        </button>
      <button className="btn btn-circle btn-outline mr-2 text-blue-600">
     <FaFacebookF></FaFacebookF>
        </button>
        
      </div>
    </div>
  );
};

export default SocialLogin;
