// Single source of truth for site copy that is reused across pages.
// Page-specific copy lives inline in each page file.

import cchlPhoto from "@assets/CCHL.webp";
import misaPhoto from "@assets/MISA.webp";
import quangVinhPhoto from "@assets/Gom Quang Vinh.webp";
import hexagonPhoto from "@assets/Hexagon.webp";
import kalotoysPhoto from "@assets/Kalotoys.jpg";
import saoThaiDuongPhoto from "@assets/Sao Thai Duong.webp";
import markDuvalPhoto from "@assets/Mark Duval Profile.jpg";
import hectorPhoto from "@assets/1-Hector Quintanar.jpg";
import ahmedPhoto from "@assets/Ahmed.jpeg";
import minhPhoto from "@assets/Minh Mac Profile.png";
import tungPhoto from "@assets/Tung Cao Photo.png";
import tuPhoto from "@assets/Tu Mac Photo.jpg";
import accessVietnamPhoto from "@assets/Access VN 2026.jpeg";
import vietnamDirectPhoto from "@assets/IMG_9596.jpg";
import socialPress1 from "@assets/press/Social Press 1.jpg";
import socialPress2 from "@assets/press/Social Press 2.jpeg";
import socialPress3 from "@assets/press/Social Press 3.webp";
import socialPress4 from "@assets/press/Social Press 4.jpg";
import businessPress1 from "@assets/press/Business Press 1.jpg";
import businessPress2 from "@assets/press/Business Press 2.jpg";
import businessPress3 from "@assets/press/Business Press 3.jpg";
// Ecosystem logos, redrawn as white marks on transparent so they read on the
// dark orbit nodes. Sources are the supplied logos on white.
import logo100b from "@assets/logo-100b-mono.png";
import logoContainerClub from "@assets/logo-container-club-mono.png";
import logoZad from "@assets/logo-zad-mono.png";
import logoBond from "@assets/logo-bond-mono.png";
import logo100bold from "@assets/logo-100bold-mono.png";

export const CONTACT_EMAIL = "global@100b.co";

export type NavLink = {
  name: string;
  nameVi: string;
  path: string;
  descriptor: string;
};

export const navLinks: NavLink[] = [
  {
    name: "Go Global",
    nameVi: "Go Global",
    path: "/go-global",
    descriptor: "For Vietnamese brands entering the US",
  },
  {
    name: "Enter Vietnam",
    nameVi: "Vào Việt Nam",
    path: "/enter-vietnam",
    descriptor: "For companies, funds, and organizations coming in",
  },
  {
    name: "Container Club",
    nameVi: "Container Club",
    path: "/container-club",
    descriptor: "Sourcing, factories, and the trade network",
  },
  {
    name: "Ecosystem",
    nameVi: "Hệ Sinh Thái",
    path: "/ecosystem",
    descriptor: "The five companies",
  },
  {
    name: "About",
    nameVi: "Về Chúng Tôi",
    path: "/about",
    descriptor: "Who we are",
  },
];

export const footerLinks = [
  ...navLinks.map((l) => ({ name: l.name, path: l.path })),
  { name: "Communities", path: "/communities" },
];

export type Testimonial = {
  /** Gold display line above the quote. Falls back to the company name. */
  headline?: string;
  quote: string;
  name: string;
  /** Role, shown as "TITLE · COMPANY". */
  title?: string;
  company: string;
  /** One credential line under the signature. */
  credential: string;
  photo: string | null;
  /** object-position for the portrait when a centred crop cuts the subject. */
  photoPosition?: string;
};

