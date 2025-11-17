// HtmlPdfGenerator.ts
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
        .border { border: 1px solid #000; }
        .p-2 { padding: 4px; }
        .p-4 { padding: 8px; }
        .mt-2 { margin-top: 8px; }
        .mt-4 { margin-top: 16px; }
        .mt-6 { margin-top: 24px; }
        .mt-8 { margin-top: 32px; }
        .text-right { text-align: right; }
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
          <div class="border p-2" style="width:120px; height:150px; text-align:center; font-size:12px;">
            পাসপোর্ট সাইজের<br />১ কপি ছবি আঠা দিয়ে সংযুক্ত করুন<br />
            (Paste a passport size photograph)
          </div>
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
          <div class="border p-2" style="width:180px; font-size:12px; line-height:1.4;">
            ইউনিট (Unit): ${data.Unit || ''}<br />
            মেধাক্রম (Merit position): ${data.MeritPosition || ''}<br />
            ক্লাস রোল (Class roll): ${data.ClassRoll || ''}<br />
            শিক্ষাবর্ষ (Session): ${data.Session || ''}<br />
            রেজিস্ট্রেশন নং (Reg. number): ${data.RegNo || ''}
          </div>
        </div>

        <div class="grid-cols-4 mt-6 text-center" style="font-size:12px;">
          <div class="border p-2">সমন্বয়কারীর সুপারিশ<br />(Coordinators recommendation)<br /><div class="mt-4">(স্বাক্ষর ও সিল)</div></div>
          <div class="border p-2">প্রোভোস্টের সুপারিশ<br />(Provost's recommendation)<br /><div class="mt-4">(স্বাক্ষর ও সিল)</div></div>
          <div class="border p-2">যাচাইকৃত<br />(Verified)<br /><div class="mt-4">(স্বাক্ষর ও সিল)</div></div>
          <div class="border p-2">ভর্তি করুন<br />(Admit)<br /><div class="mt-4">(স্বাক্ষর ও সিল)</div></div>
        </div>

        <div class="mt-6" style="font-size:14px;">
          <div>১। শিক্ষার্থীর নাম (Students name):<br/> (ক) বাংলায়: ${data.NAME_BN || ''}<br/> (খ) ইংরেজিতে: ${data.Name || ''}</div>
          <div class="mt-2">২। পিতার নাম (Fathers name): ${data.Father || ''}</div>
          <div class="mt-2">৩। মাতার নাম (Mothers name): ${data.Mother || ''}</div>
          <div class="mt-2">৪। ভর্তির বিভাগ (Admitting department): ${data.Department || ''}</div>
          <div class="mt-2">৫। ভর্তির প্রোগ্রাম (Admitting program): ${data.Program || ''}</div>
          <div class="mt-2">৬। সংযুক্ত হলের নাম (Hall attached): ${data.HallName || ''}</div>
        </div>

        <p class="text-right mt-8" style="font-size:12px;">Page 1 of 4</p>
      </div>

      <!-- Page 2,3,4: Same way, use ${data.property} dynamically -->

    </body>
    </html>
  `;
};
