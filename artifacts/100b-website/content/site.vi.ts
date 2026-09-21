import {
  companies as companiesEn,
  communities as communitiesEn,
  delegateTestimonials as delegateEn,
  founderTestimonials as founderEn,
  founders as foundersEn,
  navLinks as navLinksEn,
  partnerTestimonials as partnerEn,
  pressItems as pressEn,
  programs as programsEn,
  type Company,
  type Founder,
  type NavLink,
  type PressItem,
  type Testimonial,
} from "./site";

/**
 * The Vietnamese words, laid over the English data rather than copied beside
 * it. Every photograph, link, brand colour and logo is inherited, so the two
 * languages cannot drift apart: a new press item or a changed portrait shows
 * up in both, and anything without a translation yet falls through to the
 * English it was written from instead of disappearing.
 */

function overlay<T extends Record<string, unknown>>(
  rows: T[],
  key: (row: T) => string,
  text: Record<string, Partial<T>>,
): T[] {
  return rows.map((row) => ({ ...row, ...(text[key(row)] ?? {}) }));
}

/* ---------------------------------------------------------------- nav ---- */

const navText: Record<string, string> = {
  Home: "Việt Nam ⇄ Thế giới",
  "Go Global": "Dành cho thương hiệu Việt muốn vào thị trường Mỹ",
  "Enter Vietnam": "Dành cho doanh nghiệp, quỹ đầu tư và tổ chức muốn vào Việt Nam",
  "Container Club": "Nguồn hàng, nhà máy và mạng lưới thương mại",
  Communities: "Mạng lưới chúng tôi đã xây dựng",
  About: "Về chúng tôi",
  Ecosystem: "Năm công ty",
};

/** The nav already carried a Vietnamese name for each link; this adds the
 *  descriptor that sits under it, and does the same for the children. */
function localizeNav(links: NavLink[]): NavLink[] {
  return links.map((l) => ({
    ...l,
    name: l.nameVi,
    descriptor: navText[l.name] ?? l.descriptor,
    children: l.children ? localizeNav(l.children) : undefined,
  }));
}

export const navLinks: NavLink[] = localizeNav(navLinksEn);

export const footerLinks = navLinks.flatMap((l) => [
  { name: l.name, path: l.path },
  ...(l.children ?? []).map((c) => ({ name: c.name, path: c.path })),
]);

/* -------------------------------------------------------- testimonials ---- */