// The client quotes, verbatim from the previous site. Used by the carousel
// on Home and the wall on Go Global.
export const founderTestimonials: Testimonial[] = [
  {
    headline: "VIETNAMESE SPIRIT, GLOBAL ASPIRATION",
    quote:
      "When we started in 2017 with only ~3,500 USD, we never imagined selling millions of products—let alone dreaming about going global. But meeting Minh and 100B gave us courage. We dared to leave our comfort zone and dream bigger. I truly believe: TOGETHER, with 100B, we'll empower more Vietnamese brands to succeed globally.",
    name: "Sandy Phuong Nguyen",
    title: "FOUNDER",
    company: "CỎ CÂY HOA LÁ",
    credential: "Rising Vietnamese wellness brand, 4.3 million products sold in 6 years",
    photo: cchlPhoto.src,
  },
  {
    headline: "ELEVATING VIETNAM'S GLOBAL VALUE",
    quote:
      "Congratulations to Minh and the 100B team for their outstanding work in bringing Vietnamese brands and products to the global market. Your efforts are helping elevate the value of Vietnam in the eyes of the world and driving the country's development.",
    name: "Long Lu",
    title: "FOUNDER",
    company: "MISA",
    credential: "Leading accounting software company, 80%+ market share",
    photo: misaPhoto.src,
  },
  {
    headline: "A LAUNCHPAD TO GLOBAL MARKETS",
    quote:
      "Huge thanks to 100B for helping Quang Vinh Ceramics see the world with a new perspective—alongside a strong and global-minded community of Vietnamese entrepreneurs. 100B has been a launchpad and a support system, opening opportunities for our manufacturing team to access global markets.",
    name: "Vinh Ha",
    title: "FOUNDER",
    company: "QUANG VINH CERAMICS",
    credential: "Heritage ceramics maker, exporting to 20+ countries",
    photo: quangVinhPhoto.src,
  },
  {
    headline: "ALIGNMENT IN VISION AND VALUES",
    quote:
      "It's been a joy working with 100B. The direction and vision of 100B deeply aligns with Hexagon's values. We're excited for this partnership and the connections it brings.",
    name: "Thang Luu",
    title: "CO-FOUNDER",
    company: "HEXAGON",
    credential: "Top interior firm with 4 factories and 5,000+ completed projects",
    photo: hexagonPhoto.src,
  },
  {
    headline: "STEPPING ONTO THE GLOBAL STAGE",
    quote:
      "Born from the love of two fathers, Kalotoys has touched the hearts of millions of children and parents around the world. With 100B as a launchpad, we hope Kalotoys—and millions of other Vietnamese brands—can win the trust of global customers.",
    name: "Thanh Dong",
    title: "CO-FOUNDER",
    company: "KALOTOYS",
    credential: "Rising toy brand, 8,000+ orders/day, 98% export revenue",
    photo: kalotoysPhoto.src,
  },
  {
    headline: "AN INSPIRING & IMPACTFUL MISSION",
    quote:
      "Congratulations to 100B on such an inspiring and impactful mission for Vietnam's economic future.",
    name: "Nguyen Thi Huong Lien",
    title: "CO-FOUNDER",
    company: "SAO THÁI DƯƠNG",
    credential: "Herbal care pioneer, 240M+ products sold worldwide",
    photo: saoThaiDuongPhoto.src,
  },
];

export const partnerTestimonials: Testimonial[] = [
  {
    headline: "WHAT YOU'RE DOING IS BRILLIANT",
    quote:
      "100B plays that bridge — helping Americans understand Vietnam and Vietnamese entrepreneurs penetrate the U.S. market. What you're doing is brilliant.",
    name: "Mark Duval",
    title: "CEO",
    company: "GREATER AUSTIN ASIAN CHAMBER OF COMMERCE",
    credential: "",
    photo: markDuvalPhoto.src,
    photoPosition: "30% center",
  },
  {
    headline: "THAT IS AN AWESOME JOB",
    quote:
      "100B can really guide companies to not fail — to shorten the learning curve. That is an awesome job.",
    name: "Hector Quintanar",
    title: "MANAGING PARTNER",
    company: "TRADE MANAGEMENT SOLUTIONS",
    credential: "",
    photo: hectorPhoto.src,
  },
  {
    headline: "THE CONNECTIONS WERE OUTSTANDING",
    quote:
      "The trip was fantastic — the connections we made were outstanding. 100B is very well positioned to help.",
    name: "Ahmed Moledina",
    title: "PRESIDENT & CEO",
    company: "SOAL TECHNOLOGIES",
    credential: "",
    photo: ahmedPhoto.src,
  },
];

export const delegateTestimonials: Testimonial[] = [
  {
    quote:
      "If you're investing in Vietnam, you want Vietnamese partners who can help you navigate it.",
    name: "Marc Knapper",
    company: "Former US Ambassador to Vietnam",
    credential: "",
    photo: null,
  },
  {
    quote:
      "Start with business development to find customers, then co-production, then full US production.",
    name: "Michael Nguyen",
    title: "MANAGING DIRECTOR",
    company: "Boeing Vietnam",
    credential: "",
    photo: null,
  },
  {
    quote: "Three words. Inspiring. Productive. Mission accomplished.",
    name: "Barbara Joe",
    company: "Asian Chamber of Commerce Houston",
    credential: "",
    photo: null,
  },
];

export type Company = {
  name: string;
  role: string;
  line: string;
  detail?: string;
  links: { label: string; href: string; external?: boolean }[];
  accent: string; // brand colour used on Ecosystem cards
  /** White-on-transparent mark for the orbit node. Falls back to the wordmark. */
  logo?: string | null;
};

