const NAV=[["home",{id:"Beranda",en:"Home"}],["about",{id:"Tentang",en:"About"}],["projects",{id:"Proyek",en:"Projects"}],["documents",{id:"Dokumen",en:"Documents"}]];
const MORE=[["career",{id:"Perjalanan Karier",en:"Career Journey"}],["skills",{id:"Keahlian",en:"Skills"}],["achievements",{id:"Pencapaian",en:"Achievements"}]];

const ICONS={
  home:'<path d="M4 11L12 4l8 7"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/>',
  about:'<circle cx="12" cy="8" r="3.2"/><path d="M5.5 20c1-4 4-5.5 6.5-5.5s5.5 1.5 6.5 5.5"/>',
  career:'<rect x="3.5" y="8" width="17" height="11" rx="1.5"/><path d="M8.5 8V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2"/><path d="M3.5 13h17"/>',
  skills:'<path d="M12 3.5l2.4 5 5.5.6-4.1 3.8 1.1 5.5L12 15.8 7.1 18.4l1.1-5.5-4.1-3.8 5.5-.6z"/>',
  projects:'<rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/><rect x="13" y="13" width="7" height="7" rx="1"/>',
  achievements:'<circle cx="12" cy="9" r="5"/><path d="M9 13.5L7 21l5-2.5L17 21l-2-7.5"/>',
  documents:'<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/><path d="M9.5 12h5M9.5 15.5h5"/>',
  contact:'<rect x="3.5" y="5.5" width="17" height="13" rx="1.5"/><path d="M4 6.5l8 6.5 8-6.5"/>',
  more:'<circle cx="5" cy="12" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="19" cy="12" r="1.7"/>'
};

let lang="id";
try{lang=localStorage.getItem("satrio-portfolio-lang")||"id";}catch(e){}
function L(o){ if(typeof o!=="object"||o===null) return o||""; return o[lang]!=null ? o[lang] : (o.id||""); }

