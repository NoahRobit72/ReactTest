import { Link, useNavigate} from "react-router-dom"; // Import useLocation
import plusLogo from "../static/plus.png"
import '../css/Header.css';
import React, { useEffect} from "react";
import { useParams } from "react-router-dom"; // Import useNavigate
import { collection, doc, getDocs } from "firebase/firestore";
import { FSDB } from "../firebase_setup/firebase"


function HeaderLab() {
  const { selectedOption } = useParams();
  //const [labsData, setLabsData] = useState([]);
  const navigate = useNavigate(); // Use useNavigate hook to navigate

  useEffect(() => {
    async function fetchLabsData() {
      try {
        const universityDocRef = doc(FSDB, "Universities", selectedOption);
        console.log("Fetching labs data for:", selectedOption);
        const labsSnapshot = await getDocs(collection(universityDocRef, "Labs"));
        const labsData = labsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("Fetched labs data: ", labsData);
      } catch (error) {
        console.error("Error fetching labs data: ", error);
      }
    }

    if (selectedOption) {
      fetchLabsData();
    }
  }, [selectedOption]);


  const handleAddReviewClick = () => {
    navigate(`/blank?selectedOption=${encodeURIComponent(selectedOption)}`);
  };


  return (
    <header>
      <Link className="site-logo" to="/">ResearchReviews.com</Link>
      <nav>
        <button className="addLab" onClick={handleAddReviewClick}>
          <div className="buttonBox">
            <img src={plusLogo} alt="BigCo Inc. logo"/>
            <p className="request">Add a Review</p>
          </div>
        </button>
      </nav>
    </header>
  );
}

export default HeaderLab;
