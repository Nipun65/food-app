import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendOtp } from "../../services/api";
import styles from "./index.module.css";

const MobileVerification = () => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    if (!phone) return alert("Enter mobile number");

    try {
      setLoading(true);
      await sendOtp(phone);
      navigate("/otp", { state: { phone } });
    } catch (e: any) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.screen}>
      <div className={styles.content}>
        <h1>Enter Your Mobile Number</h1>
        <p>We will send you the 4 digit verification code</p>

        <input
          placeholder="Enter your mobile number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button onClick={handleSendOtp} disabled={loading}>
          {loading ? "Sending..." : "Send Code"}
        </button>
      </div>
    </div>
  );
};

export default MobileVerification;
