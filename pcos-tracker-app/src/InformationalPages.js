// import React from 'react';
// import './InformationalPages.css'; 

// const InformationalPages = () => {
//   return (
//     <div className="information-container">
//       <h2>About PCOS</h2>

//       <div className="pcos-section">
//         <div className="pcos-text">
//           <h3>What is PCOS?</h3>
//           <p>Polycystic ovary syndrome (PCOS) is a problem with hormones that happens during the reproductive years. If you have PCOS, you may not have periods very often. Or you may have periods that last many days. You may also have too much of a hormone called androgen in your body.</p>
//           <p>With PCOS, many small sacs of fluid develop along the outer edge of the ovary. These are called cysts. The small fluid-filled cysts contain immature eggs. These are called follicles. The follicles fail to regularly release eggs.</p>
//           <p>The exact cause of PCOS is unknown. Early diagnosis and treatment along with weight loss may lower the risk of long-term complications such as type 2 diabetes and heart disease.</p>
//         </div>
//         <div className="pcos-image">
//           <img 
//             src="https://my.clevelandclinic.org/-/scassets/images/org/health/articles/8316-polycystic-ovary-syndrome-pcos" 
//             alt="Informational Image" 
//           />
//         </div>
//       </div>

//       <div className="info-section">
//         <h3>Key Facts</h3>
//         <p>Polycystic ovary syndrome (PCOS) affects an estimated 8–13% of reproductive-aged women. Up to 70% of affected women remain undiagnosed worldwide. PCOS is the commonest cause of anovulation and a leading cause of infertility. PCOS is associated with a variety of long-term health problems that affect physical and emotional wellbeing. PCOS runs in families, but there are ethnic variations in how PCOS manifests itself and how it affects people.</p>
//       </div>

//       <div className="info-section">
//         <h3>Overview</h3>
//         <p>Polycystic ovary syndrome (PCOS) is a common hormonal condition that affects women of reproductive age. It usually starts during adolescence, but symptoms may fluctuate over time. PCOS can cause hormonal imbalances, irregular periods, excess androgen levels and cysts in the ovaries. Irregular periods, usually with a lack of ovulation, can make it difficult to become pregnant. PCOS is a leading cause of infertility. PCOS is a chronic condition and cannot be cured. However, some symptoms can be improved through lifestyle changes, medications and fertility treatments. The cause of PCOS is unknown but women with a family history or type 2 diabetes are at higher risk.</p>
//       </div>

//       <div className="info-section">
//         <h3>Scope of the Problem</h3>
//         <p>PCOS is a significant public health problem and is one of the commonest hormonal disturbances affecting women of reproductive age. The condition affects an estimated 8–13% of women of reproductive age, and up to 70% of cases are undiagnosed. The prevalence of PCOS is higher among some ethnicities and these groups often experience more complications, in particular related to metabolic problems. The biological and psychological effects of PCOS, particularly those related to obesity, body image and infertility, can lead to mental health challenges and social stigma.</p>
//       </div>

//       <div className="pcos-section">
//         <div className="pcos-text">
//           <h3>Comparison of Cycles</h3>
//           <p>Polycystic ovary syndrome (PCOS) starkly contrasts with the orderly phases of a typical menstrual cycle. In a normal cycle, the follicular phase begins with menstruation, leading to follicular development and ovulation, followed by the luteal phase, marked by corpus luteum formation and progesterone secretion to prepare the uterus for potential pregnancy. PCOS disrupts this harmony with hormonal imbalances, notably elevated androgens and insulin resistance, leading to irregular follicular development and ovulation. This disruption results in irregular menstrual cycles, often accompanied by symptoms like hirsutism and acne. Moreover, PCOS heightens the risk of metabolic disorders, further complicating reproductive health and fertility.</p>
//         </div>
//         <div className="pcos-image">
//           <img 
//             src="https://www.researchgate.net/profile/Preeti-Chouhan/publication/374754504/figure/fig1/AS:11431281198973590@1697511263099/Hormonal-changes-in-normal-menstruation-versus-PCOS-PCOS-Polycystic-ovarian-syndrome.png"
//             alt="Comparison Image" 
//           />
//         </div>
//       </div>