const testimonialText: Record<string, Partial<Testimonial>> = {
  "Thanh Dong": {
    headline: "Bước ra sân khấu toàn cầu",
    quote:
      "Sinh ra từ tình yêu của hai người cha, Kalotoys đã chạm đến trái tim của hàng triệu trẻ em và phụ huynh trên khắp thế giới. Có sự đồng hành 100B là bệ phóng, chúng tôi hy vọng Kalotoys và hàng triệu thương hiệu Việt khác sẽ chinh phục được niềm tin của khách hàng toàn cầu.",
    title: "Đồng sáng lập",
    credential:
      "Thương hiệu đồ chơi đang phát triển, hơn 8.000 đơn hàng/ngày, 98% doanh thu đến từ xuất khẩu",
  },
  "Sandy Phuong Nguyen": {
    headline: "Tinh thần Việt Nam, khát vọng toàn cầu",
    quote:
      "Khi bắt đầu vào năm 2017 với chỉ khoảng 3.500 USD, chúng tôi chưa bao giờ nghĩ mình sẽ bán được hàng triệu sản phẩm, chưa nói đến chuyện vươn ra toàn cầu. Nhưng sau khi gặp Minh và 100B, chúng tôi có thêm niềm tin để bước ra khỏi vùng an toàn và dám mơ lớn hơn. Tôi thực sự tin rằng, cùng với 100B, chúng ta sẽ giúp ngày càng nhiều thương hiệu Việt thành công trên thị trường quốc tế.",
    title: "Nhà sáng lập",
    credential:
      "Thương hiệu chăm sóc sức khỏe Việt Nam đang phát triển, 4,3 triệu sản phẩm bán ra trong 6 năm",
  },
  "Hà Thị Vinh": {
    headline: "Bệ phóng để vươn ra thị trường quốc tế",
    quote:
      "Xin cảm ơn 100B đã giúp Gốm Quang Vinh nhìn thế giới từ một góc nhìn mới, đồng thời kết nối chúng tôi với một cộng đồng doanh nhân Việt Nam mạnh mẽ và có tư duy toàn cầu. 100B đã trở thành bệ phóng và điểm tựa, mở ra cơ hội để đội ngũ sản xuất của chúng tôi tiếp cận các thị trường quốc tế.",
    title: "Nhà sáng lập",
    credential: "Thương hiệu gốm truyền thống, xuất khẩu sang hơn 20 quốc gia",
  },
  "Lưu Việt Thắng": {
    headline: "Chung tầm nhìn, đồng giá trị",
    quote:
      "Làm việc cùng 100B là một trải nghiệm tuyệt vời. Định hướng và tầm nhìn của 100B có sự đồng điệu sâu sắc với những giá trị mà Hexagon theo đuổi. Chúng tôi rất hào hứng với mối quan hệ hợp tác này và những kết nối mà nó mang lại.",
    title: "Đồng sáng lập",
    credential:
      "Doanh nghiệp nội thất hàng đầu với 4 nhà máy và hơn 5.000 dự án đã hoàn thành",
  },
  "Lữ Thành Long": {
    headline: "Nâng tầm giá trị Việt Nam trên trường quốc tế",
    quote:
      "Chúc mừng Minh và đội ngũ 100B vì những nỗ lực nổi bật trong việc đưa thương hiệu và sản phẩm Việt Nam ra thị trường toàn cầu. Những gì các bạn đang làm góp phần nâng cao giá trị của Việt Nam trong mắt thế giới và thúc đẩy sự phát triển của đất nước.",
    title: "Nhà sáng lập",
    credential: "Doanh nghiệp phần mềm kế toán hàng đầu, chiếm hơn 80% thị phần",
  },
  "Nguyễn Thị Hương Liên": {
    headline: "Một sứ mệnh truyền cảm hứng và tạo ra tác động",
    quote:
      "Chúc mừng 100B vì một sứ mệnh đầy cảm hứng và có ý nghĩa đối với tương lai kinh tế của Việt Nam.",
    title: "Đồng sáng lập",
    credential:
      "Tiên phong trong lĩnh vực chăm sóc sức khỏe từ thảo dược, hơn 240 triệu sản phẩm được bán trên toàn thế giới",
  },
  "Loc Dang": {
    headline: "Họ hiểu rõ cả hai thị trường",
    quote:
      "Tôi làm việc với nhiều doanh nghiệp Việt Nam tại Mỹ, và điều hiếm thấy ở Minh cùng 100B là họ hiểu cả hai thị trường đang cần gì. Không chỉ giới thiệu, mà ngồi xuống giải quyết từng việc một. Mạng lưới của họ cũng rất uy tín, kết nối xong là vào việc được ngay.",
    title: "Nhà sáng lập",
    credential: "Công ty luật tại Austin, Texas",
  },
  "Mark Duval": {
    headline: "Điều các bạn đang làm thật sự tuyệt vời",
    quote:
      "100B chính là cầu nối vì các bạn hiểu cả hai phía. Các bạn giúp hệ sinh thái doanh nghiệp Mỹ hiểu hơn về Việt Nam, đồng thời giúp doanh nhân Việt Nam hiểu cách bước vào thị trường Mỹ. Điều các bạn đang làm thật sự tuyệt vời. Nó vừa thú vị, vừa quan trọng.",
    title: "CEO & Chủ tịch",
  },
  "Hector Quintanar": {
    headline: "Đây là một điều tuyệt vời",
    quote:
      "Người châu Á và người gốc Latin có nhiều điểm tương đồng. Chúng ta có thể cùng nhau chinh phục thị trường Mỹ. 100B đã giúp các doanh nghiệp tránh những thất bại và những trở ngại mà nhiều doanh nghiệp khác từng trải qua. Nếu có thể giúp dù chỉ một hay hai doanh nghiệp rút ngắn thời gian học hỏi và tìm được con đường đúng đắn hơn, thì đó đã là một điều tuyệt vời.",
    title: "Đối tác điều hành",
  },
  "Ahmed Moledina": {
    headline: "Những kết nối thật sự ấn tượng",
    quote:
      "Chuyến đi thực sự tuyệt vời, từ những con người chúng tôi gặp, những mối quan hệ được kết nối cho đến toàn bộ trải nghiệm. 100B đang ở một vị thế rất thuận lợi để tạo ra những kết nối như vậy.",
    title: "Chủ tịch & CEO",
  },
  "Barbara Joe": {
    headline: "Truyền cảm hứng. Hiệu quả. Hoàn thành sứ mệnh.",
    quote:
      "Ba từ để mô tả đội ngũ 100B: Truyền cảm hứng. Hiệu quả. Hoàn thành sứ mệnh.",
    title: "Giám đốc",
  },
  "Marc Knapper": {
    headline: "Đầu tư vào Việt Nam, bạn cần những đối tác Việt Nam",
    quote:
      "Nếu đầu tư vào Việt Nam, bạn cần những đối tác Việt Nam có thể giúp bạn hiểu thị trường và tìm đúng hướng đi.",
    company: "Cựu Đại sứ Hoa Kỳ tại Việt Nam",
  },
  "Michael Nguyen": {
    headline: "Hãy bắt đầu từ phát triển kinh doanh",
    quote:
      "Bước đầu tiên là phát triển kinh doanh, giúp doanh nghiệp tìm được khách hàng trước. Sau đó mới đến hợp tác sản xuất, rồi tiến tới sản xuất hoàn chỉnh tại Mỹ.",
  },
  "Earth VC": {
    headline: "Rất hân hạnh được đón tiếp đoàn",
    quote:
      "Cảm ơn 100B đã đưa Earth VC tham gia chương trình ACCESS Vietnam. Chúng tôi rất vui khi được đón tiếp đoàn tại Earth Hub.",
    company: "Quỹ đầu tư công nghệ khí hậu",
    credential:
      "Nhà đầu tư tiên phong trong lĩnh vực climate tech, với 23 startup trong danh mục đầu tư toàn cầu.",
  },
  "Thanh Tung Nguyen": {
    headline: "Tăng cường những nhịp cầu kết nối",
    quote:
      "Chúng tôi thực sự trân trọng những nỗ lực ý nghĩa mà các bạn và đội ngũ 100B đang thực hiện để tăng cường kết nối giữa Việt Nam và cộng đồng doanh nghiệp toàn cầu.",
    title: "Đồng sáng lập & CEO",
    credential:
      "Nền tảng giáo dục công nghệ lớn tại Đông Nam Á, với 54 cơ sở và hơn 80.000 học viên.",
  },
  "Thai Nguyen": {
    headline: "Một trải nghiệm tuyệt vời khi được đón tiếp đoàn",
    quote:
      "Vinmake rất vui khi được đón tiếp những thành viên nổi bật của cộng đồng doanh nghiệp Austin. Tôi thực sự trân trọng những nỗ lực mà các bạn và đội ngũ đã dành cho việc tổ chức chuyến thăm của đoàn ACCESS Vietnam 2026.",
    title: "Đồng sáng lập & CEO",
    credential:
      "Nền tảng sản xuất ứng dụng AI cho ngành thời trang, kết nối mạng lưới 300 nhà máy trên toàn cầu.",
  },
};

