import type { Dict } from "../locale";

const t = (en: string, vi: string): Dict<string> => ({ en, vi });

export const goGlobalCopy = {
  meta: {
    title: t("Go Global", "Go Global"),
    description: t(
      "For Vietnamese brands entering the US. We start a US company with you and own part of it. Equity, 3% to 20%.",
      "Dành cho thương hiệu Việt vào thị trường Mỹ. Chúng tôi cùng bạn xây dựng doanh nghiệp tại Mỹ và sở hữu một phần trong đó. Cổ phần từ 3% đến 20%.",
    ),
  },
  hero: {
    line1: t("You built the brand in Vietnam.", "Doanh nghiệp đã xây dựng thương hiệu tại Việt Nam."),
    line2: t("America is a different job.", "Nhưng nước Mỹ là một cuộc chơi khác."),
    lead: t(
      "We start a US company with you and own part of it.",
      "Chúng tôi đồng hành cùng bạn xây dựng doanh nghiệp tại Mỹ ngay từ những bước đầu tiên.",
    ),
    meta: t("Vietnamese brands at $20M-$100M", "Thương hiệu Việt có doanh thu 20-100 triệu USD"),
  },
  problems: {
    headingLead: t("Most Vietnamese brands enter the US", "Nhiều thương hiệu Việt đang chọn cách tốn kém nhất"),
    headingAccent: t("the expensive way.", "để bước vào thị trường Mỹ."),
    items: [
      t(
        "An American agency that has never sold a Vietnamese product",
        "Thuê một agency Mỹ chưa từng bán sản phẩm Việt Nam",
      ),
      t("Amazon, and hope", "Đưa hàng lên Amazon và chờ đợi"),
      t(
        "A distributor who owns the customer forever",
        "Phụ thuộc vào một nhà phân phối và dần mất quyền kiểm soát khách hàng",
      ),
      t(
        "Two years learning what a partner on the ground already knew",
        "Mất hai năm tự mày mò những điều mà một đối tác tại thị trường đã biết từ trước",
      ),
    ],
  },
  whatWeDo: [
    {
      title: t("We build the US company.", "Chúng tôi cùng bạn xây dựng doanh nghiệp tại Mỹ."),
      line: t(
        "Entity, brand, positioning, go-to-market. Built for an American buyer, not translated from a Vietnamese one.",
        "Từ pháp nhân, thương hiệu, định vị đến chiến lược thâm nhập thị trường. Mọi thứ đều được xây dựng cho người tiêu dùng Mỹ, thay vì mang nguyên mô hình từ Việt Nam sang.",
      ),
    },
    {
      title: t("We open the rooms.", "Chúng tôi mở cánh cửa."),
      line: t(
        "Distribution, retail, capital, chambers of commerce.",
        "Kết nối với hệ thống phân phối, bán lẻ, nguồn vốn và các hiệp hội doanh nghiệp.",
      ),
    },
    {
      title: t("We stay in it.", "Chúng tôi đồng hành đến cùng."),
      line: t(
        "Board seat, hands on the business, and a call when it breaks.",
        "Tham gia vào ban lãnh đạo, trực tiếp cùng bạn vận hành doanh nghiệp và có mặt khi vấn đề phát sinh.",
      ),
    },
  ],
  money: {
    headingLead: t("How we", "Chúng tôi kiếm tiền"),
    headingAccent: t("make money.", "như thế nào?"),
    equityStrong: t("Of the US company", "Phần sở hữu trong công ty tại Mỹ"),
    equityRest: t(
      ", depending on scope and stage. When we take a smaller share, we add a retainer and success fees.",
      ", tùy theo quy mô công việc và giai đoạn phát triển. Với những dự án mà chúng tôi sở hữu tỷ lệ nhỏ hơn, mô hình hợp tác sẽ kết hợp thêm phí cố định và phí theo kết quả.",
    ),
    fiveStrong: t("Companies under one roof.", "Công ty cùng trong một hệ sinh thái."),
    fiveRest: t(
      "We own ZAD, 100Bold, BOND, and Container Club, so when we advise you on branding or freight, we've done the work ourselves.",
      "Chúng tôi sở hữu ZAD, 100Bold, BOND và Container Club. Vì vậy, khi tư vấn cho bạn về thương hiệu hay logistics, chúng tôi không chỉ đưa ra lời khuyên, chúng tôi đã trực tiếp làm những việc đó.",
    ),
    closingLead: t("We make money when your US company is", "Chúng tôi chỉ thực sự tạo ra giá trị khi"),
    closingAccent: t("worth something.", "doanh nghiệp tại Mỹ của bạn có giá trị."),
  },
  fit: {
    figure: t("$20M to $100M", "20-100 triệu USD"),
    lead: t(
      "in revenue. Established in Vietnam. Ready to give up part of a new company for a partner who does the work, not just advises.",
      "doanh thu. Đã có vị thế vững chắc tại Việt Nam và sẵn sàng chia sẻ quyền sở hữu trong một doanh nghiệp mới với đối tác cùng trực tiếp xây dựng và phát triển.",
    ),
    underTitle: t("Under $20M?", "Chưa đạt 20 triệu USD?"),
    underLine: t(
      "The equity model doesn't fit yet. Our companies do.",
      "Mô hình hợp tác bằng cổ phần có thể chưa phù hợp ở giai đoạn này. Nhưng các công ty trong hệ sinh thái 100B vẫn có thể đồng hành cùng bạn.",
    ),
    underLink: t("Ecosystem", "Khám phá hệ sinh thái"),
  },
  path: {
    steps: [
      t("Identity", "Nhận diện"),
      t("Packaging", "Bao bì"),
      t("Marketing", "Marketing"),
      t("Export", "Xuất khẩu"),
      t("Your US company", "Doanh nghiệp tại Mỹ"),
    ],
    note: t("You hire each one separately.", "Bạn có thể sử dụng từng công ty độc lập."),
  },
  proof: {
    headingLead: t("What Vietnamese founders", "Những nhà sáng lập Việt Nam"),
    headingAccent: t("say.", "nói gì?"),
    groupLabel: t("Vietnamese founders", "Nhà sáng lập Việt Nam"),
  },
  contact: {
    titleLead: t("Tell us about", "Hãy kể chúng tôi nghe về"),
    titleAccent: t("your brand.", "thương hiệu của bạn."),
  },
};
