import type { Dict } from "../locale";

const t = <T,>(en: T, vi: T): Dict<T> => ({ en, vi });

/**
 * The homepage's own words. Headings are stored in the two halves the markup
 * sets them in, plain and gold, so the emphasis lands on the right phrase in
 * each language rather than on whatever happens to sit in the same position.
 */
export const home = {
  meta: {
    title: t("100B | Beyond Borders", "100B | Beyond Borders"),
    description: t(
      "Vietnamese brands go out. The world comes in. 100B works both directions: capital, brands, and goods across the Vietnam corridor.",
      "Thương hiệu Việt vươn xa. Thế giới tìm đến Việt Nam. 100B kết nối cả hai chiều: nguồn vốn, thương hiệu và hàng hóa qua hành lang Việt Nam.",
    ),
  },

  hero: {
    line1: t("Vietnamese brands go out.", "Việt Nam đi ra thế giới."),
    line2: t("The world comes in.", "Thế giới đến gần Việt Nam."),
    lead: t(
      "We work both directions. Capital, brands, and goods.",
      "Chúng tôi làm việc với cả hai chiều: giúp doanh nghiệp Việt bước vào những thị trường mới, đồng thời đưa doanh nghiệp, nguồn vốn và cơ hội quốc tế đến Việt Nam.",
    ),
    ctaBrand: t("I'm a Vietnamese brand →", "Tôi là thương hiệu Việt →"),
    ctaEnter: t("I want to enter Vietnam →", "Tôi muốn vào Việt Nam →"),
    metaCities: t("Austin · Hanoi · Ho Chi Minh City", "Austin · Hà Nội · TP. Hồ Chí Minh"),
    metaCompanies: t("Five companies", "Năm công ty"),
    metaCorridor: t("Vietnam and the US", "Việt Nam và Hoa Kỳ"),
  },

  doors: {
    headingLead: t("Four ways in.", "Bốn hướng đi."),
    headingAccent: t("Which one is you?", "Bạn đang ở đâu?"),
    items: [
      {
        title: t("A Vietnamese brand going global.", "Đưa thương hiệu Việt đến những thị trường mới."),
        line: t(
          "We start a US company with you and own part of it.",
          "Xây dựng nền tảng tại Mỹ, tạo chỗ đứng trên thị trường và từng bước mở rộng.",
        ),
        label: t("Go Global", "Đi ra thị trường quốc tế"),
      },
      {
        title: t("A fund or company entering Vietnam.", "Tìm đường vào thị trường Việt Nam."),
        line: t(
          "We get you in the room. Ministries, industry, funds.",
          "Hiểu thị trường, tìm đúng đầu mối và gặp đúng người, từ cơ quan quản lý, lãnh đạo ngành đến các quỹ đầu tư và đối tác tại Việt Nam.",
        ),
        label: t("Enter Vietnam", "Khám phá thị trường Việt Nam"),
      },
      {
        title: t("A buyer sourcing from Asia.", "Tìm nguồn hàng trực tiếp tại châu Á."),
        line: t(
          "Straight to the factory. Commission, not markup.",
          "Làm việc trực tiếp với nhà máy và nguồn cung đã được chọn lọc. Phí dịch vụ rõ ràng, không cộng thêm vào giá sản phẩm.",
        ),
        label: t("Container Club", "Container Club"),
      },
      {
        title: t(
          "Too early, or you earn by referring clients.",
          "Doanh nghiệp mới đang xây dựng những bước đầu tiên.",
        ),
        line: t(
          "Our companies work at every size.",
          "Hệ sinh thái của chúng tôi đồng hành với doanh nghiệp ở mọi quy mô, giúp tập hợp những năng lực phù hợp, cùng đưa kế hoạch vào thực tế.",
        ),
        label: t("Ecosystem", "Hệ sinh thái"),
      },
    ],
  },

  groups: {
    founders: t("Vietnamese founders", "Nhà sáng lập Việt Nam"),
    partners: t("International partners", "Đối tác quốc tế"),
  },

  testimonials: {
    headingLead: t("What founders and CEOs", "Những nhà sáng lập và CEO"),
    headingAccent: t("on both sides say.", "ở cả hai phía nói gì?"),
  },

  programs: {
    headingLead: t("Two programs.", "Hai nhịp cầu."),
    headingAccent: t("Mid-2026.", "Giữa năm 2026."),
    openSite: t("open the event site", "mở trang của chương trình"),
    closingLead: t("We can run either one again, for a", "Mỗi chương trình đều có thể được thiết kế lại để phù hợp"),
    closingAccent: t("different country or industry.", "từng quốc gia, ngành hàng hoặc nhu cầu cụ thể."),
  },

  founders: {
    headingLead: t("Three founders.", "Ba nhà sáng lập."),
    headingAccent: t("Both sides.", "Khơi thông dòng chảy Việt Nam và thế giới."),
  },

  communities: {
    headingLead: t("We build rooms,", "Chúng tôi cùng bạn đưa những cuộc gặp"),
    headingAccent: t("not lists.", "trở thành những cơ hội hợp tác thực sự."),
    link: t("Communities", "Tham gia cộng đồng"),
  },

  press: {
    headingLead: t("In the", "Truyền thông"),
    headingAccent: t("press.", "nói gì?"),
  },

  contact: {
    titleLead: t("If one of the four doors is yours,", "Một trong bốn hướng là điều bạn đang tìm kiếm,"),
    titleAccent: t("let's talk.", "hãy chia sẻ với chúng tôi."),
  },
};
