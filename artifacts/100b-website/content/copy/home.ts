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
    line1: t("Vietnamese brands go out.", "Thương hiệu Việt vươn xa."),
    line2: t("The world comes in.", "Thế giới tìm đến Việt Nam."),
    lead: t(
      "We work both directions. Capital, brands, and goods.",
      "Chúng tôi kết nối cả hai chiều: đưa nguồn vốn, thương hiệu và hàng hóa đi qua biên giới.",
    ),
    ctaBrand: t("I'm a Vietnamese brand →", "Tôi là thương hiệu Việt →"),
    ctaEnter: t("I want to enter Vietnam →", "Tôi muốn vào Việt Nam →"),
    metaCities: t("Austin · Hanoi · Ho Chi Minh City", "Austin · Hà Nội · TP. Hồ Chí Minh"),
    metaCompanies: t("Five companies", "Năm công ty"),
    metaCorridor: t("Vietnam and the US", "Việt Nam và Hoa Kỳ"),
  },

  doors: {
    headingLead: t("Four ways in.", "Bốn cánh cửa."),
    headingAccent: t("Which one is you?", "Bạn đang tìm lối nào?"),
    items: [
      {
        title: t("A Vietnamese brand going global.", "Thương hiệu Việt muốn vươn ra thế giới."),
        line: t(
          "We start a US company with you and own part of it.",
          "Cùng doanh nghiệp xây dựng doanh nghiệp tại Mỹ, từ những bước đầu tiên đến khi vươn ra thị trường.",
        ),
        label: t("Go Global", "Vươn ra thế giới"),
      },
      {
        title: t("A fund or company entering Vietnam.", "Quỹ đầu tư hoặc doanh nghiệp muốn vào Việt Nam."),
        line: t(
          "We get you in the room. Ministries, industry, funds.",
          "Chúng tôi đưa doanh nghiệp đến đúng nơi, gặp đúng người, từ cơ quan quản lý và lãnh đạo ngành đến các quỹ đầu tư.",
        ),
        label: t("Enter Vietnam", "Vào Việt Nam"),
      },
      {
        title: t("A buyer sourcing from Asia.", "Doanh nghiệp muốn tìm nguồn hàng tại châu Á."),
        line: t(
          "Straight to the factory. Commission, not markup.",
          "Kết nối trực tiếp với nhà máy. Phí dịch vụ minh bạch, không cộng chênh lệch vào giá sản phẩm.",
        ),
        label: t("Container Club", "Container Club"),
      },
      {
        title: t(
          "Too early, or you earn by referring clients.",
          "Doanh nghiệp còn ở giai đoạn đầu hoặc muốn kết nối khách hàng.",
        ),
        line: t(
          "Our companies work at every size.",
          "Hệ sinh thái của chúng tôi đồng hành với doanh nghiệp ở mọi quy mô.",
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
    headingLead: t("Two programs.", "Hai chương trình."),
    headingAccent: t("Mid-2026.", "Giữa năm 2026."),
    openSite: t("open the event site", "mở trang của chương trình"),
    closingLead: t("We can run either one again, for a", "Chúng tôi có thể tổ chức lại cả hai chương trình cho"),
    closingAccent: t("different country or industry.", "một quốc gia hoặc một ngành khác."),
  },

  founders: {
    headingLead: t("Three founders.", "Ba nhà sáng lập."),
    headingAccent: t("Both sides.", "Kết nối hai phía."),
  },

  communities: {
    headingLead: t("We build rooms,", "Chúng tôi xây dựng những kết nối thực sự,"),
    headingAccent: t("not lists.", "không chỉ là danh sách liên hệ."),
    link: t("Communities", "Tham gia cộng đồng"),
  },

  press: {
    headingLead: t("In the", "Truyền thông"),
    headingAccent: t("press.", "nói gì?"),
  },

  contact: {
    titleLead: t("If one of the four doors is yours,", "Nếu một trong bốn cánh cửa là dành cho bạn,"),
    titleAccent: t("let's talk.", "hãy nói chuyện với chúng tôi."),
  },
};
