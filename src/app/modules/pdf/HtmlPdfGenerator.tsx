export const htmlContent = (data: any): string => {
  return `
  <!DOCTYPE html>
  <html lang="bn">
  <head>
    <meta charset="UTF-8" />
    <title>Admission Form</title>
    <style>
      body { font-family: Arial, sans-serif; font-size: 14px; margin: 0; padding: 0; }
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
      .grid-cols-4 { display: grid; grid-template-columns: repeat(4, 1fr); }
      .table { width: 100%; border-collapse: collapse; margin-top: 8px; }
      .table th, .table td { border: 1px solid #000; padding: 4px; text-align: center; font-size: 13px; }
      .underline { text-decoration: underline; }
      .font-bold { font-weight: bold; }
      .font-semibold { font-weight: 600; }
      .italic { font-style: italic; }
    </style>
  </head>
  <body>

    <!-- Page 1 -->
    <div class="page">
      <div class="flex justify-between items-start">
        <!-- Left Photo Box -->
        <div class="border p-2" style="width:120px; height:150px; text-align:center; font-size:12px;">
          পাসপোর্ট সাইজের<br />১ কপি ছবি আঠা দিয়ে সংযুক্ত করুন<br />
          (Paste a passport size photograph)
        </div>

        <!-- Center Logo & Title -->
        <div class="text-center">
          <img src="https://i.postimg.cc/Y9cT4b11/JUSTLogo.png" width="70" />
          <p class="font-bold" style="font-size:16px;">যশোর বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়</p>
          <p>যশোর 7408, বাংলাদেশ</p>
          <p class="font-semibold mt-2">Jashore University of Science and Technology</p>
          <p>Jashore 7408, Bangladesh</p>
          <p class="font-bold underline mt-2" style="font-size:18px;">স্নাতক শিক্ষার্থী ভর্তি ফরম</p>
          <p class="mt-1" style="font-size:15px;">Undergraduate Students Admission Form</p>
          <p class="font-semibold mt-2">শিক্ষাবর্ষ (Session): 20___ - 20___</p>
        </div>

        <!-- Right Info Box -->
        <div class="border p-2" style="width:180px; font-size:12px; line-height:1.4;">
          ইউনিট (Unit): <br />
          মেধাক্রম (Merit position): <br />
          ক্লাস রোল (Class roll): <br />
          শিক্ষাবর্ষ (Session): <br />
          রেজিস্ট্রেশন নং (Reg. number):
        </div>
      </div>

      <!-- Recommendation Boxes -->
      <div class="grid-cols-4 mt-6 text-center" style="font-size:12px;">
        <div class="border p-2">সমন্বয়কারীর সুপারিশ<br />(Coordinator's recommendation)<div class="mt-4">(স্বাক্ষর ও সিল)</div></div>
        <div class="border p-2">প্রোভোস্টের সুপারিশ<br />(Provost's recommendation)<div class="mt-4">(স্বাক্ষর ও সিল)</div></div>
        <div class="border p-2">যাচাইকৃত<br />(Verified)<div class="mt-4">(স্বাক্ষর ও সিল)</div></div>
        <div class="border p-2">ভর্তি করুন<br />(Admit)<div class="mt-4">(স্বাক্ষর ও সিল)</div></div>
      </div>

      <!-- Form fields -->
      <div class="mt-6" style="font-size:14px;">
       <p>
  ১। শিক্ষার্থীর নাম (Student name):<br/>
  (ক) বাংলায় (Bangla): ${
    data.NAME_BN || ".................................................."
  }<br/>
  (খ) ইংরেজিতে (In English): ${
    data.Name || ".................................................."
  }
</p>

<p>
  ২। পিতার নাম (Father name):<br/>
  ${
    data.Father ||
    "...................................................................................."
  }
</p>

<p>
  ৩। মাতার নাম (Mother name):<br/>
  ${
    data.Mother ||
    "...................................................................................."
  }
</p>

<p>
  ৪। ভর্তির বিভাগ (Admitting department):<br/>
  ${
    data.Department ||
    "...................................................................................."
  }
</p>

<p>
  ৫। ভর্তির প্রোগ্রাম (Admitting program):<br/>
  ${
    data.Pogram ||
    "...................................................................................."
  }
</p>

<p>
  ৬। সংযুক্ত হলের নাম (Hall attached):<br/>
  ${
    data.HallName ||
    "...................................................................................."
  }
</p>

      </div>

      <p class="text-right mt-8" style="font-size:12px;">Page 1 of 4</p>
    </div>

    <!-- Page 2 -->
    <div class="page">
      <p class="font-semibold mb-2">৭। শিক্ষাগত যোগ্যতাসমূহ (Educational qualifications):</p>
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
            <td>${data.SSCBoard || ""}</td>
            <td>${data.SSCInstitution || ""}</td>
            <td>${data.SSCYear || ""}</td>
            <td>${data.SSCRoll || ""}</td>
            <td>${data.SSCGpa || ""}</td>
            <td>${data.SSCSubject || ""}</td>
          </tr>
          <tr>
            <td>HSC/Equivalent</td>
            <td>${data.HSCBoard || ""}</td>
            <td>${data.HSCInstitution || ""}</td>
            <td>${data.HSCYear || ""}</td>
            <td>${data.HSCRoll || ""}</td>
            <td>${data.HSCGpa || ""}</td>
            <td>${data.HSCSubject || ""}</td>
          </tr>
        </tbody>
      </table>

     <p class="mt-4">
  ৮। ছাত্রাবস্থায় পড়াশোনা বন্ধ থাকলে কারণ (Causes for break of study, if any):<br />
  ${
    data.StudyBreakCause ||
    "...................................................."
  }
</p>

<p>
  ৯। ইতিমধ্যেই ভর্তি প্রতিষ্ঠান (Name of the faculty/department/institution already admitted):<br />
  ${
    data.AlreadyAdmittedInstitutio ||
    "...................................................."
  }
</p>

<p>
  ১০। চাকরি (Applicants in employment, if any):<br />
  ${
    data.ApplicantEmployment ||
    "...................................................."
  }
</p>

<p>
  ১১। জন্ম তারিখ (Date of birth as per SSC/Equivalent certificate) (dd/mm/yyyy):<br />
  ${data.Dob || "...................................................."}
</p>

<p>
  ১২। লিঙ্গ (Gender - Male/Female/Transgender):<br />
  ${data.Gender || "...................................................."}
</p>

<p>
  ১৩। বিবাহিত/অবিবাহিত (Married/Unmarried):<br />
  ${
    data.MaritalStatus || "...................................................."
  }
</p>

<p>
  ১৪। ধর্ম (Religion):<br />
  ${data.Religion || "...................................................."}
</p>

<p>
  ১৫। সম্প্রদায় (Caste):<br />
  ${data.Caste || "...................................................."}
</p>

<p>
  ১৬। জাতীয়তা (Nationality):<br />
  ${data.Nationality || "...................................................."}
</p>

<p>
  ১৭। মোবাইল নম্বর (Students mobile number):<br />
  ${data.PhoneNumber || "...................................................."}
</p>

<p>
  ১৮। ই-মেইল (Students Email):<br />
  ${data.Email || "...................................................."}
</p>

<p>
  ১৯। স্বীকৃত প্রতিষ্ঠান থেকে প্রাপ্ত বৃত্তি, পদক অথবা পুরস্কার (Scholarships, medals, or prizes obtained from any recognized organization):<br />
  ${data.Scholarships || "...................................................."}
</p>


      <p class="text-right mt-8">Page 2 of 4</p>
    </div>

    <div class="page" style="width:100%; padding:24px; box-sizing:border-box; font-size:14px; line-height:1.6;">

  <div>
    ২০। স্থায়ী ঠিকানা : গ্রাম/বাড়ী নম্বর/রোড নম্বর (Village/House number/Road number): 
    ${
      data.Village ||
      "............................................................."
    };  
    <br />
    পোস্ট অফিস (Post office): ${
      data.PostOffice || "................................................."
    };  
    পোস্ট কোড/Zip code: ${
      data.PostCode || "..................................................."
    };  
    <br />
    থানা (Thana): ${
      data.Thana ||
      "............................................................."
    };  
    জেলা (District): ${
      data.District ||
      "..........................................................."
    };  
    <br />
    দেশ (Country): ${
      data.Country ||
      "....................................................................................................................."
    }  
    <br /><br />
    শিক্ষার্থীর জাতীয় পরিচয়পত্র/জন্ম সনদ/পাসপোর্ট নাম্বার (Student’s NID/Birth reg./Passport number):  
    ${
      data.NID ||
      "....................................................................................................................."
    }
  </div>


  <div style="margin-top:24px;">
    ২১। বর্তমান ঠিকানা (Present address):  
    ${
      data.PresentAddress ||
      "........................................................................................................................................................................"
    }  
    <br />
    ........................................................................................................................................................................
  </div>


  <div style="margin-top:24px;">
    ২২। অভিভাবকের নাম (Guardian’s name):  
    ${
      data.GuardianName ||
      "....................................................................................................................."
    }  
    <br />
    পেশা (Occupation): ${
      data.GuardianOccupation || "............................................."
    } ;  
    মাসিক আয় (Monthly income): ${
      data.GuardianMonthlyIncome ||
      "............................................................"
    };  
    <br />
    সম্পর্ক (Relation): ${
      data.GuardianRelation ||
      ".............................................................."
    } ;  
    ঠিকানা (Address): গ্রাম/বাড়ী নম্বর/রোড নম্বর (Village/House number/Road number):  
    ${
      data.GuardianVillage ||
      "........................................................."
    };  
    <br />
    পোস্ট অফিস (Post office): ${
      data.GuardianPostOffice ||
      "................................................."
    } ;  
    পোস্ট কোড/Zip code: ${
      data.GuardianPostCode || "............................."
    } ;  
    থানা (Thana): ${
      data.GuardianThana || "..................................."
    } ;  
    জেলা (District): ${
      data.GuardianDistrict || "..............................."
    } ;  
    <br />
    দেশ (Country): ${
      data.GuardianCountry ||
      "..................................................."
    } ;  
    মোবাইল নম্বর (Mobile number): ${
      data.GuardianPhone ||
      "............................................................"
    } ;  
    <br />
    জাতীয় পরিচয়পত্রের নম্বর (NID number): ${
      data.GuardianNID ||
      "....................................................................................................................."
    }
  </div>

  <div style="margin-top:24px;">
    ২৩। পিতার অনুপস্থিতি আইনি অভিভাবকের নাম (Legal guardians name in absence of father):  
    ${
      data.LegalGuardianName ||
      ".................................................................................."
    }  
    <br />
    পেশা (Profession): ${
      data.LegalGuardianOccupation ||
      "....................................................."
    };  
    মাসিক আয় (Monthly income): ${
      data.LegalGuardianIncome ||
      ".................................................."
    };  
    <br />
    সম্পর্ক (Relation): ${
      data.LegalGuardianRelation ||
      "..........................................................................................................."
    } ;  
    <br />
    ঠিকানা (Address): গ্রাম/বাড়ী নম্বর /রোড নম্বর (Village/House number/Road number):  
    ${
      data.LegalGuardianVillage ||
      ".............................................."
    };  
    পোস্ট অফিস (Post office): ${
      data.LegalGuardianPostOffice ||
      ".............................................."
    };  
    <br />
    পোস্ট কোড/Zip code: ${
      data.LegalGuardianPostCode || ".............................."
    } ;  
    থানা (Thana): ${
      data.LegalGuardianThana || "...................................."
    } ;  
    জেলা (District): ${
      data.LegalGuardianDistrict || "...................................."
    } ;  
    <br />
    দেশ (Country): ${
      data.LegalGuardianCountry ||
      "...................................................."
    } ;  
    মোবাইল নম্বর (Mobile number): ${
      data.LegalGuardianPhone ||
      "..................................................."
    } ;  
    <br />
    জাতীয় পরিচয়পত্রের নম্বর (NID number): ${
      data.LegalGuardianNID ||
      "....................................................................................................................."
    }
  </div>

  <div style="margin-top:24px;">
    ২৪। স্থানীয় অভিভাবকের নাম (Local guardian’s name):  
    ${
      data.LocalGuardianName ||
      "........................................................................................................................"
    }  
    <br />
    সম্পর্ক (Relation): ${
      data.LocalGuardianRelation ||
      "........................................................."
    } ;  
    স্থায়ী ঠিকানা (Permanent address):  
    গ্রাম/বাড়ী নম্বর /রোড নম্বর (Village/House number/Road number):  
    ${
      data.LocalGuardianVillage ||
      "...................................................."
    } ;  
    <br />
    পোস্ট অফিস (Post office): ${
      data.LocalGuardianPostOffice ||
      ".............................................."
    } ;  
    পোস্ট কোড/Zip code: ${
      data.LocalGuardianPostCode || "................................."
    } ;  
    থানা (Thana): ${
      data.LocalGuardianThana || "........................................."
    } ;  
    জেলা (District): ${
      data.LocalGuardianDistrict || "........................................."
    } ;  
    <br />
    দেশ (Country): ${
      data.LocalGuardianCountry ||
      "....................................................."
    } ;  
    মোবাইল নম্বর (Mobile number): ${
      data.LocalGuardianPhone ||
      "....................................................."
    } ;  
    <br />
    জাতীয় পরিচয়পত্রের নম্বর (NID number): ${
      data.LocalGuardianNID ||
      "....................................................................................................................."
    }
  </div>

  <p class="text-right" style="margin-top:32px; font-size:12px;">Page 3 of 4</p>
</div>


    <!-- Page 4 -->
    <div class="page">
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

      <p class="text-center mt-6">Page 4 of 4</p>
    </div>

  </body>
  </html>
  `;
};
