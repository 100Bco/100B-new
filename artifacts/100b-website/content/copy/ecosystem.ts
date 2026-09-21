import type { Dict } from "../locale";

const t = (en: string, vi: string): Dict<string> => ({ en, vi });

export const ecosystemCopy = {
  meta: {
    title: t("Ecosystem", "Hệ sinh thái"),
    description: t(
      "Five companies. Each stands on its own. 100B, Container Club, ZAD, 100Bold, and BOND. Every one takes outside clients, under one standard and one team.",
      "Năm công ty. Mỗi công ty hoạt động độc lập. 100B, Container Club, ZAD, 100Bold và BOND. Mỗi công ty đều nhận khách hàng bên ngoài, dưới một tiêu chuẩn và một đội ngũ.",
    ),
  },
  hero: {
    line1: t("Five companies.", "Năm công ty."),
    line2: t("Each stands on its own.", "Mỗi công ty một thế mạnh riêng."),
    lead: t("Every one takes outside clients.", "Mỗi công ty đều hoạt động độc lập và phục vụ nhóm khách hàng riêng."),
    metaTeam: t("One team, one standard", "Một đội ngũ. Một chuẩn mực chung."),
  },
  ladder: [
    { range: t("$5M-$20M", "5-20 triệu USD"), who: t("ZAD, 100Bold, BOND", "ZAD, 100Bold, BOND") },
    {
      range: t("$20M+", "20 triệu USD trở lên"),
      who: t("all of it, plus 100B in the US company", "Tất cả các công ty trên, cùng 100B tại Mỹ"),
    },
    {
      range: t("Moving goods, any size", "Mọi quy mô, mọi nhu cầu về hàng hóa"),
      who: t("Container Club", "Container Club"),
    },
  ],
  axis: {
    revenue: t("Revenue", "Doanh thu"),
    companies: t("Companies", "Công ty"),
  },
  rule: {
    headingLead: t("We own", "Chúng tôi sở hữu"),
    headingAccent: t("these companies.", "những công ty này."),
    lead: t(
      "One standard, one team, one accountable party across everything you need.",
      "Một chuẩn mực chung. Một đội ngũ. Một đầu mối chịu trách nhiệm xuyên suốt cho mọi nhu cầu của bạn.",
    ),
  },
  contact: {
    titleLead: t("Not sure which company fits?", "Chưa rõ công ty nào phù hợp?"),
    titleAccent: t("Ask us.", "Hãy trao đổi với chúng tôi."),
  },
};
