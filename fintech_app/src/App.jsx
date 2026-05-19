import { useState } from 'react'
import LandingPage from './pages/LandingPage/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/Auth/Register'
import VerifyEmailPage from './pages/Auth/VerifyEmail'
import SignIn from './pages/Auth/SignIn'
import UploadID from './pages/Onboarding/UploadId'
import UploadPassport from './pages/Onboarding/UploadPassport'
import ProofOfResidence from './pages/Onboarding/ProofOfResidence'
import SetPin from './pages/Onboarding/SetPin'
import ConfirmPin from './pages/Onboarding/ConfirmPin'
import Dashboard from './pages/Dashboard/Dashboard'

import AppLayout from "./components/AppLayout";
// import Dashboard from "./pages/Dashboard/Dashboard";
import TransactionHistory from "./pages/TransactionHistory/TransactionHistory";
import Beneficiaries from "./pages/Beneficiaries/BeneficiaryList";
import AccountLimits from "./pages/AccountLimits/AccountLimits";
import Profile from "./pages/Profile/Profile";
import TransactionReceipt from "./pages/TransactionHistory/TransactionReceipt";
import AddBeneficiary from './pages/Beneficiaries/AddBeneficiary'
import TransferBox from './pages/Dashboard/TransferBox'
import UploadResidence from './pages/AccountLimits/UploadResidence'
import UploadProofOfFunds from './pages/AccountLimits/UploadProofOfFunds'
import LimitReview from './pages/AccountLimits/LimitReview'
import LimitSuccess from './pages/AccountLimits/LimitSuccess'
import ReviewTransfer from './pages/Transfer/ReviewTransfer'
import TransferNotice from './pages/Transfer/TransferNotice'
import TransferSuccess from './pages/Transfer/TransferSuccess'

function App() {
  

  return (
    <BrowserRouter>
     <Routes>
         <Route path="/" element={<LandingPage />} />  
         <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<VerifyEmailPage />} />
         <Route path="/signin" element={<SignIn />} /> 
        <Route path="/upload-id" element={<UploadID/>} />
        <Route path="/upload-passport" element={<UploadPassport/>} />
         <Route path="/residence" element={<ProofOfResidence/>} />
        <Route path="/set-pin" element={<SetPin/>} />
        <Route path="/confirm-pin" element={<ConfirmPin/>} />
        {/* <Route path="/home" element={<Dashboard/>}/> */}
        <Route path="/home/receipt" element={<TransactionReceipt />} />  
         <Route path="AddBene" element={<AddBeneficiary />} /> 
         <Route path="/home/transferbox" element={<TransferBox />}/>  
         <Route path="/home/residence" element={<UploadResidence/>} />   
         <Route path="/Funds" element={<UploadProofOfFunds/>} />
         <Route path="/Review" element={<LimitReview />} />
         <Route path="/success" element={<LimitSuccess/>} />
         <Route path="/home/review" element={<ReviewTransfer />} />
         <Route path="/home/notice" element={<TransferNotice />} />
         <Route path="/home/transfer-success" element={<TransferSuccess />} />




         <Route path="/home" element={<AppLayout />}>
          <Route index   element={<Dashboard />}          />
          <Route path="transactions"   element={<TransactionHistory />} />
          <Route path="beneficiaries"  element={<Beneficiaries />}      />
          <Route path="account-limits" element={<AccountLimits />}      />
          <Route path="profile"        element={<Profile />}   />


          {/* Catch-all → redirect to home */}
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Route>


     </Routes>         
      </BrowserRouter>      
  )
}

export default App
