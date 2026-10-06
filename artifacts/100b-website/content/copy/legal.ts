import type { Dict } from "../locale";

const t = (en: string, vi: string): Dict<string> => ({ en, vi });

/**
 * The legal pages, written against what this site actually does rather than
 * from a template: there is no form, no account and no sign-in anywhere on
 * it, so the only data that moves is what a visit to any web page produces,
 * plus what the two embedded services collect. Keep it that way, or update
 * these words the same day the site changes.
 */

export type LegalSection = {
  heading: Dict<string>;
  /** Paragraphs, then an optional list under them. */
  body?: Dict<string>[];
  items?: Dict<string>[];
};

export type LegalDoc = {
  slug: string;
  title: Dict<string>;
  lead: Dict<string>;
  meta: { title: Dict<string>; description: Dict<string> };
  sections: LegalSection[];
};

export const legalCopy = {
  /** One date for all three, so they are reviewed together. */
  updated: t("Last updated 6 October 2026", "Cập nhật lần cuối ngày 6 tháng 10 năm 2026"),
  contactLead: t("Questions about any of this:", "Mọi câu hỏi liên quan, vui lòng liên hệ:"),
  cta: {
    titleLead: t("Still have", "Vẫn còn"),
    titleAccent: t("a question?", "câu hỏi?"),
  },
  labels: {
    privacy: t("Privacy", "Quyền riêng tư"),
    terms: t("Terms", "Điều khoản"),
    disclaimer: t("Disclaimer", "Miễn trừ trách nhiệm"),
  },
};

