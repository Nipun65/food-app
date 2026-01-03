import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import OtpInput from "react-otp-input";
import { verifyOtp } from "../../services/api";
import styles from "./index.module.css";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();
  const phone = state?.phone;
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    if (otp.length < 6) return alert("Please enter complete OTP");

    try {
      setLoading(true);
      const data = await verifyOtp(phone, otp);
      localStorage.setItem("token", data.token);
      navigate("/home");
    } catch (e: any) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.screen} style={{position:"relative"}}>
        <Link className={styles.backbtn} to={'/login'}>{"<"}</Link>
      <h1>OTP Verification</h1>
      <p>Enter the verification code sent to your mobile</p>

      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span style={{ width: "8px" }}></span>}
        renderInput={(props) => <input {...props} className={styles.otpInput} />}
        shouldAutoFocus
        inputType="tel"
      />

      <button onClick={handleVerify} disabled={loading} style={{ marginTop: "30px" }}>
        {loading ? "Verifying..." : "Verify"}
      </button>
    </div>
  );
};

export default OtpVerification;