export const companies: Company[] = [
  {
    name: "100B",
    role: "Strategic advisory",
    line: "Vietnamese brands $20-100M. Companies entering Vietnam.",
    detail:
      "Vietnamese brands at $20-100M going global. Companies entering Vietnam. Equity, 3-20%.",
    links: [
      { label: "Go Global", href: "/go-global" },
      { label: "Enter Vietnam", href: "/enter-vietnam" },
    ],
    accent: "#C3A374",
    logo: logo100b.src,
  },
  {
    name: "Container Club",
    role: "Trade",
    line: "Sourcing, factories, logistics, network.",
    detail:
      "Sourcing, vetting, QC, freight, network. 3-5% commission. Led by Tung Cao and Tu Mac.",
    links: [{ label: "Container Club", href: "/container-club" }],
    accent: "#8FA3B8",
    logo: logoContainerClub.src,
  },
  {
    name: "ZAD",
    role: "Brand identity",
    line: "1,000+ projects. Google, Viettel, Coc Coc.",
    detail:
      "Do It Right. Once. 1,000+ projects, 20+ people, 10 years. Google, Viettel Academy, Coc Coc, VAECO, Eva de Eva, Magonn, Hagoo. Founded by Hai Nguyen.",
    links: [{ label: "zadagency.co", href: "https://zadagency.co", external: true }],
    accent: "#E4572E",
    logo: logoZad.src,
  },
  {
    name: "100Bold",
    role: "US marketing",
    line: "Brands at $5M to $100M.",
    detail: "Full-stack, for brands at $5M to $100M.",
    links: [{ label: "100bold.co", href: "https://100bold.co", external: true }],
    accent: "#F2F2F2",
    logo: logo100bold.src,
  },
  {
    name: "BOND",
    role: "Gifting and packaging",
    line: "Where relationships compound.",
    detail: "Where relationships compound.",
    links: [{ label: "bond.gift", href: "https://bond.gift", external: true }],
    accent: "#7A5C3E",
    logo: logoBond.src,
  },
];

export type Founder = {
  name: string;
  title: string;
  short: string;
  long: string;
  photo: string | null;
  linkedin?: string;
};

export const founders: Founder[] = [
  {
    name: "Minh Mac",
    title: "Founder & CEO",
    photo: minhPhoto.src,
    linkedin: "https://www.linkedin.com/in/minhlaunch/",
    short:
      "Left Vietnam at 17. Private equity covering a $65B portfolio. Co-founded a Southeast Asian tech company that reached 1.6 million users.",
    long:
      "Left Vietnam at 17 and spent a decade building in the US. Private equity covering a $65B portfolio. Co-founded a Southeast Asian tech company that reached 1.6 million users. Built a creative agency after being failed by too many marketing vendors.",
  },
  {
    name: "Tung Cao",
    title: "Co-Founder & Head of International Trade",
    photo: tungPhoto.src,
    linkedin: "https://www.linkedin.com/in/tungcao-thomas/",
    short:
      "Runs the trade side. Buyers, freight, customs, and the network that moves goods.",
    long:
      "Leads Container Club. Buyers, freight, customs, trade finance, and the network that moves goods.",
  },
  {
    name: "Tu Mac",
    title: "Co-Founder & Head of Factory Ops",
    photo: tuPhoto.src,
    linkedin: "https://www.linkedin.com/in/tu-mac-6b45a215b/",
    short:
      "Construction and interior materials. Factory vetting and quality control on the ground.",
    long:
      "Construction and interior materials. Factory vetting, quality control, and production oversight in Vietnam. Every factory a buyer visits, he has already been to.",
  },
];

export type PressItem = {
  outlet: string;
  headline: string;
  description: string;
  link: string;
  image: string | null;
};