//       <div className="info-section">
//         <h3>Symptoms</h3>
//         <img 
//           src="https://cdn.shopify.com/s/files/1/0996/0350/files/PCOS_SYMPTOMS_002_large.jpg?v=1536942969" 
//           alt="Informational Image" 
//           className="center-image"
//         />
//         <p>Symptoms of polycystic ovary syndrome can differ from person to person. Symptoms may change over time and often occur without a clear trigger. Possible symptoms include heavy, long, intermittent, unpredictable or absent periods; infertility; acne or oily skin; excessive hair on the face or body; male-pattern baldness or hair thinning; weight gain, especially around the belly. People with PCOS are more likely to have other health conditions including type 2 diabetes, hypertension (high blood pressure), high cholesterol, heart disease, and endometrial cancer (cancer of the inner lining of the uterus). PCOS can also cause anxiety, depression and a negative body image. Some symptoms such as infertility, obesity and unwanted hair growth can lead to social stigma, affecting other life areas such as family, relationships, work and involvement in the community.</p>
//       </div>

//       <div className="info-section">
//         <h3>Diagnosis</h3>
//         <p>Polycystic ovary syndrome is diagnosed by the presence of at least two out of the following: signs or symptoms of high androgens (unwanted facial or bodily hair, loss of hair from the head, acne or an elevated blood level of testosterone) – after other causes for this have been excluded; irregular or absent menstrual periods – after other causes for this have been excluded; and polycystic ovaries on an ultrasound scan. Blood tests can be used to identify characteristic changes in hormone levels, although these changes are not universal. Women with polycystic ovary syndrome may have elevated levels of testosterone, oestrogen, luteinising hormone (LH), insulin, and anti-müllerian hormone. Treatment: There is no cure for PCOS, but treatments can improve symptoms.</p>
//       </div>

//       <div className="info-section">
//         <h3>Treatment</h3>
//         <p>People who have irregular periods, trouble getting pregnant or excessive acne and hair growth should speak to a healthcare professional. Some symptoms of PCOS can be reduced through lifestyle changes. Eating a healthy diet and getting enough exercise can help reduce weight and reduce the risk of type 2 diabetes. Birth control medicines (contraceptive pill) can help regulate the menstrual cycle and reduce symptoms. Other medicines can reduce acne or unwanted hair growth caused by PCOS. Treatments for infertility due to PCOS include lifestyle changes, medicines or surgery to stimulate regular ovulation. In-vitro fertilization (IVF) may be used but it has some risks.</p>
//       </div>

//     </div>
//   );
// };

// export default InformationalPages;


import React, { useState } from 'react';
import './InformationalPages.css';

