
const vocas = [
    {
        "name": "Abide by",
        "mean": "(v) to comply with, to conform ( Tuân theo )"
    },
    {
        "name": "Agreement",
        "mean": "(n) a mutual arrangement, a contract (hợp đồng, giao kèo)"
    },
    {
        "name": "Agreeable",
        "mean": "(adj) đồng ý, tán thành, bằng lòng, thoả thuận"
    },
    {
        "name": "Assurance",
        "mean": "(n) guarantee, confidence (sự chắc chắn; sự tin chắc; điều chắc chắn, điều tin chắc)"
    },
    {
        "name": "Determine",
        "mean": "(v) to find out, to influence (định, xác định, định rõ)"
    },
    {
        "name": "Engage",
        "mean": "(v) to hire, to involve (thuê, đính hôn, giao ước)"
    },
    {
        "name": "Establish",
        "mean": "(v) to institute permanently, to bring about (thành lập, thiết lập)"
    },
    {
        "name": "Obligate",
        "mean": "(v) to bind legally or morally ( ràng buộc, ép buộc)"
    },
    {
        "name": "Obligation",
        "mean": "(n) nghĩa vụ, bổn phận ,sự ràng buộc"
    },
    {
        "name": "Provision",
        "mean": "(n) a measure taken beforehand, a stipulation (điều khoản)"
    },
    {
        "name": "Provider",
        "mean": "(n) nhà cung cấp"
    },
    {
        "name": "Resolve",
        "mean": "(v) to deal with successfully, to declare ( giải quyết )"
    },
    {
        "name": "Specify",
        "mean": "(v) to mention explicitly ( chỉ rõ, ghi rõ, định rõ, ghi chú vào phần chi tiết kỹ thuật )"
    },
    {
        "name": "Specific",
        "mean": "(adj) cụ thể, rõ ràng, rành mạch"
    },
    {
        "name": "Attract",
        "mean": "(v) to draw by appeal ( hấp dẫn, lôi cuốn )"
    },
    {
        "name": "Attraction",
        "mean": "(n) sự hấp dẫn, lôi cuốn"
    },
    {
        "name": "Comparison",
        "mean": "(n) sự so sánh"
    },
    {
        "name": "Comparable",
        "mean": "(adj) tương đồng và có thể so sánh được."
    },
    {
        "name": "Consume",
        "mean": "(v) to absorb, to use up (dùng, tiêu thụ)"
    },
    {
        "name": "Consumable",
        "mean": "(adj) có thể ăn được, có thể tiêu thụ được"
    },
    {
        "name": "Convince",
        "mean": "(v) to bring to believe by argument, to persuade (làm cho tin, làm cho nghe theo, thuyết phục)"
    },
    {
        "name": "Current",
        "mean": "(adj) hiện tại, hiện thời, (n) đang lưu hành"
    },
    {
        "name": "Fad",
        "mean": "(n) a practice followed enthusiastically for a short time, a craze (mốt)"
    },
    {
        "name": "Inspire",
        "mean": "(v) to spur on, to stimulate imagination or emotion. (truyền (cảm hứng, ý nghĩ...); truyền cảm hứng cho (ai), gây cảm hứng cho (ai)"
    },
    {
        "name": "Market",
        "mean": "(n) the course of buying and selling a product, n. the demand for a product (giá thị trường; tình hình thị trường)"
    },
    {
        "name": "Persuade",
        "mean": "(v) to move by argument or logic (làm cho tin; thuyết phục)"
    },
    {
        "name": "Productive",
        "mean": "a. useful, getting a lot done (thực hiện được nhiều, hữu ích, có năng suất)"
    },
    {
        "name": "Satisfy",
        "mean": "(v) to make happy (làm thoả mãn, làm vừa lòng, đáp ứng (được yêu cầu, điều kiện...))"
    },
    {
        "name": "characteristic",
        "mean": "Revealing of individual traits (riêng, riêng biệt, đặc thù, đặc trưng)"
    },
    {
        "name": "Consequence",
        "mean": "that which follows necessarily (hậu quả, kết quả)"
    },
    {
        "name": "Consider",
        "mean": "to think about carefully (cân nhắc, xem xét, suy xét, suy nghĩ)"
    },
    {
        "name": "Cover",
        "mean": "to provide protection against (che, phủ, bao phủ, bao trùm, bao bọc)"
    },
    {
        "name": "Expire",
        "mean": "to come to an end (mãn hạn, kết thúc, hết hiệu lực (luật); mai một, mất đi)"
    },
    {
        "name": "Frequently",
        "mean": "Occurring commonly, widespread (thường xuyên, hay xảy ra, có luôn)"
    },
    {
        "name": "Imply",
        "mean": "to indicate by inference (ý nói; ngụ ý; bao hàm ý)"
    },
    {
        "name": "Reputation",
        "mean": "the overall quality of character (tiếng tốt, thanh danh, danh tiếng)"
    },
    {
        "name": "Reputable",
        "mean": "có uy tín, danh tiếng"
    },
    {
        "name": "require",
        "mean": "(v) yêu cầu"
    },
    {
        "name": "vary",
        "mean": "(v) thay đổi, biến đổi"
    },
    {
        "name": "Address",
        "mean": "to direct to the attention of (địa chỉ, chuyển đi tới )"
    },
    {
        "name": "Demonstrate",
        "mean": "chứng minh, giải thích, bày tỏ, biểu lộ, làm thấy rõ"
    },
    {
        "name": "Evaluate",
        "mean": "to determine the value or impact of (ước lượng , định giá)"
    },
    {
        "name": "Gather",
        "mean": "to accumulate, to conclude (tập hợp lại, tụ họp lại, kéo đến)"
    },
    {
        "name": "Offer",
        "mean": "to propose, to present in order to meet a need or satisfy a requirement (đưa ra đề nghị)"
    },
    {
        "name": "Primary",
        "mean": "Most important, first in a list, series, or sequence (chủ yếu, chính, bậc nhất)"
    },
    {
        "name": "Strategy",
        "mean": "a plan of action (chiến lược)"
    },
    {
        "name": "strategic",
        "mean": "(a) (thuộc) chiến lược"
    },
    {
        "name": "Substitute",
        "mean": "to take the place of another (thế, thay thế)"
    },
    {
        "name": "Attend",
        "mean": "to go to, to pay attention to (dự, có mặt)"
    },
    {
        "name": "Attendee",
        "mean": "(n) người tham dự"
    },
    {
        "name": "attendance",
        "mean": "(n) sự tham dự"
    },
    {
        "name": "Get in touch",
        "mean": "(v) to make contact with (giu lien lạc)"
    },
    {
        "name": "Hold",
        "mean": "to accommodate; to conduct (tổ chức, tiến hành)"
    },
    {
        "name": "Location",
        "mean": "(n) a position or site (vị trí)"
    },
    {
        "name": "Accommodate",
        "mean": "to fit, to provide with something needed (điều tiết, làm cho thích nghi, làm cho phù hợp)"
    },
    {
        "name": "Accommodating",
        "mean": "(adj) điều tiết, thuận tiện, tiện lợi; dễ dãi, dễ tính"
    },
    {
        "name": "Accommodation",
        "mean": "(n) nhà trọ, chổ ở, nơi ăn nghỉ"
    },
    {
        "name": "Overcrowded",
        "mean": "too crowded (kéo vào quá đông, dồn vào quá đông)"
    },
    {
        "name": "Arrangement",
        "mean": "the plan or organization (sự sắp xếp, sự sắp đặt, cái được sắp xếp, cái được sắp đặt)"
    },
    {
        "name": "Register",
        "mean": "(v) to record (đăng ký)"
    },
    {
        "name": "Registration",
        "mean": "sự đăng ký"
    },
    {
        "name": "Association",
        "mean": "an organization of persons or groups having a common interest (hội, hội liên hiệp; đoàn thể, công ty)"
    },
    {
        "name": "Select",
        "mean": "to choose from a group (chọn, lựa chọn)"
    },
    {
        "name": "Take part in",
        "mean": "(v) tham gia, tham dự"
    },
    {
        "name": "Access",
        "mean": "to obtain, to gain entry (truy cập, đường vào)"
    },
    {
        "name": "Allocate",
        "mean": "to designate for a specific purpose (chỉ định, chia phần, cấp phát)"
    },
    {
        "name": "Compatible",
        "mean": "able to function together (tương tác, thích ứng)"
    },
    {
        "name": "Delete",
        "mean": "to remove; to erase (xóa)"
    },
    {
        "name": "Display",
        "mean": "what is visible on a monitor; v, to show (trình bày, trưng bày)"
    },
    {
        "name": "Duplicate",
        "mean": "to produce something equal; to make identical (bản sao, gấp đôi)"
    },
    {
        "name": "Fail",
        "mean": "not to succeed; not to work correctly (trượt, không thành công)"
    },
    {
        "name": "Failure",
        "mean": "(n) sự thất bại"
    },
    {
        "name": "Fallible",
        "mean": "(adj) có thể sai lầm; có thể là sai"
    },
    {
        "name": "Figure out",
        "mean": "(v) to understand , to solve (chỉ ra, hiểu ra)"
    },
    {
        "name": "Ignore",
        "mean": "not to notice; to disregard (bỏ qua, lờ đi)"
    },
    {
        "name": "Search",
        "mean": "to look for; n, investigation (tìm kiếm, tìm hiểu)"
    },
    {
        "name": "Warn",
        "mean": "to alert; to tell about a danger or problem (cảnh báo)"
    },
    {
        "name": "Warning",
        "mean": "(n) lời cảnh cáo, lời răn"
    },
    {
        "name": "Shut down",
        "mean": "to turn off; to cease operation (đóng lại, ngừng lại)"
    },
    {
        "name": "Affordable",
        "mean": "able to be paid for; not too expensive (hợp lý, giá cả phải chăng)"
    },
    {
        "name": "As needed",
        "mean": "as necessary (cần thiết)"
    },
    {
        "name": "Be in charge",
        "mean": "to be in control or command of (có tráchnhiệm, nghĩa vụ)"
    },
    {
        "name": "Capacity",
        "mean": "the ability to contain or hold; the maximum that something can hold (sức chứa, khả năng)"
    },
    {
        "name": "Durable",
        "mean": ", sturdy, strong, lasting (lâu bền)"
    },
    {
        "name": "Initiative",
        "mean": "the first step; an active role (sáng kiến)"
    },
    {
        "name": "Physical",
        "mean": ", perceived by the senses (vật chất, điều gì đó liên quan đến tự nhiên)"
    },
    {
        "name": "Provider",
        "mean": "a supplier (nhà cung cấp)"
    },
    {
        "name": "Recur",
        "mean": "to occur again or repeatedly (tái diễn, tái hiện)"
    },
    {
        "name": "Recurrence",
        "mean": "(n) sự tái diễn, tái hiện"
    },
    {
        "name": "Recurring",
        "mean": "(adj) tái diễn, tái hiện; lại diễn ra; có định kỳ"
    },
    {
        "name": "Reduction",
        "mean": "a lessening , a decrease (thu nhỏ, giảm bớt)"
    },
    {
        "name": "Reduce",
        "mean": "(v) giảm, giảm bớt, hạ"
    },
    {
        "name": "Reducible",
        "mean": "(a) có thể giảm bớt"
    },
    {
        "name": "Stay on top",
        "mean": "to know what is going on; to know the latest information (cập nhật)"
    },
    {
        "name": "Stock",
        "mean": "a supply; v, to keep on hand (dự trữ, cổ phần)"
    },
    {
        "name": "Appreciate",
        "mean": "to recognize, understand the importance of; to be thankful for (đánh giá cao)"
    },
    {
        "name": "Appreciation",
        "mean": "(n) sự đánh giá đúng, sự đánh giá cao, sự hiểu rõ giá trị"
    },
    {
        "name": "Bring in",
        "mean": "to hire or recruit; to cause to appear"
    },
    {
        "name": "Casual",
        "mean": "informal (thân mật, không nghi thức)"
    },
    {
        "name": "Code",
        "mean": "rules of behavior (bộ luật, quy luật)"
    },
    {
        "name": "Be exposed to",
        "mean": "to become aware of; to gain experience in"
    },
    {
        "name": "Glimpse",
        "mean": "a quick look (lướt qua, thoáng qua)"
    },
    {
        "name": "Made of",
        "mean": ", to consist of (tạo nên)"
    },
    {
        "name": "Out of",
        "mean": "no longer having, missing (hết, mất)"
    },
    {
        "name": "Outdated",
        "mean": "a, obsolete; not currently in use (hết hạn)"
    },
    {
        "name": "Practice",
        "mean": "to repeat in order to learn (tập luyện)"
    },
    {
        "name": "practical",
        "mean": "thực tế, thiết thực"
    },
    {
        "name": "Reinforce",
        "mean": "to strengthen, support (tăng cường, củng cố; tăng viện; tăng thêm sức mạnh)"
    },
    {
        "name": "Reinforcement",
        "mean": "noun of Reinforce (sự tăng cường, sự củng cố; sự tăng viện)"
    },
    {
        "name": "Verbal",
        "mean": "oral (bằng lời nói )"
    },
    {
        "name": "Verbalize",
        "mean": "(v) diễn tả bằng lời nói"
    },
    {
        "name": "Disk",
        "mean": "an object used to store digital information (đĩa máy tính)"
    },
    {
        "name": "Facilitate",
        "mean": "to make easier (làm cho dễ dàng, thuận tiện)"
    },
    {
        "name": "Network",
        "mean": "an interconnected group or system (mạng lưới)"
    },
    {
        "name": "Popularity",
        "mean": "the state of being widely admired, sought (tính đại chúng, phổ biến)"
    },
    {
        "name": "Popularize",
        "mean": "(v) đại chúng hóa; truyền bá, phổ biến"
    },
    {
        "name": "Process",
        "mean": "a series of operations or actions to bring about a result (quy trình)"
    },
    {
        "name": "Replace",
        "mean": "to put back in a former place or position (đặt lại chỗ cũ, thay thế)"
    },
    {
        "name": "replaceable",
        "mean": "có thể thay thế"
    },
    {
        "name": "Revolution",
        "mean": "a sudden or momentous change in a situation (cuộc cách mạng, quay vòng)"
    },
    {
        "name": "Revolutionize",
        "mean": "verb cách mạng hóa"
    },
    {
        "name": "Revolutionary",
        "mean": "adj of revolution (mang tính cách mạng)"
    },
    {
        "name": "Sharp",
        "mean": "abrupt or acute; smart (rõ rệt, sắc nét; thông minh, sắc sảo)"
    },
    {
        "name": "Skill",
        "mean": "developed ability (kỹ năng)"
    },
    {
        "name": "Software",
        "mean": "the programs for a computer (phần mềm)"
    },
    {
        "name": "Storage",
        "mean": "the safekeeping of goods or information (kho, sự dự trữ)"
    },
    {
        "name": "Store",
        "mean": "lưu trữ"
    },
    {
        "name": "Technical",
        "mean": "a. special skill or knowledge (Kỹ thuật)"
    },
    {
        "name": "technicality",
        "mean": "n. chi tiết kỹ thuật"
    },
    {
        "name": "Assemble",
        "mean": "to put together; to bring together (thu thập, lắp ráp)"
    },
    {
        "name": "Beforehand",
        "mean": "early, in advance (sẵn sàng trước)"
    },
    {
        "name": "Complicated",
        "mean": "not easy to understand (phức tạp)"
    },
    {
        "name": "Courier",
        "mean": "a messenger (người đưa thư, đưa tin)"
    },
    {
        "name": "Express",
        "mean": "fast and direct (nhanh, hỏa tốc, tốc hành)"
    },
    {
        "name": "Fold",
        "mean": "to bend paper (gấp lại, gấp nếp lại)"
    },
    {
        "name": "Layout",
        "mean": "a format; the organization of material on a page (Sự bố trí trang giấy)"
    },
    {
        "name": "Mention",
        "mean": "to refer to; n, something read or written (đưa ra, đề cập đến)"
    },
    {
        "name": "Mentionable",
        "mean": "adj of mention (đáng kể, đáng đề cập)"
    },
    {
        "name": "Petition",
        "mean": "a formal, written request; v, to make a formal request (lời thỉnh cầu, đề nghị)"
    },
    {
        "name": "Proof",
        "mean": "to look for errors (dò lỗi, review)"
    },
    {
        "name": "Proofreader",
        "mean": "Người soát lỗi, người review"
    },
    {
        "name": "Registered",
        "mean": "recorded and tracked (đã đăng ký, được bảo đảm (thư))"
    },
    {
        "name": "Revise",
        "mean": "to rewrite (sửa lại, bản sửa)"
    },
    {
        "name": "Abundant",
        "mean": "plentiful, in large quantities; n, a large number (phong phú, nhiều)"
    },
    {
        "name": "Accomplishment",
        "mean": "an achievement, a success (Việc đã hoàn thành, thành quả, thành tựu, thành tích)"
    },
    {
        "name": "Accomplish",
        "mean": "Hoàn thành, làm xong, làm trọn"
    },
    {
        "name": "Bring together",
        "mean": "to join, to gather ( gom lại; nhóm lại, họp lại)"
    },
    {
        "name": "Candidate",
        "mean": "one being considered for a position, office (thí sinh, ứng viên, ứng cử viên)"
    },
    {
        "name": "Come up with",
        "mean": "to plan, to invent, to think of (lên kế hoạch, ý định)"
    },
    {
        "name": "Commensurate",
        "mean": "in proportion to, corresponding, equal to (( + to, with) tương xứng với)"
    },
    {
        "name": "Match",
        "mean": "a fit, a similarity (vừa)"
    },
    {
        "name": "Profile",
        "mean": "a group of characteristics or traits (Tiểu sử sơ lược; mô tả sơ lược)"
    },
    {
        "name": "Qualification",
        "mean": "requirements, qualities, or abilities needed for something (Phẩm chất, năng lực, )"
    },
    {
        "name": "Qualify",
        "mean": "(Đủ tư cách, khả năng, điều kiện)"
    },
    {
        "name": "Recruit",
        "mean": "to attract people to join an organization of a cause (tuyển dụng)"
    },
    {
        "name": "Submit",
        "mean": "to present for consideration (gửi, nộp)"
    },
    {
        "name": "Submission",
        "mean": "= submittal, noun of submit"
    },
    {
        "name": "Time-consuming",
        "mean": "taking up a lot of time, lengthy (cần nhiều thời jan)"
    },
    {
        "name": "Ability",
        "mean": "a skill, a competence (năng lực, khả năng)"
    },
    {
        "name": "Apply",
        "mean": "to look for; to submit an application (Xin việc, tìm việc)"
    },
    {
        "name": "Applicant",
        "mean": "người nộp đơn xin việc, ứng viên"
    },
    {
        "name": "Background",
        "mean": "a person’s experience, education, and family history (kinh nghiệm)"
    },
    {
        "name": "Be ready for",
        "mean": "to be prepared ( sẵn sàng cho…)"
    },
    {
        "name": "Call in",
        "mean": "to request (yêu cầu, ,mời tới)"
    },
    {
        "name": "Confidence",
        "mean": "a belief in one’s ability (sự tự tin)"
    },
    {
        "name": "Constantly",
        "mean": "on a continual basis, happening all the time (liên tục, luôn luôn, không đổi)"
    },
    {
        "name": "Expert",
        "mean": "a specialist (nhà chuyên môn, chuyên sâu, thành thạo)"
    },
    {
        "name": "expertise",
        "mean": "(n) sự thành thạo, sự tinh thông"
    },
    {
        "name": "Follow up",
        "mean": "to take additional steps, to continue (tiếp tục, tiếp theo)"
    },
    {
        "name": "hesitate",
        "mean": "(v) ngập ngừng, do dự; ngần ngại"
    },
    {
        "name": "hesitant",
        "mean": "(a) do dự, ngập ngừng, lưỡng lự, không nhất quyết"
    },
    {
        "name": "hesitation",
        "mean": "(n) sự do dự, sự ngập ngừng, sự lưỡng lự, sự không nhất quyết"
    },
    {
        "name": "Present",
        "mean": "to introduce, to show, to offer for consideration (trình bày, giới thiệu)"
    },
    {
        "name": "presentable",
        "mean": "a. looking suitable or good enough, especially in the way you are dressed (chỉnh tề, coi được)"
    },
    {
        "name": "weakness",
        "mean": "(n) nhược điểm, điểm yếu.."
    },
    {
        "name": "Conduct",
        "mean": "to hold, to take place, to behave (tổ chức, diễn ra; hạnh kiểm, cách cư xử)"
    },
    {
        "name": "conductor",
        "mean": "(n) người bán vé (xe điện, xe buýt,...); người chỉ huy, người điều khiển"
    },
    {
        "name": "generate",
        "mean": "to create, to produce ,tạo ra, sinh ra"
    },
    {
        "name": "generator",
        "mean": "(n) a machine that produces something, especially electricity (máy sinh, máy phát; máy phát điện)"
    },
    {
        "name": "hire",
        "mean": "(v) to employ (n) an employee (thuê, tuyển)"
    },
    {
        "name": "Keep up with",
        "mean": "to stay equal with (theo kịp)"
    },
    {
        "name": "Look up to",
        "mean": "to admire, to think highly of (Khâm phục, ngưỡng mộ)"
    },
    {
        "name": "mentor",
        "mean": "người hướng dẫn"
    },
    {
        "name": "On track",
        "mean": "oa. on schedule; focused (Theo lịch trình, đúng tiến độ; tập trung)"
    },
    {
        "name": "reject",
        "mean": "to turn down, to say no, to not accept ( từ chối )"
    },
    {
        "name": "Set up",
        "mean": "to establish, to arrange; a , arranged (thiết lập, tạo dựng)"
    },
    {
        "name": "Succeed",
        "mean": "v. thành công"
    },
    {
        "name": "success",
        "mean": "(n) sự thành công, sự thắng lợi"
    },
    {
        "name": "successful",
        "mean": "(a) có kết quả, thành công, thắng lợi, thành đạt"
    },
    {
        "name": "base",
        "mean": "v. (+ sth on sth) dựa vào, căn cứ vào"
    },
    {
        "name": "basis",
        "mean": "n. a base or foundation (nền tảng, cơ sở)"
    },
    {
        "name": "Be aware of",
        "mean": "(v) biết, nhận thấy, nhận thức thấy"
    },
    {
        "name": "Benefit",
        "mean": "(n) tiền trợ cấp, phúc lợi (v) giúp ích cho, làm lợi cho"
    },
    {
        "name": "beneficial",
        "mean": "(a) có ích, có lợi, tốt"
    },
    {
        "name": "compensate",
        "mean": "v. (+ s.o for sth) bù, đền bù, bồi thường"
    },
    {
        "name": "Compensation",
        "mean": "(n) sự đền bù, sự bồi thường"
    },
    {
        "name": "compensatory",
        "mean": "adj bù đắp, bồi thường"
    },
    {
        "name": "Delicate",
        "mean": "lịch thiệp, khéo (trong cách đối xử), nhã nhặn, tế nhị, ý tứ"
    },
    {
        "name": "eligible",
        "mean": "đủ tư cách, thích hợp"
    },
    {
        "name": "flexible",
        "mean": "(a) Linh động, linh hoạt"
    },
    {
        "name": "negotiate",
        "mean": "(v) đàm phán, thương lượng"
    },
    {
        "name": "Negotiation",
        "mean": "(n) sự đàm phán, sự thương lượng"
    },
    {
        "name": "negotiator",
        "mean": "(n) người đàm phán, người thương lượng"
    },
    {
        "name": "raise",
        "mean": "n. an increase in salary; v. to move up"
    },
    {
        "name": "retire",
        "mean": "v. về hưu"
    },
    {
        "name": "Retirement",
        "mean": "sự về hưu"
    },
    {
        "name": "vested",
        "mean": "được quyền, được phép"
    },
    {
        "name": "Wage",
        "mean": "tiền công, tiền lương ̣(compare: Salary)"
    },
    {
        "name": "achieve",
        "mean": "giành được, hoàn thành"
    },
    {
        "name": "Achievement",
        "mean": "noun sự giành được, hoàn thành"
    },
    {
        "name": "achiever",
        "mean": "người thành đạt, thành công"
    },
    {
        "name": "Contribute",
        "mean": "đóng góp, góp phần"
    },
    {
        "name": "contribution",
        "mean": "sự đóng góp"
    },
    {
        "name": "contributor",
        "mean": "người góp phần"
    },
    {
        "name": "Dedication",
        "mean": "(n) sự cống hiến, sự hiến dâng"
    },
    {
        "name": "dedicate",
        "mean": "(v) cống hiến, hiến dâng"
    },
    {
        "name": "dedicated",
        "mean": "(a) tận tụy, tận tâm"
    },
    {
        "name": "Look forward to",
        "mean": "(v) chờ đợi, mong đợi"
    },
    {
        "name": "Look to",
        "mean": "(v) trông chờ vào, phụ thuộc vào"
    },
    {
        "name": "Loyal",
        "mean": "(a) trung thành"
    },
    {
        "name": "loyalty",
        "mean": "(n) sự trung thành, lòng trung thành"
    },
    {
        "name": "merit",
        "mean": "(n) giá trị, công lao, công trạng"
    },
    {
        "name": "Obvious",
        "mean": "(a) rõ ràng, rành mạch, hiển nhiên"
    },
    {
        "name": "Productive",
        "mean": "a. useful, getting a lot done (thực hiện được nhiều, hữu ích, có năng suất)"
    },
    {
        "name": "Promote",
        "mean": "(v) đề đạt, tiến cử"
    },
    {
        "name": "promotion",
        "mean": "(n) sự thăng chức, thăng tiến"
    },
    {
        "name": "promoter",
        "mean": "(n) người đề nghị, tiến cử"
    },
    {
        "name": "recognition",
        "mean": "(n) sự công nhận, sự thừa nhận"
    },
    {
        "name": "Value",
        "mean": "v. to state the worth (định giá, đánh giá)"
    },
    {
        "name": "pension",
        "mean": "(n) lương hưu, tiền trợ cấp; (v) trả lương hưu, trợ cấp cho"
    },
    {
        "name": "produce",
        "mean": "(v) sản xuất"
    },
    {
        "name": "praise",
        "mean": "(v) (n) khen ngợi, ca ngợi, ca tụng, tán tụng, tán dương"
    },
    {
        "name": "Bargain",
        "mean": "(v) mặc cả, thương lượng; (n) sự mặc cả, món hời"
    },
    {
        "name": "Bear",
        "mean": "v, to have a tolerance for, to endure (chịu đựng)"
    },
    {
        "name": "Behavior",
        "mean": "n, the manner of one’s action (cách ứng xử, đối xử)"
    },
    {
        "name": "Checkout",
        "mean": "n, the act, time, or place of checking out, as at a hotel or a supermarket (thanh toán, quầy thanh toán)"
    },
    {
        "name": "Comfort",
        "mean": "n, a condition or feeling of pleasurable ease, well-being, and contentment (thỏai mái, dễ dàng)"
    },
    {
        "name": "Comfortable",
        "mean": "adj, thỏai mái, dễ dàng"
    },
    {
        "name": "Expand",
        "mean": "v, to increase the size, volume, quantity, or scope of; to enlarge (mở rộng, phát triển)"
    },
    {
        "name": "Expansion",
        "mean": "n. sự mở rộng, sự bành trướng"
    },
    {
        "name": "Expanded",
        "mean": "adj. nới rộng"
    },
    {
        "name": "Explore",
        "mean": "v,to investigate systematically (khám phá, thăm dò, thám hiểm)"
    },
    {
        "name": "Exploration",
        "mean": "n. sự thăm dò, sự khảo sát"
    },
    {
        "name": "Exploratory",
        "mean": "adj. để thăm dò, để khảo sát"
    },
    {
        "name": "Item",
        "mean": "n,a single article or unit (mặt hàng, món)"
    },
    {
        "name": "Mandatory",
        "mean": "a, required or commanded, obligatory (bắt buộc)"
    },
    {
        "name": "Merchandise",
        "mean": "n, items available in stores (hàng hóa mua bán); (v) buôn bán, quảng bá sản phẩm"
    },
    {
        "name": "Strict",
        "mean": "a, precise. Exact (chính xác, chặt chẽ, nghiêm ngặt)"
    },
    {
        "name": "Strictness",
        "mean": "n, sự chặt chẽ, tính chính xác, nghiêm ngặt"
    },
    {
        "name": "Trend",
        "mean": "n, the current style (xu hướng, xu thế)"
    },
    {
        "name": "mandate",
        "mean": "(n) (v) chỉ thị, yêu cầu"
    },
    {
        "name": "merchant",
        "mean": "(n) nhà buôn, lái buôn; thương gia"
    },
    {
        "name": "Diverse",
        "mean": "adj. đa dạng"
    },
    {
        "name": "Diversify",
        "mean": "v. đa dạng hóa"
    },
    {
        "name": "Diversity",
        "mean": "n. sự đa dạng"
    },
    {
        "name": "Enterprise",
        "mean": "n. a businesss; a large project (Công trình dự án lớn; tổ chức kinh doanh, hãng)"
    },
    {
        "name": "Essential",
        "mean": "adj. cần thiết, thiết yếu, cốt yếu, chủ yếu; n. yếu tố cần thiết"
    },
    {
        "name": "Everyday",
        "mean": "thông thường, tầm thường, chuyện xảy ra hàng ngày"
    },
    {
        "name": "Function",
        "mean": "(v) vận hành (n) chức năng, trách nhiệm"
    },
    {
        "name": "functional",
        "mean": "adj chức năng, trách nhiệm"
    },
    {
        "name": "Maintain",
        "mean": "v. duy trì"
    },
    {
        "name": "Maintainability",
        "mean": "noun sự duy trì, bảo trì"
    },
    {
        "name": "maintainable",
        "mean": "adj. có thể duy trì"
    },
    {
        "name": "Obtain",
        "mean": "v. đạt được, có được"
    },
    {
        "name": "Prerequisite",
        "mean": "n. điều kiện trước hết, điều kiện tiên quyết"
    },
    {
        "name": "Quality",
        "mean": "chất lượng, phẩm chất"
    },
    {
        "name": "Smooth",
        "mean": "a. êm thấm, suôn sẻ; hòa nhã, lệ độ; ngọt xớt"
    },
    {
        "name": "Smooth out",
        "mean": "v. Làm cho suôn sẻ"
    },
    {
        "name": "Stationery",
        "mean": "n. đồ dùng văn phòng"
    },
    {
        "name": "enterprising",
        "mean": "adj. good at thinking of and doing new and difficult things, especially things that will make money (dám làm; mạnh dạn)"
    },
    {
        "name": "essence",
        "mean": "bản chất, thực chất"
    },
    {
        "name": "Accurate",
        "mean": "a, exact; errorless (đúng, chính xác)"
    },
    {
        "name": "Accuracy",
        "mean": "n. sự chính xác"
    },
    {
        "name": "Accurately",
        "mean": "adv. một cách chính xác"
    },
    {
        "name": "Carrier",
        "mean": "n, a person or business that transports passengers or goods (người hoặc một hãng vận chuyển)"
    },
    {
        "name": "Catalog",
        "mean": "= catalogue (n) quyển danh mục hàng, bảng giá; (v) to make an itemized list of"
    },
    {
        "name": "Fulfill",
        "mean": "v, to finish completely (thực hiện, hoàn thành, làm trọn (nhiệm vụ...))"
    },
    {
        "name": "Fulfilment",
        "mean": "n. sự hoàn thành, sự thực hiện"
    },
    {
        "name": "Integral",
        "mean": "a, necessary for completion (cần thiết, ko thể thiếu)"
    },
    {
        "name": "Inventory",
        "mean": "n, goods in stock; an itemized record of these goods ( bảng kê (hàng hóa) )"
    },
    {
        "name": "Minimize",
        "mean": "v, to reduce, to give less importance to (giảm tới mức tối thiểu)"
    },
    {
        "name": "Minimal",
        "mean": "adj. Minimum n. (tối thiểu)"
    },
    {
        "name": "On hand",
        "mean": "a, available (sẵn sàng, sẵn có)"
    },
    {
        "name": "Remember",
        "mean": "v, to think of again (nhớ, nhớ lại)"
    },
    {
        "name": "Ship",
        "mean": "v, to transport; to send (vận chuyển)"
    },
    {
        "name": "Shipper",
        "mean": "n.người ship"
    },
    {
        "name": "shipment",
        "mean": "n. (việc gửi hàng)"
    },
    {
        "name": "Sufficient",
        "mean": "a, as much as is needed (vừa đủ)"
    },
    {
        "name": "Supply",
        "mean": "v, to make available for use (cung cấp) (n) stock (nguồn dự trữ)"
    },
    {
        "name": "Charge",
        "mean": "n, an expense or a cost; v, to demand payment (thu phí)"
    },
    {
        "name": "Compile",
        "mean": "v, to gather together from several sources (thu thập, biên soạn)"
    },
    {
        "name": "Customer",
        "mean": "n, one who purchases a commodity or service (khách hàng)"
    },
    {
        "name": "Discount",
        "mean": "n, a reduction in price; to reduce in price (giảm giá)"
    },
    {
        "name": "Efficient",
        "mean": "a, acting or producing effectively with a minimum of waste (có hiệu lực, hiệu quả)"
    },
    {
        "name": "Estimate",
        "mean": "v, to approximate the amount or value of something; to form am opinion About something (ước lượng. định giá)"
    },
    {
        "name": "Estimation",
        "mean": "a judgement or opinion about the value or quality of somebody/something"
    },
    {
        "name": "Impose",
        "mean": "v, to establish or apply as compulsory; to force upon others (áp đặt, ép buộc, bắt ai phải làm gì đó)"
    },
    {
        "name": "Imposition",
        "mean": "n. imposing adj. (đánh thuế ai đó, sự áp đặt, bắt buộc)"
    },
    {
        "name": "Mistake",
        "mean": "n, an error or a fault (lỗi)"
    },
    {
        "name": "Mistaken",
        "mean": "adj. sai lầm; hiểu sai, hiểu lầm"
    },
    {
        "name": "Order",
        "mean": "n, a request made to purchase something ; v, to command or direct (đơn đặt hàng; ra lệnh, chỉ huy)"
    },
    {
        "name": "Prompt",
        "mean": "adj, v : be on time or punctual, carried out without delay, n. a reminder or a cue (mau lẹ, nhanh chóng; ngay, ngay tức thì, tức thời)"
    },
    {
        "name": "Promptness",
        "mean": "n. sự mau lẹ, sự nhanh chóng"
    },
    {
        "name": "Rectify",
        "mean": "v. to set right or correct ( khắc phục, chỉnh sửa )"
    },
    {
        "name": "Term",
        "mean": "n. conditions (điều khoản; giá; điều kiện)"
    },
    {
        "name": "Adjust",
        "mean": "v. to change in order to match or fit, to cause to correspond (điều chỉnh, dàn xếp )"
    },
    {
        "name": "Adjustment",
        "mean": "n. sự điều chỉnh, sự dàn xếp"
    },
    {
        "name": "Adjustable",
        "mean": "adj. có thể điều chỉnh, dàn xếp"
    },
    {
        "name": "Automatic",
        "mean": "adj. Operating independently (tự động)"
    },
    {
        "name": "Automation",
        "mean": "n. sự tự động"
    },
    {
        "name": "Automatically",
        "mean": "adv. trạng thái tự động"
    },
    {
        "name": "Crucial",
        "mean": "adj. Extremely significant or important (quyết định; cốt yếu, chủ yếu)"
    },
    {
        "name": "Discrepancy",
        "mean": "n. a divergence or disagreement (sự khác nhau, sự ko thống nhất, sự ko nhất quán)"
    },
    {
        "name": "Disturb",
        "mean": "v. to interfere with, to interrupt (làm phiền)"
    },
    {
        "name": "Disturbance",
        "mean": "n. sự náo động; kẻ quấy rầy"
    },
    {
        "name": "Liability",
        "mean": "n. an obligation a responsibility (trách nhiệm pháp lý; cái gây khó khăn trở ngại)"
    },
    {
        "name": "Reflect",
        "mean": "v. to given back a likeness (phản chiếu, phản ánh)"
    },
    {
        "name": "Reflection",
        "mean": "n. sự phản ánh, sự phản chiếu"
    },
    {
        "name": "Reflector",
        "mean": "n. gương phản xạ, vật phản xạ"
    },
    {
        "name": "Run",
        "mean": "v. to operate (chạy, hoạt động)"
    },
    {
        "name": "Scan",
        "mean": "v. to look over quickly (xem lướt, xem qua)"
    },
    {
        "name": "Subtract",
        "mean": "v. to take away, to deduct (trừ đi, khấu trừ)"
    },
    {
        "name": "Tedious",
        "mean": "adj. Tiresome by reason of length, slowness, or dullness, boring (chán ngăt, buồn tẻ)"
    },
    {
        "name": "Verify",
        "mean": "v. to prove the truth of (Xác minh, kiểm lại)"
    },
    {
        "name": "Accept",
        "mean": "v. to receive, to respond favorably (đồng ý, chấp thuận)"
    },
    {
        "name": "Acceptance",
        "mean": "n. sự đồng ý, chấp thuận"
    },
    {
        "name": "Acceptable",
        "mean": "adj. có thể đồng ý, chấp thuận"
    },
    {
        "name": "Balance",
        "mean": "n. the remainder, v. to compute the difference between credits and debits of an account.(Số dư (tài khoản))"
    },
    {
        "name": "Borrow",
        "mean": "v. to use temporarily (vay mượn)"
    },
    {
        "name": "Cautious",
        "mean": "adj. Careful, wary (thận trọng, cẩn thận)"
    },
    {
        "name": "Deduct",
        "mean": "v. to take away from a total, to subtract (khấu trừ). Synonym: Subtract"
    },
    {
        "name": "Deductible",
        "mean": "adj có thể khấu trừ"
    },
    {
        "name": "Deduction",
        "mean": "n. sự khấu trừ"
    },
    {
        "name": "Dividend",
        "mean": "n. a share in a distribution (Cổ tức - khoản tiền được chia cho các cổ đông; lãi cổ phần)."
    },
    {
        "name": "Down payment",
        "mean": "n. an initial partial payment (Sự trả trước 1 phần khi mua hàng)."
    },
    {
        "name": "Mortgage",
        "mean": "n. the amount due on a property, v. to borrow money with your house as collateral.(cầm cố, thế chấp)"
    },
    {
        "name": "Restriction",
        "mean": "n. a limitation (sự giới hạn,hạn chế)."
    },
    {
        "name": "Restrict",
        "mean": "v. hạn chế, giới hạn, thu hẹp"
    },
    {
        "name": "Restricted",
        "mean": "adj. Bị hạn chế, có giới hạn"
    },
    {
        "name": "Signature",
        "mean": "n. the name of a person written by the person (chữ ký)"
    },
    {
        "name": "Sign",
        "mean": "v. ký"
    },
    {
        "name": "Take out",
        "mean": "v. withdraw, remove (rút tiền)"
    },
    {
        "name": "Transaction",
        "mean": "n. a business deal (giao dịch; sự giải quyết công việc)"
    },
    {
        "name": "Accounting",
        "mean": "n. the recording and gathering of financial information for a company (công việc kế toán)"
    },
    {
        "name": "Accountant",
        "mean": "n. (nhân viên kế toán)"
    },
    {
        "name": "Accumulate",
        "mean": "v. to gather, to collect (tích lũy, gom góp)."
    },
    {
        "name": "Accumulation",
        "mean": "n. sự tích lũy, sự góp nhặt"
    },
    {
        "name": "Accumulated",
        "mean": "adj. tích lũy"
    },
    {
        "name": "Asset",
        "mean": "n. something of value (tài sản)"
    },
    {
        "name": "Audit",
        "mean": "n. a formal examination of financial records, v. to examine the financial (kiểm toán)"
    },
    {
        "name": "Budget",
        "mean": "(n) ngân quỹ, ngân sách. (v) ghi vào ngân sách"
    },
    {
        "name": "Budgetary",
        "mean": "(adj) thuộc về ngân quỹ, ngân sách"
    },
    {
        "name": "Build up",
        "mean": "n. to increase over time (Sự tăng cường)"
    },
    {
        "name": "Client",
        "mean": "n. a customer (khách hàng)"
    },
    {
        "name": "Debt",
        "mean": "n. something owed, as in money or goods (khỏan nợ)"
    },
    {
        "name": "Outstanding",
        "mean": "adj. Still due, not paid or settled (còn tồn tại, chưa giải quyết xong, chưa trả nợ)."
    },
    {
        "name": "Profitable",
        "mean": "adj. advantageous, beneficial (có sinh lời)."
    },
    {
        "name": "Profit",
        "mean": "v. n. (lợi nhuận, thu hồi)."
    },
    {
        "name": "Reconcile",
        "mean": "v. to make consistent (1.giải hòa, giảng hòa; 2.điều hòa, 3.đành cam chịu)"
    },
    {
        "name": "Turnover",
        "mean": "n. 1.doanh thu, 2. vốn luân chuyển, 3.số công nhân thôi việc"
    },
    {
        "name": "Aggressive",
        "mean": "adj. Competitive, assertive (gây hấn, hung hăng, hùng hỗ)"
    },
    {
        "name": "Attitude",
        "mean": "n. a felling about something or someone (thái độ, quan điểm)"
    },
    {
        "name": "Commitment",
        "mean": "n. a promise ( sự thỏa thuận,sự thỏa ước, sự cam kết)"
    },
    {
        "name": "Commit",
        "mean": "v. thỏa thuận, thỏa ước, cam kết"
    },
    {
        "name": "Noncommittal",
        "mean": "adj. không hứa hẹn, cam kết"
    },
    {
        "name": "Conservative",
        "mean": "adj. Cautious, restrained (dè dặt, thận trọng; bảo thủ)"
    },
    {
        "name": "Fund",
        "mean": "n. an amount of money for something specific, v to provide money for (nguồn tiền, quỹ dự trữ)."
    },
    {
        "name": "Invest",
        "mean": "v. to put money into a business or activity with the hope of making more money, to put effort into something (đầu tư)"
    },
    {
        "name": "Investment",
        "mean": "n. Sự đầu tư"
    },
    {
        "name": "Investor",
        "mean": "n. Người đầu tư, nhà đầu tư"
    },
    {
        "name": "Long-term",
        "mean": "adj. involving or extending over a long period (dài hạn)"
    },
    {
        "name": "Portfolio",
        "mean": "n. a list of investments (danh mục vốn đầu tư)"
    },
    {
        "name": "Pull-out",
        "mean": "v. to withdraw, to stop participating, n. a withdrawal, removal (rút tiền, rút lui)"
    },
    {
        "name": "Resource",
        "mean": "n. assets, valuable things (nguồn, tài nguyên)"
    },
    {
        "name": "Return",
        "mean": "n. the amount of money gained as profit (tiền thu về, tiền lãi)"
    },
    {
        "name": "Returnable",
        "mean": "adj. được trả lại, có thể trả lại"
    },
    {
        "name": "Wise",
        "mean": "adj. Knowledgeable, able to offer advice based on experience (Từng trải hiểu biết nhiều, khôn ngoan, sáng suốt)."
    },
    {
        "name": "Wisdom",
        "mean": "n. Sự khôn ngoan, sáng suốt"
    },
    {
        "name": "Wisely",
        "mean": "adv. một cách khôn ngoan"
    },
    {
        "name": "Calculate",
        "mean": "v. to figure out, to compute (tính toán)"
    },
    {
        "name": "Calculation",
        "mean": "n, phép tính"
    },
    {
        "name": "Calculator",
        "mean": "n. máy tính"
    },
    {
        "name": "Deadline",
        "mean": "n. a time by which something must be finished (hạn cuối)"
    },
    {
        "name": "File",
        "mean": "v. to enter into public record, n. a group of documents or information about a person or an event (sắp xếp, sắp đặt tài liệu)"
    },
    {
        "name": "Fill out",
        "mean": "v. to complete (hoàn tất, hoàn thành)"
    },
    {
        "name": "Give up",
        "mean": "v. to quit, to stop (đầu hàng, tạm dừng, tạm ngưng)"
    },
    {
        "name": "Joint",
        "mean": "adj. together; shared (chung (giữa hai hay nhiều người))"
    },
    {
        "name": "Owe",
        "mean": "v. to have a debt; to be obligated to pay (nợ, cần phải trả)"
    },
    {
        "name": "Owner",
        "mean": "n. người chủ, chủ nhân"
    },
    {
        "name": "Penalty",
        "mean": "n. a punishment, a consequence (khoản tiền phạt, hình phạt)"
    },
    {
        "name": "Penalize",
        "mean": "v. trừng trị, trừng phạt"
    },
    {
        "name": "penal",
        "mean": "adj. (thuộc) hình phạt; (thuộc) hình sự"
    },
    {
        "name": "Prepare",
        "mean": "v. to make ready (chuẩn bị)"
    },
    {
        "name": "Preparation",
        "mean": "n. sự chuẩn bị"
    },
    {
        "name": "Preparatory",
        "mean": "adj. để sửa soạn, để chuẩn bị, để dự bị"
    },
    {
        "name": "Refund",
        "mean": "n. the amount paid back, v, to give back (trả lại, hoàn trả)"
    },
    {
        "name": "Spouse",
        "mean": "n. a husband or wife (vợ hoặc chồng)"
    },
    {
        "name": "Withhold",
        "mean": "v. to keep from. To refrain from (giấu, giữ lại)"
    },
    {
        "name": "Desired",
        "mean": "adj. Wished or longed for (thèm muốn; mong muốn, ao ước, khát khao, mơ ước)"
    },
    {
        "name": "Desire",
        "mean": "v. to wish for (thèm muốn; mong muốn, ao ước, khát khao, mơ ước)"
    },
    {
        "name": "Detail",
        "mean": "v. to report or relate minutely or in particulars (kể chi tiết, trình bày tỉ mỉ)"
    },
    {
        "name": "Forecast",
        "mean": "n, a prediction of a future event .v. to estimate or calculate in advance (dự đoán, dự báo trước)"
    },
    {
        "name": "Level",
        "mean": "n. a relative position or rank on a scale (mức độ, hạng)"
    },
    {
        "name": "Overall",
        "mean": "adj. Regarded as a whole, general (tòan bộ, tổng thể, tất cả)"
    },
    {
        "name": "Perspective",
        "mean": "n. a mental view or outlook (viễn cảnh, triển vọng; tương lai, tiến độ)"
    },
    {
        "name": "Projected",
        "mean": "adj. Estimated, or predicted based on present data"
    },
    {
        "name": "Project",
        "mean": "n. dự án"
    },
    {
        "name": "Reality",
        "mean": "n. sự thật"
    },
    {
        "name": "Realistic",
        "mean": "adj. (thực tế, hiện thực)"
    },
    {
        "name": "Target",
        "mean": "v. to establish as a goal, n. a goal (mục tiêu)"
    },
    {
        "name": "Translation",
        "mean": "n. the act or process of translating (bản dịch, bài dịch)"
    },
    {
        "name": "Translate",
        "mean": "v. dịch"
    },
    {
        "name": "Translatable",
        "mean": "adj. có thể dịch được"
    },
    {
        "name": "Typical",
        "mean": "adj. Conforming to a type (tiêu biểu, điển hình; đặc thù, đặc trưng)"
    },
    {
        "name": "Yield",
        "mean": "n. an amount produced, v. to produce a profit (lợi nhuận, lợi tức; sinh lợi)"
    },
    {
        "name": "Adjacent",
        "mean": "adj. next to (gần kề, kế liền, sát ngay)"
    },
    {
        "name": "Collaboration",
        "mean": "n. the act of working with someone (sự hợp tác, cộng tác)"
    },
    {
        "name": "Collaborate",
        "mean": "v. (+with sb) (on sth) hợp tác, cộng tác"
    },
    {
        "name": "Concentrate",
        "mean": "v. to focus, to think about (trọng tâm, tập trung)"
    },
    {
        "name": "Conducive",
        "mean": "adj. Contributing to, leading to ( có lợi, thuận lợi )"
    },
    {
        "name": "Disrupt",
        "mean": "v. to interrupt, to disturb (phá vỡ, quấy rối)"
    },
    {
        "name": "Disruption",
        "mean": "n. interruption, disturbance (sự phá vỡ, sự quấy rối)"
    },
    {
        "name": "Disruptive",
        "mean": "adj. phá vỡ, quấy rối"
    },
    {
        "name": "Hamper",
        "mean": "v. to impede or interfere (ngăn trở, cản trở)"
    },
    {
        "name": "Inconsiderate",
        "mean": "adj. Rude, impolite. (thiếu chu đáo, thiếu thận trọng, khinh suất)"
    },
    {
        "name": "Lobby",
        "mean": "n. an anteroom, foyer, or waiting room (phòng khách, phòng chờ)"
    },
    {
        "name": "Move up",
        "mean": "v. to advance, improve position (thăng tiến, thăng chức)"
    },
    {
        "name": "Open to",
        "mean": "adj. Receptive to, vulnerable (dễ tiếp thu, dễ lĩnh hội; dễ bị chỉ trích)"
    },
    {
        "name": "Opt",
        "mean": "v. to choose, to decide on (+for, to, out) chọn, chọn lựa"
    },
    {
        "name": "Option",
        "mean": "n. (optimal > adj). something that you can choose to have or do; the freedom to choose what you do."
    },
    {
        "name": "Scrutinize",
        "mean": "v. to look at carefully and closely (xem xét kỹ lưỡng, nghiên cứu cẩn thận)"
    },
    {
        "name": "Scrutiny",
        "mean": "n. sự xem xét kỹ lưỡng, cẩn thận"
    },
    {
        "name": "Inscrutable",
        "mean": "adj. không thể xem xét; bí hiểm, khó hiểu"
    },
    {
        "name": "Adhere (to something)",
        "mean": "v. to follow, to pay attention to (Tuân thủ)"
    },
    {
        "name": "Agenda",
        "mean": "n. a list of topics to be discussed (Những vấn đề, công việc phải bàn tại cuộc hợp)"
    },
    {
        "name": "Bring up",
        "mean": "v. to introduce a topic (giới thiệu, đưa ra)"
    },
    {
        "name": "Conclude",
        "mean": "v. to stop, to come to a decision (kết luận, kết thúc)"
    },
    {
        "name": "Conclusion",
        "mean": "n. phần kết luận, kết quả"
    },
    {
        "name": "Conclusive",
        "mean": "adj. để kết thúc, để quyết định)"
    },
    {
        "name": "Go ahead",
        "mean": "v. to proceed with, n. permission to do something (tiếp tục, tiến triển)"
    },
    {
        "name": "Goal",
        "mean": "n. objective, purpose (mục tiêu, mục đích)"
    },
    {
        "name": "Lengthy",
        "mean": "adj. Long in time, duration, or distance (dài dòng)"
    },
    {
        "name": "Matter",
        "mean": "n. an item, issue, topic of interest (vấn đề, chủ đề)"
    },
    {
        "name": "Periodically",
        "mean": "adv. From time to time (định kỳ)"
    },
    {
        "name": "Period",
        "mean": "n. thời hạn, thời kỳ"
    },
    {
        "name": "Periodic",
        "mean": "adj. chu kỳ, định kỳ"
    },
    {
        "name": "Priority",
        "mean": "n. something of importance, something that should be done before other things (sự ưu tiên)"
    },
    {
        "name": "Prioritize",
        "mean": "v. ưu tiên"
    },
    {
        "name": "prior",
        "mean": "adj. ưu tiên"
    },
    {
        "name": "Progress",
        "mean": "n. a movement forward, v. to move forward on something, especially work or a project (sự tiến bộ, sự tiến lên)"
    },
    {
        "name": "Progression",
        "mean": "n. sự tiến bộ, tiến triển"
    },
    {
        "name": "Progressive",
        "mean": "adj. tiến bộ, tiến triển"
    },
    {
        "name": "Waste",
        "mean": "b. not to use wisely, n. not worthwhile. (không giá trị)"
    },
    {
        "name": "Brand",
        "mean": "n. an identifying mark or label, a trademark (nhãn, nhãn hiệu)"
    },
    {
        "name": "Conform",
        "mean": "v. to match specifications or qualities (làm cho phù hợp)"
    },
    {
        "name": "Defect",
        "mean": "n. an imperfection or flaw (nhược điểm)"
    },
    {
        "name": "Defective",
        "mean": "adj. có khiếm khuyết, nhược điểm"
    },
    {
        "name": "Enhance",
        "mean": "v. to make more attractive or valuable (tăng, nâng cao)"
    },
    {
        "name": "Garment",
        "mean": "n. an article of clothing (áo quần)"
    },
    {
        "name": "Inspect",
        "mean": "v. to look at closely, to examine carefully or officially (kiểm tra, thanh tra)"
    },
    {
        "name": "Inspection",
        "mean": "n. sự kiểm tra, sự xem xét"
    },
    {
        "name": "Inspector",
        "mean": "n. Người kiểm tra, thanh tra"
    },
    {
        "name": "Perceive",
        "mean": "v. to notice, to become aware of, to see (nhận thức, lĩnh hội)"
    },
    {
        "name": "Perception",
        "mean": "n. sự nhận biết, nhận thức, cảm nhận"
    },
    {
        "name": "Perceptive",
        "mean": "adj. thuộc về tri giác"
    },
    {
        "name": "Repel",
        "mean": "v. to keep away, to fight against (đẩy xa, khước từ)"
    },
    {
        "name": "Repellent",
        "mean": "n. adj. đẩy xa, khước từ"
    },
    {
        "name": "Take back",
        "mean": "b. to return something, to withdraw or retract (lấy lại, kéo lại)"
    },
    {
        "name": "Throw out",
        "mean": "v. to dispose of (vứt đi, bỏ đi)"
    },
    {
        "name": "Uniform",
        "mean": "adj. Consistent in form or appearance (Cùng 1 kiểu, không thay đổi về tính cáh hay hình thức)"
    },
    {
        "name": "Wrinkle",
        "mean": "n. a crease, ridge, or furrow, especially in skin or fabric (nếp nhăn)"
    },
    {
        "name": "Anxious",
        "mean": "adj. Worried (lo âu, băn khoăn)"
    },
    {
        "name": "Anxiety",
        "mean": "n. mối lo âu"
    },
    {
        "name": "Ascertain",
        "mean": "v. to discover, to find out for certain (tìm hiểu một cách chắc chắn"
    },
    {
        "name": "Assume",
        "mean": "v. to take upon oneself, to believe to be true (cho rằng, thừa nhận)"
    },
    {
        "name": "Assumed",
        "mean": "adj. cho rằng, thừa nhận"
    },
    {
        "name": "Assumption",
        "mean": "n. giả thuyết, giả định"
    },
    {
        "name": "Decade",
        "mean": "n. a period of ten years (thập kỷ)"
    },
    {
        "name": "Examine",
        "mean": "v. to interrogate, to scrutinize (xem xét chi tiết)"
    },
    {
        "name": "Experiment",
        "mean": "v. to try out a new procedure or idea, n. a test or trial (thí nghiệm, thử nghiệm)"
    },
    {
        "name": "Experimentation",
        "mean": "n. cuộc thử nghiệm"
    },
    {
        "name": "Experimental",
        "mean": "adj. thử nghiệm"
    },
    {
        "name": "Logical",
        "mean": "adj. formally valid, using orderly reasoning (hợp lý, có lý)"
    },
    {
        "name": "Research",
        "mean": "n. the act of collecting in formation about a particular subject (nghiên cứu)"
    },
    {
        "name": "Responsibility",
        "mean": "n. task (bổn phận, trách nhiệm)"
    },
    {
        "name": "Responsible",
        "mean": "adj. chịu trách nhiệm"
    },
    {
        "name": "Responsibly",
        "mean": "adv. có trách nhiệm"
    },
    {
        "name": "Solve",
        "mean": "v. to find a solution, explanation, or answer (giải quyết, làm sáng tỏ một vấn đề)"
    },
    {
        "name": "Supervisor",
        "mean": "n. an administrator in charge (người giám sát)"
    },
    {
        "name": "Systematic",
        "mean": "adj. Methodical in procedure, organized (có phương pháp, hệ thống)"
    },
    {
        "name": "Apprehensive",
        "mean": "adj. Anxious about the future ( e ngại, sợ)"
    },
    {
        "name": "Apprehend",
        "mean": "v. sợ/thấu hiểu/bắt giữ"
    },
    {
        "name": "Apprehension",
        "mean": "n. mối lo sợ"
    },
    {
        "name": "Circumstance",
        "mean": "n. a condition, a situation (tình thế, tình huống)"
    },
    {
        "name": "Condition",
        "mean": "n. the state of something, a requirement (điều kiện)"
    },
    {
        "name": "Conditional",
        "mean": "adj. điều kiện"
    },
    {
        "name": "Due to",
        "mean": "prep. Because of ( bởi vì, nguyên nhân dẫn đến cái gì)"
    },
    {
        "name": "Fluctuate",
        "mean": "v. to go up and down, to change (dao động, thay đổi bất thường)"
    },
    {
        "name": "Fluctuation",
        "mean": "n. fluctuating gerund. (sự giao động)"
    },
    {
        "name": "Get out of",
        "mean": "v. to escape, to exit (thoát khỏi, rời khỏi)"
    },
    {
        "name": "Indicator",
        "mean": "n. a sign, a signal."
    },
    {
        "name": "Indicate",
        "mean": "v. chỉ ra, tỏ ra"
    },
    {
        "name": "indication",
        "mean": "n. sự chỉ thị/dấu hiệu chỉ dẫn"
    },
    {
        "name": "Lease",
        "mean": "n. a contract to pay to use property for an amount of time, v. to make a contract to use property ( Hợp đồng cho thuê)"
    },
    {
        "name": "Lock into",
        "mean": "v. to commit, to be unable to change (thỏa thuận ko thay đổi)"
    },
    {
        "name": "Occupancy",
        "mean": "n. the state of being or living in a certain place (sở hữu, chiếm hữu)"
    },
    {
        "name": "Option",
        "mean": "n. a choice, an alternative ( sự lựa chọn)"
    },
    {
        "name": "Subject to",
        "mean": "adj. Under legal power, dependent (tùy thuộc vào cái gì đó, dựa theo cái gì đó)"
    },
    {
        "name": "Appeal",
        "mean": "adj. to be attractive or interesting (sự hấp dẫn, thích thú)"
    },
    {
        "name": "Arrive",
        "mean": "v. to reach a destination (tới một nơi)"
    },
    {
        "name": "Compromise",
        "mean": "n., a settlement of differences in which each side makes concessions (sự thỏa hiệp, thỏa ước)"
    },
    {
        "name": "Daring",
        "mean": "adj., to have the courage required (táo bạo, liều lĩnh)"
    },
    {
        "name": "Familiar",
        "mean": "adj., often encountered or seen; common (quen thuộc, quen, tương tự)"
    },
    {
        "name": "Guide",
        "mean": "n. one who leads, directs, or gives advice (người hướng dẫn)"
    },
    {
        "name": "Guidance",
        "mean": "n. sự hướng dẫn"
    },
    {
        "name": "Guidable",
        "mean": "adj. Có thể chỉ đạo, có thể hướng dẫn, có thể dìu dắt"
    },
    {
        "name": "Majority",
        "mean": "n. the greater number or part (phần lớn, đa số)"
    },
    {
        "name": "Mix",
        "mean": "v. trộn lẫn, hòa lẫn"
    },
    {
        "name": "Mixture",
        "mean": "n. Sự pha trộn, sự hỗn hợp"
    },
    {
        "name": "Mixable",
        "mean": "adj. Có thể trộn lẫn, có thể pha lẫn, có thể hoà lẫn"
    },
    {
        "name": "Rely",
        "mean": "v. to have confidence in; to depend on (tin cậy vào, dựa vào)"
    },
    {
        "name": "Reliability",
        "mean": "n. Sự đáng tin cậy; tính đáng tin cậy"
    },
    {
        "name": "Reliable",
        "mean": "adj. Chắc chắn, đáng tin cậy; xác thực (tin tức...)"
    },
    {
        "name": "Secure",
        "mean": "v. to get possession of; to obtain (bảo đảm)"
    },
    {
        "name": "Subjective",
        "mean": "adj., particular to a given person; highly personal; not objective (chủ quan)"
    },
    {
        "name": "Suggest",
        "mean": "v. to offer for consideration or action (gợi ý)"
    },
    {
        "name": "Suggestion",
        "mean": "n. sự gợi ý"
    },
    {
        "name": "Suggestible",
        "mean": "adj. có thể đề nghị được"
    },
    {
        "name": "Basic",
        "mean": "adj., serving as a starting point or basis (cơ bản, căn bản)"
    },
    {
        "name": "Complete",
        "mean": "adj., having all necessary or normal parts, components, or steps (đầy đủ, trọn vẹn)"
    },
    {
        "name": "Completion",
        "mean": "n. sự hoàn thành"
    },
    {
        "name": "Completely",
        "mean": "adv. làm cho đầy đủ"
    },
    {
        "name": "Excite",
        "mean": "v. to arouse an emotion (kích động)"
    },
    {
        "name": "Excitement",
        "mean": "n. sự phấn khích"
    },
    {
        "name": "Exciting",
        "mean": "adj. hứng thú, lý thú, hồi hộp"
    },
    {
        "name": "Flavor",
        "mean": "n. a distinctive taste (vị ngọt, mùi thơm phảng phất)"
    },
    {
        "name": "Forget",
        "mean": "v. to be unable to remember (quên)"
    },
    {
        "name": "Forgetful",
        "mean": "adj. cẩu thả, hay quên, trí nhớ không tốt"
    },
    {
        "name": "Forgettable",
        "mean": "adj. có thể quên được"
    },
    {
        "name": "Ingredient",
        "mean": "n. an element in a mixture (thành phần)"
    },
    {
        "name": "Judge",
        "mean": "v. to form an opinion (đánh giá)"
    },
    {
        "name": "Mix-up",
        "mean": "n. a confusion; v. to confuse (lẫn lộn, bối rối)"
    },
    {
        "name": "Patron",
        "mean": "n. a customer, especially a regular customer (khách hàng quen)"
    },
    {
        "name": "Predict",
        "mean": "v. to state, tell about, or make known in advance (dự đoán, dự báo)"
    },
    {
        "name": "Prediction",
        "mean": "n. sự dự báo, sự dự đoán; lời dự đoán, lời tiên tri"
    },
    {
        "name": "Predictable",
        "mean": "adj. có thể đoán trước, có thể dự đoán, dự báo"
    },
    {
        "name": "Random",
        "mean": "adj. having no specific pattern, purpose, or objective (ngẫu nhiên, tình cờ)"
    },
    {
        "name": "Remind",
        "mean": "v. to cause to remember (nhắc nhở)"
    },
    {
        "name": "Burdensome",
        "mean": "adj. of or like a burden; onerous (nặng nề, phiền toái)"
    },
    {
        "name": "Common",
        "mean": "adj. widespread, frequent, usual (thông thường, phổ biến)"
    },
    {
        "name": "In common",
        "mean": "n. điểm chung, giống"
    },
    {
        "name": "Commonly",
        "mean": "adv. thông thường, phổ biến"
    },
    {
        "name": "Delivery",
        "mean": "n. the act of conveying or delivering (giao hàng)"
    },
    {
        "name": "Elegant",
        "mean": "adj. exhibiting refined, tasteful beauty (thanh lịch, trang nhã)"
    },
    {
        "name": "Elegance",
        "mean": "n. sự thanh lịch"
    },
    {
        "name": "Elegantly",
        "mean": "adv. thanh lịch"
    },
    {
        "name": "Fall to",
        "mean": "v. to become one’s responsibility ( trách nhiệm được giao cho )"
    },
    {
        "name": "Impress",
        "mean": "v. to affect strongly, often favorably (ấn tượng)"
    },
    {
        "name": "Impression",
        "mean": "n. sự ấn tượng"
    },
    {
        "name": "Individual",
        "mean": "adj. by or for one person; special; particular (cá nhân, riêng lẻ)"
    },
    {
        "name": "Individualize",
        "mean": "v. cá nhân hóa, chỉ rõ"
    },
    {
        "name": "Individually",
        "mean": "adv. cá nhân, riêng lẻ"
    },
    {
        "name": "List",
        "mean": "n. danh sách"
    },
    {
        "name": "Multiple",
        "mean": "adj. having, relating to , or consisting of more than one part (nhiều, phức tạp)"
    },
    {
        "name": "Narrow",
        "mean": "v. to limit or restrict; adj., limited (chật hẹp, hạn chế)"
    },
    {
        "name": "Pick up",
        "mean": "v. to take on passengers or freight (đón (ai đó))"
    },
    {
        "name": "Settle",
        "mean": "v. to make compensation for, to pay; to choose (định cư, ổn định)"
    },
    {
        "name": "Accustom to",
        "mean": "v. to become familiar with, to become used to (làm quen với cái gì)"
    },
    {
        "name": "Apprentice",
        "mean": "n. a student worker in a chosen field (tập sự, người mới vào nghề)"
    },
    {
        "name": "Apprenticeship",
        "mean": "n. sự tập sự, học nghề"
    },
    {
        "name": "Culinary",
        "mean": "adj. relating to the kitchen or cooking (việc bếp núc)"
    },
    {
        "name": "Demanding",
        "mean": "adj. requiring much effort or attention (Đòi hỏi khắt khe)"
    },
    {
        "name": "Draw",
        "mean": "v. to cause to come by attracting (kéo, lôi kéo)"
    },
    {
        "name": "Incorporate",
        "mean": "v. to unite one thing with something else already in existence (sát nhập chặt chẽ)"
    },
    {
        "name": "Incorporation",
        "mean": "n. sự kết hợp, cộng tác"
    },
    {
        "name": "Influx",
        "mean": "n. a flowing in (dòng chảy vào)"
    },
    {
        "name": "Method",
        "mean": "n. a procedure (phương pháp, cách thức)"
    },
    {
        "name": "Methodology",
        "mean": "n. phương pháp luận"
    },
    {
        "name": "Methodical",
        "mean": "adj. có phương pháp"
    },
    {
        "name": "Outlet",
        "mean": "n. a means of release or gratification, as for energies, drives, or desires (lối ra, lối thoát)"
    },
    {
        "name": "Profession",
        "mean": "n. an occupation requiring considerable training and specialized study (nghề nghiệp)"
    },
    {
        "name": "Professional",
        "mean": "adj. chuyên nghiệp"
    },
    {
        "name": "Professionally",
        "mean": "adv. một cách chuyên nghiệp"
    },
    {
        "name": "Relinquish",
        "mean": "v. to let go; to surrender (từ bỏ)"
    },
    {
        "name": "Theme",
        "mean": "n. an implicit or recurrent idea; a motif (chủ đề, đề tài)"
    },
    {
        "name": "Assist",
        "mean": "v. to give help or support to ( trợ giúp, hỗ trợ )"
    },
    {
        "name": "Assistance",
        "mean": "n. sự giúp đỡ, người giúp việc"
    },
    {
        "name": "Assistant",
        "mean": "n. trợ lý"
    },
    {
        "name": "Coordinate",
        "mean": "v. to adjust or arrange parts to work together (sắp xếp, sẳp đặt)"
    },
    {
        "name": "Dimension",
        "mean": "n. a measure of width, height, or length (kích thước)"
    },
    {
        "name": "Exact",
        "mean": "adj. characterized by accurate measurements or inferences (chính xác)"
    },
    {
        "name": "General",
        "mean": "adj. involving only the main feature rather than precise details (hầu hết, phổ biến)"
    },
    {
        "name": "Generalize",
        "mean": "v. khái quát hóa, tổng quát hóa"
    },
    {
        "name": "Generally",
        "mean": "adv. đại khái, chung chung"
    },
    {
        "name": "Ideal",
        "mean": "adj. imaginary; existing as a perfect model (quan niệm, tưởng tượng, mẫu hình lý tưởng)"
    },
    {
        "name": "Idealize",
        "mean": "v. lý tưởng hóa, theo lý tưởng"
    },
    {
        "name": "Lead time",
        "mean": "n. the time between the initial stage of a project and the appearance of results (khoảng thời gian giữa lúc bắt đầu và lúc hoàn thành một quá trình sx mới)"
    },
    {
        "name": "Plan",
        "mean": "n. kế hoạch"
    },
    {
        "name": "Proximity",
        "mean": "n. the state, quality, sense, or fact of being near or next to; closeness (sự gần gũi)"
    },
    {
        "name": "Regulation",
        "mean": "n. rules, laws, or controls; v., to control (sự điều chỉnh, qui tắc, điều lệ)"
    },
    {
        "name": "Regulate",
        "mean": "v. điều chỉnh"
    },
    {
        "name": "Regulatory",
        "mean": "adj. điều chỉnh, quy định"
    },
    {
        "name": "Site",
        "mean": "n. a place or setting (vị trí, địa điểm)"
    },
    {
        "name": "Stage",
        "mean": "v. to exhibit or present (Trình diễn)"
    },
    {
        "name": "Agency",
        "mean": "n., an establishment engaged in doing business (đại lý)"
    },
    {
        "name": "Announcement",
        "mean": "n. a public notification (sự thông báo)"
    },
    {
        "name": "Announce",
        "mean": "v. thông báo"
    },
    {
        "name": "Announcer",
        "mean": "n. người thông báo"
    },
    {
        "name": "Beverage",
        "mean": "n. a drink other than plain water (đồ uống, thức uống)"
    },
    {
        "name": "Blanket",
        "mean": "n. a covering for keeping warm, especially during sleep; any full coverage; v., to cover uniformly (Mền, chăn)"
    },
    {
        "name": "Board",
        "mean": "v. to enter a boat, plane, or train; to furnish to see the roads v.,(lên tàu)"
    },
    {
        "name": "Onboard",
        "mean": "adj. trên tàu"
    },
    {
        "name": "Claim",
        "mean": "v. to take as rightful; to retrieve (đòi hỏi, quyền yêu sách)"
    },
    {
        "name": "Delay",
        "mean": "v. n. trì hoãn"
    },
    {
        "name": "Embark",
        "mean": "v. to go onboard a flight or ship; to begin (Lên tàu)"
    },
    {
        "name": "Itinerary",
        "mean": "n. a proposed rout for a journey, showing dates and means of travel (lịch trình bay)"
    },
    {
        "name": "Prohibit",
        "mean": "v. to forbid by authority or to prevent (ngăn cấm, ngăn chặn)"
    },
    {
        "name": "Valid",
        "mean": "adj. having legal efficacy or correctness (hiệu lực)"
    },
    {
        "name": "Validate",
        "mean": "v. chứng thực, xác nhận"
    },
    {
        "name": "Validation",
        "mean": "n. sự chứng thực, xác nhận"
    },
    {
        "name": "Deal with",
        "mean": "v. phrase, to attend to; mange; to see to (bàn về cái gì, thỏa thuận cái gì)"
    },
    {
        "name": "Destination",
        "mean": "n. the place to which one is going or directed (điểm đến)"
    },
    {
        "name": "Distinguish",
        "mean": "v. to make noticeable or different (nhận ra, nhận biết)"
    },
    {
        "name": "Distinguishable",
        "mean": "adj. có thể nhận ra"
    },
    {
        "name": "Distinguishably",
        "mean": "adv. nhận ra, nhận biết"
    },
    {
        "name": "Economical",
        "mean": "adj. intended to save money, time, or effort (tiết kiệm)"
    },
    {
        "name": "Economy",
        "mean": "n. sự tiết kiệm"
    },
    {
        "name": "Economize",
        "mean": "v. tiết kiệm"
    },
    {
        "name": "Equivalent",
        "mean": "adj. equal (tương đương)"
    },
    {
        "name": "Excursion",
        "mean": "n. a pleasure trip; a trip at a reduced fare (chuyến thăm quan)"
    },
    {
        "name": "Expensive",
        "mean": "adj. marked by high prices (đắt tiền)"
    },
    {
        "name": "Expense",
        "mean": "n. chi phí,chi tiêu"
    },
    {
        "name": "Expensively",
        "mean": "adv. tốn kém, đắt tiền"
    },
    {
        "name": "Extend",
        "mean": "v. to make longer; to offer (keó dài, dành cho)"
    },
    {
        "name": "Prospective",
        "mean": "adj. likely to become or be (về sau, sắp tới)"
    },
    {
        "name": "Situation",
        "mean": "n. the combination of circumstances at a given moment (vị trí, tình thế)"
    },
    {
        "name": "Substantial",
        "mean": "adj. considerable in importance, value degree amount, or extent (đáng kể, quan trọng)"
    },
    {
        "name": "Substance",
        "mean": "n. Chất liệu; vật chất, bản chất..."
    },
    {
        "name": "substantially",
        "mean": "adv. đáng kể, có tính chất quan trọng"
    },
    {
        "name": "System",
        "mean": "n. a functionally related group of elements (hệ thống)"
    },
    {
        "name": "Comprehensive",
        "mean": "adj. covering broadly; inclusive (bao gồm, bao hàm)"
    },
    {
        "name": "Comprehensiveness",
        "mean": "n. sự toàn diện"
    },
    {
        "name": "Comprehensively",
        "mean": "adv. toàn diện"
    },
    {
        "name": "Deluxe",
        "mean": "adj. noticeably luxurious (thuộc loại sang trọng, xa xỉ)"
    },
    {
        "name": "Directory",
        "mean": "n. a book or collection of information or directions (danh mục, danh bạ)"
    },
    {
        "name": "Duration",
        "mean": "n. the time during which something lasts (khoảng thời gian)"
    },
    {
        "name": "Entitle",
        "mean": "v. to allow or qualify (cho quyền làm gì)"
    },
    {
        "name": "Fare",
        "mean": "n. the money paid for transportation (tiền xe, tiền vé)"
    },
    {
        "name": "Offset",
        "mean": "v. to counterbalance (đền bù, bù đắp)"
    },
    {
        "name": "Operate",
        "mean": "v. to perform a function (hoạt động)"
    },
    {
        "name": "Operation",
        "mean": "n. operational adj.,(sự hoạt động)"
    },
    {
        "name": "Punctual",
        "mean": "adj. prompt (đúng giờ)"
    },
    {
        "name": "Punctuality",
        "mean": "n. sự đúng giờ"
    },
    {
        "name": "punctually",
        "mean": "adv. tính đúng giờ"
    },
    {
        "name": "Relatively",
        "mean": "adv. somewhat (tương đối, vừa phải)"
    },
    {
        "name": "Remainder",
        "mean": "n. the remaining part (phần còn lại)"
    },
    {
        "name": "Remote",
        "mean": "adj. far removed (xa xôi, tách biệt)"
    },
    {
        "name": "Remoteness",
        "mean": "n. sự xa xôi, vùng sâu vùng xa"
    },
    {
        "name": "Remotely",
        "mean": "adv. Sự xa xôi, rất xa"
    },
    {
        "name": "Advance",
        "mean": "n. sự cải tiến; v. tiến bộ, thúc đẩy"
    },
    {
        "name": "Chain",
        "mean": "n, a group of enterprises under a single control ( dãy, chuỗi, loạt. Các công việc kinh doanh do 1 người làm chủ)"
    },
    {
        "name": "Check in",
        "mean": "v. to register at a hotel; to report one’s presence (đăng ký ở khách sạn, sự đăng ký đi máy bay)"
    },
    {
        "name": "Confirm",
        "mean": "v. to validate ( xác nhận; chứng thực)"
    },
    {
        "name": "Confirmation",
        "mean": "n. sự xác nhận; chứng thực"
    },
    {
        "name": "Confirmed",
        "mean": "adj. xác nhận"
    },
    {
        "name": "Expect",
        "mean": "v. to consider probable or reasonable (đoán trước, liệu trước)"
    },
    {
        "name": "Expectation",
        "mean": "n. Sự mong đợi"
    },
    {
        "name": "Housekeeper",
        "mean": "n. someone employed to do domestic work (quản gia)"
    },
    {
        "name": "Notify",
        "mean": "v. to report (thông báo, cho biết)"
    },
    {
        "name": "Preclude",
        "mean": "v. to make impossible; to rule out (ngăn cản, ngăn ngừa)"
    },
    {
        "name": "Quote",
        "mean": "v. to give exact information on; n., a quotation ( trích dẫn)"
    },
    {
        "name": "Quotation",
        "mean": "n. quotable adj., (lời trích dẫn)"
    },
    {
        "name": "Rate",
        "mean": "n. the payment or price according to a standard (giá (cả))"
    },
    {
        "name": "Reserve",
        "mean": "v. to set aside (đặt trước, dự trữ, dự phòng, để dành)"
    },
    {
        "name": "Reservation",
        "mean": "n. sự đặt chỗ trước"
    },
    {
        "name": "Service",
        "mean": "n. useful functions (dịch vụ)"
    },
    {
        "name": "Busy",
        "mean": "adj. engaged in activity (bận)"
    },
    {
        "name": "Coincide",
        "mean": "v. to happen at the same time (xảy ra trùng khớp, đồng thời)"
    },
    {
        "name": "Coincidence",
        "mean": "n. sự trùng hợp, đồng thời"
    },
    {
        "name": "Coincidentally",
        "mean": "adv. trùng hợp ngẫu nhiên"
    },
    {
        "name": "Confusion",
        "mean": "n. a lack of clarity, order, or understanding (nhầm lẫn, bối rối)"
    },
    {
        "name": "Contact",
        "mean": "v. to get in touch with (liên hệ với ai)"
    },
    {
        "name": "Disappoint",
        "mean": "v. to fail to satisfy the hope, desire, or expectation of (làm thất vọng)"
    },
    {
        "name": "Intend",
        "mean": "v. to have in mind (dự định)"
    },
    {
        "name": "Intention",
        "mean": "n. sự dự tính, dự định"
    },
    {
        "name": "Intent",
        "mean": "adj. dự định"
    },
    {
        "name": "License",
        "mean": "n. the legal permission to do or own a specified thing (cấp phép, giấy phép)"
    },
    {
        "name": "Nervous",
        "mean": "adj. easily agitated or distressed; uneasy or apprehensive (hồi hộp, lo lắng)"
    },
    {
        "name": "Nervousness",
        "mean": "n. sự hồi hợp, lo lắng"
    },
    {
        "name": "Nervously",
        "mean": "adv. hồi hợp, lo lắng"
    },
    {
        "name": "Optional",
        "mean": "adj. not compulsory or automatic (tùy ý, ko bắt buộc)"
    },
    {
        "name": "Tempt",
        "mean": "v. to be inviting or attractive to (lôi kéo, xúc giục)"
    },
    {
        "name": "Temptation",
        "mean": "n. sự lôi kéo, cám dỗ"
    },
    {
        "name": "Tempting",
        "mean": "adj. cám dỗ"
    },
    {
        "name": "Thrill",
        "mean": "n. the source or cause of excitement or emotion (rùng mình, rùng rợn li kỳ)"
    },
    {
        "name": "Tier",
        "mean": "n. a rank or class (dãy, tầng, lớp)"
    },
    {
        "name": "Attain",
        "mean": "v. to achieve (đạt được, giành được)"
    },
    {
        "name": "Attainment",
        "mean": "n. sự đạt được, giành được"
    },
    {
        "name": "Attainable",
        "mean": "adj. có thể đạt được"
    },
    {
        "name": "Combine",
        "mean": "v. to come together (kết hợp, phối hợp)"
    },
    {
        "name": "Continue",
        "mean": "v. to maintain without interruption ( tiếp tục)"
    },
    {
        "name": "Continuation",
        "mean": "n. sự tiếp diễn, tiếp tục"
    },
    {
        "name": "Continual",
        "mean": "adj. tiếp tục"
    },
    {
        "name": "Description",
        "mean": "n. a representation in words or pictures (sự mô tả, diễn tả)"
    },
    {
        "name": "Describe",
        "mean": "v. miêu tả"
    },
    {
        "name": "descriptive",
        "mean": "adj. dùng để tả, thích miêu tả"
    },
    {
        "name": "Disperse",
        "mean": "v. to spread widely, to scatter (phân tán)"
    },
    {
        "name": "Entertainment",
        "mean": "n. a diverting performance or activity (sự giải trí)"
    },
    {
        "name": "Entertain",
        "mean": "v. giải trí"
    },
    {
        "name": "Entertaining",
        "mean": "adj. giải trí"
    },
    {
        "name": "Influence",
        "mean": "v. to alter or affect (ảnh hưởng, tác động)"
    },
    {
        "name": "Range",
        "mean": "n. the scope (phạm vi, trình độ, lĩnh vực)"
    },
    {
        "name": "Release",
        "mean": "v. to make available to the pubic; to give permission for performance (công bố, phát hành)"
    },
    {
        "name": "Represent",
        "mean": "v. to typify (đóng, diễn kịch)"
    },
    {
        "name": "Separate",
        "mean": "adj. detached; kept apart (tách bạch, tách tiêng)"
    },
    {
        "name": "Successive",
        "mean": "adj. following in order (kế tiếp, nối tiếp, liên tục liên tiếp)"
    },
    {
        "name": "Acting",
        "mean": "n. thủ vai, diễn xuất"
    },
    {
        "name": "Approach",
        "mean": "v. n. tiếp cận, lại gần;"
    },
    {
        "name": "Approachable",
        "mean": "adj. có thể tiếp cận, lại gần"
    },
    {
        "name": "Audience",
        "mean": "n. the spectators at a performance (khán giả)"
    },
    {
        "name": "Create",
        "mean": "v. to produce through artistic or imaginative effort (sáng tạo)"
    },
    {
        "name": "Creation",
        "mean": "n. sự sáng tạo"
    },
    {
        "name": "Creative",
        "mean": "adj. sáng tạo"
    },
    {
        "name": "Dialogue",
        "mean": "n. a conversation between two or more persons (giai thoại, hội thoại)"
    },
    {
        "name": "Element",
        "mean": "n. fundamental or essential constituent (yếu tố, nguyên tố)"
    },
    {
        "name": "Experience",
        "mean": "n. kinh nghiệm"
    },
    {
        "name": "Experienced",
        "mean": "adj. kinh nghiệm, từng trãi"
    },
    {
        "name": "Occur",
        "mean": "v. to take place; to come about (xuất hiện, nảy ra )"
    },
    {
        "name": "Perform",
        "mean": "v. to act before an audience, to give a public presentation of (diễn xuất, thực hiện)"
    },
    {
        "name": "Performance",
        "mean": "n. biểu diên, trình diễn, hiệu năng hoạt động"
    },
    {
        "name": "Performer",
        "mean": "n. người biểu diễn, thực hiện"
    },
    {
        "name": "Rehearse",
        "mean": "v. to practice in preparation for a public performance; to direct in rehearsal (Diễn tập, kể lại, thuật lại)"
    },
    {
        "name": "Review",
        "mean": "n. a critical estimate of a work or performance; v., writing a criticism of a performance (Sự phê bình, lời phê bình )"
    },
    {
        "name": "Sold out",
        "mean": "adj. having all tickets or accommodations completely sold, especially ahead of time; v., to sell all the tickets (hết vé)"
    },
    {
        "name": "Available",
        "mean": "adj. ready for use; willing to serve (sẵn sàng để dùng)"
    },
    {
        "name": "Broad",
        "mean": "adj. covering a wide scope (rộng rãi, rõ ràng)"
    },
    {
        "name": "Category",
        "mean": "n. a division in a system of classification; a general class of ideas (hạng, loại)"
    },
    {
        "name": "Categorize",
        "mean": "v. phân loại xác thực"
    },
    {
        "name": "Disparate",
        "mean": "adj. fundamentally distinct or different (khác loại)"
    },
    {
        "name": "Divide",
        "mean": "v. to separate into parts (phân chia)"
    },
    {
        "name": "Favorite",
        "mean": "adj. preferred (ưa thích)"
    },
    {
        "name": "Favorable",
        "mean": "adj. thuận lợi, thuận tiện"
    },
    {
        "name": "Favorably",
        "mean": "adv. thuận lợi"
    },
    {
        "name": "Instinct",
        "mean": "n. an inborn pattern that is a powerful motivation (bản năng)"
    },
    {
        "name": "Preference",
        "mean": "n. someone or something liked over another or others (sự ưa thích, thích cái gì hơn)"
    },
    {
        "name": "Prefer",
        "mean": "v. thích hơn"
    },
    {
        "name": "preferential",
        "mean": "adj. ưu đãi, ưu tiên"
    },
    {
        "name": "Reason",
        "mean": "n. the basis or motive for a action; an underlying fact or cause (lý do)"
    },
    {
        "name": "Relaxation",
        "mean": "n. sự thư giãn, giải trí"
    },
    {
        "name": "Relax",
        "mean": "v. thư giãn"
    },
    {
        "name": "Relaxed",
        "mean": "adj. thư giãn"
    },
    {
        "name": "Taste",
        "mean": "n. the ability to discern what is excellent or appropriate (sở thích,thị hiếu)"
    },
    {
        "name": "Urge",
        "mean": "v. to advocate earnestly; a., a natural desire (thúc giục, giục giã)"
    },
    {
        "name": "Acquire",
        "mean": "v. to gain possession of; to get by one’s own efforts (mua được, thâu được)"
    },
    {
        "name": "Admire",
        "mean": "v. to regard with pleasure; to have esteem or respect for (Khâm phục, hâm mộ)"
    },
    {
        "name": "Collection",
        "mean": "n. a group of objects or works to be seen, studied, or kept together (bộ sưu tập)"
    },
    {
        "name": "Collect",
        "mean": "v. thu thập, sưu tầm"
    },
    {
        "name": "Collector",
        "mean": "n. người thu thập, sưu tầm"
    },
    {
        "name": "Criticism",
        "mean": "n. an evaluation, especially of literary or other artistic works (sự phê bình, bình phẩm)"
    },
    {
        "name": "Criticize",
        "mean": "v. Phê bình"
    },
    {
        "name": "Express",
        "mean": "v. to give an opinion or depict emotion (bày tỏ, biểu lộ tình cảm)"
    },
    {
        "name": "Fashion",
        "mean": "n. the prevailing style or custom (thời trang)"
    },
    {
        "name": "Leisure",
        "mean": "n. freedom from time-consuming duties; free time (thời gian rảnh rỗi)"
    },
    {
        "name": "Respond",
        "mean": "v. to make a reply; to react (hồi âm, phúc đáp)"
    },
    {
        "name": "Response",
        "mean": "n. sự trả lời"
    },
    {
        "name": "Responsive",
        "mean": "adj. đáp lại"
    },
    {
        "name": "Schedule",
        "mean": "n. a list of times of events; v., to enter on a schedule (lịch trình, kế hoạch làm việc)"
    },
    {
        "name": "Significant",
        "mean": "adj. meaningful; having a major effect; important (quan trọng, trọng đại, đáng kể)"
    },
    {
        "name": "Specialize",
        "mean": "v. to concentrate on a particular activity (chuyên môn hóa)"
    },
    {
        "name": "Specialist",
        "mean": "n. chuyên gia"
    },
    {
        "name": "Specialized",
        "mean": "adj. chuyên môn"
    },
    {
        "name": "Spectrum",
        "mean": "n. a range of related qualities, ideas, or activities ( sự phân bổ theo tính chất, số lượng, hành vi)"
    },
    {
        "name": "assignment",
        "mean": "(n) something, such as a task (sự giao việc, phân công)"
    },
    {
        "name": "choose",
        "mean": "(v) chọn, lựa chọn"
    },
    {
        "name": "Constantly",
        "mean": "on a continual basis, happening all the time (liên tục, luôn luôn, không đổi)"
    },
    {
        "name": "constitute",
        "mean": "(v) to be the elements or parts of (cấu tạo)"
    },
    {
        "name": "decision",
        "mean": "(n) sự quyết định, sự lựa chọn"
    },
    {
        "name": "disseminate",
        "mean": "(v) truyền bá, phổ biến, phân tán"
    },
    {
        "name": "impact",
        "mean": "(n,v) tác động, ảnh hưởng"
    },
    {
        "name": "in-depth",
        "mean": "(adj) in complete detail; thorough (chuyên sâu)"
    },
    {
        "name": "investigate",
        "mean": "(v) to uncover and report hidden information (khảo sát, điều tra)"
    },
    {
        "name": "link",
        "mean": "liên kết"
    },
    {
        "name": "subscribe",
        "mean": "(v) to receive a periodical regularly on order (đăng ký, đặt mua)"
    },
    {
        "name": "thorough",
        "mean": "(adj) exhaustively complete (kỹ lưỡng, chuyên sâu, tỉ mỉ)"
    },
    {
        "name": "thoroughness",
        "mean": "(n) sự kỹ lưỡng, tỉ mỉ"
    },
    {
        "name": "thoroughly",
        "mean": "(adv) kỹ lưỡng"
    },
    {
        "name": "annually",
        "mean": "(adv) once a year (hàng năm)"
    },
    {
        "name": "appointment",
        "mean": "cuộc hẹn"
    },
    {
        "name": "assess",
        "mean": "(v) to determine the value or rate of something (tính giá, định giá)"
    },
    {
        "name": "diagnose",
        "mean": "(v) to recognize a disease; to analyze the nature of something (chuẩn đoán)"
    },
    {
        "name": "effective",
        "mean": "(adj) producing the desired effect; being in effect (có hiệu lực, có kết quả)"
    },
    {
        "name": "instrument",
        "mean": "(n) a tool for precise work; the mean whereby something is achieved (dụng cụ đo lường, dụng cụ kiểm tra)"
    },
    {
        "name": "manage",
        "mean": "(v) quản lý"
    },
    {
        "name": "prevent",
        "mean": "(v) to keep from happening (ngăn ngừa, ngăn cản)"
    },
    {
        "name": "recommendation",
        "mean": "(n) advice; endorsement"
    },
    {
        "name": "record",
        "mean": "(n) kỷ lục, hồ sơ lý lịch"
    },
    {
        "name": "refer",
        "mean": "(v) tham khảo"
    },
    {
        "name": "serious",
        "mean": "(adj) Nghiêm trọng"
    },
    {
        "name": "aware",
        "mean": "nhận thức"
    },
    {
        "name": "catch up",
        "mean": "(v) to bring up to date (bắt kịp)"
    },
    {
        "name": "distraction",
        "mean": "(n) the act of being turned away from the focus (sự không tập trung, sự phân tâm)"
    },
    {
        "name": "encouragement",
        "mean": "(n) inspiration or support (sự động viên, sự giúp đỡ)"
    },
    {
        "name": "evident",
        "mean": "(adj) easily seen or understood; obvious (hiển nhiên, rõ ràng)"
    },
    {
        "name": "habit",
        "mean": "(n) thói quen"
    },
    {
        "name": "illuminate",
        "mean": "(v) to provider or brighten with light (chiếu sáng, rọi sáng)"
    },
    {
        "name": "irritate",
        "mean": "(v) to chafer or inflame, to bother (làm viêm, sưng tấy)"
    },
    {
        "name": "overview",
        "mean": "(n) an summary; a survey; a quick look (tổng quan, nhìn lướt qua)"
    },
    {
        "name": "position",
        "mean": "(n) the right or appropriate place (đúng chỗ, vị trí thích hợp)"
    },
    {
        "name": "regularly",
        "mean": "(adv) đều đặn, thường xuyên"
    },
    {
        "name": "restore",
        "mean": "(v) to bring back to an original condition (phục hồi lại)"
    },
    {
        "name": "allow",
        "mean": "(v) to let do or happen; to permit"
    },
    {
        "name": "alternative",
        "mean": "(adj) allowing a choice; other (lựa chọn, phương pháp thay thế)"
    },
    {
        "name": "aspect",
        "mean": "(n) khía cạnh, (adj) tình trạng"
    },
    {
        "name": "concern",
        "mean": "(n) anxiety; worry"
    },
    {
        "name": "emphasize",
        "mean": "(v) chú trọng, nhấn mạnh"
    },
    {
        "name": "incur",
        "mean": "(v) to become subject to (gánh chịu)"
    },
    {
        "name": "personnel",
        "mean": "(n) a group of employees or workers"
    },
    {
        "name": "policy",
        "mean": "chính sách"
    },
    {
        "name": "portion",
        "mean": "(n) a section or quantity within a larger thing; a part of a whole (một phần, một đoạn)"
    },
    {
        "name": "regardless",
        "mean": "(adv) in spite of (bất chấp, bất kể)"
    },
    {
        "name": "salary",
        "mean": "(n) money that employees receive for doing their job, usually paid every month"
    },
    {
        "name": "suit",
        "mean": "(v) to be appropriate; to satisfy (thích hợp)"
    },
    {
        "name": "admit",
        "mean": "(v) to permit to enter (chấp nhận, cho vào)"
    },
    {
        "name": "authorize",
        "mean": "(v) to approve (cho phép, ủy quyền)"
    },
    {
        "name": "designate",
        "mean": "(v) to indicate or specify (đặt tên, chỉ rõ)"
    },
    {
        "name": "escort",
        "mean": "(n) a person accompanying another to guide or protect (người dẫn đường, người bảo vệ)"
    },
    {
        "name": "identify",
        "mean": "(v) to ascertain the name or belongings of (nhận ra)"
    },
    {
        "name": "mission",
        "mean": "(n) an inner calling to pursue an activity or perform a service (sứ mệnh, nhiệm vụ)"
    },
    {
        "name": "permit",
        "mean": "(v) to allow (cho phép)"
    },
    {
        "name": "pertinent",
        "mean": "(adj) having relevance to the matter at hand (thích hợp, đúng chỗ)"
    },
    {
        "name": "procedure",
        "mean": "(n) a series of steps taken to accomplish an end (phương thức, thủ tục)"
    },
    {
        "name": "result",
        "mean": "(n) an outcome"
    },
    {
        "name": "statement",
        "mean": "(n) an accounting showing an amount due; a bill (báo cáo, bản kê)"
    },
    {
        "name": "usually",
        "mean": "(adv) customarily (thông thường, theo lẽ thường)"
    },
    {
        "name": "Consult",
        "mean": "to seek advice or information of (hỏi ý kiến, tham khảo)"
    },
    {
        "name": "Control",
        "mean": "to exercise authoritative or dominating influence (kiểm tra, kiểm soát, thử lại)"
    },
    {
        "name": "Convenient",
        "mean": "suited or favorable to one’s purpose; easy to reach (tiện lợi, thuận lợi; thích hợp)"
    },
    {
        "name": "Detect",
        "mean": "to discover or ascertain (dò ra, tìm ra, khám phá ra, phát hiện ra)"
    },
    {
        "name": "Detection",
        "mean": "(n) sự dò ra, sự phát hiện ra"
    },
    {
        "name": "Detectable",
        "mean": "(adj) dò ra, phát hiện"
    },
    {
        "name": "Factor",
        "mean": "a contribution to an accomplishment, a result, or a process (nhân tố)"
    },
    {
        "name": "Interaction",
        "mean": "an influence; a mutual activity (tác động qua lại)"
    },
    {
        "name": "Limit",
        "mean": "the point beyond which something cannot proceed (giới hạn, hạn độ)"
    },
    {
        "name": "Monitor",
        "mean": "to keep track of (giám sát)"
    },
    {
        "name": "Potential",
        "mean": "capable of being but not ye in existence; possible (tiềm năng)"
    },
    {
        "name": "Sample",
        "mean": "a portion, piece, or segment that is representative of a whole (mẫu, mẫu hàng)"
    },
    {
        "name": "Sense",
        "mean": "a judgment; an intellectual interpretation (khả năng phán đoán)"
    },
    {
        "name": "Volunteer",
        "mean": "one who performs a service without pay; v., to perform as a volunteer (người tình nguyện, người xung phong)"
    },
    {
        "name": "Volunteerism",
        "mean": "hoạt động tình nguyện"
    },
    {
        "name": "voluntary",
        "mean": "adj, tự nguyện"
    },
    {
        "name": "admit V-ing",
        "mean": "(V + V-ing) cho phép"
    },
    {
        "name": "deny V-ing",
        "mean": "(V + V-ing) từ chối"
    },
    {
        "name": "consider V-ing",
        "mean": "(V + V-ing) cân nhắc"
    },
    {
        "name": "stop V-ing",
        "mean": "(V + V-ing) ngừng"
    },
    {
        "name": "contemplate V-ing",
        "mean": "(V + V-ing) chiêm ngưỡng"
    },
    {
        "name": "imagine V-ing",
        "mean": "(V + V-ing) tưởng tượng"
    },
    {
        "name": "finish V-ing",
        "mean": "(V + V-ing) hoàn tất"
    },
    {
        "name": "mind V-ing",
        "mean": "(V + V-ing) nhớ, lưu ý, để ý"
    },
    {
        "name": "resent V-ing",
        "mean": "(V + V-ing) tức giận"
    },
    {
        "name": "dislike V-ing",
        "mean": "(V + V-ing) không thích"
    },
    {
        "name": "appreciate V-ing",
        "mean": "(V + V-ing) đánh giá cao"
    },
    {
        "name": "enjoy V-ing",
        "mean": "(V + V-ing) thưởng thức, tận hưởng"
    },
    {
        "name": "mention V-ing",
        "mean": "(V + V-ing) đề cập đến, nhắc đến"
    },
    {
        "name": "postpone V-ing",
        "mean": "(V + V-ing) hoãn"
    },
    {
        "name": "discuss V-ing",
        "mean": "(V + V-ing) thảo luận"
    },
    {
        "name": "suggest V-ing",
        "mean": "(V + V-ing) gợi ý"
    },
    {
        "name": "avoid V-ing",
        "mean": "(V + V-ing) tránh né"
    },
    {
        "name": "risk V-ing",
        "mean": "(V + V-ing) rủi ro, nguy cơ"
    },
    {
        "name": "involve V-ing",
        "mean": "(V + V-ing) liên quan đến"
    },
    {
        "name": "keep V-ing",
        "mean": "(V + V-ing) giữ"
    },
    {
        "name": "miss V-ing",
        "mean": "(V + V-ing) nhớ, bỏ lỡ"
    },
    {
        "name": "practice V-ing",
        "mean": "(V + V-ing) thực hành, luyện tập"
    },
    {
        "name": "can't V-ing",
        "mean": "(V + V-ing) không thể"
    },
    {
        "name": "stand V-ing",
        "mean": "(V + V-ing) đứng"
    },
    {
        "name": "can't help V-ing",
        "mean": "(V + V-ing) không thể nhịn, không thể control something"
    }
]

const listEl = document.querySelector('.list')


vocas.forEach((voca, index) => {
    const id = document.createElement('span')
    id.innerText = index + 1
    const name = document.createElement('h6')
    name.innerText = voca.name
    const mean = document.createElement('p')
    mean.innerText = voca.mean
    const divEl = document.createElement('div')
    divEl.classList.add('item')
    divEl.append(id)
    divEl.append(name)
    divEl.append(mean)
    listEl.append(divEl)
})













// const store = window.localStorage.getItem('vocas')

// el = document.querySelectorAll('.text-text .text .text:first-child')
// let vocas = store ? JSON.parse(store) : []
// let voca = {}
// let data = Array.from(el)
// data.forEach((item, index) => {
//      if (index % 2 === 0 ) {
//         voca.name = item.innerText
//         return
//      }
//      if (index % 2 !== 0 ) {
//          voca.mean = item.innerText
//          vocas = [...vocas, voca]
//          voca = {}
//      }
//  })

// window.localStorage.setItem('vocas', JSON.stringify(vocas))