const byName = (t: Testimonial) => t.name;

export const founderTestimonials: Testimonial[] = overlay(founderEn, byName, testimonialText);
export const partnerTestimonials: Testimonial[] = overlay(partnerEn, byName, testimonialText);
export const delegateTestimonials: Testimonial[] = overlay(delegateEn, byName, testimonialText);

/* ---------------------------------------------------------- companies ---- */

const companyText: Record<string, Partial<Company>> = {
  "100B": {
    role: "Tư vấn chiến lược",
    line: "Dành cho các thương hiệu Việt có doanh thu 20-100 triệu USD muốn mở rộng ra thị trường quốc tế, và các doanh nghiệp nước ngoài đang tìm đường vào Việt Nam.",
    detail:
      "Đồng hành cùng thương hiệu Việt doanh thu 20-100 triệu USD trên hành trình vươn ra thế giới, và các doanh nghiệp quốc tế muốn vào Việt Nam. Mô hình hợp tác bằng cổ phần: 3-20%.",
    links: [
      { label: "Đi ra thị trường quốc tế", href: "/go-global" },
      { label: "Vào Việt Nam", href: "/enter-vietnam" },
    ],
  },
  "Container Club": {
    role: "Thương mại quốc tế",
    homeRole: "Tìm nguồn hàng & vận chuyển",
    line: "Tìm nguồn hàng, làm việc trực tiếp với nhà máy và tổ chức vận chuyển từ nơi sản xuất đến thị trường.",
    detail:
      "Tìm nguồn hàng, thẩm định nhà máy, kiểm soát chất lượng, vận chuyển và kết nối mạng lưới thương mại. Phí dịch vụ 3-5%. Phụ trách bởi Tung Cao và Tu Mac.",
  },
  ZAD: {
    role: "Nhận diện thương hiệu",
    line: "Hơn 1.000 dự án đã thực hiện cho Google, Viettel, Coc Coc và nhiều thương hiệu hàng đầu tại Việt Nam.",
    detail:
      "Làm đúng ngay từ đầu. Hơn 1.000 dự án, đội ngũ hơn 20 người, 10 năm kinh nghiệm. Google, Viettel Academy, Coc Coc, VAECO, Eva de Eva, Magonn, Hagoo. Sáng lập bởi Hai Nguyen.",
  },
  "100Bold": {
    role: "Marketing tại Mỹ",
    line: "Giúp các thương hiệu có doanh thu 5-100 triệu USD xây dựng chỗ đứng và phát triển tại thị trường Mỹ.",
    detail:
      "Giải pháp marketing toàn diện dành cho các thương hiệu có doanh thu 5-100 triệu USD.",
  },
  BOND: {
    role: "Quà tặng & bao bì",
    line: "Biến quà tặng và bao bì trở thành một phần trong cách thương hiệu xây dựng và gìn giữ những mối quan hệ.",
    detail: "Nơi những mối quan hệ được vun đắp và tạo ra giá trị lâu dài.",
  },
};

