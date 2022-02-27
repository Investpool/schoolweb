import React from "react";

const Jeny = () => {
  alert(
    " Jennifer Ofosu. She holds BA (Arts) Degree in English and Modern Languages from Sandurst University in Birmingham. She teaches English Language."
  );
};
const Alley = () => {
  alert(
    " Richard Eshun. He is the Maths Architect and an Aluminus of Fosu Training College. Nick name: Alley; Hobby: Cooking Banku"
  );
};
const Alaji = () => {
  alert(
    " Abdul-salam Nettey. He holds Bsc Degree in Physics from University of Cape Coast. He teaches Primary 5. Hobby: Making pastries."
  );
};
const Ruth = () => {
  alert(
    "Ruth Okai. She holds BA (Educ) Degree in Early Childhood Development from University of Education, Winneba. She teaches KG 1. Hobby: Singing."
  );
};
const Han = () => {
   alert(
    "Hannah Arthur. She holds Bsc Degree in Fashion and Design from University of Education, Winneba. On leave for further studies."
  );
};
const Me = () => {
   alert(
     "Hubert Bonney. Resident architect of Ancient and Medieval histories to Teachers and students."
   )
};
const Juli = () => {
  alert(
    "Juliana Bukari. She holds Diploma in Basic Education (Science) from University of Cape Coast.  She is the Science Avatar of The JHS Department."
  );
};
const Nana = () => {
  alert(
    "Nana Pabi Mensah. She holds Bsc (Public Administration) from the University of Ghana. She teaches Ghanaian Language. He blends Tradition with Modernity."
  );
};
const Lab = () => {
  alert(
    " Jacob Larbie. She holds DBE (Math & science Major) from Ada College of Education. He teaches ICT in the JHS."
  );
};
const Dor = () => {
  alert(
    " Doreen Narh. She holds Bachelor of Arts (English) from the university of Education, Cape Coast in 2016. She teaches Primary 2."
  );
};
const Maggy = () => {
  alert(
    " Faustina Aidoo. She holds BA (Arts) Degree in English and Modern Languages from Sandurst University in Birmingham. She teaches English Language."
  );
};
const Emma = () => {
  alert(
    "Emmanuel Annan. She holds BA (Arts) Degree in English and Modern Languages from Sandurst University in Birmingham. She teaches English Language."
  );
};

function Home() {
  return (
    <div className="container-extend">
      <h4 className="pen">
        
      </h4>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="images/sukuu.PNG"
              alt="foto"
              height="535px"
              width="550px"
            />
          </div>
          <div className="col-md-6">
            <div className="row otto">
              <p>
                Aberful DA Basic School comprising KG, Primary and JHS is a
                co-curricular basic institution in Bontrase, Awutu Senya
                District of the Central Region of Ghana. It was established in
                1962 as a result of the need of settler farmers who moved from
                Awutu Beraku and other ajoining villages, to get their children
                educated. It has an average population of about 240 over the
                years, and an average teacher population of 18 including the
                head teacher.
              </p>

              <p id="try">
              
                There is hope that the school may see phenomenal changes in its socio-cultural
                 environment due to incessant indoctrination of positive values in the 
                 psychological fabric of the students. Heither to, role models in the vicinity
                 constitutes pregnant girls, okada riders, peasant agricultural workers and 
                 simple trades men and women. Many mixed races equally play vital roles
                 in the lives of the school - being admission of ward of people who have relocated
                 from Accra as the city expands..........

              </p>

              
              <div className="advert">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="images/maggi.PNG"
                      alt="cartoon"
                      height="200rem"
                      width="300rem"
                    /><p><strong>Margaret Arkaah, The Acting Headmistress</strong></p>
                  </div>
                  <div className="col-md-6 ">
                    <h1 id="font">PLACE YOUR ADVERTS HERE</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container apstec">
        <div class="col-md-12 mot">
          <h3>
            <b>
              <i>THE TEACHING STAFF</i>
            </b>
          </h3>
        </div>
      </div>
      <div className="container resp">
        <div className="row">
          <div className="col-md-6">
            <div className="col-md-2 side">
              
              <img
                onClick={Jeny}
                src="images/adomma.PNG"
                alt="adomma"
                height="80"
                width="80"
              />
            </div>
            <div className="col-md-2 ilr">
              <img
                onClick={Alley}
                src="images/aley.PNG"
                alt="foto"
                height="80"
                width="80"
              />
            </div>
            <div className="col-md-2 ifet">
              <img
                onClick={Alaji}
                src="images/salam.PNG"
                alt="salam"
                height="80"
                width="80"
              />
            </div>
            <div className="col-md-2 restum">
              
                <img
                  onClick={Ruth}
                  src="images/obapa3.PNG"
                  alt="foto"
                  height="80"
                  width="80"
                />
              
            </div>
            <div className="col-md-2 grt">
              
                <img
                  onClick={Han}
                  src="images/hann.PNG"
                  alt="foto"
                  height="80"
                  width="80"
                />
            
            </div>
            <div className="col-md-2 fad">
              
                <img
                  onClick={Me}
                  src="images/hubb.png"
                  alt="foto"
                  height="80"
                  width="80"
                />
              
            </div>
          </div>

          <div className="col-md-6">
            <div className="col-md-2 tr">
              
                <img
                  onClick={Juli}
                  src="images/madjullie.PNG"
                  alt="foto"
                  height="80"
                  width="80"
                />
              
            </div>
            <div className="col-md-2 sd">
              
                <img
                  onClick={Nana}
                  src="images/nanaJ.PNG"
                  alt="foto"
                  height="80"
                  width="80"
                />
            
            </div>
            <div className="col-md-2 vcx">
              
                <img
                  onClick={Lab}
                  src="images/larb.jpg" 
                  alt="foto" 
                  height="80" 
                  width="80" 
                  />
                
              
            </div>
            <div className="col-md-2 swt">
              
                <img
                  onClick={Dor}
                  src="images/cartoon2.jpg"
                  alt="foto"
                  height="80"
                  width="80"
                />
            
            </div>
            <div className="col-md-2 xzc">
              
                <img 
                onClick={Maggy}
                src="images/fausty2.PNG" 
                alt="foto" 
                height="80" 
                width="80" 
                />
            
            </div>
            <div className="col-md-2 qrt">
              
                <img 
                onClick={Emma}
                src="images/emma.jpg" 
                alt="foto" 
                height="80" 
                width="80" 
                />
              
            </div>
          </div>
        </div>
      </div>
      
      <div className="footers">
        <div className="container">
          <div className="row">
            <p className="text-centered">
              &copy;2021 ABERFUL DA BASIC SCHOOL. All Rights Reserved
              <a href="/">Report Abuse</a>|<a href="/">Terms of Service</a>|
              <a href="/">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
