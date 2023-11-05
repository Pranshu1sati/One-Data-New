'use client'
import { useState } from "react";
import React from "react";

export default function RecerchPapers() {
  const [researchPapers, setResearchPapers] = useState([{
    title: 'General cardiovascular risk profile for use in primary care: the Framingham Heart Study',
    authors: 'RB D’Agostino Sr, RS Vasan, MJ Pencina, PA Wolf, M Cobain, ...Circulation 117 (6), 743-753, 2008',
    publication: '',
    citedBy: '7831'
  },
  {
    title: 'Evaluating the added predictive ability of a new marker: from area under the ROC curve to reclassification and beyond',
    authors: "MJ Pencina, RB D'Agostino Sr, RB D'Agostino Jr, RS VasanStatistics in medicine 27 (2), 157-172, 2008",
    publication: '',
    citedBy: '6281'
  },
  {
    title: 'Obesity and the risk of heart failure',
    authors: 'S Kenchaiah, JC Evans, D Levy, PWF Wilson, EJ Benjamin, MG Larson, ...New England Journal of Medicine 347 (5), 305-313, 2002',
    publication: '',
    citedBy: '3697'
  },
  {
    title: 'Vitamin D deficiency and risk of cardiovascular disease',
    authors: 'TJ Wang, MJ Pencina, SL Booth, PF Jacques, E Ingelsson, K Lanier, ...Circulation 117 (4), 503-511, 2008',
    publication: '',
    citedBy: '3442'
  },
  {
    title: 'Abdominal visceral and subcutaneous adipose tissue compartments: association with metabolic risk factors in the Framingham Heart Study',
    authors: 'CS Fox, JM Massaro, U Hoffmann, KM Pou, P Maurovich-Horvat, CY Liu, ...Circulation 116 (1), 39-48, 2007',
    publication: '',
    citedBy: '3303'
  },
  {
    title: 'Impact of high-normal blood pressure on the risk of cardiovascular disease',   
    authors: "RS Vasan, MG Larson, EP Leip, JC Evans, CJ O'Donnell, WB Kannel, ...New England journal of medicine 345 (18), 1291-1297, 2001",
    publication: '',
    citedBy: '3093'
  },
  {
    title: 'Metabolite profiles and the risk of developing diabetes',
    authors: 'TJ Wang, MG Larson, RS Vasan, S Cheng, EP Rhee, E McCabe, ...Nature medicine 17 (4), 448-453, 2011',
    publication: '',
    citedBy: '3032'
  },
  {
    title: 'The progression from hypertension to congestive heart failure',
    authors: 'D Levy, MG Larson, RS Vasan, WB Kannel, KKL HoJama 275 (20), 1557-1562, 1996',
    publication: '',
    citedBy: '2962'
  },
  {
    title: 'Long-term trends in the incidence of and survival with heart failure',
    authors: 'D Levy, S Kenchaiah, MG Larson, EJ Benjamin, MJ Kupka, KKL Ho, ...New England Journal of Medicine 347 (18), 1397-1402, 2002',
    publication: '',
    citedBy: '2939'
  },
  {
    title: 'Lifetime risk for development of atrial fibrillation: the Framingham Heart Study',
    authors: 'DM Lloyd-Jones, TJ Wang, EP Leip, MG Larson, D Levy, RS Vasan, ...Circulation 110 (9), 1042-1046, 2004',
    publication: '',
    citedBy: '2896'
  },
  {
    title: 'Arterial stiffness and cardiovascular events: the Framingham Heart Study',     
    authors: 'GF Mitchell, SJ Hwang, RS Vasan, MG Larson, MJ Pencina, NM Hamburg, ...Circulation 121 (4), 505-511, 2010',
    publication: '',
    citedBy: '2559'
  },
  {
    title: 'Residual lifetime risk for developing hypertension in middle-aged women and men: The Framingham Heart Study',
    authors: "RS Vasan, A Beiser, S Seshadri, MG Larson, WB Kannel, RB D'Agostino, ...Jama 287 (8), 1003-1010, 2002",
    publication: '',
    citedBy: '2419'
  },
  {
    title: 'Temporal relations of atrial fibrillation and congestive heart failure and their joint influence on mortality: the Framingham Heart Study',
    authors: 'TJ Wang, MG Larson, D Levy, RS Vasan, EP Leip, PA Wolf, ...Circulation 107 (23), 2920-2925, 2003',
    publication: '',
    citedBy: '2337'
  },
  {
    title: 'Genetic variants in novel pathways influence blood pressure and cardiovascular disease risk',
    authors: 'CKDGen Consortium, KidneyGen Consortium, EchoGen consortium, ...Nature 478 (7367), 103-109, 2011',
    publication: '',
    citedBy: '2209'
  },
  {
    title: 'Lifetime risk for developing congestive heart failure: the Framingham Heart Study',
    authors: 'DM Lloyd-Jones, MG Larson, EP Leip, A Beiser, RB D’agostino, ...Circulation 106 (24), 3068-3072, 2002',
    publication: '',
    citedBy: '2148'
  },
  {
    title: 'Changes in arterial stiffness and wave reflection with advancing age in healthy men and women: the Framingham Heart Study',
    authors: 'GF Mitchell, H Parise, EJ Benjamin, MG Larson, MJ Keyes, JA Vita, ...Hypertension 43 (6), 1239-1245, 2004',
    publication: '',
    citedBy: '1897'
  },
  {
    title: 'Plasma natriuretic peptide levels and the risk of cardiovascular events and death',
    authors: 'TJ Wang, MG Larson, D Levy, EJ Benjamin, EP Leip, T Omland, PA Wolf, ...New England Journal of Medicine 350 (7), 655-663, 2004',
    publication: '',
    citedBy: '1887'
  },
  {
    title: 'Congestive heart failure in subjects with normal versus reduced left ventricular ejection fraction: prevalence and mortality in a population-based cohort',
    authors: 'RS Vasan, MG Larson, ScD, EJ Benjamin, JC Evans, CK Reiss, D LevyJournal of the American College of Cardiology 33 (7), 1948-1955, 1999',
    publication: '',
    citedBy: '1843'
  }])
  return (
    <article className="w-full rounded-lg p-5 bg-white text-black">
      <div className="w-full flex">
        <div>
          <h1 className="font-extrabold text-4xl">Research Papers</h1>
          <h2 className="font-semibold text-[#83c5be]">5</h2>
        </div>
        <div className="flex ml-auto">
          
          <div className="font-extrabold flex flex-col items-center text-xl">
            <div>113</div>
            <div className="font-semibold text-[#83c5be]">Papers</div>
          </div>
        </div>
      </div>
      <section className="w-full my-3">
        <hr />
        <div
          id="teach-header"
          className="grid grid-cols-6 my-2 text-[#83c5be] font-semibold text-lg"
        >
          <h3 className="col-span-2">Name</h3>
          <h3 className="text-center">Area of research</h3>
          <h3 className="text-center">By </h3>
          <h3 className="text-center">Department</h3>
        </div>

        <hr />

        <div
          style={{ maxHeight: "400px", overflowY: "auto" }} // Adjust the height as needed
        >
          {researchPapers.map((paper, index) => (
            <div
              key={index}
              className="grid grid-cols-6 my-2 text-black font-bold text-lg">
              <h3 className="col-span-2">{paper.title}</h3>
              <h3 className="text-center">Area of research</h3>
              <h3 className="text-center">
                <button>ABC</button>
              </h3>
              <h3 className="text-center">CS</h3>
              <hr/>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