const content={
  profile:{
    name:"Satrio Muhardika",
    role:{id:"Pengembang Android Independen & Mahasiswa",en:"Independent Android Developer & Student"},
    tagline:{id:"Pengembang Android independen yang terbiasa membangun aplikasi langsung dari ponsel.",en:"An independent Android developer used to building apps straight from a phone."},
    intro:{id:"Deskripsi singkat akan ditambahkan di sini.",en:"A short description will be added here."}
  },
  about:{
    bio:{id:"Mahasiswa Akuntansi dengan latar belakang pendidikan Teknik Sepeda Motor, serta memiliki ketertarikan pada teknologi, pengembangan perangkat lunak, dan kecerdasan buatan. Senang mempelajari hal baru secara mandiri, membangun proyek dari ide hingga implementasi, dan mencari solusi untuk berbagai permasalahan melalui teknologi.",en:"An Accounting student with an educational background in Motorcycle Engineering, with a strong interest in technology, software development, and artificial intelligence. I enjoy learning new things independently, building projects from idea to implementation, and seeking solutions to various problems through technology."},
    education:{id:"Lulusan SMK Negeri 3 Tapung Hulu jurusan Teknik Sepeda Motor (2026), kini menempuh studi Akuntansi di Institut Mahaputra Indonesia (semester 1).",en:"Graduate of SMK Negeri 3 Tapung Hulu, Motorcycle Engineering major (2026); currently studying Accounting at Institut Mahaputra Indonesia (semester 1)."},
    interests:{id:"Tertarik dengan kecerdasan buatan (AI), khususnya large language model (LLM).",en:"Interested in artificial intelligence (AI), particularly large language models (LLMs)."}
  },
  career:[
    {title:"SDN 036 Tapung Hulu",period:{id:"Lulus 2020",en:"Graduated 2020"},desc:{id:"",en:""}},
    {title:"SMP Negeri 09 Tapung Hulu",period:{id:"Lulus 2023",en:"Graduated 2023"},desc:{id:"",en:""}},
    {title:"SMK Negeri 3 Tapung Hulu",period:{id:"Lulus 2026",en:"Graduated 2026"},desc:{id:"Jurusan Teknik Sepeda Motor (TSM). Aktif di OSIS, Seksi Tata Tertib Sekolah.",en:"Motorcycle Engineering major (TSM). Active in the student council (OSIS), School Discipline Division."}},
    {title:"Institut Mahaputra Indonesia (IMI)",period:{id:"2026 \u2014 sekarang",en:"2026 \u2014 present"},desc:{id:"Program studi Akuntansi, semester 1.",en:"Accounting program, semester 1."}}
  ],
  skills:[
    {group:{id:"Bahasa & Framework",en:"Languages & Frameworks"},items:["Kotlin","Jetpack Compose","Node.js"]},
    {group:{id:"Tools & Lingkungan Kerja",en:"Tools & Environment"},items:["Termux","AndroidIDE / ACS","Git"]},
    {group:{id:"Platform & Layanan AI",en:"Platforms & AI Services"},items:["Supabase","Groq","Gemini","Cerebras"]},
    {group:{id:"Akademik",en:"Academic"},items:["Akuntansi"]}
  ],
  projects:[
    {slug:"rkr",name:"Ruang Kerja Ringkas",tagline:"AI Study Companion",short:{id:"Aplikasi Android (Kotlin + Jetpack Compose) yang dibangun langsung di AndroidIDE/ACS, dengan editor teks native berbasis EditText dan Spannable.",en:"An Android app (Kotlin + Jetpack Compose) built entirely on AndroidIDE/ACS, with a native text editor based on EditText and Spannable."},tech:["Kotlin","Jetpack Compose","Android"],icon:"assets/icon-rkr.png",links:[{label:{id:"GitHub",en:"GitHub"},url:"https://github.com/S-Muhardika/AIStudyCompanion"}]},
    {slug:"pernah-di-sini",name:"Pernah di Sini",tagline:{id:"Website Kenangan Kelulusan",en:"Graduation Memory Website"},short:{id:"Buku kenangan digital untuk Angkatan 2026 SMK Negeri 3 Tapung Hulu: arsip 68 siswa, galeri foto, pesan kenangan, dan info sekolah. Awalnya memakai backend Supabase untuk menerima pesan dan foto, kini disederhanakan menjadi situs statis.",en:"A digital memory book for the SMK Negeri 3 Tapung Hulu Class of 2026: an archive of 68 students, a photo gallery, memory messages, and school info. It originally used a Supabase backend to collect messages and photos, now simplified into a static site."},tech:["Static Site"],links:[{label:{id:"GitHub",en:"GitHub"},url:"https://github.com/S-Muhardika/Buku-Kenangan"},{label:{id:"Situs Langsung",en:"Live Site"},url:"https://bukukenangan.vercel.app/"}]},
    {slug:"termux-toolkit",name:"Termux Toolkit",tagline:{id:"Shell Toolkit Modular",en:"Modular Shell Toolkit"},short:{id:"Toolkit shell untuk Termux yang disusun sebagai bagian-bagian .bashrc terpisah agar mudah dipelihara.",en:"A shell toolkit for Termux, organized into separate .bashrc parts for easy maintenance."},tech:["Shell","Termux"]},
    {slug:"william-bot",name:"William",tagline:{id:"AI Companion Bot Multi-Platform",en:"Multi-Platform AI Companion Bot"},short:{id:"Bot AI pendamping berbasis Discord dengan fitur obrolan, visi, pencarian multi-mesin, dan pengingat berbahasa alami. Saat ini masih berjalan di Termux, dengan rencana dipindahkan ke VPS atau serverless.",en:"A Discord-based AI companion bot with chat, vision, multi-engine search, and natural-language reminders. Currently still running on Termux, with plans to move to a VPS or serverless."},tech:["Node.js","Discord API","Gemini","Supabase"]},
    {slug:"flixbox",name:"FlixBox",tagline:{id:"Pemutar & Pengelola Video Lokal",en:"Local Video Library & Player"},short:{id:"Aplikasi Android untuk mengatur koleksi video lokal (Anime, Movie, Series, Live Action) dan memutarnya dengan ExoPlayer \u2014 bukan layanan streaming, murni berbasis file di penyimpanan perangkat. Masih dalam pengembangan.",en:"An Android app for organizing local video collections (Anime, Movies, Series, Live Action) and playing them with ExoPlayer \u2014 not a streaming service, purely based on files on the device's storage. Still in development."},tech:["Kotlin","Jetpack Compose","Media3 ExoPlayer","Material 3"],links:[{label:{id:"GitHub",en:"GitHub"},url:"https://github.com/S-Muhardika/flixbox"}]}
  ],
  achievements:[
    {title:{id:"Sertifikat Praktik Kerja Lapangan (PKL) \u2014 Ferry Motor",en:"Internship (PKL) Certificate \u2014 Ferry Motor"},period:{id:"10 Juli \u2013 15 November 2025",en:"July 10 \u2013 November 15, 2025"},desc:{id:"Magang sekolah (SMK jurusan Teknik Sepeda Motor) di bengkel Ferry Motor.",en:"School internship (SMK, Motorcycle Engineering major) at Ferry Motor workshop."}},
    {title:{id:"Peringkat Top 3 Ujian Sekolah",en:"Top 3 Rank, School Exams"},period:"2023 \u2013 2026",desc:{id:"Konsisten peringkat 1\u20133 dalam ujian sekolah dari kelas 1 SMK hingga lulus (SMK Negeri 3 Tapung Hulu, jurusan Teknik Sepeda Motor), dibuktikan dengan sertifikat.",en:"Consistently ranked 1st\u20133rd in school exams from first year through graduation (SMK Negeri 3 Tapung Hulu, Motorcycle Engineering major), backed by a certificate."}}
  ],
  documents:{cv:null,resume:null},
  contact:{email:"satriomuhardika211@gmail.com",whatsapp:"082288077891",github:"S-Muhardika",linkedin:null}
};