const categories = [
  {
    id: 'causes',
    title: 'Causes',
    icon: '👩‍⚕️',
    image: 'data:image/jpeg;base64,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',  // replace with the actual path or URL
    content: (
      <div>
        <h3>Causes</h3>
        <p>The exact cause of PCOS is unknown, but it is believed to involve a combination of genetic and environmental factors.
           Elevated levels of androgens (male hormones) and insulin resistance are key 
           factors that contribute to the development of PCOS. Excess insulin may increase androgen production, 
           leading to difficulties with ovulation. Additionally, inflammation and heredity also play a role, as women with a 
           family history of PCOS are more likely to develop the condition.

</p>
      </div>
    )
  },
  {
    id: 'Diagnosis',
    title: 'Diagnosis',
    icon: '🩺',
    image: 'data:image/jpeg;base64,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',
    content: (
      <div>
        <h3>Diagnosis</h3>
        <p>Diagnosing PCOS typically involves a combination of clinical assessments, medical history, physical examination, 
          and laboratory tests. Doctors look for at least two of the following criteria: irregular or absent menstrual cycles, 
          elevated levels of androgens, and polycystic ovaries visible on an ultrasound.
           Blood tests are often conducted to measure hormone levels and rule out other conditions that could cause similar symptoms. 
          A thorough assessment of symptoms and medical history is also critical in making an accurate diagnosis.</p>
      </div>
    )
  },
  {
    id: 'Symptoms',
    title: 'Symptoms',
    icon: '😷',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwzAQKKgr10OQqJeH6znEMbVveLrNL-zMzPw&s',
    content: (
      <div>
        <h3>Symptoms</h3>
        <p>Polycystic ovary syndrome (PCOS) presents with a variety of 
          symptoms that can vary in intensity among individuals. Common symptoms include irregular menstrual cycles, 
          excessive hair growth (hirsutism) on the face and body, acne, and weight gain.
           Many women with PCOS also experience thinning hair on the scalp and darkening of the skin in certain areas, 
           such as the neck and under the breasts. Additionally, PCOS is associated with insulin resistance,
           which can lead to increased risk for type 2 diabetes and other metabolic complications.</p>
      </div>
    )
  },
  {
    id: 'periods',
    title: 'Periods',
    icon: '🩸',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX71Z86JltB7Cf72c-5L39fAmpknhvXtlC_Q&s',
    content: (
      <div>
        <h3>Periods</h3>
        <p>Irregular periods are a hallmark of PCOS. Women with this condition may experience infrequent, irregular, or
           prolonged menstrual cycles. Some may have fewer than eight periods a year or go for months without menstruating,
            while others might have very heavy bleeding when they do menstruate. These irregularities are due to anovulation, 
            where the ovaries do not release an egg during a menstrual cycle, 
          which disrupts the normal hormonal balance required for a regular menstrual cycle.</p>
      </div>
    )
  },
  {
    id: 'Fertility',
    title: 'Fertility',
    icon: '👶',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUDRO-vxGcJSddSCwkOXZ3OqCXsuRTrzg2XQDrcNgRNvFeFlX3OC1G1l2DUDqnmhXv4sY&usqp=CAU',
    content: (
      <div>
        <h3>Fertility</h3>
        <p>PCOS is a leading cause of infertility due to hormonal imbalances that interfere with ovulation. 
          Women with PCOS often have irregular or absent menstrual cycles, making it difficult to predict ovulation and conceive naturally. 
          The condition can cause the ovaries to develop numerous small cysts and fail to regularly release eggs. 
          However, with appropriate medical interventions and lifestyle modifications, 
          many women with PCOS can improve their fertility and successfully conceive.</p>
      </div>
    )
  },
  {
    id: 'Treatment',
    title: 'Treatment',
    icon: '💊',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkkuqNfAhYuQa8TEpO_FtzGe5cEQW6hFBz6g&s',
    content: (
      <div>
        <h3>Treatment</h3>
        <p>Treatment for PCOS is tailored to the individual’s symptoms and goals, such as managing symptoms or improving fertility. 
          Lifestyle modifications, including weight loss through diet and exercise, are often recommended to improve insulin sensitivity
           and reduce symptoms. Medications may include hormonal contraceptives to regulate menstrual cycles, anti-androgens to reduce 
           excessive hair growth, and metformin to improve insulin resistance. For women seeking to conceive, 
           fertility treatments such as clomiphene citrate, letrozole, or assisted reproductive technologies may be utilized. 
          Regular monitoring and follow-up care are essential to manage the condition effectively.</p>
      </div>
    )
  },
 
];

const InformationalPages = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="information-container">
      <h2>About PCOS</h2>

      <div className="pcos-section">
        <div className="pcos-text">
          <h3>What is PCOS?</h3>
          <p>Polycystic ovary syndrome (PCOS) is a problem with hormones that happens during the reproductive years. If you have PCOS, you may not have periods very often. Or you may have periods that last many days. You may also have too much of a hormone called androgen in your body.</p>
          <p>With PCOS, many small sacs of fluid develop along the outer edge of the ovary. These are called cysts. The small fluid-filled cysts contain immature eggs. These are called follicles. The follicles fail to regularly release eggs.</p>
          <p>The exact cause of PCOS is unknown. Early diagnosis and treatment along with weight loss may lower the risk of long-term complications such as type 2 diabetes and heart disease.</p>
        </div>
        <div className="pcos-image">
          <img 
            src="https://my.clevelandclinic.org/-/scassets/images/org/health/articles/8316-polycystic-ovary-syndrome-pcos" 
            alt="Informational Image" 
          />
        </div>
      </div>

      <h2>Explore more about PCOS</h2>
      <div className="categories">
        {categories.map(category => (
          <div 
            key={category.id} 
            className="category" 
            onClick={() => setSelectedCategory(category)}
          >
            <img src={category.image} alt={category.title} />
            <div className="category-title">
              <span className="icon">{category.icon}</span>
              <span>{category.title}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <div className="selected-category-content">
          {selectedCategory.content}
        </div>
      )}
    </div>
  );
};

export default InformationalPages;
