import minhPhoto from "@assets/Minh Mac Profile.png";
import type { Dict } from "../locale";

const t = (en: string, vi: string): Dict<string> => ({ en, vi });

/**
 * A leader's own page. One template, one person per slug, so the next
 * founder is a new entry here rather than a new page.
 *
 * The lists are deliberately short. This is a profile, not a CV: the long
 * form of any of it belongs on LinkedIn, which every page links to.
 */
export type Person = {
  slug: string;
  /** The name is the same in both languages apart from its diacritics. */
  name: Dict<string>;
  title: Dict<string>;
  company: string;
  email: string;
  linkedin?: string;
  photo: string;
  /** Where the head sits once the square frame is cropped to a tall one. */
  photoPosition?: string;
  meta: { title: Dict<string>; description: Dict<string> };
  /** One or two short paragraphs: the road here, then the work now. */
  intro: Dict<string>[];
  /** Organisations and ventures, not clients of clients. */
  workedWith: Dict<string>[];
  expertIn: Dict<string>[];
  wantsYouToKnow: Dict<string>[];
};

export const peopleCopy = {
  labels: {
    workedWith: t("Has worked with:", "Đã làm việc cùng:"),
    expertIn: t("Is an expert in:", "Chuyên sâu về:"),
    wantsYouToKnow: t("Wants you to know:", "Một vài điều về anh:"),
    email: t("Email", "Email"),
    linkedin: t("LinkedIn", "LinkedIn"),
    back: t("All of 100B", "Về trang giới thiệu"),
  },
  contact: {
    titleLead: t("Want to talk", "Muốn trao đổi"),
    titleAccent: t("to Minh?", "cùng Minh?"),
    meta: t("Hanoi · Austin, Texas", "Hà Nội · Austin, Texas"),
  },
};

