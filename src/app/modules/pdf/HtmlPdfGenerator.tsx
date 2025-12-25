export const htmlContent = (data: any): string => {
  return `
  <!DOCTYPE html>
  <html lang="bn">
  <head>
    <meta charset="UTF-8" />
    <title>Admission Form</title>
    <style>
      body { font-family: Arial, sans-serif; font-size: 14px; margin: 0; padding: 0; color:#000; }
      .page { width: 210mm; min-height: 297mm; margin: 0 auto; padding: 10mm; box-sizing: border-box; background: #fff; page-break-after: always; }
      .flex { display: flex; }
      .justify-between { justify-content: space-between; }
      .items-start { align-items: flex-start; }
      .text-center { text-align: center; }
      .text-right { text-align: right; }
      .border { border: 1px solid #000; }
      .p-2 { padding: 4px; }
      .p-4 { padding: 8px; }
      .mt-1 { margin-top: 4px; }
      .mt-2 { margin-top: 8px; }
      .mt-4 { margin-top: 16px; }
      .mt-6 { margin-top: 24px; }
      .mt-8 { margin-top: 32px; }
      .mt-10 { margin-top: 40px; }
      .grid-cols-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
      .font-bold { font-weight: bold; }
      .font-semibold { font-weight: 600; }
      .italic { font-style: italic; }
      .underline { text-decoration: underline; }
      .dynamic-data { font-weight: bold; font-size: 16px; } /* all dynamic data bold & larger */
      .table { width: 100%; border-collapse: collapse; margin-top: 8px; }
      .table th, .table td { border: 1px solid #000; padding: 4px; text-align: center; font-size: 14px; }
    </style>
  </head>
  <body>

  <!-- Page 1 -->
  <div class="page p-4">

    <!-- Top Section -->
    <div class="flex justify-between items-start">
      <!-- Left Photo -->
      <div class="border p-2 text-center" style="width:120px; height:150px;">
        { পাসপোর্ট সাইজের ১ কপি ছবি আঠা দিয়ে সংযুক্ত করুন }<br/>
        (Paste a passport size photograph)
      </div>

      <!-- Center Title -->
    <div class="text-center">
    <img src="https://i.postimg.cc/mDW850rq/JUSTLogo.png" width="70" />
    
    <p class="font-bold mt-2" style="font-size:16px;">যশোর বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়</p>
    <p>যশোর 7408, বাংলাদেশ</p>
    <p class="font-semibold mt-2">Jashore University of Science and Technology</p>
    <p>Jashore 7408, Bangladesh</p>
    <p class="font-bold underline mt-2" style="font-size:18px;">স্নাতক শিক্ষার্থী ভর্তি ফরম</p>
    <p class="mt-1" style="font-size:15px;">Undergraduate Students Admission Form</p>
    <p class="font-semibold mt-2">শিক্ষাবর্ষ (Session): <span class="dynamic-data">${ data.Session || "20____ to 20____"}</span></p>
   </div>

      <!-- Right Info -->
      <div class="border p-2" style="width:180px; line-height:1.5; font-size:12px;">
        {ইউনিট (Unit)}: <span class="dynamic-data">${
          data.unit || "................................"
        }</span><br/>
        {মেধাক্রম (Merit position)}: <span class="dynamic-data">${
          data.Merit || "................................"
        }</span><br/>
        {ক্লাস রোল (Class roll)}: <span class="dynamic-data">${
          data.ClassRoll || "................................"
        }</span><br/>
        {শিক্ষাবর্ষ (Session)}: <span class="dynamic-data">${
          data.Session || "................................"
        }</span><br/>
        {রেজিস্ট্রেশন নং (Reg. number)}: <span class="dynamic-data">${
          data.RegNumber || "................................"
        }</span>
      </div>
    </div>

    <!-- Recommendation Boxes -->
<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 20px; text-align: center;">

  ${["সমন্বয়কারীর সুপারিশ", "প্রোভোস্টের সুপারিশ", "যাচাইকৃত", "ভর্তি করুন"]
    .map((title, i) => {
      const eng = [
        "Coordinator's recommendation",
        "Provost's recommendation",
        "Verified",
        "Admit",
      ][i];

      const topPadding =
        eng === "Verified" || eng === "Admit" ? "padding-top: 12px;" : "";

      return `
          <div style="
            border: 1px solid #000;
            padding: 16px;
            height: 200px;
            font-size: 14px;
            font-weight: bold;
          ">
            <div style="${topPadding}">
              {${title}}<br>(${eng})
            </div>

            <div>(স্বাক্ষর ও সিল)</div>
          </div>
        `;
    })
    .join("")}

</div>


    <!-- Form Fields -->
    <div class="mt-6" style="line-height:1.8; font-size:16px;">
      <p>{১। শিক্ষার্থীর নাম (Student name)}:<br/>
        (ক) {বাংলায় (Bangla)}: <span class="dynamic-data">${
          data.NAME_BN || ".................................................."
        }</span><br/>
        (খ) {ইংরেজিতে (In English)}: <span class="dynamic-data">${
          data.Name || ".................................................."
        }</span>
      </p>
      <p>{২। পিতার নাম (Father name)}:<br/>
        <span class="dynamic-data">${
          data.Father ||
          "...................................................................................."
        }</span>
      </p>
      <p>{৩। মাতার নাম (Mother name)}:<br/>
        <span class="dynamic-data">${
          data.Mother ||
          "...................................................................................."
        }</span>
      </p>
      <p>{৪। ভর্তির বিভাগ (Admitting department)}:<br/>
        <span class="dynamic-data">${
          data.Department ||
          "...................................................................................."
        }</span>
      </p>
      <p>{৫। ভর্তির প্রোগ্রাম (Admitting program)}:<br/>
        <span class="dynamic-data">${
          data.Pogram ||
          "...................................................................................."
        }</span>
      </p>
      <p>{৬। সংযুক্ত হলের নাম (Hall attached)}:<br/>
        <span class="dynamic-data">${
          data.HallName ||
          "...................................................................................."
        }</span>
      </p>
    </div>

    <p class="text-right mt-8" style="font-size:16px;">Page 1 of 4</p>
  </div>

  <!-- Page 2 -->
  <div class="page">
    <p class="font-semibold mb-2">{৭। শিক্ষাগত যোগ্যতাসমূহ (Educational qualifications)}:</p>
    <table class="table">
      <thead>
        <tr>
          <th>পরীক্ষার নাম<br />(Name of exam)</th>
          <th>বোর্ড/বিশ্ববিদ্যালয়<br />(Board/University)</th>
          <th>শিক্ষা প্রতিষ্ঠানের নাম<br />(Institution)</th>
          <th>পরীক্ষা পাসের সন<br />(Passing year)</th>
          <th>পরীক্ষার রোল<br />(Roll)</th>
          <th>প্রাপ্ত শ্রেণি/জিপিএ<br />(Class/(C)GPA)</th>
          <th>অধ্যয়িত বিষয়সমূহ<br />(Subjects studied)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>SSC/Equivalent</td>
          <td><span>${data.SSCBoard || ""}</span></td>
          <td><span>${data.SSCInstitution || ""}</span></td>
          <td><span>${data.SSCYear || ""}</span></td>
          <td><span>${data.SSCRoll || ""}</span></td>
          <td><span>${data.SSCGpa || ""}</span></td>
          <td><span>${data.SSCSubject || ""}</span></td>
        </tr>
        <tr>
          <td>HSC/Equivalent</td>
          <td><span>${data.HSCBoard || ""}</span></td>
          <td><span>${data.HSCInstitution || ""}</span></td>
          <td><span>${data.HSCYear || ""}</span></td>
          <td><span>${data.HSCRoll || ""}</span></td>
          <td><span>${data.HSCGpa || ""}</span></td>
          <td><span>${data.HSCSubject || ""}</span></td>
        </tr>
      </tbody>
    </table>
    <!-- Remaining fields like 8-19 also wrapped in dynamic-data span -->
 

 <div style="line-height:1.8; font-size:16px;">
    <p class="mt-4">৮। ছাত্রাবস্থায় পড়াশোনা বন্ধ থাকলে কারণ (Reason for study break): 
  <span class="dynamic-data">${
    data.StudyBreakCause || "..................................."
  }</span>
</p>
 <p>৯। ইতিমধ্যেই ভর্তি প্রতিষ্ঠান (Institution already admitted): 
  <span class="dynamic-data">${
    data.AlreadyAdmittedInstitutio || "..................................."
  }</span>
</p>

<p>১০। চাকরি (Employment): 
  <span class="dynamic-data">${
    data.ApplicantEmployment || "..................................."
  }</span>
</p>

<p>১১। জন্ম তারিখ (Date of birth): 
  <span class="dynamic-data">${
    data.Dob || "..................................."
  }</span>
</p>

<p>১২। লিঙ্গ (Gender): 
  <span class="dynamic-data">${
    data.Gender || "..................................."
  }</span>
</p>

<p>১৩। বিবাহিত/অবিবাহিত (Marital status): 
  <span class="dynamic-data">${
    data.MaritalStatus || "..................................."
  }</span>
</p>

<p>১৪। ধর্ম (Religion): 
  <span class="dynamic-data">${
    data.Religion || "..................................."
  }</span>
</p>

<p>১৫। সম্প্রদায় (Caste): 
  <span class="dynamic-data">${
    data.Caste || "..................................."
  }</span>
</p>

<p>১৬। জাতীয়তা (Nationality): 
  <span class="dynamic-data">${
    data.Nationality || "..................................."
  }</span>
</p>

<p>১৭। মোবাইল নম্বর (Mobile number): 
  <span class="dynamic-data">${
    data.PhoneNumber || "..................................."
  }</span>
</p>

<p>১৮। ই-মেইল (Email): 
  <span class="dynamic-data">${
    data.Email || "..................................."
  }</span>
</p>

<p>১৯। স্বীকৃত প্রতিষ্ঠান থেকে প্রাপ্ত বৃত্তি, পদক অথবা পুরস্কার (Scholarships/Awards/Medals received): 
  <span class="dynamic-data">${
    data.Scholarships || "..................................."
  }</span>
</p>

 </div>
    <p class="text-right mt-8">Page 2 of 4</p>
  </div>
  
  <div class="page" style="width:100%; padding:24px; box-sizing:border-box; font-size:16px; line-height:1.7;">

  <!-- Permanent Address -->
  <div style="margin-bottom:28px;">
    ২০। স্থায়ী ঠিকানা: গ্রাম/বাড়ী নম্বর/রোড নম্বর (Village/House number/Road number):
    <span class="dynamic-data">${
      data.Village ||
      "............................................................."
    }</span>
    <br />

    পোস্ট অফিস (Post office):
    <span class="dynamic-data">${
      data.PostOffice || "................................................."
    }</span>

    &nbsp;&nbsp; পোস্ট কোড/Zip code:
    <span class="dynamic-data">${
      data.PostCode || "..................................................."
    }</span>
    <br />

    থানা (Thana):
    <span class="dynamic-data">${
      data.Thana ||
      "............................................................."
    }</span>

    &nbsp;&nbsp; জেলা (District):
    <span class="dynamic-data">${
      data.District ||
      "........................................................"
    }</span>
    <br />

    দেশ (Country):
    <span class="dynamic-data">${
      data.Country ||
      "....................................................................................................................."
    }</span>
    <br /><br />

    শিক্ষার্থীর জাতীয় পরিচয়পত্র/জন্ম সনদ/পাসপোর্ট নম্বর (Student’s NID/Birth reg./Passport number):
    <span class="dynamic-data">${
      data.NID ||
      "....................................................................................................................."
    }</span>
  </div>

  <!-- Present Address -->
  <div style="margin-bottom:10px;">
    ২১। বর্তমান ঠিকানা (Present address):
    <span class="dynamic-data">${
      data.PresentAddress ||
      "........................................................................................................................................................................"
    }</span>
  </div>

  <!-- Guardian -->
  <div style="margin-bottom:10px;">
    ২২। অভিভাবকের নাম (Guardian’s name):
    <span class="dynamic-data">${
      data.GuardianName ||
      "......................................................................."
    }</span>
    <br />

    পেশা (Occupation):
    <span class="dynamic-data">${
      data.GuardianOccupation || "............................................."
    }</span>

    &nbsp;&nbsp; মাসিক আয় (Monthly income):
    <span class="dynamic-data">${
      data.GuardianMonthlyIncome ||
      "............................................................"
    }</span>
    <br />

    সম্পর্ক (Relation):
    <span class="dynamic-data">${
      data.GuardianRelation ||
      ".............................................................."
    }</span>
    <br />

    ঠিকানা (Address): গ্রাম/বাড়ী নম্বর/রোড নম্বর (Village/House number/Road number):
    <span class="dynamic-data">${
      data.GuardianVillage ||
      "........................................................."
    }</span>
    <br />

    পোস্ট অফিস (Post office):
    <span class="dynamic-data">${
      data.GuardianPostOffice ||
      "................................................."
    }</span>

    &nbsp;&nbsp; পোস্ট কোড/Zip code:
    <span class="dynamic-data">${
      data.GuardianPostCode || "............................."
    }</span>

    &nbsp;&nbsp; থানা (Thana):
    <span class="dynamic-data">${
      data.GuardianThana || "..................................."
    }</span>

    &nbsp;&nbsp; জেলা (District):
    <span class="dynamic-data">${
      data.GuardianDistrict || "..............................."
    }</span>
    <br />

    দেশ (Country):
    <span class="dynamic-data">${
      data.GuardianCountry ||
      "..................................................."
    }</span>

    &nbsp;&nbsp; মোবাইল নম্বর (Mobile number):
    <span class="dynamic-data">${
      data.GuardianPhone ||
      "............................................................"
    }</span>
    <br />

    জাতীয় পরিচয়পত্রের নম্বর (NID number):
    <span class="dynamic-data">${
      data.GuardianNID ||
      "....................................................................................................................."
    }</span>
  </div>

  <!-- Legal Guardian -->
  <div style="margin-bottom:28px;">
    ২৩। পিতার অনুপস্থিতি আইনি অভিভাবকের নাম (Legal guardian’s name in absence of father):
    <span class="dynamic-data">${
      data.LegalGuardianName ||
      ".................................................................................."
    }</span>
    <br />

    পেশা (Profession):
    <span class="dynamic-data">${
      data.LegalGuardianOccupation ||
      "....................................................."
    }</span>

    &nbsp;&nbsp; মাসিক আয় (Monthly income):
    <span class="dynamic-data">${
      data.LegalGuardianIncome ||
      ".................................................."
    }</span>
    <br />

    সম্পর্ক (Relation):
    <span class="dynamic-data">${
      data.LegalGuardianRelation ||
      "..........................................................................................................."
    }</span>
    <br />

    ঠিকানা (Address): গ্রাম/বাড়ী নম্বর/রোড নম্বর (Village/House number/Road number):
    <span class="dynamic-data">${
      data.LegalGuardianVillage ||
      ".............................................."
    }</span>
    <br />

    পোস্ট অফিস (Post office):
    <span class="dynamic-data">${
      data.LegalGuardianPostOffice ||
      ".............................................."
    }</span>
    <br />

    পোস্ট কোড/Zip code:
    <span class="dynamic-data">${
      data.LegalGuardianPostCode || ".............................."
    }</span>

    &nbsp;&nbsp; থানা (Thana):
    <span class="dynamic-data">${
      data.LegalGuardianThana || "...................................."
    }</span>

    &nbsp;&nbsp; জেলা (District):
    <span class="dynamic-data">${
      data.LegalGuardianDistrict || "...................................."
    }</span>
    <br />

    দেশ (Country):
    <span class="dynamic-data">${
      data.LegalGuardianCountry ||
      "...................................................."
    }</span>

    &nbsp;&nbsp; মোবাইল নম্বর (Mobile number):
    <span class="dynamic-data">${
      data.LegalGuardianPhone ||
      "..................................................."
    }</span>
    <br />

    জাতীয় পরিচয়পত্রের নম্বর (NID number):
    <span class="dynamic-data">${
      data.LegalGuardianNID ||
      "....................................................................................................................."
    }</span>
  </div>

  <!-- Local Guardian -->
  <div style="margin-bottom:28px;">
    ২৪। স্থানীয় অভিভাবকের নাম (Local guardian’s name):
    <span class="dynamic-data">${
      data.LocalGuardianName ||
      "........................................................................................................................"
    }</span>
    <br />

    সম্পর্ক (Relation):
    <span class="dynamic-data">${
      data.LocalGuardianRelation ||
      "........................................................."
    }</span>
    <br />

    স্থায়ী ঠিকানা (Permanent address) — গ্রাম/বাড়ী নম্বর/রোড নম্বর (Village/House number/Road number):
    <span class="dynamic-data">${
      data.LocalGuardianVillage ||
      "...................................................."
    }</span>
    <br />

    পোস্ট অফিস (Post office):
    <span class="dynamic-data">${
      data.LocalGuardianPostOffice ||
      ".............................................."
    }</span>

    &nbsp;&nbsp; পোস্ট কোড/Zip code:
    <span class="dynamic-data">${
      data.LocalGuardianPostCode || "................................."
    }</span>

    &nbsp;&nbsp; থানা (Thana):
    <span class="dynamic-data">${
      data.LocalGuardianThana || "........................................."
    }</span>

    &nbsp;&nbsp; জেলা (District):
    <span class="dynamic-data">${
      data.LocalGuardianDistrict || "........................................."
    }</span>
    <br />

    &nbsp;&nbsp; মোবাইল নম্বর (Mobile number):
    <span class="dynamic-data">${
      data.LocalGuardianPhone ||
      "....................................................."
    }</span>
    <br />

    জাতীয় পরিচয়পত্রের নম্বর (NID number):
    <span class="dynamic-data">${
      data.LocalGuardianNID ||
      "....................................................................................................................."
    }</span>
  </div>

  <p class="text-right" style="font-size:16px;">Page 3 of 4</p>

</div>


    <!-- Page 4 -->
    <div class="page" style="font-size:16px;">
      <h2 class="text-center font-bold text-xl mb-2">অঙ্গীকারনামা</h2>
      <h3 class="text-center font-semibold text-lg mb-4">(Commitment Statement)</h3>
      <p class="mb-4">আমি এই মর্মে অঙ্গীকার করছি যে, যশোর বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ের শিক্ষার্থী থাকাকালীন আমি বিশ্ববিদ্যালয় ও সংযুক্ত হলের আইন মেনে চলব এবং শৃঙ্খলা পরিপন্থী কোনো কর্মকাণ্ডে লিপ্ত হব না। আমি সত্যিই এই ফরম পূরণ করেছি এবং এতে লিখিত তথ্যাবলী সত্য। আমি আরো অঙ্গীকার করছি যে, বিশ্ববিদ্যালয়ের শিক্ষার্থী থাকাকালীন আমার শিক্ষা ও আচরণগত ব্যাপারে যথাযথ কর্তৃপক্ষের সিদ্ধান্তকে সর্বদা সম্মান জানাব এবং সকল ফিস নির্ধারিত সময়ে পরিশোধ করব। কোনোরূপ কারণে এই অঙ্গীকার ভঙ্গ করলে বা কোনো তথ্য প্রদান করতে গিয়ে আমার কোনো ভুলের জন্য বিশ্ববিদ্যালয় কর্তৃপক্ষ কর্তৃক গৃহীত যে কোনো শাস্তিমূলক ব্যবস্থা আমি মেনে নিতে বাধ্য থাকব।</p>
      <p class="mb-6 italic">(I do hereby pledge that during my stay as a student of Jashore University of Science and Technology I will abide by the rules of this university and the hall attached, and that I shall not get involved in any act subversive of discipline. I testify that all the information written by me in this form is true. I also pledge that during this period I will show due respect to the decisions of the appropriate authority regarding my education and behavior; and pay all the fees in due time. In case of violating this commitment or providing any misinformation, I oblige to accept any punitive measures taken by the authority of Jashore University of Science and Technology.)</p>
      <div class="text-right mb-10">
        <p>----------------------------------------------</p>
        <p>শিক্ষার্থীর স্বাক্ষর (Signature of the student)</p>
      </div>

      <h2 class="text-center font-bold text-xl mb-2">অভিভাবকের অঙ্গীকারনামা</h2>
      <h3 class="text-center font-semibold text-lg mb-4">(Guardian’s Commitment Statement)</h3>
      <p class="mb-4">আমি, ............................................................. , এই মর্মে স্বীকার করিতেছি যে, আমার পুত্র/কন্যা/ওয়ার্ড .............................................. এই বিশ্ববিদ্যালয়ের শিক্ষার্থী থাকাকালীন যথা সময়মতো পরিশোধ করব এবং উচ্চ সময়ে বিশ্ববিদ্যালয় কর্তৃক গৃহীত ব্যবস্থাগুলির প্রতি সর্বাত্মক সহায়তা প্রদান করব।</p>
      <p class="mb-6 italic">(I, ………………… , do hereby pledge that, during the stay of my son/daughter/ward …………………… as a student of this university, I shall pay all the fees in due time and extend all kinds of cooperation to support the measures taken by the university to maintain a congenial academic environment.)</p>

      <div class="flex justify-between mb-10">
        <div>তারিখ (date): ....................................</div>
        <div class="text-right">
          <p>----------------------------------------------</p>
          <p>অভিভাবকের স্বাক্ষর (Guardian’s signature)</p>
        </div>
      </div>

      <h3 class="font-bold text-center mb-2">জ্ঞাতব্য বিষয়</h3>
      <p class="text-center">ভর্তিকৃত শিক্ষার্থীদের আচরণ বিশ্ববিদ্যালয়ের রিজেন্ট বোর্ড কর্তৃক প্রণীত “Student’s Code of Conducts” এর বিধি-বিধান দ্বারা নিয়ন্ত্রিত হবে।</p>
      <p class="text-center italic">Nota bene: The conducts of the admitted students shall be regulated by the ‘Student’s Code of Conducts’ formulated and approved by the Regent Board of the University.</p>

      <p class="text-right mt-6">Page 4 of 4</p>
    </div>

  </body>
  </html>
  `;
};