const privacy: LegalDoc = {
  slug: "privacy",
  title: t("Privacy Policy", "Chính sách quyền riêng tư"),
  lead: t(
    "This site has no forms, no accounts and no sign-in. Nothing on it asks you for your name, and nothing stores one. What follows is the whole of what happens to data when you read these pages.",
    "Trang web này không có biểu mẫu, không có tài khoản và không có đăng nhập. Không mục nào hỏi tên bạn, và không mục nào lưu lại. Dưới đây là toàn bộ những gì xảy ra với dữ liệu khi bạn đọc các trang này.",
  ),
  meta: {
    title: t("Privacy Policy", "Chính sách quyền riêng tư"),
    description: t(
      "What 100B collects when you read this site, who processes it, and the rights you have over it.",
      "100B thu thập gì khi bạn đọc trang web này, ai xử lý dữ liệu đó, và bạn có những quyền gì.",
    ),
  },
  sections: [
    {
      heading: t("Who we are", "Chúng tôi là ai"),
      body: [
        t(
          "100B Beyond Borders operates this site and the companies described on it. We work between Vietnam and the United States, with people in Austin, Hanoi and Ho Chi Minh City. For anything in this policy, write to global@100b.co.",
          "100B Beyond Borders vận hành trang web này và các công ty được giới thiệu trên đó. Chúng tôi hoạt động giữa Việt Nam và Hoa Kỳ, với đội ngũ tại Austin, Hà Nội và Thành phố Hồ Chí Minh. Với mọi vấn đề trong chính sách này, vui lòng gửi thư tới global@100b.co.",
        ),
      ],
    },
    {
      heading: t("What this site collects", "Trang web này thu thập gì"),
      body: [
        t(
          "There is no contact form on this site. Every way of reaching us is a mailto link that opens your own email program, so we receive nothing until you choose to press send.",
          "Trang web này không có biểu mẫu liên hệ. Mọi cách liên hệ đều là liên kết mailto mở chương trình email của chính bạn, nên chúng tôi không nhận được gì cho tới khi bạn chủ động bấm gửi.",
        ),
        t("Three things are collected without you doing anything:", "Ba nhóm dữ liệu được ghi nhận mà bạn không cần thao tác gì:"),
      ],
      items: [
        t(
          "Server logs. Our host records the usual request data: IP address, browser and device type, the page requested, the referring page and the time. This is how any web server works and how we see that the site is up.",
          "Nhật ký máy chủ. Đơn vị lưu trữ ghi lại dữ liệu yêu cầu thông thường: địa chỉ IP, loại trình duyệt và thiết bị, trang được yêu cầu, trang giới thiệu đến và thời điểm truy cập. Đây là cách mọi máy chủ web hoạt động và là cách chúng tôi biết trang có đang chạy hay không.",
        ),
        t(
          "Analytics. We use Ahrefs Web Analytics to count visits and see which pages are read. It does not set cookies and does not build a profile of you across sites.",
          "Phân tích truy cập. Chúng tôi dùng Ahrefs Web Analytics để đếm lượt truy cập và xem trang nào được đọc. Công cụ này không đặt cookie và không xây dựng hồ sơ theo dõi bạn qua nhiều trang web.",
        ),
        t(
          "Video. Some pages embed a Wistia player. Wistia sets cookies and records playback data such as how much of a video was watched. These are the only cookies this site causes to be set.",
          "Video. Một số trang nhúng trình phát Wistia. Wistia đặt cookie và ghi nhận dữ liệu phát như thời lượng video đã xem. Đây là những cookie duy nhất mà trang web này tạo ra.",
        ),
      ],
    },
    {
      heading: t("Cookies", "Cookie"),
      body: [
        t(
          "We set no cookies of our own. We store nothing in your browser. The only cookies you may receive come from the Wistia player on the pages that carry a video, and you can block or clear them in your browser settings without losing anything else on the site.",
          "Chúng tôi không đặt cookie của riêng mình và không lưu gì trong trình duyệt của bạn. Cookie duy nhất bạn có thể nhận đến từ trình phát Wistia trên những trang có video, và bạn có thể chặn hoặc xóa chúng trong cài đặt trình duyệt mà không ảnh hưởng tới phần còn lại của trang.",
        ),
      ],
    },
    {
      heading: t("Email you send us", "Email bạn gửi cho chúng tôi"),
      body: [
        t(
          "If you write to us, we keep your message and your address for as long as the conversation is live and for as long afterwards as our records require. We use it to reply to you and for nothing else. We do not sell it, rent it, or add it to a marketing list you did not ask to join.",
          "Nếu bạn gửi thư cho chúng tôi, chúng tôi lưu nội dung và địa chỉ của bạn trong suốt thời gian trao đổi và thời gian lưu trữ hồ sơ cần thiết sau đó. Chúng tôi chỉ dùng để trả lời bạn, không dùng cho mục đích nào khác. Chúng tôi không bán, không cho thuê và không thêm bạn vào danh sách tiếp thị mà bạn chưa đồng ý.",
        ),
      ],
    },
    {
      heading: t("Who processes it", "Ai xử lý dữ liệu"),
      body: [
        t(
          "Three companies process data on our behalf, each under its own terms and its own privacy policy:",
          "Ba đơn vị xử lý dữ liệu thay chúng tôi, mỗi bên theo điều khoản và chính sách riêng của họ:",
        ),
      ],
      items: [
        t("Vercel, which hosts and serves this site.", "Vercel, đơn vị lưu trữ và phân phối trang web này."),
        t("Ahrefs, which provides the analytics.", "Ahrefs, đơn vị cung cấp công cụ phân tích truy cập."),
        t("Wistia, which serves the video.", "Wistia, đơn vị cung cấp dịch vụ video."),
      ],
    },
    {
      heading: t("Where it goes", "Dữ liệu được chuyển đi đâu"),
      body: [
        t(
          "We work across Vietnam and the United States, and the services above operate internationally. Data described here may be processed outside the country you are reading from, including in the United States. Where the law requires a safeguard for that transfer, we rely on the contractual terms our providers offer.",
          "Chúng tôi hoạt động giữa Việt Nam và Hoa Kỳ, và các dịch vụ nêu trên vận hành trên phạm vi quốc tế. Dữ liệu mô tả tại đây có thể được xử lý bên ngoài quốc gia nơi bạn truy cập, bao gồm cả Hoa Kỳ. Khi pháp luật yêu cầu biện pháp bảo đảm cho việc chuyển dữ liệu đó, chúng tôi áp dụng các điều khoản hợp đồng mà nhà cung cấp đưa ra.",
        ),
      ],
    },
    {
      heading: t("Your rights", "Quyền của bạn"),
      body: [
        t(
          "Depending on where you live, you may have the right to ask what we hold about you, to have it corrected or deleted, to object to how it is used, to withdraw a consent you gave, and to complain to a regulator. This covers readers in Vietnam under its personal data protection rules, in the European Economic Area and the United Kingdom under the GDPR, and in US states with their own privacy statutes.",
          "Tùy nơi bạn sinh sống, bạn có thể có quyền yêu cầu biết chúng tôi đang giữ dữ liệu gì về mình, yêu cầu chỉnh sửa hoặc xóa, phản đối cách sử dụng, rút lại sự đồng ý đã cho, và khiếu nại tới cơ quan quản lý. Điều này áp dụng cho người đọc tại Việt Nam theo quy định bảo vệ dữ liệu cá nhân, tại Khu vực Kinh tế châu Âu và Vương quốc Anh theo GDPR, và tại các bang Hoa Kỳ có luật riêng về quyền riêng tư.",
        ),
        t(
          "Write to global@100b.co and we will answer within the time the applicable law allows. We do not sell personal information and we do not share it for cross-context behavioural advertising.",
          "Vui lòng gửi thư tới global@100b.co, chúng tôi sẽ phản hồi trong thời hạn pháp luật cho phép. Chúng tôi không bán thông tin cá nhân và không chia sẻ thông tin đó cho mục đích quảng cáo hành vi xuyên nền tảng.",
        ),
      ],
    },
    {
      heading: t("Children", "Trẻ em"),
      body: [
        t(
          "This site is for people doing business. It is not directed at children and we do not knowingly collect anything from them. If you believe a child has sent us something, write to us and we will delete it.",
          "Trang web này dành cho người làm kinh doanh. Trang không hướng tới trẻ em và chúng tôi không chủ ý thu thập dữ liệu từ trẻ em. Nếu bạn cho rằng một trẻ em đã gửi gì đó cho chúng tôi, vui lòng báo để chúng tôi xóa.",
        ),
      ],
    },
    {
      heading: t("Changes", "Thay đổi"),
      body: [
        t(
          "If we add anything to this site that collects data, this page changes on the same day and the date at the top changes with it.",
          "Nếu chúng tôi bổ sung bất kỳ thành phần nào có thu thập dữ liệu, trang này sẽ được cập nhật ngay trong ngày và ngày ở đầu trang cũng thay đổi theo.",
        ),
      ],
    },
  ],
};