const T={
  id:{btn_projects:"Lihat Proyek",btn_cv:"Unduh CV",h_workway:"Cara Kerja",h_featured:"Proyek Pilihan",
      h_about:"Tentang Saya",h_edu:"Latar Belakang Pendidikan",h_interests:"Minat",
      empty_bio:"Riwayat diri akan diisi.",empty_edu:"Latar belakang pendidikan akan diisi.",empty_interests:"Minat akan diisi.",
      h_career:"Perjalanan Karier",empty_career:"Linimasa pendidikan dan pengalaman akan ditambahkan di sini.",
      h_skills:"Keahlian",skills_note:"Sebagian besar dikembangkan secara mandiri dengan bantuan asisten AI.",empty_skill:"Belum diisi.",
      h_projects:"Proyek & Portofolio",back_projects:"\u2190 Semua Proyek",notfound:"Proyek tidak ditemukan.",
      detail_empty:"Screenshot, tujuan, kontribusi, dan tautan sumber akan ditambahkan di sini.",
      detail_empty2:"Screenshot, tujuan, dan kontribusi akan ditambahkan di sini.",
      h_achievements:"Pencapaian & Sertifikat",empty_achievements:"Pencapaian dan sertifikat akan ditambahkan di sini.",
      h_documents:"Dokumen",cv_title:"Curriculum Vitae",resume_title:"Resume",
      cv_empty:"File CV (PDF) belum diunggah.",resume_empty:"File Resume (PDF) belum diunggah.",
      cv_btn:"Unduh CV (PDF)",resume_btn:"Unduh Resume (PDF)",
      h_contact:"Kontak",empty_contact:"Informasi kontak akan ditambahkan di sini.",
      work1_t:"Hybrid: Ponsel dan Laptop",work1_d:"Saat ini bekerja secara hybrid, kombinasi ponsel Android dan laptop. Sebelumnya sepenuhnya menggunakan layar ponsel.",
      work2_t:"Termux & AndroidIDE / ACS",work2_d:"Rangkaian alat utama untuk mengembangkan aplikasi Android: Termux untuk shell dan peralatan pendukung, AndroidIDE/ACS untuk menulis kode dan membangun aplikasi langsung dari perangkat seluler.",
      work3_t:"Dibantu AI",work3_d:"Menggunakan asisten AI untuk membantu penulisan kode, dengan pendekatan \u201cvibe coding\u201d \u2014 iteratif, hands-on, dan pragmatis.",
      theme_system:"Tema: Sistem",theme_light:"Tema: Terang",theme_dark:"Tema: Gelap",more:"Lainnya"
  },
  en:{btn_projects:"View Projects",btn_cv:"Download CV",h_workway:"How I Work",h_featured:"Featured Projects",
      h_about:"About Me",h_edu:"Educational Background",h_interests:"Interests",
      empty_bio:"Bio will be added here.",empty_edu:"Educational background will be added here.",empty_interests:"Interests will be added here.",
      h_career:"Career Journey",empty_career:"An education and experience timeline will be added here.",
      h_skills:"Skills",skills_note:"Mostly developed independently with the help of an AI assistant.",empty_skill:"Not filled in yet.",
      h_projects:"Projects & Portfolio",back_projects:"\u2190 All Projects",notfound:"Project not found.",
      detail_empty:"Screenshots, goals, contributions, and source links will be added here.",
      detail_empty2:"Screenshots, goals, and contributions will be added here.",
      h_achievements:"Achievements & Certificates",empty_achievements:"Achievements and certificates will be added here.",
      h_documents:"Documents",cv_title:"Curriculum Vitae",resume_title:"Resume",
      cv_empty:"CV file (PDF) hasn't been uploaded yet.",resume_empty:"Resume file (PDF) hasn't been uploaded yet.",
      cv_btn:"Download CV (PDF)",resume_btn:"Download Resume (PDF)",
      h_contact:"Contact",empty_contact:"Contact information will be added here.",
      work1_t:"Hybrid: Phone and Laptop",work1_d:"Currently working hybrid \u2014 a mix of an Android phone and a laptop. Previously entirely from a phone screen.",
      work2_t:"Termux & AndroidIDE / ACS",work2_d:"Main toolkit for Android development: Termux for shell and supporting tools, AndroidIDE/ACS for writing code and building apps straight from a mobile device.",
      work3_t:"AI-Assisted",work3_d:"Uses an AI assistant to help write code, with a \u201cvibe coding\u201d approach \u2014 iterative, hands-on, and pragmatic.",
      theme_system:"Theme: System",theme_light:"Theme: Light",theme_dark:"Theme: Dark",more:"More"
  }
};
function t(key){return (T[lang]&&T[lang][key])||T.id[key]||"";}

