
import rotateIcon from "/icons/spin-rotate.png"
import "../css/Header.css"
import selectArrow from "/icons/select arrow.png"


import locationIcon from "/icons/location.png"
import gpsIcon from "/icons/gps.png"
import { useState } from "react"


const NavigatedSection = function( {activeTabs} ){

    const [fromValue, setFromValue] = useState("USA");
    const [toValue, setToValue] = useState("NIGERIA");

    const handleSwap = function(){
        const tempFrom = fromValue

        setFromValue(toValue);
        setToValue(tempFrom)
    }

    return <>

    {activeTabs === "flights" && (
    <div id="navigated-section">
        <p>Where are you going today?</p>

        <div className="navigated-container">

            <div className="country-options">
                <div className="country-field">
                    {/* <span className="field-label">From</span> */}
                    <div style={{ position: "relative", 
                      display: "inline-block" }}>
                        <select
                            name="located-country"
                            id="located-country"
                            value = {fromValue}
                            onChange = {(e) => setFromValue(e.target.value)}
                            style={{ appearance: "none", 
                              WebkitAppearance: "none", paddingRight: "40px" }}
                        >
                            <option value="AFGHANISTAN">Kabul (KBL)</option>
<option value="ALBANIA">Tirana (TIA)</option>
<option value="ALGERIA">Algiers (ALG)</option>
<option value="ANDORRA">Andorra la Vella (LEU)</option>
<option value="ANGOLA">Luanda (LAD)</option>
<option value="ANTIGUA AND BARBUDA">St. John's (ANU)</option>
<option value="ARGENTINA">Buenos Aires (EZE)</option>
<option value="ARMENIA">Yerevan (EVN)</option>
<option value="AUSTRALIA">Canberra (CBR)</option>
<option value="AUSTRIA">Vienna (VIE)</option>
<option value="AZERBAIJAN">Baku (GYD)</option>
<option value="BAHAMAS">Nassau (NAS)</option>
<option value="BAHRAIN">Manama (BAH)</option>
<option value="BANGLADESH">Dhaka (DAC)</option>
<option value="BARBADOS">Bridgetown (BGI)</option>
<option value="BELARUS">Minsk (MSQ)</option>
<option value="BELGIUM">Brussels (BRU)</option>
<option value="BELIZE">Belmopan (BZE)</option>
<option value="BENIN">Porto-Novo (COO)</option>
<option value="BHUTAN">Thimphu (PBH)</option>
<option value="BOLIVIA">Sucre (SRE)</option>
<option value="BOSNIA AND HERZEGOVINA">Sarajevo (SJJ)</option>
<option value="BOTSWANA">Gaborone (GBE)</option>
<option value="BRAZIL">Brasília (BSB)</option>
<option value="BRUNEI">Bandar Seri Begawan (BWN)</option>
<option value="BULGARIA">Sofia (SOF)</option>
<option value="BURKINA FASO">Ouagadougou (OUA)</option>
<option value="BURUNDI">Gitega (BJM)</option>
<option value="CAMBODIA">Phnom Penh (PNH)</option>
<option value="CAMEROON">Yaoundé (NSI)</option>
<option value="CANADA">Ottawa (YOW)</option>
<option value="CAPE VERDE">Praia (RAI)</option>
<option value="CENTRAL AFRICAN REPUBLIC">Bangui (BGF)</option>
<option value="CHAD">N'Djamena (NDJ)</option>
<option value="CHILE">Santiago (SCL)</option>
<option value="CHINA">Beijing (PEK)</option>
<option value="COLOMBIA">Bogotá (BOG)</option>
<option value="COMOROS">Moroni (HAH)</option>
<option value="CONGO (DEMOCRATIC REPUBLIC)">Kinshasa (FIH)</option>
<option value="CONGO (REPUBLIC)">Brazzaville (BZV)</option>
<option value="COSTA RICA">San José (SJO)</option>
<option value="CROATIA">Zagreb (ZAG)</option>
<option value="CUBA">Havana (HAV)</option>
<option value="CYPRUS">Nicosia (NIC)</option>
<option value="CZECHIA">Prague (PRG)</option>
<option value="DENMARK">Copenhagen (CPH)</option>
<option value="DJIBOUTI">Djibouti (JIB)</option>
<option value="DOMINICA">Roseau (DOM)</option>
<option value="DOMINICAN REPUBLIC">Santo Domingo (SDQ)</option>
<option value="ECUADOR">Quito (UIO)</option>
<option value="EGYPT">Cairo (CAI)</option>
<option value="EL SALVADOR">San Salvador (SAL)</option>
<option value="EQUATORIAL GUINEA">Malabo (SSG)</option>
<option value="ERITREA">Asmara (ASM)</option>
<option value="ESTONIA">Tallinn (TLL)</option>
<option value="ESWINI">Mbabane (SHO)</option>
<option value="ETHIOPIA">Addis Ababa (ADD)</option>
<option value="FIJI">Suva (SUV)</option>
<option value="FINLAND">Helsinki (HEL)</option>
<option value="FRANCE">Paris (CDG)</option>
<option value="GABON">Libreville (LBV)</option>
<option value="GAMBIA">Banjul (BJL)</option>
<option value="GEORGIA">Tbilisi (TBS)</option>
<option value="GERMANY">Berlin (BER)</option>
<option value="GHANA">Accra (ACC)</option>
<option value="GREECE">Athens (ATH)</option>
<option value="GRENADA">St. George's (GND)</option>
<option value="GUATEMALA">Guatemala City (GUA)</option>
<option value="GUINEA">Conakry (CKY)</option>
<option value="GUINEA-BISSAU">Bissau (OXB)</option>
<option value="GUYANA">Georgetown (GEO)</option>
<option value="HAITI">Port-au-Prince (PAP)</option>
<option value="HONDURAS">Tegucigalpa (TGU)</option>
<option value="HUNGARY">Budapest (BUD)</option>
<option value="ICELAND">Reykjavík (KEF)</option>
<option value="INDIA">New Delhi (DEL)</option>
<option value="INDONESIA">Jakarta (CGK)</option>
<option value="IRAN">Tehran (IKA)</option>
<option value="IRAQ">Baghdad (BGW)</option>
<option value="IRELAND">Dublin (DUB)</option>
<option value="ISRAEL">Jerusalem (TLV)</option>
<option value="ITALY">Rome (FCO)</option>
<option value="IVORY COAST">Abidjan (ABJ)</option>
<option value="JAMAICA">Kingston (KIN)</option>
<option value="JAPAN">Tokyo (NRT)</option>
<option value="JORDAN">Amman (AMM)</option>
<option value="KAZAKHSTAN">Astana (NQZ)</option>
<option value="KENYA">Nairobi (NBO)</option>
<option value="KIRIBATI">Tarawa (TRW)</option>
<option value="KOSOVO">Pristina (PRN)</option>
<option value="KUWAIT">Kuwait City (KWI)</option>
<option value="KYRGYZSTAN">Bishkek (FRU)</option>
<option value="LAOS">Vientiane (VTE)</option>
<option value="LATVIA">Riga (RIX)</option>
<option value="LEBANON">Beirut (BEY)</option>
<option value="LESOTHO">Maseru (MSU)</option>
<option value="LIBERIA">Monrovia (ROB)</option>
<option value="LIBYA">Tripoli (MJI)</option>
<option value="LIECHTENSTEIN">Vaduz (AOP)</option>
<option value="LITHUANIA">Vilnius (VNO)</option>
<option value="LUXEMBOURG">Luxembourg City (LUX)</option>
<option value="MADAGASCAR">Antananarivo (TNR)</option>
<option value="MALAWI">Lilongwe (LLW)</option>
<option value="MALAYSIA">Kuala Lumpur (KUL)</option>
<option value="MALDIVES">Malé (MLE)</option>
<option value="MALI">Bamako (BKO)</option>
<option value="MALTA">Valletta (MLA)</option>
<option value="MARSHALL ISLANDS">Majuro (MAJ)</option>
<option value="MAURITANIA">Nouakchott (NKC)</option>
<option value="MAURITIUS">Port Louis (MRU)</option>
<option value="MEXICO">Mexico City (MEX)</option>
<option value="MICRONESIA">Palikir (PNI)</option>
<option value="MOLDOVA">Chișinău (KIV)</option>
<option value="MONACO">Monaco (MCM)</option>
<option value="MONGOLIA">Ulaanbaatar (ULN)</option>
<option value="MONTENEGRO">Podgorica (TGD)</option>
<option value="MOROCCO">Rabat (RBA)</option>
<option value="MOZAMBIQUE">Maputo (MPM)</option>
<option value="MYANMAR">Naypyidaw (NYT)</option>
<option value="NAMIBIA">Windhoek (WDH)</option>
<option value="NAURU">Yaren (INU)</option>
<option value="NEPAL">Kathmandu (KTM)</option>
<option value="NETHERLANDS">Amsterdam (AMS)</option>
<option value="NEW ZEALAND">Wellington (WLG)</option>
<option value="NICARAGUA">Managua (MGA)</option>
<option value="NIGER">Niamey (NIM)</option>
<option value="NIGERIA">Abuja (ABV)</option>
<option value="NORTH KOREA">Pyongyang (FNJ)</option>
<option value="NORTH MACEDONIA">Skopje (SKP)</option>
<option value="NORWAY">Oslo (OSL)</option>
<option value="OMAN">Muscat (MCT)</option>
<option value="PAKISTAN">Islamabad (ISB)</option>
<option value="PALAU">Ngerulmud (ROR)</option>
<option value="PALESTINE">Ramallah (GZA)</option>
<option value="PANAMA">Panama City (PTY)</option>
<option value="PAPUA NEW GUINEA">Port Moresby (POM)</option>
<option value="PARAGUAY">Asunción (ASU)</option>
<option value="PERU">Lima (LIM)</option>
<option value="PHILIPPINES">Manila (MNL)</option>
<option value="POLAND">Warsaw (WAW)</option>
<option value="PORTUGAL">Lisbon (LIS)</option>
<option value="QATAR">Doha (DOH)</option>
<option value="ROMANIA">Bucharest (OTP)</option>
<option value="RUSSIA">Moscow (SVO)</option>
<option value="RWANDA">Kigali (KGL)</option>
<option value="SAINT KITTS AND NEVIS">Basseterre (SKB)</option>
<option value="SAINT LUCIA">Castries (SLU)</option>
<option value="SAINT VINCENT AND THE GRENADINES">Kingstown (SVD)</option>
<option value="SAMOA">Apia (APW)</option>
<option value="SAN MARINO">San Marino (BLQ)</option>
<option value="SAO TOME AND PRINCIPE">São Tomé (TMS)</option>
<option value="SAUDI ARABIA">Riyadh (RUH)</option>
<option value="SENEGAL">Dakar (DSS)</option>
<option value="SERBIA">Belgrade (BEG)</option>
<option value="SEYCHELLES">Victoria (SEZ)</option>
<option value="SIERRA LEONE">Freetown (FNA)</option>
<option value="SINGAPORE">Singapore (SIN)</option>
<option value="SLOVAKIA">Bratislava (BTS)</option>
<option value="SLOVENIA">Ljubljana (LJU)</option>
<option value="SOLOMON ISLANDS">Honiara (HIR)</option>
<option value="SOMALIA">Mogadishu (MGQ)</option>
<option value="SOUTH AFRICA">Pretoria (JNB)</option>
<option value="SOUTH KOREA">Seoul (ICN)</option>
<option value="SOUTH SUDAN">Juba (JUB)</option>
<option value="SPAIN">Madrid (MAD)</option>
<option value="SRI LANKA">Colombo (CMB)</option>
<option value="SUDAN">Khartoum (KRT)</option>
<option value="SURINAME">Paramaribo (PBM)</option>
<option value="SWEDEN">Stockholm (ARN)</option>
<option value="SWITZERLAND">Bern (ZUR)</option>
<option value="SYRIA">Damascus (DAM)</option>
<option value="TAIWAN">Taipei (TPE)</option>
<option value="TAJIKISTAN">Dushanbe (DYU)</option>
<option value="TANZANIA">Dodoma (DAR)</option>
<option value="THAILAND">Bangkok (BKK)</option>
<option value="TIMOR-LESTE">Dili (DIL)</option>
<option value="TOGO">Lomé (LFW)</option>
<option value="TONGA">Nuku'alofa (TBU)</option>
<option value="TRINIDAD AND TOBAGO">Port of Spain (POS)</option>
<option value="TUNISIA">Tunis (TUN)</option>
<option value="TURKEY">Ankara (ESB)</option>
<option value="TURKMENISTAN">Ashgabat (ASB)</option>
<option value="TUVALU">Funafuti (FUN)</option>
<option value="UGANDA">Kampala (EBB)</option>
<option value="UKRAINE">Kyiv (IKB)</option>
<option value="UNITED ARAB EMIRATES">Abu Dhabi (AUH)</option>
<option value="UNITED KINGDOM">London (LHR)</option>
<option value="UNITED STATES">Washington D.C. (IAD)</option>
<option value="URUGUAY">Montevideo (MVD)</option>
<option value="UZBEKISTAN">Tashkent (TAS)</option>
<option value="VANUATU">Port Vila (VLI)</option>
<option value="VATICAN CITY">Vatican City (VCE)</option>
<option value="VENEZUELA">Caracas (CCS)</option>
<option value="VIETNAM">Hanoi (HAN)</option>
<option value="YEMEN">Sana'a (SAH)</option>
<option value="ZAMBIA">Lusaka (LUN)</option>
<option value="ZIMBABWE">Harare (HRE)</option>
                        </select>
                        <img
                            src={selectArrow}
                            alt="down arrow"
                            loading="lazy"
                            className="select-icon"
                            style={{
                                position: "absolute",
                                right: "10px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                pointerEvents: "none",
                            }}
                        />
                    </div>
                </div>

                <div className="arrow-container"
                onClick={handleSwap}
                >
                    <img src={rotateIcon} alt="Rotate Icon" loading="lazy" 
                    title="Switch Destinations" />
                </div>

                <div className="country-field">
                    {/* <span className="field-label">To</span> */}
                    <div style={{ position: "relative", display: "inline-block" }}>
                        <select
                            name="destination-country"
                            id="destination-country"
                            value = {toValue}
                            onChange = {(e) => setToValue(e.target.value)}
                            style={{ appearance: "none", 
                              WebkitAppearance: "none", paddingRight: "40px" }}
                        >
                            <option value="AFGHANISTAN">Kabul (KBL)</option>
<option value="ALBANIA">Tirana (TIA)</option>
<option value="ALGERIA">Algiers (ALG)</option>
<option value="ANDORRA">Andorra la Vella (LEU)</option>
<option value="ANGOLA">Luanda (LAD)</option>
<option value="ANTIGUA AND BARBUDA">St. John's (ANU)</option>
<option value="ARGENTINA">Buenos Aires (EZE)</option>
<option value="ARMENIA">Yerevan (EVN)</option>
<option value="AUSTRALIA">Canberra (CBR)</option>
<option value="AUSTRIA">Vienna (VIE)</option>
<option value="AZERBAIJAN">Baku (GYD)</option>
<option value="BAHAMAS">Nassau (NAS)</option>
<option value="BAHRAIN">Manama (BAH)</option>
<option value="BANGLADESH">Dhaka (DAC)</option>
<option value="BARBADOS">Bridgetown (BGI)</option>
<option value="BELARUS">Minsk (MSQ)</option>
<option value="BELGIUM">Brussels (BRU)</option>
<option value="BELIZE">Belmopan (BZE)</option>
<option value="BENIN">Porto-Novo (COO)</option>
<option value="BHUTAN">Thimphu (PBH)</option>
<option value="BOLIVIA">Sucre (SRE)</option>
<option value="BOSNIA AND HERZEGOVINA">Sarajevo (SJJ)</option>
<option value="BOTSWANA">Gaborone (GBE)</option>
<option value="BRAZIL">Brasília (BSB)</option>
<option value="BRUNEI">Bandar Seri Begawan (BWN)</option>
<option value="BULGARIA">Sofia (SOF)</option>
<option value="BURKINA FASO">Ouagadougou (OUA)</option>
<option value="BURUNDI">Gitega (BJM)</option>
<option value="CAMBODIA">Phnom Penh (PNH)</option>
<option value="CAMEROON">Yaoundé (NSI)</option>
<option value="CANADA">Ottawa (YOW)</option>
<option value="CAPE VERDE">Praia (RAI)</option>
<option value="CENTRAL AFRICAN REPUBLIC">Bangui (BGF)</option>
<option value="CHAD">N'Djamena (NDJ)</option>
<option value="CHILE">Santiago (SCL)</option>
<option value="CHINA">Beijing (PEK)</option>
<option value="COLOMBIA">Bogotá (BOG)</option>
<option value="COMOROS">Moroni (HAH)</option>
<option value="CONGO (DEMOCRATIC REPUBLIC)">Kinshasa (FIH)</option>
<option value="CONGO (REPUBLIC)">Brazzaville (BZV)</option>
<option value="COSTA RICA">San José (SJO)</option>
<option value="CROATIA">Zagreb (ZAG)</option>
<option value="CUBA">Havana (HAV)</option>
<option value="CYPRUS">Nicosia (NIC)</option>
<option value="CZECHIA">Prague (PRG)</option>
<option value="DENMARK">Copenhagen (CPH)</option>
<option value="DJIBOUTI">Djibouti (JIB)</option>
<option value="DOMINICA">Roseau (DOM)</option>
<option value="DOMINICAN REPUBLIC">Santo Domingo (SDQ)</option>
<option value="ECUADOR">Quito (UIO)</option>
<option value="EGYPT">Cairo (CAI)</option>
<option value="EL SALVADOR">San Salvador (SAL)</option>
<option value="EQUATORIAL GUINEA">Malabo (SSG)</option>
<option value="ERITREA">Asmara (ASM)</option>
<option value="ESTONIA">Tallinn (TLL)</option>
<option value="ESWINI">Mbabane (SHO)</option>
<option value="ETHIOPIA">Addis Ababa (ADD)</option>
<option value="FIJI">Suva (SUV)</option>
<option value="FINLAND">Helsinki (HEL)</option>
<option value="FRANCE">Paris (CDG)</option>
<option value="GABON">Libreville (LBV)</option>
<option value="GAMBIA">Banjul (BJL)</option>
<option value="GEORGIA">Tbilisi (TBS)</option>
<option value="GERMANY">Berlin (BER)</option>
<option value="GHANA">Accra (ACC)</option>
<option value="GREECE">Athens (ATH)</option>
<option value="GRENADA">St. George's (GND)</option>
<option value="GUATEMALA">Guatemala City (GUA)</option>
<option value="GUINEA">Conakry (CKY)</option>
<option value="GUINEA-BISSAU">Bissau (OXB)</option>
<option value="GUYANA">Georgetown (GEO)</option>
<option value="HAITI">Port-au-Prince (PAP)</option>
<option value="HONDURAS">Tegucigalpa (TGU)</option>
<option value="HUNGARY">Budapest (BUD)</option>
<option value="ICELAND">Reykjavík (KEF)</option>
<option value="INDIA">New Delhi (DEL)</option>
<option value="INDONESIA">Jakarta (CGK)</option>
<option value="IRAN">Tehran (IKA)</option>
<option value="IRAQ">Baghdad (BGW)</option>
<option value="IRELAND">Dublin (DUB)</option>
<option value="ISRAEL">Jerusalem (TLV)</option>
<option value="ITALY">Rome (FCO)</option>
<option value="IVORY COAST">Abidjan (ABJ)</option>
<option value="JAMAICA">Kingston (KIN)</option>
<option value="JAPAN">Tokyo (NRT)</option>
<option value="JORDAN">Amman (AMM)</option>
<option value="KAZAKHSTAN">Astana (NQZ)</option>
<option value="KENYA">Nairobi (NBO)</option>
<option value="KIRIBATI">Tarawa (TRW)</option>
<option value="KOSOVO">Pristina (PRN)</option>
<option value="KUWAIT">Kuwait City (KWI)</option>
<option value="KYRGYZSTAN">Bishkek (FRU)</option>
<option value="LAOS">Vientiane (VTE)</option>
<option value="LATVIA">Riga (RIX)</option>
<option value="LEBANON">Beirut (BEY)</option>
<option value="LESOTHO">Maseru (MSU)</option>
<option value="LIBERIA">Monrovia (ROB)</option>
<option value="LIBYA">Tripoli (MJI)</option>
<option value="LIECHTENSTEIN">Vaduz (AOP)</option>
<option value="LITHUANIA">Vilnius (VNO)</option>
<option value="LUXEMBOURG">Luxembourg City (LUX)</option>
<option value="MADAGASCAR">Antananarivo (TNR)</option>
<option value="MALAWI">Lilongwe (LLW)</option>
<option value="MALAYSIA">Kuala Lumpur (KUL)</option>
<option value="MALDIVES">Malé (MLE)</option>
<option value="MALI">Bamako (BKO)</option>
<option value="MALTA">Valletta (MLA)</option>
<option value="MARSHALL ISLANDS">Majuro (MAJ)</option>
<option value="MAURITANIA">Nouakchott (NKC)</option>
<option value="MAURITIUS">Port Louis (MRU)</option>
<option value="MEXICO">Mexico City (MEX)</option>
<option value="MICRONESIA">Palikir (PNI)</option>
<option value="MOLDOVA">Chișinău (KIV)</option>
<option value="MONACO">Monaco (MCM)</option>
<option value="MONGOLIA">Ulaanbaatar (ULN)</option>
<option value="MONTENEGRO">Podgorica (TGD)</option>
<option value="MOROCCO">Rabat (RBA)</option>
<option value="MOZAMBIQUE">Maputo (MPM)</option>
<option value="MYANMAR">Naypyidaw (NYT)</option>
<option value="NAMIBIA">Windhoek (WDH)</option>
<option value="NAURU">Yaren (INU)</option>
<option value="NEPAL">Kathmandu (KTM)</option>
<option value="NETHERLANDS">Amsterdam (AMS)</option>
<option value="NEW ZEALAND">Wellington (WLG)</option>
<option value="NICARAGUA">Managua (MGA)</option>
<option value="NIGER">Niamey (NIM)</option>
<option value="NIGERIA">Abuja (ABV)</option>
<option value="NORTH KOREA">Pyongyang (FNJ)</option>
<option value="NORTH MACEDONIA">Skopje (SKP)</option>
<option value="NORWAY">Oslo (OSL)</option>
<option value="OMAN">Muscat (MCT)</option>
<option value="PAKISTAN">Islamabad (ISB)</option>
<option value="PALAU">Ngerulmud (ROR)</option>
<option value="PALESTINE">Ramallah (GZA)</option>
<option value="PANAMA">Panama City (PTY)</option>
<option value="PAPUA NEW GUINEA">Port Moresby (POM)</option>
<option value="PARAGUAY">Asunción (ASU)</option>
<option value="PERU">Lima (LIM)</option>
<option value="PHILIPPINES">Manila (MNL)</option>
<option value="POLAND">Warsaw (WAW)</option>
<option value="PORTUGAL">Lisbon (LIS)</option>
<option value="QATAR">Doha (DOH)</option>
<option value="ROMANIA">Bucharest (OTP)</option>
<option value="RUSSIA">Moscow (SVO)</option>
<option value="RWANDA">Kigali (KGL)</option>
<option value="SAINT KITTS AND NEVIS">Basseterre (SKB)</option>
<option value="SAINT LUCIA">Castries (SLU)</option>
<option value="SAINT VINCENT AND THE GRENADINES">Kingstown (SVD)</option>
<option value="SAMOA">Apia (APW)</option>
<option value="SAN MARINO">San Marino (BLQ)</option>
<option value="SAO TOME AND PRINCIPE">São Tomé (TMS)</option>
<option value="SAUDI ARABIA">Riyadh (RUH)</option>
<option value="SENEGAL">Dakar (DSS)</option>
<option value="SERBIA">Belgrade (BEG)</option>
<option value="SEYCHELLES">Victoria (SEZ)</option>
<option value="SIERRA LEONE">Freetown (FNA)</option>
<option value="SINGAPORE">Singapore (SIN)</option>
<option value="SLOVAKIA">Bratislava (BTS)</option>
<option value="SLOVENIA">Ljubljana (LJU)</option>
<option value="SOLOMON ISLANDS">Honiara (HIR)</option>
<option value="SOMALIA">Mogadishu (MGQ)</option>
<option value="SOUTH AFRICA">Pretoria (JNB)</option>
<option value="SOUTH KOREA">Seoul (ICN)</option>
<option value="SOUTH SUDAN">Juba (JUB)</option>
<option value="SPAIN">Madrid (MAD)</option>
<option value="SRI LANKA">Colombo (CMB)</option>
<option value="SUDAN">Khartoum (KRT)</option>
<option value="SURINAME">Paramaribo (PBM)</option>
<option value="SWEDEN">Stockholm (ARN)</option>
<option value="SWITZERLAND">Bern (ZUR)</option>
<option value="SYRIA">Damascus (DAM)</option>
<option value="TAIWAN">Taipei (TPE)</option>
<option value="TAJIKISTAN">Dushanbe (DYU)</option>
<option value="TANZANIA">Dodoma (DAR)</option>
<option value="THAILAND">Bangkok (BKK)</option>
<option value="TIMOR-LESTE">Dili (DIL)</option>
<option value="TOGO">Lomé (LFW)</option>
<option value="TONGA">Nuku'alofa (TBU)</option>
<option value="TRINIDAD AND TOBAGO">Port of Spain (POS)</option>
<option value="TUNISIA">Tunis (TUN)</option>
<option value="TURKEY">Ankara (ESB)</option>
<option value="TURKMENISTAN">Ashgabat (ASB)</option>
<option value="TUVALU">Funafuti (FUN)</option>
<option value="UGANDA">Kampala (EBB)</option>
<option value="UKRAINE">Kyiv (IKB)</option>
<option value="UNITED ARAB EMIRATES">Abu Dhabi (AUH)</option>
<option value="UNITED KINGDOM">London (LHR)</option>
<option value="UNITED STATES">Washington D.C. (IAD)</option>
<option value="URUGUAY">Montevideo (MVD)</option>
<option value="UZBEKISTAN">Tashkent (TAS)</option>
<option value="VANUATU">Port Vila (VLI)</option>
<option value="VATICAN CITY">Vatican City (VCE)</option>
<option value="VENEZUELA">Caracas (CCS)</option>
<option value="VIETNAM">Hanoi (HAN)</option>
<option value="YEMEN">Sana'a (SAH)</option>
<option value="ZAMBIA">Lusaka (LUN)</option>
<option value="ZIMBABWE">Harare (HRE)</option>
                        </select>
                        <img
                            src={selectArrow}
                            alt="down arrow"
                            loading="lazy"
                            className="select-arrow select-icon"
                            style={{
                                position: "absolute",
                                right: "10px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                pointerEvents: "none"
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="date-options item-option">
                <div className="depart-date select-item item1">
                    <p>Depart</p>
                    <input type="date" />
                </div>
                <div className="return-date select-item item2">
                    <p>Return</p>
                    <input type="date" />
                </div>
            </div>

            <div className="trip-options item-option">
                <div className="trip-type type-item item1">
                    <p>Trip Type</p>
                    <div className="input-item" style={{ position: "relative", 
                      display: "inline-block" }}>
                        <select name="trip-type" className="select-item" id="trip-type"
                            style={{ appearance: "none", 
                            WebkitAppearance: "none" }}>
                            <option value="One-Way">One-Way</option>
                            <option value="Round-Trip">Round-Trip</option>
                            <option value="Multi-City">Multi-City</option>
                            <option value="Open-Jaw">Open-Jaw</option>
                        </select>
                        <img src={selectArrow} alt="down arrow" 
                        loading="lazy" className="select-icon"
                            style={{ position: "absolute", 
                              right: "10px", top: "50%", 
                              transform: "translateY(-50%)", 
                              pointerEvents: "none" }}
                        />
                    </div>
                </div>

                <div className="trip-class type-item item2">
                    <p>Class</p>
                    <div style={{ position: "relative", display: "flex" }}
                     className="input-item">
                        <select name="trip-class" 
                        className="select-item" id="trip-class"
                            style={{ appearance: "none", 
                            WebkitAppearance: "none" }}>
                            <option value="Economy">Economy</option>
                            <option value="Premium">Premium</option>
                            <option value="Business">Business</option>
                            <option value="First Class">First Class</option>
                        </select>
                        <img src={selectArrow} alt="down arrow" 
                        loading="lazy" 
                        className="select-icon"
                            style={{ position: "absolute", right: "10px", 
                              top: "50%", transform: "translateY(-50%)", 
                              pointerEvents: "none", 
                              width: "20px", height: "20px" }}
                        />
                    </div>
                </div>
            </div>

            <button className="search-btn">Search Flights</button>
        </div>
    </div> 
    )}


    {activeTabs === "hotels" && (
<div id="navigated-section">
    <p>Where are you staying?</p>

    <div className="navigated-container">

        <div className="country-options">
            
                <div style={{ position: "relative", 
                    display: "inline-block" }}>
                        
                        
                    <img
                        src={locationIcon}
                        alt="location icon"
                        loading="lazy"
                        className = 'location-icon'
                        style={{ position: "absolute", 
                            left: "0", top: "50%", 
                            transform: "translateY(-50%)", 
                            pointerEvents: "none" }}
                    />
                    
                    <div className="country-field">
                    <select
                        name="country-hotel"
                        id="country-hotel"
                        style={{ appearance: "none", 
                            WebkitAppearance: "none", paddingLeft: "28px", 
                            paddingRight: "40px" }}
                    >
                        <option value="UAE">Dubai, United Arab Emirates</option>
                        <option value="USA">New York (JFK)</option>
                        <option value="NIGERIA">Lagos (LOS)</option>
                    </select>
                </div>
            </div>

            <div className="arrow-container">
                <img src={gpsIcon} alt="GPS Icon" 
                loading="lazy" title="Use current location" />
            </div>
        </div>

        <div className="date-options item-option">
            <div className="check-in-date select-item item1">
                <p>Check-in</p>
                <input type="date" />
            </div>
            <div className="checkout-date select-item item2">
                <p>Check-out</p>
                <input type="date" />
            </div>
        </div>

        <div className="trip-options item-option">
            <div className="trip-type type-item item1">
                <p>Guests</p>
                <div className="input-item" style={{ position: "relative", 
                    display: "inline-block" }}>
                    <input type="text" placeholder="2 Guests, 1 Room" 
                    style={{ background: "transparent", border: "none", 
                    fontSize: "1.5rem", width: "100%" }} />
                </div>
            </div>

            <div className="trip-class type-item item2">
                <p>Filters</p>
                <div style={{ position: "relative", display: "flex" }} 
                className="input-item">
                    <select name="filter-preference" 
                    id="filter-preference"
                        style={{ appearance: "none", 
                        WebkitAppearance: "none" }}>
                        <option value="Select preference">Select preferences</option>
                        <option value="Single Room">Single Room</option>
                        <option value="Double Standards">Double Standards</option>
                        <option value="Deluxe Room">Deluxe Room</option>
                        <option value="Family Room">Family Room</option>
                        <option value="Executive Suites">Executive Suites</option>
                        <option value="Presidential Suites">Presidential Suites</option>
                    </select>
                    <img src={selectArrow} 
                    alt="down arrow" loading="lazy" 
                    className="select-icon"
                        style={{ position: "absolute", 
                            right: "10px", top: "50%", 
                            transform: "translateY(-50%)", 
                            pointerEvents: "none", width: "20px", 
                            height: "20px" }}
                    />
                </div>
            </div>
        </div>

        <button className="search-btn">Search Hotels</button>
    </div>
</div>
)}



{activeTabs === "cars" && (
<div id="navigated-section">
    <p>Where are you picking up?</p>

    <div className="navigated-container">

        <div className="country-options">
            <div className="country-field">
                <div style={{ position: "relative", 
                    display: "inline-block" }}>
                        
                    <img
                        src={locationIcon}
                        alt="location icon"
                        loading="lazy"
                        className = 'location-icon'
                        style={{ position: "absolute", 
                            left: "0", top: "50%", 
                            transform: "translateY(-50%)", pointerEvents: "none" }}
                    />
                    
                    <select
                        name="country-car"
                        id="country-car"
                        style={{ appearance: "none", 
                            WebkitAppearance: "none", paddingLeft: "28px", 
                            paddingRight: "40px" }}
                    >
                        <option value="USA">New York (JFK)</option>
                        <option value="NIGERIA">Lagos (LOS)</option>
                    </select>
                </div>
            </div>

            <div className="arrow-container">
                <img src={gpsIcon} alt="GPS Icon" loading="lazy" 
                title="Use current location" />
            </div>
        </div>

        <div className="date-options item-option">
            <div className="pick-up-date select-item item1">
                <p>Pick-up Date</p>
                <input type="date" />
            </div>
            <div className="car-return-date select-item item2">
                <p>Return Date</p>
                <input type="date" />
            </div>
        </div>

        <div className="trip-options item-option">
            <div className="trip-type type-item item1">
                <p>Car Type</p>
                <div className="input-item" style={{ position: "relative", 
                    display: "inline-block" }}>
                    <select name="car-type" id="car-type"
                        style={{ appearance: "none", 
                        WebkitAppearance: "none" }}>
                        <option value="All Cars">All Cars</option>
                        <option value="Economy">Economy</option>
                        <option value="SUV">SUV</option>
                        <option value="Luxury">Luxury</option>
                        <option value="Electric">Electric</option>
                        <option value="Van">Van</option>
                    </select>
                    <img src={selectArrow} alt="down arrow" 
                    loading="lazy" className="select-icon"
                        style={{ position: "absolute", 
                            right: "10px", top: "50%", 
                            transform: "translateY(-50%)", 
                            pointerEvents: "none" }}
                    />
                </div>
            </div>

            <div className="trip-class type-item item2">
                <p>Drivers</p>
                <div style={{ position: "relative", display: "flex" }} 
                className="input-item">
                    <select name="drivers-select" id="drivers-select"
                        style={{ appearance: "none", 
                        WebkitAppearance: "none" }}>
                        <option value="1 Driver">1 Driver</option>
                        <option value="2 Drivers">2 Drivers</option>
                    </select>
                    <img src={selectArrow} alt="down arrow" 
                    loading="lazy" className="select-icon"
                        style={{ position: "absolute", 
                            right: "10px", top: "50%", 
                            transform: "translateY(-50%)", pointerEvents: "none", 
                            width: "20px", height: "20px" }}
                    />
                </div>
            </div>
        </div>

        <button className="search-btn">Search Cars</button>
    </div>
</div>
)}



</>
}



export default NavigatedSection