const terms: LegalDoc = {
  slug: "terms",
  title: t("Terms of Use", "Điều khoản sử dụng"),
  lead: t(
    "These terms cover this website. They are not the agreement under which we work with a client: that is a separate contract, signed.",
    "Các điều khoản này áp dụng cho trang web này. Đây không phải thỏa thuận theo đó chúng tôi làm việc với khách hàng: thỏa thuận đó là một hợp đồng riêng, có ký kết.",
  ),
  meta: {
    title: t("Terms of Use", "Điều khoản sử dụng"),
    description: t(
      "The terms that cover the 100B website: what it is, what you may do with it, and the limits of our liability for it.",
      "Các điều khoản áp dụng cho trang web 100B: trang web này là gì, bạn được làm gì với nó, và giới hạn trách nhiệm của chúng tôi.",
    ),
  },
  sections: [
    {
      heading: t("Using this site", "Sử dụng trang web"),
      body: [
        t(
          "By reading these pages you accept these terms. If you do not, please stop reading them. You may not use this site to break the law, to interfere with how it runs, or to take data from it by automated means beyond ordinary search indexing.",
          "Khi đọc các trang này, bạn chấp nhận các điều khoản nêu ở đây. Nếu không đồng ý, vui lòng ngừng sử dụng. Bạn không được dùng trang web này để vi phạm pháp luật, can thiệp vào hoạt động của trang, hoặc thu thập dữ liệu bằng công cụ tự động ngoài phạm vi lập chỉ mục tìm kiếm thông thường.",
        ),
      ],
    },
    {
      heading: t("What is on it", "Nội dung trên trang"),
      body: [
        t(
          "This site describes 100B and the companies in its ecosystem. It is written to be read, not relied on. Nothing on it is an offer, a quotation, a commitment to work together, or advice of any kind. We work with a client only under a signed agreement, and that agreement, not this site, says what we will do.",
          "Trang web này giới thiệu 100B và các công ty trong hệ sinh thái. Nội dung được viết để tham khảo, không phải để làm căn cứ ra quyết định. Không nội dung nào là đề nghị giao kết, báo giá, cam kết hợp tác hay tư vấn dưới bất kỳ hình thức nào. Chúng tôi chỉ làm việc với khách hàng theo thỏa thuận có ký kết, và thỏa thuận đó, chứ không phải trang web này, quy định những gì chúng tôi sẽ làm.",
        ),
      ],
    },
    {
      heading: t("What belongs to whom", "Quyền sở hữu"),
      body: [
        t(
          "The text, photographs, design and marks on this site belong to 100B or to the people who licensed them to us, except where they belong to someone else and are used to identify them. You may quote and link to these pages with attribution. You may not copy the site, or substantial parts of it, to publish elsewhere.",
          "Văn bản, hình ảnh, thiết kế và nhãn hiệu trên trang web này thuộc về 100B hoặc những bên đã cấp quyền cho chúng tôi, trừ trường hợp thuộc về bên khác và được sử dụng để nhận diện bên đó. Bạn được trích dẫn và dẫn liên kết tới các trang này kèm ghi nguồn. Bạn không được sao chép toàn bộ hoặc phần đáng kể của trang để đăng tải ở nơi khác.",
        ),
        t(
          "Company names, logos and trademarks of other organisations are the property of those organisations and appear here to say who they are, not to claim any endorsement by them.",
          "Tên công ty, logo và nhãn hiệu của các tổ chức khác thuộc sở hữu của chính các tổ chức đó, xuất hiện tại đây để nhận diện họ, không nhằm khẳng định họ bảo trợ cho chúng tôi.",
        ),
      ],
    },
    {
      heading: t("Links out", "Liên kết tới bên thứ ba"),
      body: [
        t(
          "This site links to other people's websites. We do not control them and we are not responsible for what they publish or for what they do with your data once you are there.",
          "Trang web này có liên kết tới website của các bên khác. Chúng tôi không kiểm soát các trang đó và không chịu trách nhiệm về nội dung họ đăng tải hay cách họ xử lý dữ liệu của bạn khi bạn đã truy cập sang.",
        ),
      ],
    },
    {
      heading: t("No warranty", "Không bảo đảm"),
      body: [
        t(
          "We keep this site accurate and current as best we can, and we make no promise that it is either. It is provided as it is, without warranty of any kind, and we do not undertake to keep it available or to update any statement on it.",
          "Chúng tôi cố gắng giữ cho trang web chính xác và cập nhật trong khả năng của mình, nhưng không cam kết điều đó. Trang được cung cấp nguyên trạng, không kèm bảo đảm dưới bất kỳ hình thức nào, và chúng tôi không cam kết duy trì trang luôn truy cập được hay cập nhật mọi thông tin trên đó.",
        ),
      ],
    },
    {
      heading: t("Limit of our liability", "Giới hạn trách nhiệm"),
      body: [
        t(
          "To the fullest extent the law allows, we are not liable for any loss arising from your use of this site or from anything you did or did not do because of it, including lost profit, lost opportunity or lost data. Nothing here limits a liability that the law does not permit us to limit.",
          "Trong phạm vi tối đa pháp luật cho phép, chúng tôi không chịu trách nhiệm đối với bất kỳ thiệt hại nào phát sinh từ việc bạn sử dụng trang web này hoặc từ bất kỳ hành động hay không hành động nào của bạn dựa trên trang web, bao gồm mất lợi nhuận, mất cơ hội hoặc mất dữ liệu. Không nội dung nào tại đây giới hạn những trách nhiệm mà pháp luật không cho phép giới hạn.",
        ),
      ],
    },
    {
      heading: t("Governing law", "Luật áp dụng"),
      body: [
        t(
          "This site is operated from Austin, Texas and Hanoi, Vietnam. These terms are governed by the laws of the State of Texas, United States, without regard to its conflict of law rules. This does not take away any protection that the mandatory law of your own country gives you, including Vietnamese consumer and personal data protection law for readers in Vietnam.",
          "Trang web này được vận hành từ Austin, Texas và Hà Nội, Việt Nam. Các điều khoản này được điều chỉnh bởi pháp luật Bang Texas, Hoa Kỳ, không áp dụng các quy tắc xung đột pháp luật. Điều này không làm mất đi bất kỳ sự bảo vệ nào mà quy định bắt buộc của pháp luật nước bạn dành cho bạn, bao gồm pháp luật Việt Nam về bảo vệ quyền lợi người tiêu dùng và bảo vệ dữ liệu cá nhân đối với người đọc tại Việt Nam.",
        ),
      ],
    },
    {
      heading: t("Changes", "Thay đổi"),
      body: [
        t(
          "We may change these terms. The date at the top of this page says when they last changed, and the version you read at the time is the one that applies to that visit.",
          "Chúng tôi có thể thay đổi các điều khoản này. Ngày ở đầu trang cho biết lần thay đổi gần nhất, và phiên bản bạn đọc tại thời điểm truy cập là phiên bản áp dụng cho lần truy cập đó.",
        ),
      ],
    },
  ],
};