// Press / media coverage. Drop files into `attached_assets/press/` and wire
// them up via the `image` field. When `image` is null the card falls back to
// a gradient tile so the layout never breaks.
export const pressItems: PressItem[] = [
  {
    outlet: "Ministry of Foreign Affairs",
    headline:
      "Vietnamese diaspora business delegation received at Vietnam's Ministry of Foreign Affairs",
    description:
      "Deputy Minister Le Thi Thu Hang welcomed a delegation of overseas Vietnamese business leaders to deepen cross-border investment ties and strengthen institutional bridges with the homeland.",
    link: "https://scov.gov.vn/cong-tac-ve-nvnonn/tin-tuc/thu-truong-le-thi-thu-hang-tiep-dai-dien-hiep-hoi-doanh-nhan-viet-nam-o-nuoc-ngoai.html",
    image: socialPress1.src,
  },
  {
    outlet: "Ministry of Culture, Sports and Tourism",
    headline: "Carrying Vietnamese identity onto the global stage",
    description:
      "A national event recognized the next generation of overseas Vietnamese entrepreneurs as cultural ambassadors and a strategic bridge between the homeland and global markets.",
    link: "https://www.vietnam.vn/ngay-quoc-to-viet-nam-toan-cau-va-chuyen-cua-nhung-nguoi-con-xa-xu",
    image: socialPress2.src,
  },
  {
    outlet: "Vietnam Real Estate Association",
    headline:
      "Three associations align across real estate, tourism and overseas business",
    description:
      "Leadership from VNREA, VITA and the global Vietnamese business community convened in Hanoi to coordinate cross-sector capital flows between Vietnam and its diaspora.",
    link: "https://vnrea.vn/gap-mat-tan-xuan-giua-ba-hiep-hoi-vnrea-vita-va-baoov-20240229112855902.html",
    image: socialPress3.src,
  },
  {
    outlet: "Vietnam Public Affairs",
    headline:
      "21 solidarity homes delivered to families in Vietnam's Northwest provinces",
    description:
      "In partnership with the Vietnam Fatherland Front, the global Vietnamese business community channeled philanthropic capital to support underserved households in Dien Bien.",
    link: "https://m.mattran.org.vn/hoat-dong/hiep-hoi-doanh-nhan-viet-nam-o-nuoc-ngoai-trao-tang-21-can-nha-dai-doan-ket-cho-ho-ngheo-cua-tinh-dien-bien-va-cac-tinh-tay-bac-54522.html",
    image: socialPress4.src,
  },
  {
    outlet: "Vietnam News Agency",
    headline: "Positioning Vietnamese brands on international media",
    description:
      "A national symposium in Ho Chi Minh City explored how to elevate Vietnamese companies onto global media platforms, a strategic priority for the next wave of cross-border deals.",
    link: "https://baotintuc.vn/kinh-te/dinh-vi-thuong-hieu-doanh-nghiep-viet-tren-truyen-thong-quoc-te-20240127214011094.htm",
    image: businessPress1.src,
  },
  {
    outlet: "Vietnam Chamber of Commerce and Industry",
    headline:
      "Overseas Vietnamese entrepreneurs pledge investment in national development",
    description:
      "Diaspora business leaders committed to deeper collaboration and capital partnership to support Vietnam's growth, signaling a new chapter for cross-border investment.",
    link: "https://vccidanang.com.vn/tin-tuc/kieu-bao-doanh-nhan-viet-mong-gop-suc-phat-trien-dat-nuoc/",
    image: businessPress2.src,
  },
  {
    outlet: "Industry & Trade Journal",
    headline: "Strong products come first: experts on building global Vietnamese brands",
    description:
      "At a Ho Chi Minh City symposium, industry leaders agreed that operational excellence is the foundation of effective communication and lasting global positioning.",
    link: "https://congthuong.vn/doanh-nghiep-muon-truyen-thong-hieu-qua-truoc-het-can-co-san-pham-tot-300633.html",
    image: businessPress3.src,
  },
];

export const communities = [
  {
    name: "Founders and brand owners",
    line: "Vietnamese founders taking brands out",
  },
  {
    name: "Factory owners",
    line: "Manufacturers building past contract work",
  },
  {
    name: "Trade professionals",
    line: "Freight, customs, 3PL, trade finance",
  },
  {
    name: "Sellers and partners",
    line: "People who sell what our companies make",
  },
];

export const programs = [
  {
    // Delegation group shot, Hanoi, June 2026.
    image: accessVietnamPhoto.src as string | null,
    name: "Access Vietnam",
    when: "June 2026",
    where: "Hanoi and Ho Chi Minh City",
    line: "18 delegates. Government officials and business leaders into Vietnam's ministries, innovation centers, and funds. Organized with the Greater Austin Asian Chamber of Commerce.",
    href: "/enter-vietnam",
    cta: "Enter Vietnam",
    site: "https://austin2vietnam.100b.co/",
  },
  {
    // Factory welcome, Vietnam Direct 2026.
    image: vietnamDirectPhoto.src as string | null,
    name: "Vietnam Direct",
    when: "May-June 2026",
    where: "Ho Chi Minh City to Hanoi",
    line: "13 vetted factories in construction and finishing materials, for buyers sourcing direct.",
    href: "/container-club",
    cta: "Container Club",
    site: "https://vietnamdirect2026factory.100b.co/",
  },
];