function esc(s){return (s||"").replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));}
function empty(msg){return `<div class="empty">${esc(msg)}</div>`;}

function viewHome(){
  const p=content.profile;
  const featured=content.projects.map(pr=>`<a class="card proj-card" href="#projects/${pr.slug}"><div class="proj-row">${pr.icon?`<img class="proj-icon" src="${pr.icon}" alt="">`:""}<div><h3>${esc(pr.name)}</h3><p class="muted" style="margin:0">${esc(L(pr.tagline))}</p></div></div></a>`).join("");
  const work=[[t("work1_t"),t("work1_d")],[t("work2_t"),t("work2_d")],[t("work3_t"),t("work3_d")]]
    .map(([ti,d])=>`<div class="card"><h3>${esc(ti)}</h3><p class="muted" style="margin:0">${esc(d)}</p></div>`).join("");
  return `<div class="hero-id">
    <img class="brand-logo for-light" alt="Logo S.Muhardika" src="assets/icon-light.png">
    <img class="brand-logo for-dark" alt="Logo S.Muhardika" src="assets/icon-dark.png">
    <div><strong>${esc(p.name)}</strong><br><span class="muted">${esc(L(p.role))}</span></div>
  </div>
  <h1>${esc(L(p.tagline))}</h1>
  <p class="lede">${esc(L(p.intro))}</p>
  <div class="stack-strip">${["Kotlin","Jetpack Compose","Node.js","Supabase"].map(s=>`<span class="chip">${esc(s)}</span>`).join("")}</div>
  <div class="hero-actions">
    <a class="btn btn-solid" href="#projects">${esc(t("btn_projects"))}</a>
    <a class="btn btn-outline" href="#documents">${esc(t("btn_cv"))}</a>
  </div>
  <img class="profile-photo" src="assets/profile.jpg" alt="Foto profil Satrio Muhardika">
  <h2 style="margin-top:28px">${esc(t("h_workway"))}</h2>
  <div class="work-grid">${work}</div>
  <h2 style="margin-top:48px">${esc(t("h_featured"))}</h2>
  <div class="feat-grid">${featured}</div>`;
}
function viewAbout(){
  const a=content.about;
  const bio=L(a.bio), edu=L(a.education), interests=L(a.interests);
  return `<h2>${esc(t("h_about"))}</h2>
  ${bio?`<p>${esc(bio)}</p>`:empty(t("empty_bio"))}
  <h3 style="margin-top:28px">${esc(t("h_edu"))}</h3>
  ${edu?`<p>${esc(edu)}</p>`:empty(t("empty_edu"))}
  <h3 style="margin-top:28px">${esc(t("h_interests"))}</h3>
  ${interests?`<p>${esc(interests)}</p>`:empty(t("empty_interests"))}`;
}
function viewCareer(){
  if(!content.career.length) return `<h2>${esc(t("h_career"))}</h2>${empty(t("empty_career"))}`;
  return `<h2>${esc(t("h_career"))}</h2>`+content.career.map(c=>`<div class="timeline-item"><h3>${esc(c.title)}</h3><p class="muted">${esc(L(c.period))}</p>${L(c.desc)?`<p>${esc(L(c.desc))}</p>`:""}</div>`).join("");
}
function viewSkills(){
  return `<h2>${esc(t("h_skills"))}</h2><p class="muted">${esc(t("skills_note"))}</p>`+content.skills.map(g=>`<div class="skill-group"><h3>${esc(L(g.group))}</h3>${g.items.length?`<div class="skill-items">${g.items.map(i=>`<span class="chip">${esc(i)}</span>`).join("")}</div>`:empty(t("empty_skill"))}</div>`).join("");
}
function viewProjects(){
  return `<h2>${esc(t("h_projects"))}</h2>`+content.projects.map(pr=>`<a class="card proj-card" href="#projects/${pr.slug}"><div class="proj-row">${pr.icon?`<img class="proj-icon" src="${pr.icon}" alt="">`:""}<div><h3>${esc(pr.name)}</h3><p class="muted" style="margin:0 0 8px">${esc(L(pr.tagline))}</p><p style="margin:0">${esc(L(pr.short))}</p><div>${pr.tech.map(tg=>`<span class="tag">${esc(tg)}</span>`).join("")}</div></div></div></a>`).join("");
}
function viewProjectDetail(slug){
  const pr=content.projects.find(p=>p.slug===slug);
  if(!pr) return `<a class="back-link" href="#projects">${esc(t("back_projects"))}</a>${empty(t("notfound"))}`;
  return `<a class="back-link" href="#projects">${esc(t("back_projects"))}</a>
  <div class="proj-row">${pr.icon?`<img class="proj-icon proj-icon-lg" src="${pr.icon}" alt="">`:""}<div>
  <h2 style="margin:0 0 4px">${esc(pr.name)}</h2>
  <p class="muted" style="margin:0">${esc(L(pr.tagline))}</p>
  </div></div>
  <p style="margin-top:16px">${esc(L(pr.short))}</p>
  <div style="margin:14px 0 22px">${pr.tech.map(tg=>`<span class="tag">${esc(tg)}</span>`).join("")}</div>
  ${pr.links&&pr.links.length?`<div class="hero-actions" style="margin-bottom:18px">${pr.links.map(l=>`<a class="btn btn-outline" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(L(l.label))}</a>`).join("")}</div>`:""}
  ${empty(pr.links&&pr.links.length?t("detail_empty2"):t("detail_empty"))}`;
}
function viewAchievements(){
  if(!content.achievements.length) return `<h2>${esc(t("h_achievements"))}</h2>${empty(t("empty_achievements"))}`;
  return `<h2>${esc(t("h_achievements"))}</h2>`+content.achievements.map(a=>`<div class="card"><h3>${esc(L(a.title))}</h3><p class="muted">${esc(L(a.period))}</p>${L(a.desc)?`<p>${esc(L(a.desc))}</p>`:""}</div>`).join("");
}
function viewDocuments(){
  const d=content.documents;
  return `<h2>${esc(t("h_documents"))}</h2>
  <div class="card">
    <h3>${esc(t("cv_title"))}</h3>
    ${d.cv?`<a class="btn btn-solid" href="${d.cv}">${esc(t("cv_btn"))}</a>`:empty(t("cv_empty"))}
  </div>
  <div class="card">
    <h3>${esc(t("resume_title"))}</h3>
    ${d.resume?`<a class="btn btn-solid" href="${d.resume}">${esc(t("resume_btn"))}</a>`:empty(t("resume_empty"))}
  </div>`;
}
function buildFooter(){
  const c=content.contact;
  const toUrl=(base,val)=>val.startsWith("http")?val:base+val;
  const rows=[];
  if(c.email) rows.push(["Email","mailto:"+c.email]);
  if(c.whatsapp) rows.push(["WhatsApp","https://wa.me/"+c.whatsapp.replace(/\D/g,"").replace(/^0/,"62")]);
  if(c.github) rows.push(["GitHub",toUrl("https://github.com/",c.github)]);
  if(c.linkedin) rows.push(["LinkedIn",toUrl("https://linkedin.com/in/",c.linkedin)]);
  const el=document.getElementById("footerContact");
  if(el) el.innerHTML=rows.map(r=>`<a href="${esc(r[1])}" target="_blank" rel="noopener">${esc(r[0])}</a>`).join("");
}