export const companies: Company[] = overlay(companiesEn, (c) => c.name, companyText);

/* ----------------------------------------------------------- founders ---- */

const founderText: Record<string, Partial<Founder>> = {
  "Tung Cao": {
    title: "Đồng sáng lập & Giám đốc Thương mại Quốc tế",
    short:
      "Phụ trách mảng thương mại, từ khách hàng, vận chuyển, hải quan đến mạng lưới đưa hàng hóa đi khắp nơi.",
    long: "Phụ trách Container Club. Khách hàng, vận chuyển, hải quan, tài chính thương mại và mạng lưới đưa hàng hóa đi khắp nơi.",
  },
  "Minh Mac": {
    title: "Nhà sáng lập & CEO",
    short:
      "Rời Việt Nam năm 17 tuổi. Từng hoạt động trong lĩnh vực đầu tư tư nhân với danh mục trị giá 65 tỷ USD. Đồng sáng lập một công ty công nghệ Đông Nam Á đạt 1,6 triệu người dùng.",
    long: "Rời Việt Nam năm 17 tuổi và có một thập kỷ xây dựng sự nghiệp tại Mỹ. Từng hoạt động trong lĩnh vực đầu tư tư nhân với danh mục trị giá 65 tỷ USD. Đồng sáng lập một công ty công nghệ Đông Nam Á đạt 1,6 triệu người dùng. Tự xây dựng một agency sáng tạo sau khi quá nhiều đối tác marketing không đáp ứng được kỳ vọng.",
  },
  "Tu Mac": {
    title: "Đồng sáng lập & Giám đốc Vận hành Nhà máy",
    short:
      "Chuyên về vật liệu xây dựng và nội thất, đánh giá nhà máy và kiểm soát chất lượng trực tiếp tại Việt Nam.",
    long: "Chuyên về vật liệu xây dựng và nội thất. Thẩm định nhà máy, kiểm soát chất lượng và giám sát sản xuất tại Việt Nam. Mọi nhà máy mà người mua đến thăm, anh đều đã đi trước.",
  },
};

export const founders: Founder[] = overlay(foundersEn, (f) => f.name, founderText);

/* -------------------------------------------------------- communities ---- */

