import type { Dict } from "../locale";

/**
 * The words that live in the chrome rather than on any one page: the nav, the
 * footer, the closing contact block, the carousel controls, and the two
 * components that carry their own prose.
 *
 * Where a line is broken across two spans in the markup, it is stored broken
 * the same way, so the gold half stays gold in both languages instead of the
 * emphasis landing on whatever words happen to fall in the same position.
 */
export const ui = {
  nav: {
    cta: { en: "Start a Conversation", vi: "Bắt đầu trò chuyện" },
    toggleMenu: { en: "Toggle menu", vi: "Mở menu" },
    /** The switcher announces what it will switch to, not where you are. */
    switchTo: { en: "Xem bản tiếng Việt", vi: "View in English" },
  },

  footer: {
    tagline: { en: "Giữa hai thế giới.", vi: "Giữa hai thế giới." },
    contact: { en: "Contact:", vi: "Liên hệ:" },
    cities: { en: "Austin · Hanoi · Ho Chi Minh City", vi: "Austin · Hà Nội · TP. Hồ Chí Minh" },
    rights: { en: "© 2026 100B Beyond Borders.", vi: "© 2026 100B Beyond Borders." },
    poweredBy: { en: "Powered by", vi: "Phát triển bởi" },
  },

  contact: {
    note: {
      en: "Read by one of us. We reply within 48 hours.",
      vi: "Tin nhắn của bạn sẽ được đội ngũ 100B phản hồi trong vòng 48 giờ.",
    },
  },

  carousel: {
    prevTestimonial: { en: "Previous testimonial", vi: "Cảm nhận trước" },
    nextTestimonial: { en: "Next testimonial", vi: "Cảm nhận tiếp theo" },
    prevPress: { en: "Previous press article", vi: "Bài báo trước" },
    nextPress: { en: "Next press article", vi: "Bài báo tiếp theo" },
    prevPhoto: { en: "Previous photo", vi: "Ảnh trước" },
    nextPhoto: { en: "Next photo", vi: "Ảnh tiếp theo" },
    goToSlide: { en: "Go to slide", vi: "Đến mục" },
  },

  press: {
    readMore: { en: "Read more", vi: "Đọc thêm" },
  },

  theName: {
    mountains: { en: "to the mountains", vi: "lên núi" },
    sea: { en: "to the sea", vi: "xuống biển" },
    /* Split so the mark can take the UTM face the rest of the site gives
       every 100B numeral. English has no mark in this line, so its middle
       and tail are empty and the heading renders exactly as before. */
    headingBefore: { en: "Where the name comes from.", vi: "Cái tên " },
    headingMark: { en: "", vi: "100B" },
    headingAfter: { en: "", vi: " từ một câu chuyện rất Việt Nam!" },
    legend: {
      en: "Âu Cơ bore one hundred children. Fifty went to the mountains with their mother. Fifty went to the sea with their father.",
      vi: "Truyền thuyết kể rằng Âu Cơ sinh ra một bọc trăm trứng, nở thành một trăm người con. Năm mươi người con theo mẹ lên núi. Năm mươi người con theo cha xuống biển.",
    },
    oldestStory: {
      en: "Vietnam's oldest story is about going out into the world.",
      vi: "Từ thuở đầu, người Việt đã mang trong mình một câu chuyện về đi xa, gây dựng, tìm và khai hoang một miền đất mới.",
    },
    perfectScore: { en: "is also a perfect score.", vi: "đại diện cho một trăm người con, cũng là một con số trọn vẹn." },
    isFor: { en: "is for Brands. Borders. Billions.", vi: "là viết tắt của Brands. Borders. Billions. Thương hiệu. Biên giới. Tỷ đô." },
  },

  orbit: {
    headingLead: { en: "Five companies.", vi: "Năm mảnh ghép." },
    headingAccent: { en: "One corridor.", vi: "Cùng một hành trình." },
    scaleLead: {
      en: "A brand at $5M might use two. A brand at $50M often uses",
      vi: "Không phải doanh nghiệp nào cũng cần cả năm công ty ngay từ đầu. Khi thương hiệu ở quy mô 5 triệu USD, thương hiệu có thể chỉ cần 2 công ty. Nhưng khi quy mô lên tới 50 triệu USD, cũng là lúc",
    },
    scaleEmphasis: { en: "all five.", vi: "sức mạnh của toàn bộ hệ sinh thái bắt đầu phát huy giá trị." },
    link: { en: "All five companies", vi: "Khám phá toàn bộ hệ sinh thái" },
  },

  distribution: {
    heading: { en: "How the chain changes", vi: "Chuỗi cung ứng thay đổi như thế nào?" },
    factory: { en: "Factory", vi: "Nhà máy" },
    distributor: { en: "Distributor", vi: "Nhà phân phối" },
    wholesaler: { en: "Wholesaler", vi: "Nhà bán buôn" },
    retailer: { en: "Retailer", vi: "Nhà bán lẻ" },
    developers: { en: "Developers", vi: "Chủ đầu tư" },
    andContractors: { en: "and contractors", vi: "và nhà thầu" },
    strategicPartner: { en: "Strategic partner", vi: "Đối tác chiến lược" },
    onePartner: {
      en: "One strategic partner, not a chain of middlemen",
      vi: "Một đối tác chiến lược, thay vì cả một chuỗi trung gian",
    },
    visibleCommission: {
      en: "Visible commission. You pay the factory direct",
      vi: "Phí dịch vụ minh bạch. Bạn thanh toán trực tiếp cho nhà máy",
    },
    chainAlt: {
      en: "The distribution chain runs factory, distributor, wholesaler, retailer, buyer. The three in the middle drop out and 100B stands in their place, leaving factory, 100B, buyer.",
      vi: "Chuỗi phân phối thông thường đi qua nhà máy, nhà phân phối, nhà bán buôn, nhà bán lẻ rồi đến người mua. Ba khâu trung gian ở giữa được loại bỏ, 100B đứng vào vị trí đó, còn lại nhà máy, 100B, người mua.",
    },
  },
} satisfies Record<string, Record<string, Dict<string>>>;