function render(){
  let hash=(location.hash||"#home").slice(1);
  const app=document.getElementById("app");
  app.style.animation="none";void app.offsetHeight;app.style.animation="";
  if(hash.startsWith("projects/")) app.innerHTML=viewProjectDetail(hash.split("/")[1]);
  else if(hash==="home") app.innerHTML=viewHome();
  else if(hash==="about") app.innerHTML=viewAbout();
  else if(hash==="career") app.innerHTML=viewCareer();
  else if(hash==="skills") app.innerHTML=viewSkills();
  else if(hash==="projects") app.innerHTML=viewProjects();
  else if(hash==="achievements") app.innerHTML=viewAchievements();
  else if(hash==="documents") app.innerHTML=viewDocuments();
  else app.innerHTML=viewHome();
  const topHash=hash.split("/")[0];
  const isMore=MORE.some(([h])=>h===topHash);
  document.querySelectorAll("#bottomNav a[data-key]").forEach(a=>{
    a.classList.toggle("active", isMore ? a.dataset.key==="more" : a.dataset.key===topHash);
  });
  moveIndicator();
  window.scrollTo(0,0);
}

let navEl,indicatorEl,sheetEl,firstPlacement=true;
function moveIndicator(item){
  if(!navEl||!indicatorEl) return;
  const target=item||navEl.querySelector("a.active")||navEl.querySelector("a");
  if(!target) return;
  const place=()=>{
    const navRect=navEl.getBoundingClientRect();
    const r=target.getBoundingClientRect();
    indicatorEl.style.width=r.width+"px";
    indicatorEl.style.transform=`translateX(${r.left-navRect.left}px)`;
  };
  if(firstPlacement){indicatorEl.style.transition="none";place();void indicatorEl.offsetWidth;indicatorEl.style.transition="";firstPlacement=false;return;}
  place();
}
function openSheet(){sheetEl.classList.add("open");}
function closeSheet(){sheetEl.classList.remove("open");}