const disclaimer: LegalDoc = {
  slug: "disclaimer",
  title: t("Disclaimer", "Miễn trừ trách nhiệm"),
  lead: t(
    "This site carries numbers, case histories and quotes from people we have worked with. Here is exactly what they do and do not mean.",
    "Trang web này có các con số, câu chuyện thực tế và nhận xét từ những người đã làm việc cùng chúng tôi. Dưới đây là ý nghĩa chính xác, và giới hạn, của những nội dung đó.",
  ),
  meta: {
    title: t("Disclaimer", "Miễn trừ trách nhiệm"),
    description: t(
      "What the figures, case histories and testimonials on the 100B site mean, and what they do not promise.",
      "Ý nghĩa của các con số, câu chuyện thực tế và nhận xét trên trang 100B, và những điều chúng không cam kết.",
    ),
  },
  sections: [
    {
      heading: t("Not professional advice", "Không phải tư vấn chuyên môn"),
      body: [
        t(
          "Nothing on this site is legal, tax, accounting, immigration, financial or investment advice, and reading it creates no adviser relationship between us. Before you act on anything here, take advice from someone qualified in the country the decision will land in.",
          "Không nội dung nào trên trang web này là tư vấn pháp lý, thuế, kế toán, di trú, tài chính hay đầu tư, và việc đọc trang không tạo ra quan hệ tư vấn giữa chúng tôi và bạn. Trước khi hành động dựa trên bất kỳ nội dung nào tại đây, hãy tham vấn người có chuyên môn tại quốc gia nơi quyết định đó phát sinh hiệu lực.",
        ),
      ],
    },
    {
      heading: t("Not an offer of securities", "Không phải chào bán chứng khoán"),
      body: [
        t(
          "100B takes equity in some of the businesses it helps build. Describing that on this site is not an offer to sell, or a solicitation of an offer to buy, any security or interest in any entity, in any jurisdiction, to anyone.",
          "100B nhận cổ phần trong một số doanh nghiệp mà mình góp phần xây dựng. Việc mô tả điều đó trên trang web này không phải là đề nghị bán, cũng không phải lời mời chào mua, bất kỳ chứng khoán hay phần vốn góp nào trong bất kỳ pháp nhân nào, tại bất kỳ quốc gia nào, với bất kỳ ai.",
        ),
      ],
    },
    {
      heading: t("Results are specific, not typical", "Kết quả mang tính cá biệt"),
      body: [
        t(
          "The figures on this site are what happened in particular businesses, in particular markets, at a particular time. They are examples, not averages, and they are not a forecast of what will happen for anyone else. Market entry is hard and many attempts at it do not work. Nobody can promise you an outcome, and we do not.",
          "Các con số trên trang web này là kết quả đã xảy ra với những doanh nghiệp cụ thể, trong những thị trường cụ thể, ở những thời điểm cụ thể. Đó là ví dụ, không phải giá trị trung bình, và không phải dự báo cho bất kỳ ai khác. Thâm nhập thị trường là việc khó và nhiều nỗ lực không thành công. Không ai có thể cam kết kết quả cho bạn, và chúng tôi cũng không.",
        ),
      ],
    },
    {
      heading: t("Testimonials", "Về các nhận xét"),
      body: [
        t(
          "The quotes on this site were given voluntarily by the people named. They were not paid for and they are not scored reviews. Each one is that person's own experience and view, not a representation by us about what we will do for you.",
          "Các nhận xét trên trang web này do chính những người được nêu tên tự nguyện đưa ra. Chúng tôi không trả tiền cho các nhận xét đó và đây không phải đánh giá có chấm điểm. Mỗi nhận xét là trải nghiệm và quan điểm riêng của người đó, không phải cam kết của chúng tôi về những gì sẽ làm cho bạn.",
        ),
      ],
    },
    {
      heading: t("Forward-looking statements", "Thông tin mang tính dự báo"),
      body: [
        t(
          "Where this site describes plans, programmes or dates ahead of us, those are intentions at the time of writing. They depend on things outside our control and they may change or not happen at all.",
          "Khi trang web mô tả kế hoạch, chương trình hoặc mốc thời gian trong tương lai, đó là dự định tại thời điểm viết. Những điều này phụ thuộc vào các yếu tố ngoài tầm kiểm soát của chúng tôi, có thể thay đổi hoặc không diễn ra.",
        ),
      ],
    },
    {
      heading: t("Accuracy", "Tính chính xác"),
      body: [
        t(
          "We check what we publish. Figures age, partners change and pages can fall behind. If you find something here that is wrong or out of date, tell us and we will correct it.",
          "Chúng tôi kiểm tra những gì mình đăng tải. Tuy nhiên số liệu cũ đi, đối tác thay đổi và các trang có thể chậm cập nhật. Nếu bạn thấy nội dung nào sai hoặc đã lỗi thời, hãy báo cho chúng tôi để sửa.",
        ),
      ],
    },
  ],
};

export const legalDocs: LegalDoc[] = [privacy, terms, disclaimer];

export function getLegalDoc(slug: string): LegalDoc | undefined {
  return legalDocs.find((d) => d.slug === slug);
}