const communityText: Record<string, { name: string; line: string }> = {
  "Founders and brand owners": {
    name: "Nhà sáng lập & chủ thương hiệu",
    line: "Những nhà sáng lập Việt Nam đang đưa thương hiệu của mình ra thế giới.",
  },
  "Factory owners": {
    name: "Chủ nhà máy",
    line: "Những nhà sản xuất muốn tiến xa hơn việc gia công, tự xây dựng thương hiệu và tìm kiếm khách hàng của riêng mình.",
  },
  "Trade professionals": {
    name: "Chuyên gia thương mại",
    line: "Vận chuyển, hải quan, 3PL, tài chính thương mại, tuân thủ. Mạng lưới của Container Club.",
  },
  "Sellers and partners": {
    name: "Người bán hàng & đối tác",
    line: "Những người đưa sản phẩm của các công ty trong hệ sinh thái đến khách hàng và cùng tạo ra giá trị từ mỗi giao dịch.",
  },
};

export const communities = overlay(communitiesEn, (c) => c.name, communityText);

/* ----------------------------------------------------------- programs ---- */

const programText: Record<string, Record<string, string>> = {
  "Access Vietnam": {
    when: "Tháng 6/2026",
    where: "Hà Nội & TP. Hồ Chí Minh",
    line: "18 đại biểu gồm các quan chức, lãnh đạo doanh nghiệp và nhà đầu tư, kết nối với các bộ ngành, trung tâm đổi mới sáng tạo và các quỹ tại Việt Nam. Chương trình được tổ chức cùng Greater Austin Asian Chamber of Commerce.",
    cta: "Vào Việt Nam",
  },
  "Vietnam Direct": {
    when: "Tháng 5-6/2026",
    where: "TP. Hồ Chí Minh đến Hà Nội",
    line: "14 nhà máy đã được tuyển chọn trong lĩnh vực vật liệu xây dựng và hoàn thiện, dành cho các nhà mua hàng muốn tìm nguồn cung trực tiếp.",
    cta: "Container Club",
  },
};

export const programs = programsEn.map((p) => ({ ...p, ...(programText[p.name] ?? {}) }));

/* -------------------------------------------------------------- press ---- */

