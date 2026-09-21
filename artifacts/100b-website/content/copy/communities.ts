import type { Dict } from "../locale";

const t = (en: string, vi: string): Dict<string> => ({ en, vi });

export const communitiesCopy = {
  meta: {
    title: t("Communities", "Cộng đồng"),
    description: t(
      "We build rooms, not lists. Four networks, vetted by introduction: founders, factory owners, trade professionals, sellers and partners.",
      "Chúng tôi xây dựng mạng lưới, không chỉ những danh sách liên hệ. Bốn mạng lưới được tuyển chọn và kết nối qua giới thiệu: nhà sáng lập, chủ nhà máy, chuyên gia thương mại, người bán hàng và đối tác.",
    ),
  },
  hero: {
    line1: t("We build rooms,", "Chúng tôi xây dựng mạng lưới,"),
    line2: t("not lists.", "không chỉ dừng lại ở những danh sách liên hệ."),
    lead: t(
      "Four networks. Vetted, by introduction, and growing.",
      "Bốn mạng lưới. Được tuyển chọn, kết nối qua giới thiệu và không ngừng mở rộng.",
    ),
    meta: t(
      "Founders · Factory owners · Trade · Sellers and partners",
      "Nhà sáng lập · Chủ nhà máy · Chuyên gia thương mại · Người bán hàng & đối tác",
    ),
  },
  seller: {
    headingLead: t("We're building a seller network.", "Chúng tôi đang xây dựng một mạng lưới bán hàng."),
    headingAccent: t("By application.", "Tham gia thông qua đăng ký."),
    items: [
      {
        title: t("What you'd sell", "Bạn sẽ bán gì?"),
        line: t(
          "ZAD brand identity. BOND gifting and packaging.",
          "Nhận diện thương hiệu của ZAD. Quà tặng và bao bì của BOND.",
        ),
      },
      {
        title: t("Who it's for", "Dành cho ai?"),
        line: t(
          "Vietnam-based. Consultants, agency people, network members, salespeople with real relationships.",
          "Những người đang ở Việt Nam: chuyên gia tư vấn, người làm agency, thành viên trong mạng lưới và những người làm sales có mối quan hệ thực chất.",
        ),
      },
      {
        title: t("Where it stands", "Hiện tại thế nào?"),
        line: t(
          "Invitation only while we build the first group. Applications open.",
          "Trong giai đoạn đầu, mạng lưới hoạt động theo hình thức chỉ dành cho người được mời. Hiện đã mở đăng ký.",
        ),
      },
    ],
    apply: t("Apply", "Đăng ký"),
    applySubject: t("Seller network application", "Đăng ký mạng lưới bán hàng"),
  },
  contact: {
    titleLead: t(
      "Know someone who belongs in one of these rooms?",
      "Biết ai phù hợp với một trong những mạng lưới này?",
    ),
    titleAccent: t("Introduce them.", "Hãy kết nối họ với chúng tôi."),
  },
};