function buildNav(){
  navEl=document.getElementById("bottomNav");
  const iconBtn=(h,l)=>`<a href="#${h}" data-key="${h}" title="${esc(L(l))}" aria-label="${esc(L(l))}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[h]}</svg><span class="label">${esc(L(l))}</span></a>`;
  const primary=NAV.map(([h,l])=>iconBtn(h,l)).join("");
  const moreBtn=`<a href="#more" data-key="more" title="${esc(t("more"))}" aria-label="${esc(t("more"))}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS.more}</svg><span class="label">${esc(t("more"))}</span></a>`;
  navEl.innerHTML=`<div class="nav-indicator"></div>`+primary+moreBtn;
  indicatorEl=navEl.querySelector(".nav-indicator");

  const sheetItem=(h,l)=>`<a href="#${h}" data-key="${h}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[h]}</svg><span>${esc(L(l))}</span></a>`;
  if(sheetEl) sheetEl.remove();
  document.body.insertAdjacentHTML("beforeend",`<div id="moreSheet" class="sheet-backdrop"><div class="sheet">${MORE.map(([h,l])=>sheetItem(h,l)).join("")}</div></div>`);
  sheetEl=document.getElementById("moreSheet");
  sheetEl.addEventListener("click",e=>{if(e.target===sheetEl||e.target.closest("a")) closeSheet();});

  let dragging=false,target=null;
  const itemAtX=x=>{
    const items=[...navEl.querySelectorAll("a")];
    let closest=null,dist=Infinity;
    for(const it of items){
      const r=it.getBoundingClientRect();
      if(x>=r.left && x<=r.right) return it;
      const d=x<r.left?r.left-x:x-r.right;
      if(d<dist){dist=d;closest=it;}
    }
    return closest;
  };
  navEl.addEventListener("pointerdown",e=>{
    const item=e.target.closest("a");
    if(!item) return;
    e.preventDefault();
    dragging=true;target=item;
    try{navEl.setPointerCapture(e.pointerId);}catch(err){}
    item.classList.add("scrub");
    moveIndicator(item);
  });
  navEl.addEventListener("pointermove",e=>{
    if(!dragging) return;
    const item=itemAtX(e.clientX);
    if(item && item!==target){
      target.classList.remove("scrub");
      target=item;
      target.classList.add("scrub");
      moveIndicator(item);
    }
  });
  function release(){
    if(!dragging) return;
    dragging=false;
    if(target){
      target.classList.remove("scrub");
      if(target.dataset.key==="more") openSheet();
      else location.hash="#"+target.dataset.key;
    }
    target=null;
    moveIndicator();
  }
  navEl.addEventListener("pointerup",release);
  navEl.addEventListener("pointercancel",()=>{dragging=false;if(target)target.classList.remove("scrub");target=null;moveIndicator();});
  navEl.addEventListener("click",e=>{
    const item=e.target.closest("a");
    if(!item) return;
    if(e.detail===0){ if(item.dataset.key==="more"){e.preventDefault();openSheet();} }
    else e.preventDefault();
  });
  window.addEventListener("resize",()=>moveIndicator());
}

