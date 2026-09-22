import type { Dict } from "../locale";

const t = (en: string, vi: string): Dict<string> => ({ en, vi });

export const enterVietnamCopy = {
  meta: {
    title: t("Enter Vietnam", "Vào Việt Nam"),
    description: t(
      "For companies, funds, and organizations coming into Vietnam. We organize delegations into the rooms that matter: ministries, innovation centers, funds, and founders.",
      "Dành cho doanh nghiệp, quỹ đầu tư và tổ chức muốn vào Việt Nam. Chúng tôi tổ chức các đoàn công tác đến đúng nơi cần đến: các bộ ngành, trung tâm đổi mới sáng tạo, quỹ đầu tư và nhà sáng lập.",
    ),
  },
  hero: {
    line1: t("Vietnam rewards the people", "Việt Nam đang mở ra nhiều cơ hội"),
    line2: t("who show up.", "cho doanh nghiệp và nhà đầu tư quốc tế."),
    lead: t(
      "We organize delegations into the rooms that matter. Ministries, funds, and the founders actually building.",
      "Chúng tôi tổ chức các đoàn công tác đến đúng nơi cần đến: các bộ ngành, các quỹ đầu tư và những nhà sáng lập đang trực tiếp xây dựng doanh nghiệp.",
    ),
    metaCities: t("Hanoi · Ho Chi Minh City", "Hà Nội · TP. Hồ Chí Minh"),
    metaThemes: t("Government · Innovation · Capital", "Chính phủ · Đổi mới sáng tạo · Nguồn vốn"),
  },
  stats: {
    labels: [
      t("GDP, 2025", "GDP, 2025"),
      t("Growth, 2025", "Tăng trưởng, 2025"),
      t("FDI disbursed, an all-time high", "FDI giải ngân, mức cao nhất từ trước đến nay"),
      t("Exports, 2025", "Kim ngạch xuất khẩu, 2025"),
      t("People, median age 34", "Dân số, độ tuổi trung vị 34"),
      t("GDP forecast by 2035", "Dự báo GDP năm 2035"),
    ],
    footnote: t(
      "690,000 STEM students, growing 10% a year. 4,100+ startups. 4 unicorns. 290+ active VC firms.",
      "690.000 sinh viên STEM, tăng 10% mỗi năm. 4.100+ startup · 4 kỳ lân · 290+ quỹ VC đang hoạt động.",
    ),
  },
  build: {
    headingLead: t("A week that would take you", "Chỉ một tuần để thiết lập những kết nối"),
    headingAccent: t("two years to arrange.", "mất hai năm mới xây dựng được."),
    intro: t(
      "These are meetings that take outsiders years to arrange.",
      "Đây là những cuộc gặp mà một doanh nghiệp nước ngoài có thể mất nhiều năm mới tự thiết lập được.",
    ),
    items: [
      {
        title: t("Government.", "Chính phủ."),
        line: t(
          "Ministries, city governments, national agencies.",
          "Kết nối với các bộ, cơ quan trung ương và chính quyền địa phương.",
        ),
      },
      {
        title: t("Industry.", "Doanh nghiệp."),
        line: t(
          "The companies actually operating, at their own facilities.",
          "Gặp gỡ những doanh nghiệp đang trực tiếp vận hành, ngay tại nơi họ làm việc và sản xuất.",
        ),
      },
      {
        title: t("Capital.", "Nguồn vốn."),
        line: t(
          "The funds writing checks in Vietnam.",
          "Tiếp cận những quỹ đầu tư đang thực sự rót vốn tại Việt Nam.",
        ),
      },
      {
        title: t("Founders.", "Nhà sáng lập."),
        line: t(
          "The people building, in the room, not on a panel.",
          "Gặp trực tiếp những người đang xây dựng doanh nghiệp, không chỉ gặp họ trên sân khấu.",
        ),
      },
    ],
    outro: t(
      "We handle the itinerary, the introductions, the translation, and everything between the airport and the airport.",
      "Chúng tôi lo trọn hành trình: lịch trình, kết nối, phiên dịch và mọi chi tiết khi bạn đến Việt Nam cho đến lúc rời đi.",
    ),
  },
  trip: {
    headingLead: t("What it", "Một hành trình"),
    headingAccent: t("looked like.", "đã thực sự diễn ra."),
    para1: t(
      "June 2026. Hanoi and Ho Chi Minh City. 18 delegates. Government officials and business leaders, brought into Vietnam's ministries, innovation centers, and capital circles over eight days.",
      "Tháng 6/2026. Hà Nội và TP. Hồ Chí Minh. 18 đại biểu gồm lãnh đạo doanh nghiệp và đại diện cơ quan quản lý, được kết nối với các bộ ngành, trung tâm đổi mới sáng tạo và các tổ chức đầu tư tại Việt Nam trong 8 ngày.",
    ),
    para2: t(
      "Organized with the Greater Austin Asian Chamber of Commerce, led by GAACC President and CEO Mark Duval.",
      "Chương trình được tổ chức cùng Greater Austin Asian Chamber of Commerce, dưới sự dẫn dắt của Chủ tịch & CEO Mark Duval.",
    ),
    delegates: t("Delegates", "Đại biểu"),
    days: t("Days", "Ngày"),
    cities: t("Cities", "Thành phố"),
    whoWeMet: t("Who we met", "Những nơi đoàn đã đến"),
    fullProgram: t("See the full program", "Xem toàn bộ chương trình"),
  },
  photos: {
    opening: {
      label: t("June 2026 · Hanoi", "Tháng 6/2026 · Hà Nội"),
      caption: t(
        "AmCham Vietnam and the former US Ambassador to Vietnam",
        "AmCham Vietnam và Cựu Đại sứ Hoa Kỳ tại Việt Nam",
      ),
    },
    /* The organisations keep their own names; only the category above each
       one is translated. */
    government: t("Government", "Chính phủ"),
    capital: t("Capital", "Nguồn vốn"),
    education: t("Education", "Giáo dục"),
    operators: t("Operators", "Doanh nghiệp"),
    network: t("Network", "Mạng lưới"),
  },

  /* The Vietnamese institutions carry their own names on the Vietnamese page;
     the companies and funds keep the names they trade under. */
  orgs: {
    "National Data Center": t("National Data Center", "Trung tâm Dữ liệu Quốc gia"),
    "City of Hanoi": t("City of Hanoi", "TP. Hà Nội"),
    "National Innovation Center": t("National Innovation Center", "Trung tâm Đổi mới sáng tạo Quốc gia"),
    "Ministry of Science and Technology": t(
      "Ministry of Science and Technology",
      "Bộ Khoa học và Công nghệ",
    ),
    "Fulbright University Vietnam": t("Fulbright University Vietnam", "Đại học Fulbright Việt Nam"),
    "BCA and BNI Vietnam": t("BCA and BNI Vietnam", "BCA và BNI Việt Nam"),
  } as Record<string, Dict<string>>,

  proof: {
    headingLead: t("What delegates and local partners", "Những người tham gia"),
    headingAccent: t("say.", "nói gì?"),
    groupLabel: t("Access Vietnam 2026", "Access Vietnam 2026"),
  },
  forWhom: {
    line1: t("Access Vietnam is one example.", "ACCESS Vietnam chỉ là một ví dụ."),
    line2: t(
      "We build these for organizations in our network.",
      "Chúng tôi xây dựng chương trình cho cả mạng lưới.",
    ),
    items: [
      {
        title: t("Chambers and trade associations", "Phòng thương mại & hiệp hội ngành"),
        line: t("bringing members into a new market", "đưa thành viên tiếp cận một thị trường mới"),
      },
      {
        title: t("Funds and investors", "Quỹ đầu tư & nhà đầu tư"),
        line: t(
          "looking for Vietnam exposure and deal flow",
          "tìm kiếm cơ hội tại Việt Nam và tiếp cận nguồn deal flow",
        ),
      },
      {
        title: t("Corporates", "Doanh nghiệp"),
        line: t(
          "exploring supply chain, partnership, or market entry",
          "khám phá cơ hội về chuỗi cung ứng, hợp tác hoặc gia nhập thị trường",
        ),
      },
      {
        title: t(
          "Government and economic development bodies",
          "Cơ quan chính phủ & tổ chức phát triển kinh tế",
        ),
        line: t("building bilateral ties", "mở rộng quan hệ hợp tác song phương"),
      },
    ],
    closingLead: t(
      "We've run the US route. We're ready to run it",
      "Chúng tôi đã thực hiện hành trình từ Mỹ. Giờ đây, chúng tôi có thể xây dựng những chương trình tương tự",
    ),
    closingAccent: t("from Europe, Asia, or the Middle East.", "cho các đoàn đến từ châu Âu, châu Á hoặc Trung Đông."),
    cta: t("Talk to us about a delegation", "Trao đổi về chương trình dành cho đoàn của bạn"),
  },
  beyond: {
    headingLead: t(
      "Some people leave with a contact list. Others want",
      "Có người trở về với một danh sách liên hệ. Có người trở về với",
    ),
    headingAccent: t(
      "an entity, a partner, or a supply chain.",
      "một công ty, một đối tác hoặc cả một chuỗi cung ứng.",
    ),
    items: [
      t("Market entry advisory", "Tư vấn gia nhập thị trường"),
      t("Partner and factory matching", "Kết nối đối tác & nhà máy"),
      t("Capital introductions", "Kết nối nguồn vốn"),
    ],
  },
  contact: {
    titleLead: t("Tell us why you're", "Hãy cho chúng tôi biết điều gì đưa bạn"),
    titleAccent: t("looking at Vietnam.", "đến Việt Nam."),
  },
};
