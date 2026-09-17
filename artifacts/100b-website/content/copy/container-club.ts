import type { Dict } from "../locale";

const t = (en: string, vi: string): Dict<string> => ({ en, vi });

export const containerClubCopy = {
  meta: {
    title: t("Container Club", "Container Club"),
    description: t(
      "Buy from the factory. Pay a commission, not a markup. Sourcing, factory vetting, quality control, freight, and the trade network behind it.",
      "Mua trực tiếp từ nhà máy. Trả phí dịch vụ, không trả giá chênh. Tìm nguồn hàng, thẩm định nhà máy, kiểm soát chất lượng, vận chuyển và mạng lưới thương mại phía sau.",
    ),
  },
  hero: {
    line1: t("Buy from the factory.", "Mua trực tiếp từ nhà máy."),
    line2: t("Pay a commission, not a markup.", "Trả phí dịch vụ, không trả giá chênh."),
    lead: t(
      "100B's trade arm. Sourcing, factory vetting, quality control, freight, and the network behind it.",
      "Mảng thương mại của 100B, phụ trách tìm nguồn hàng, thẩm định nhà máy, kiểm soát chất lượng, vận chuyển và toàn bộ mạng lưới phía sau.",
    ),
    meta: t("Led by Tung Cao and Tu Mac", "Phụ trách bởi Tung Cao và Tu Mac"),
  },
  commission: {
    to: t("to", "đến"),
    word: t("commission.", "phí dịch vụ."),
    lead: t(
      "We don't buy your goods and resell them at a margin you can't see. You pay the factory. You pay us a commission.",
      "Chúng tôi không mua hàng rồi bán lại với một mức chênh lệch mà bạn không thể nhìn thấy. Bạn thanh toán trực tiếp cho nhà máy và trả cho chúng tôi một khoản phí dịch vụ.",
    ),
    note: t(
      "Trips are priced separately, by application. If we do business afterward, the trip fee comes off your first commission.",
      "Các chuyến đi được báo giá riêng tùy theo nhu cầu. Nếu hai bên tiếp tục hợp tác sau chuyến đi, chi phí chuyến đi sẽ được khấu trừ vào khoản phí dịch vụ đầu tiên.",
    ),
  },
  opportunity: {
    headingLead: t("Materials are the one cost", "Vật liệu là một trong những khoản chi phí"),
    headingAccent: t("you can control.", "bạn có thể chủ động kiểm soát."),
    lead: t(
      "Flooring, tile, cabinets, windows, doors, panels, roofing, steel. Typically 25-35% of construction cost. Most US buyers pay 3 to 4 times the factory price through domestic distribution.",
      "Sàn, gạch, tủ, cửa sổ, cửa ra vào, tấm ốp, vật liệu mái, thép. Thông thường chiếm 25-35% tổng chi phí xây dựng. Phần lớn người mua tại Mỹ phải trả mức giá cao gấp 3 đến 4 lần giá xuất xưởng thông qua hệ thống phân phối trong nước.",
    ),
    labels: [
      t("Savings going direct", "Mức tiết kiệm khi mua trực tiếp"),
      t(
        "Vietnam's construction and furniture exports, 2024",
        "Kim ngạch xuất khẩu vật liệu xây dựng và nội thất của Việt Nam, 2024",
      ),
      t("Domestic distribution markup", "Mức chênh qua hệ thống phân phối trong nước"),
      t("Vietnam's global rank in furniture exports", "Vị trí của Việt Nam trên thế giới về xuất khẩu nội thất"),
    ],
  },
  whatWeDo: {
    items: [
      {
        title: t("Factory audit and vetting.", "Thẩm định và kiểm tra nhà máy."),
        line: t("Pre-screened before you arrive.", "Nhà máy được sàng lọc trước khi bạn đến."),
      },
      {
        title: t("Quality control.", "Kiểm soát chất lượng."),
        line: t(
          "Samples, mid-run checks, final inspection, ground QC.",
          "Từ mẫu thử, kiểm tra giữa quá trình sản xuất đến nghiệm thu cuối cùng, với đội ngũ QC tại chỗ.",
        ),
      },
      {
        title: t("Logistics.", "Logistics."),
        line: t(
          "Container loading, customs, forwarding, delivery.",
          "Đóng container, hải quan, giao nhận và vận chuyển đến nơi nhận hàng.",
        ),
      },
      {
        title: t("Your procurement team.", "Đội ngũ thu mua của bạn."),
        line: t(
          "Spec to delivery. No overseas hire.",
          "Từ yêu cầu kỹ thuật đến khi giao hàng. Không cần tuyển riêng một đội ngũ ở nước ngoài.",
        ),
      },
      {
        title: t("Capital.", "Nguồn vốn."),
        line: t(
          "US projects connected to Vietnamese capital seeking US exposure.",
          "Kết nối các dự án tại Mỹ với nguồn vốn Việt Nam đang tìm kiếm cơ hội đầu tư tại thị trường Mỹ.",
        ),
      },
    ],
    factoryFloor: t("Factory floor", "Tại nhà máy"),
    jobSite: t("Job site", "Tại công trình"),
  },
  trip: {
    headingLead: t("What it", "Hành trình"),
    headingAccent: t("looked like.", "thực tế."),
    para1: t(
      "May to June 2026. Ho Chi Minh City to Hanoi. 14 hand-picked factories in construction and finishing materials. Decision-makers only: general contractor principals, development partners, and the architects who choose materials.",
      "Tháng 5 đến tháng 6/2026. TP. Hồ Chí Minh đến Hà Nội. 14 nhà máy được tuyển chọn trong lĩnh vực vật liệu xây dựng và hoàn thiện. Thành phần tham gia chỉ gồm những người có quyền quyết định: chủ doanh nghiệp tổng thầu, đối tác phát triển dự án và các kiến trúc sư trực tiếp lựa chọn vật liệu.",
    ),
    hostedWith: t("Hosted with", "Chương trình được tổ chức cùng"),
    certs: t(
      "ASTM, LEED, ISO, FSC certified. Suppliers to California's tallest building and US Marriott properties.",
      "Các nhà cung cấp đạt chứng nhận ASTM, LEED, ISO, FSC, trong đó có những đơn vị cung cấp cho tòa nhà cao nhất California và các khách sạn Marriott tại Mỹ.",
    ),
    route: t("The route", "Lộ trình"),
    stops: [
      { city: t("Ho Chi Minh City", "TP. Hồ Chí Minh"), note: t("Start", "Điểm xuất phát") },
      { city: t("Binh Duong · Dong Nai", "Bình Dương · Đồng Nai"), note: t("Factories", "Tham quan nhà máy") },
      { city: t("Hanoi", "Hà Nội"), note: t("Finish", "Điểm kết thúc") },
    ],
    factoriesStat: t("Factories", "Nhà máy"),
    citiesStat: t("Cities", "Thành phố"),
    factoriesHeading: t("Factories", "Các nhà máy"),
    fullProgram: t("See the full program", "Xem toàn bộ chương trình"),
    factoryVisit: t("Factory visit", "Tham quan nhà máy"),
    factoryNames: [
      t("An Cuong", "An Cường"),
      t("Slabstone", "Slabstone"),
      t("BM Windows", "BM Windows"),
      t("Phu Tai and Vina G7", "Phú Tài và Vina G7"),
      t("Dai Dung", "Đại Dũng"),
      t("AA Corporation", "AA Corporation"),
      t("Eurowindow", "Eurowindow"),
      t("An Phat Holdings", "An Phát Holdings"),
      t("Woodsland", "Woodsland"),
      t("The One", "The One"),
      t("Tonmat", "Tôn Mát"),
      t("Amy Grupo", "Amy Grupo"),
      t("Jager", "Jager"),
      t("EuroStark", "EuroStark"),
    ],
  },
  repeats: {
    headingLead: t("One example,", "Một ví dụ,"),
    headingAccent: t("not the whole model.", "không phải toàn bộ mô hình."),
    intro: t(
      "Vietnam. Construction materials. Texas buyers. That was the first one.",
      "Việt Nam. Vật liệu xây dựng. Người mua tại Texas. Đó là nơi chúng tôi bắt đầu.",
    ),
    items: [
      {
        title: t("Other industries.", "Những ngành khác."),
        line: t("Beyond construction and finishing.", "Không chỉ vật liệu xây dựng và hoàn thiện."),
      },
      {
        title: t("Other origins.", "Những nguồn cung khác."),
        line: t("Across Asia and beyond.", "Mở rộng sang châu Á và các thị trường khác."),
      },
      {
        title: t("Other buyers.", "Những người mua khác."),
        line: t(
          "Europe and other international markets.",
          "Phục vụ khách hàng tại châu Âu và các thị trường quốc tế.",
        ),
      },
      {
        title: t("Other partners.", "Những đối tác khác."),
        line: t(
          "Bring a buyer group, we build the program.",
          "Bạn mang đến một nhóm khách hàng, chúng tôi xây dựng chương trình phù hợp.",
        ),
      },
    ],
    cta: t("Talk to us about a sourcing program", "Trao đổi về chương trình tìm nguồn hàng"),
  },
  specMate: {
    kicker: t(
      "When we find a category worth owning.",
      "Khi tìm thấy một ngành hàng đủ lớn để sở hữu.",
    ),
    body: t(
      "When a product category is big enough to be worth owning, we build a company around it instead of just sourcing it. SpecMate supplies materials and furniture direct to contractors, multi-origin, built with LT Commercial Group.",
      "Khi một ngành hàng đủ lớn để tạo thành một cơ hội kinh doanh riêng, chúng tôi xây dựng một công ty xoay quanh ngành hàng đó thay vì chỉ dừng lại ở việc tìm nguồn cung. SpecMate cung cấp trực tiếp vật liệu và nội thất cho các nhà thầu, với nguồn hàng từ nhiều quốc gia, được xây dựng cùng LT Commercial Group.",
    ),
  },
  network: {
    headingLead: t("The people who make trade work", "Những người làm thương mại"),
    headingAccent: t("deserve a room of their own.", "cần một cộng đồng của riêng mình."),
    vetted: t("Vetted, not listed.", "Được thẩm định, không chỉ được liệt kê."),
    vettedRest: t(
      "Introduced by someone already in. No cold applications.",
      "Chúng tôi chỉ giới thiệu những đối tác đã được kiểm chứng, thông qua mạng lưới sẵn có, không phải những hồ sơ đăng ký đại trà.",
    ),
    items: [
      t("Freight forwarders", "Đơn vị giao nhận"),
      t("Customs brokers", "Đại lý hải quan"),
      t("Verified buyers", "Người mua đã được xác minh"),
      t("Factory reps", "Đại diện nhà máy"),
      t("Trade finance", "Tài chính thương mại"),
      t("Compliance advisors", "Chuyên gia tuân thủ"),
    ],
    link: t("Communities", "Tham gia cộng đồng"),
  },
  contact: {
    titleLead: t("Tell us what", "Bạn đang tìm"),
    titleAccent: t("you're sourcing.", "nguồn hàng gì?"),
  },
};