const pressText: Record<string, Partial<PressItem>> = {
  "Hanoi Television": {
    headline: "Hà Nội tăng cường kết nối đầu tư với doanh nghiệp Texas",
    description:
      "Lãnh đạo thành phố gặp gỡ đoàn doanh nghiệp Texas nhằm mở rộng các kênh hợp tác đầu tư và thương mại giữa Hà Nội và bang Texas.",
  },
  NACENTECH: {
    headline:
      "Access Vietnam 2026: Cầu nối startup giữa Việt Nam và Austin, Texas, Thung lũng Silicon thứ hai",
    description:
      "Trung tâm Nghiên cứu và Phát triển Công nghệ Quốc gia đưa tin về đoàn đại biểu kết nối các nhà sáng lập Việt Nam với hệ sinh thái Austin.",
  },
  "Ministry of Culture, Sports and Tourism": {
    outlet: "Bộ Văn hóa, Thể thao và Du lịch",
    headline: "Đưa bản sắc Việt Nam ra sân khấu toàn cầu",
    description:
      "Một sự kiện cấp quốc gia tôn vinh thế hệ doanh nhân Việt Nam ở nước ngoài, những người đang góp phần đưa văn hóa Việt Nam ra thế giới và kết nối quê hương với thị trường toàn cầu.",
  },
  "Ministry of Foreign Affairs": {
    outlet: "Bộ Ngoại giao",
    headline: "Đoàn doanh nhân Việt Nam ở nước ngoài được tiếp đón tại Bộ Ngoại giao",
    description:
      "Thứ trưởng Lê Thị Thu Hằng tiếp đoàn doanh nhân Việt Nam ở nước ngoài, mở rộng hợp tác đầu tư xuyên biên giới và tăng cường kết nối với quê hương.",
  },
  "Vietnam Real Estate Association": {
    outlet: "Hiệp hội Bất động sản Việt Nam",
    headline:
      "Ba hiệp hội kết nối lĩnh vực bất động sản, du lịch và doanh nhân Việt Nam ở nước ngoài",
    description:
      "Lãnh đạo VNREA, VITA và cộng đồng doanh nhân Việt Nam toàn cầu cùng gặp gỡ tại Hà Nội, thúc đẩy kết nối dòng vốn giữa các lĩnh vực và cộng đồng người Việt trên thế giới.",
  },
  "Vietnam Public Affairs": {
    headline: "Trao 21 căn nhà đại đoàn kết cho các gia đình tại vùng Tây Bắc",
    description:
      "Phối hợp cùng Mặt trận Tổ quốc Việt Nam, cộng đồng doanh nhân Việt Nam toàn cầu đã huy động nguồn lực thiện nguyện để hỗ trợ các hộ gia đình gặp khó khăn tại Điện Biên.",
  },
  "Vietnam News Agency": {
    outlet: "Thông tấn xã Việt Nam",
    headline: "Đưa thương hiệu Việt lên truyền thông quốc tế",
    description:
      "Một hội thảo cấp quốc gia tại TP. Hồ Chí Minh tập trung vào việc đưa thương hiệu và doanh nghiệp Việt Nam lên các kênh truyền thông quốc tế, mở rộng cơ hội kết nối và hợp tác với thị trường toàn cầu.",
  },
  "Vietnam Chamber of Commerce and Industry": {
    outlet: "Liên đoàn Thương mại và Công nghiệp Việt Nam",
    headline: "Doanh nhân Việt Nam ở nước ngoài cam kết đồng hành cùng sự phát triển đất nước",
    description:
      "Các doanh nhân Việt Nam ở nước ngoài cam kết tăng cường hợp tác và đầu tư, đóng góp vào tăng trưởng của Việt Nam và mở ra một giai đoạn mới trong kết nối nguồn lực toàn cầu.",
  },
  "Industry & Trade Journal": {
    outlet: "Tạp chí Công Thương",
    headline: "Sản phẩm tốt là nền tảng: Chuyên gia nói về cách xây dựng thương hiệu Việt toàn cầu",
    description:
      "Tại một hội thảo ở TP. Hồ Chí Minh, các chuyên gia trong ngành thống nhất rằng năng lực vận hành xuất sắc là nền tảng để truyền thông hiệu quả và xây dựng vị thế thương hiệu bền vững trên thị trường quốc tế.",
  },
  "Vietnam Plus": {
    outlet: "VietnamPlus",
    headline:
      "Diễn đàn Doanh nghiệp Thái Lan, Việt Nam, Lào, Campuchia, Myanmar kết nối doanh nghiệp năm quốc gia",
    description:
      "Tháng 11/2023, tại Udon Thani, Thái Lan, cộng đồng doanh nghiệp của năm quốc gia Đông Nam Á gặp gỡ để mở rộng kết nối thương mại và đầu tư.",
  },
  "Government News": {
    headline: "Mở rộng mạng lưới doanh nghiệp Việt Nam ở nước ngoài tại châu Âu",
    description:
      "Diễn đàn Doanh nghiệp Việt Nam tại châu Âu lần thứ 12 diễn ra tại Budapest vào tháng 9/2023, quy tụ các doanh nhân Việt Nam trên khắp châu Âu nhằm tăng cường kết nối thương mại với quê hương.",
  },
  "Vietnam Innovation Network Europe": {
    headline: "Startup Exchange đưa các nhà sáng lập Việt Nam đến Brussels",
    description:
      "Tháng 9/2023, các nhà sáng lập Việt Nam có một tuần giao lưu và kết nối với cộng đồng đổi mới sáng tạo tại châu Âu.",
  },
  "Dan Tri": {
    outlet: "Dân Trí",
    headline: "Việt Nam ghi dấu trên bản đồ startup thế giới",
    description:
      "Techfest tại Silicon Valley, tháng 9/2019. Các startup Việt Nam giới thiệu mình với nhà đầu tư Mỹ và cộng đồng đổi mới sáng tạo toàn cầu.",
  },
  VnExpress: {
    headline: "Techfest Vietnam 2019: Hành trình kết nối và hội nhập",
    description:
      "Tháng 12/2019. Hội thảo tập trung vào những mô hình kết nối nguồn lực startup toàn cầu trong bối cảnh Cách mạng Công nghiệp 4.0.",
  },
  HTV: {
    headline: "Bộ trưởng Nguyễn Chí Dũng gặp Mạng lưới Đổi mới sáng tạo Việt Nam tại Hoa Kỳ",
    description:
      "Tháng 5/2022. Bộ trưởng Bộ Kế hoạch và Đầu tư gặp gỡ mạng lưới các nhà đổi mới sáng tạo Việt Nam đang hoạt động tại Hoa Kỳ.",
  },
};

export const pressItems: PressItem[] = overlay(pressEn, (p) => p.outlet, pressText);

export { CONTACT_EMAIL } from "./site";
