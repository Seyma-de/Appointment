import React from "react";
import { FaTimesCircle } from "react-icons/fa";
const HastaListe = ({ hastalar, setHastalar,doktorlar }) => {
  console.log(hastalar);
  
  //    hastalar dizisinde dolaşırken doktorlar 4 taneyse bütün hastaları bastır, doktorlar 1 tane kaldıysa, hastalar dizisinde gezinirken, hastaların doktor adıyla, bir tane kalan doktor adı eşleşiyorsa, onun bilgilerini aynı etiketlerle bastır 
  // 
  return (
    <div>
      {hastalar.map(({ id, text, day, doktorum, bittiMi }) => (
        
        <div key={id}>
          {doktorlar.length === 4 ? (
            <div
              onDoubleClick={() =>
                setHastalar(
                  hastalar.map((hst) =>
                    hst.id === id ? { ...hst, bittiMi: !hst.bittiMi } : hst
                  )
                )
              }
              className={bittiMi ? "trueBittiStil" : "falseBitmediStil"}
              //  hastalar dizisinde dolaş,her bir hastanın id sine bak, benim tıkladığım id ile eşleşen objeyi al, objenin diğer keyleri aynen dursun (...hst ile yaptık) sadece bittiMi key li değeri, true ise false, false ise true olsun
            >
              <div>
                <h2>{text}</h2>
                <h4>{day}</h4>
                <h3>{doktorum}</h3>
              </div>
              <FaTimesCircle
                style={{ color: "red" }}
                onClick={() => setHastalar(hastalar.filter((a) => a.id !== id))}
              />
            </div>
          ) : (
            doktorlar[0].doktor === doktorum && (
              <div
                onDoubleClick={() =>
                  setHastalar(
                    hastalar.map((hst) =>
                      hst.id === id ? { ...hst, bittiMi: !hst.bittiMi } : hst
                    )
                  )
                }
                className={bittiMi ? "trueBittiStil" : "falseBitmediStil"}
                //  hastalar dizisinde dolaş,her bir hastanın id sine bak, benim tıkladığım id ile eşleşen objeyi al, objenin diğer keyleri aynen dursun (...hst ile yaptık) sadece bittiMi key li değeri, true ise false, false ise true olsun
              >
                <div>
                  <h2>{text}</h2>
                  <h4>{day}</h4>
                  <h3>{doktorum}</h3>
                </div>
                <FaTimesCircle
                  style={{ color: "red" }}
                  onClick={() =>
                    setHastalar(hastalar.filter((a) => a.id !== id))
                  }
                />
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default HastaListe;
