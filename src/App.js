import { useState } from "react";

import Footer from "./components/Footer";
import Notes from "./components/Notes";
import Table from "./components/Table";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import Dates from "./components/Dates";
import ClientDetails from "./components/ClientDetails";

function App() {
  const [showInvoice, setShowInvoice] = useState(false);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, SetBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");

  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
        {showInvoice ? (
          <div>
            <Header handlePrint={handlePrint} />
            <MainDetails name={name} address={address} />
            <ClientDetails
              clientName={clientName}
              clientAddress={clientAddress}
            />
            <Dates
              invoiceNumber={invoiceNumber}
              invoiceDate={invoiceDate}
              dueDate={dueDate}
            />
            <Table />
            <Notes notes={notes} />
            <Footer
              name={name}
              address={address}
              website={website}
              email={email}
              phone={phone}
              bankAccount={bankAccount}
              bankName={bankName}
            />
            <button
              onClick={() => setShowInvoice(false)}
              className="bg-blue-500 
            text-white
            font-bold
            py-2 px-8 rounded
            shadow border-2
            border-blue-500
            hover:bg-transparent 
            hover:text-blue-500 
            transition-all duration-300"
            >
              Edit Information
            </button>
          </div>
        ) : (
          <>
            <div className="flex flex-col justify-center">
              <label htmlFor="name">Enter Your Name</label>
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Enter Your Name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="address">Enter Your Address</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter Your Address"
                autoComplete="off"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <label htmlFor="email">Enter Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="bankName">Enter Your Bank Name</label>
              <input
                type="text"
                name="bankName"
                id="bankName"
                placeholder="Enter Your Bank Name"
                autoComplete="off"
                value={bankName}
                onChange={(e) => SetBankName(e.target.value)}
              />

              <label htmlFor="bankAccount">
                Enter Your bank Account Number
              </label>
              <input
                type="text"
                name="bankAccount"
                id="bankAccount"
                placeholder="Enter Your bank Account Number"
                autoComplete="off"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
              />

              <label htmlFor="phone">Enter Your phone</label>
              <input
                type="phone"
                name="phone"
                id="phone"
                placeholder="Enter Your Phone Number"
                autoComplete="off"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <label htmlFor="clientName">Enter Your client Name</label>
              <input
                type="text"
                name="clientName"
                id="clientName"
                placeholder="Enter Your client Name"
                autoComplete="off"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />

              <label htmlFor="clientAddress">Enter Your Client Address</label>
              <input
                type="text"
                name="clientAddress"
                id="clientAddress"
                placeholder="Enter Your client Address"
                autoComplete="off"
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
              />

              <label htmlFor="invoiceNumber">Enter Your invoice Number</label>
              <input
                type="text"
                name="invoiceNumber"
                id="invoiceNumber"
                placeholder="Enter Your invoice Number"
                autoComplete="off"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />

              <label htmlFor="invoiceDate">Enter Your invoice Date</label>
              <input
                type="date"
                name="invoiceDate"
                id="invoiceDate"
                placeholder="Enter Your invoice Date"
                autoComplete="off"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />

              <label htmlFor="dueDate">Enter Your dueDate</label>
              <input
                type="date"
                name="dueDate"
                id="dueDate"
                placeholder="Enter Your dueDate"
                autoComplete="off"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />

              <label htmlFor="website">Enter Your Website</label>
              <input
                type="url"
                name="website"
                id="website"
                placeholder="Enter Your Website"
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />

              <label htmlFor="notes">Additional Notes</label>
              <textarea
                name="notes"
                id="notes"
                col="30"
                rows="10"
                placeholder="Additional Notes for your client"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>

              <button
                onClick={() => setShowInvoice(true)}
                className="bg-blue-500 
                  text-white
                  font-bold
                  py-2 px-8 rounded
                  shadow border-2
                  border-blue-500
                  hover:bg-transparent 
                  hover:text-blue-500 
                  transition-all duration-300"
              >
                Preview Invoice
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
