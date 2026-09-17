import type { Dict } from "../locale";

const t = (en: string, vi: string): Dict<string> => ({ en, vi });

export const aboutCopy = {
  meta: {
    title: t("About", "Về chúng tôi"),
    description: t(
      "Between two worlds. Giữa hai thế giới. Who 100B is, where the name comes from, and how we work: equity and commissions, never a markup, partner not middleman, in both rooms.",
      "Giữa hai thế giới. 100B là ai, cái tên đến từ đâu, và chúng tôi làm việc thế nào: cổ phần và phí dịch vụ, không bao giờ cộng chênh lệch, là đối tác chứ không phải trung gian, có mặt ở cả hai phía.",
    ),
  },
  hero: {
    /* The two lines are the positioning itself, one in each language, so they
       stay paired on the Vietnamese page rather than collapsing to one. */
    line1: t("Between two worlds.", "Between two worlds."),
    line2: t("Giữa hai thế giới.", "Giữa hai thế giới."),
    metaCities: t("Austin · Hanoi · Ho Chi Minh City", "Austin · Hà Nội · TP. Hồ Chí Minh"),
    metaFounders: t("Three founders · Both sides", "Ba nhà sáng lập · Kết nối hai phía"),
  },
  founders: {
    headingLead: t("Three founders.", "Ba nhà sáng lập."),
    headingAccent: t("Two countries.", "Hai quốc gia."),
  },
  howWeWork: {
    headingLead: t("How we", "Cách chúng tôi"),
    headingAccent: t("work.", "làm việc."),
    items: [
      {
        en: t("Equity, retainers, commissions.", "Cổ phần, phí cố định, phí dịch vụ."),
        enSub: t("Never a markup.", "Không bao giờ cộng chênh lệch."),
      },
      { en: t("Partner, not middleman.", "Là đối tác, không phải trung gian."), enSub: t("", "") },
      { en: t("We say no a lot.", "Chúng tôi từ chối rất nhiều."), enSub: t("", "") },
      { en: t("We're in both rooms.", "Chúng tôi có mặt ở cả hai phía."), enSub: t("", "") },
    ],
  },
  press: {
    headingLead: t("In the", "Truyền thông"),
    headingAccent: t("press.", "nói gì?"),
  },
  contact: {
    titleLead: t("Between two worlds.", "Giữa hai thế giới."),
    titleAccent: t("Reach either one.", "Kết nối với cả hai."),
    meta: t("Austin · Hanoi · Ho Chi Minh City", "Austin · Hà Nội · TP. Hồ Chí Minh"),
    note: t("We reply within 48 hours.", "Chúng tôi phản hồi trong vòng 48 giờ."),
  },
};
