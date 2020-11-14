import React from "react";

const Donation = () => (
  <div className="paddingub">
    <div className="container">
      <p className="donate-details">
        આ રખડતી અને બીમારગાયો ના નિભાવ અને મેડીકલ સારવાર હાર્ડ સમસ્યા રહે છે
        ગૌતમ ગૌશાળા ને આવક આપ જેવા દાતા તરફથી મળેલ અનુદાન જ મુખ્ય છે આપનૌ સહકાર
        જ અમને આ કાર્ય મા ઉત્સાહ અને હૂંફ આપે છે તો આપ દિલ ખોલી સહકાર આપી અમારા
        પ્રેરણા સ્તોત્ર બનો એવી અભિલાષા.આપ ગમે ત્યારે એક વખત ગૌતમ ગૌશાળા ની
        રૂબરૂ મુલાકાત લઈ આપે અમૂલ્ય આપેલ યોગદાન શ્રેષ્ઠ જગ્યા એ આપેલ અનુદાન છે
        એવી અનુભૂતિ મેહ્સૂસ કરી શકસૌ.
      </p>
      <p className="donate-details">
        તે એક કાર્ય છે, ગોમતી અને ભગવાનની સેવા, જે ખૂબ ગૌરવ અને ભક્તિ સાથે
        કરવામાં આવે છે, કારણ કે આપણી ભવ્ય ભારતીય વારસો ગોમાતા વિના અપૂર્ણ છે. આ
        વિશાળ પ્રમાણમાં કામ છે અને સામાન્ય રીતે બધા દાતાઓ, સમર્થકો અને સામાન્ય
        લોકોના સહયોગથી શક્ય છે. અમે તમારામાંથી રોકડ અથવા પ્રકારની અથવા સેવામાં
        ઉદાર દાનની વિનંતી કરીએ છીએ. તમે આ ઉમદા કારણ માટે દિવસ / મહિનાની આવક દાન
        કરી શકો છો.
      </p>
      <div className="col-md-6">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name of Bank</th>
              <th scope="col">A/C No.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colSpan="2" style={{ textAlign: "center" }}>
                Shree Gauttam Gaushala Cheritable
              </th>
              {/* <td>-</td> */}
            </tr>
            <tr>
              <td>Dena Bank [ દેના બેંક ]</td>
              <td>019510006721</td>
            </tr>
            <tr>
              <td>IFSC</td>
              <td>BKDN0310195</td>
            </tr>
            <tr>
              <td>MICR</td>
              <td>362018506</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
export default Donation;