const minhMac: Person = {
  slug: "minh-mac",
  name: t("Minh Mac", "Minh Mạc"),
  title: t("Founder & Chief Executive Officer", "Nhà sáng lập & Tổng giám đốc"),
  company: "100B",
  email: "global@100b.co",
  linkedin: "https://www.linkedin.com/in/minhlaunch/",
  photo: minhPhoto.src,
  /* The source frame is square. Cropped to a tall panel it holds the head
     near the top third, which is where this puts it. */
  photoPosition: "50% 22%",
  meta: {
    title: t("Minh Mac, Founder & CEO", "Minh Mạc, Nhà sáng lập & CEO"),
    description: t(
      "Minh Mac founded 100B, the two-way gateway between Vietnamese brands going global and global capital coming into Vietnam. Private equity at Neuberger Berman, then an operator: 1.6 million users in ten months, 36 cafés in four and a half.",
      "Minh Mạc là nhà sáng lập 100B, cầu nối hai chiều giữa thương hiệu Việt ra thế giới và dòng vốn quốc tế vào Việt Nam. Từ private equity tại Neuberger Berman đến người trực tiếp xây: 1,6 triệu người dùng trong mười tháng, 36 quán cà phê trong bốn tháng rưỡi.",
    ),
  },
  intro: [
    t(
      "Minh left Vietnam for the United States alone at seventeen. A Finance valedictorian at Kansas State University, he spent four years in private equity at Neuberger Berman, a leading global investment firm, before becoming an entrepreneur. He co-founded LocaMos, a marketing technology platform that reached 1.6 million users in ten months, and helped grow a café chain to 36 locations across 17 provinces in just four and a half months.",
      "Minh rời Việt Nam sang Mỹ một mình năm 17 tuổi. Tốt nghiệp thủ khoa đầu ra ngành Tài chính tại Đại học Kansas State, anh có bốn năm làm private equity tại Neuberger Berman, một công ty đầu tư hàng đầu thế giới, trước khi chuyển sang khởi nghiệp. Anh đồng sáng lập LocaMos, nền tảng marketing công nghệ đạt 1,6 triệu người dùng trong mười tháng, và góp phần đưa một chuỗi cà phê lên 36 điểm bán tại 17 tỉnh thành chỉ trong bốn tháng rưỡi.",
    ),
    t(
      "Today, Minh leads 100B from Hanoi and Austin, helping Vietnamese brands expand internationally and global businesses enter Vietnam. He brings an investor\u2019s discipline, a founder\u2019s practical experience and a personal understanding of both markets. Through 100B\u2019s equity partnerships in the US, he puts that experience behind a shared commitment: to succeed alongside the businesses he helps build.",
      "Hiện Minh dẫn dắt 100B từ Hà Nội và Austin, đồng hành cùng thương hiệu Việt vươn ra quốc tế và doanh nghiệp toàn cầu bước vào Việt Nam. Anh mang theo tính kỷ luật của một nhà đầu tư, trải nghiệm thực chiến của một người sáng lập, và sự am hiểu của người đã sống ở cả hai thị trường. Qua mô hình hợp tác cổ phần tại Mỹ, anh đặt toàn bộ kinh nghiệm đó sau một cam kết chung: chỉ thành công cùng những doanh nghiệp mình góp phần dựng lên.",
    ),
  ],
  workedWith: [
    t("Neuberger Berman", "Neuberger Berman"),
    t("Kansas State University Foundation", "Quỹ Đại học Kansas State"),
    t("Greater Austin Asian Chamber of Commerce", "Phòng Thương mại châu Á Greater Austin"),
    t("AREAA", "AREAA"),
    t("Ministry of Science and Technology", "Bộ Khoa học và Công nghệ"),
    t("Techfest Vietnam", "Techfest Việt Nam"),
    t("LocaMos", "LocaMos"),
    t("Loca Cafe", "Loca Cafe"),
  ],
  expertIn: [
    t(
      "Cross-border market entry, Vietnam and the United States, in both directions",
      "Mở thị trường hai chiều giữa Việt Nam và Mỹ",
    ),
    t(
      "Private equity due diligence, valuation and fundraising",
      "Thẩm định, định giá và gọi vốn trong private equity",
    ),
    t(
      "Taking an operating company from zero to scale",
      "Đưa một doanh nghiệp từ con số không đến quy mô lớn",
    ),
    t(
      "Brand and demand generation for US businesses",
      "Xây thương hiệu và tạo nhu cầu cho doanh nghiệp tại Mỹ",
    ),
  ],
  wantsYouToKnow: [
    t(
      "Graduated valedictorian in Finance at Kansas State University, and was the first international student in 53 years to give the business school's commencement address",
      "Tốt nghiệp thủ khoa đầu ra ngành Tài chính, Đại học Kansas State, và là sinh viên quốc tế đầu tiên sau 53 năm được chọn phát biểu tại lễ tốt nghiệp của trường kinh doanh",
    ),
    t(
      "Board member at AREAA, a US real estate association with 40+ chapters and 20,000 members",
      "Thành viên hội đồng AREAA, hiệp hội bất động sản Mỹ với hơn 40 chi hội và 20.000 thành viên",
    ),
    t(
      "Brought Techfest Vietnam to the United States for the first time, as an advisor to the Ministry of Science and Technology",
      "Lần đầu tiên đưa Techfest Việt Nam sang Mỹ, trên cương vị cố vấn của Bộ Khoa học và Công nghệ",
    ),
    t(
      "One winter he drove 39 days across the American West with no plan and no hotels. Every night but one he stayed with a stranger, and some are still friends.",
      "Một mùa đông anh lái xe 39 ngày xuyên miền Tây nước Mỹ, không kế hoạch, không đặt khách sạn. Gần như đêm nào anh cũng ở nhà một người lạ, và nhiều người trong số đó giờ vẫn là bạn.",
    ),
    t(
      "His English comes from his grandfather, a paediatrician who taught himself English and French off BBC and CNN on the radio.",
      "Giọng tiếng Anh của anh đến từ ông ngoại, một bác sĩ nhi tự học tiếng Anh và tiếng Pháp qua đài BBC và CNN.",
    ),
    t(
      "He calls business “my game, the only hobby I have.” Financial freedom, to him, is not a number: it is being able to live anywhere in the world.",
      "Anh gọi kinh doanh là “cuộc chơi của tôi, thú vui duy nhất tôi có”. Với anh, tự do tài chính không phải một con số, mà là được sống ở bất cứ đâu trên thế giới.",
    ),
  ],
};

export const people: Person[] = [minhMac];

export function getPerson(slug: string): Person | undefined {
  return people.find((p) => p.slug === slug);
}