const THEME_KEY="satrio-portfolio-theme";
const THEME_ICON={system:"\u25D1",light:"\u2600",dark:"\u263D"};
function themeLabel(mode){return mode==="light"?t("theme_light"):mode==="dark"?t("theme_dark"):t("theme_system");}
function applyTheme(mode){
  if(mode==="system") document.documentElement.removeAttribute("data-theme");
  else document.documentElement.setAttribute("data-theme",mode);
  const btn=document.getElementById("themeBtn");
  if(btn){btn.textContent=THEME_ICON[mode];btn.setAttribute("aria-label",themeLabel(mode));btn.title=themeLabel(mode);}
}
function currentTheme(){let m="system";try{m=localStorage.getItem(THEME_KEY)||"system";}catch(e){} return m;}
function initTheme(){applyTheme(currentTheme());}
function cycleTheme(){
  let mode=currentTheme();
  mode = mode==="system" ? "light" : mode==="light" ? "dark" : "system";
  try{localStorage.setItem(THEME_KEY,mode);}catch(e){}
  applyTheme(mode);
}

const LANG_KEY="satrio-portfolio-lang";
function setLang(l){
  lang=l;
  try{localStorage.setItem(LANG_KEY,l);}catch(e){}
  document.documentElement.setAttribute("lang",l);
  buildNav();
  applyTheme(currentTheme());
  render();
}
function initLangSwitcher(){
  const sel=document.getElementById("langSel");
  if(sel) sel.value=lang;
  if(sel) sel.addEventListener("change",e=>setLang(e.target.value));
  document.documentElement.setAttribute("lang",lang);
}

buildNav();
buildFooter();
initTheme();
initLangSwitcher();
document.getElementById("themeBtn").addEventListener("click",cycleTheme);
window.addEventListener("hashchange",render);
document.getElementById("yr").textContent=new Date().getFullYear();
render();
