import { useLocation, useNavigate } from "react-router";

export default function Footer() {
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();

    return (
        <div> 
            Footer
            <input type="button" value="Go to Home" onClick={() => navigate("/")} />

        </div>
    );
  }