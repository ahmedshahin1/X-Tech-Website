import type { Language } from '@/context/LanguageContext';

const arabicTranslations: Record<string, string> = {
  'X Tech Agency Home': 'الرئيسية لوكالة إكس تك',
  'Home': 'الرئيسية',
  'About': 'من نحن',
  'Services': 'الخدمات',
  'All Services': 'كل الخدمات',
  'Book a Call': 'احجز مكالمة',
  'Schedule a Call': 'احجز مكالمة',
  'Quick Links': 'روابط سريعة',
  'Contact': 'تواصل معنا',
  'Your strategic partner in digital transformation. We deliver measurable results that drive business growth.': 'شريكك الاستراتيجي في التحول الرقمي. نقدم نتائج قابلة للقياس تدفع نمو الأعمال.',
  'All rights reserved.': 'جميع الحقوق محفوظة.',
  'Digital Growth Partner': 'شريك النمو الرقمي',
  'Drive Revenue Growth': 'حقق نمو الإيرادات',
  'Not Just Engagement': 'وليس مجرد تفاعل',
  'We build digital systems that generate qualified leads, increase conversions, and scale your business profitably': 'نبني أنظمة رقمية تولد عملاء محتملين مؤهلين، وتزيد التحويلات، وتوسع أعمالك بشكل مربح.',
  'Get Your Free Strategy Session': 'احصل على جلستك الاستراتيجية المجانية',
  'View Case Studies': 'عرض دراسات الحالة',
  'Full-Service': 'خدمة متكاملة',
  'Marketing & Tech Under One Roof': 'التسويق والتقنية تحت سقف واحد',
  'Smart Strategy': 'استراتيجية ذكية',
  'Data-Driven Decisions Only': 'قرارات مبنية على البيانات فقط',
  'Built to Scale': 'مصمم للنمو',
  'Solutions That Grow With You': 'حلول تنمو معك',
  'One Team': 'فريق واحد',
  'Marketing & Tech Combined': 'التسويق والتقنية معًا',
  'No agencies juggling, no miscommunication — everything under one roof': 'لا تعدد وكالات ولا سوء تواصل — كل شيء تحت سقف واحد',
  'Your Brand': 'علامتك التجارية',
  'Built to Stand Out': 'مصممة لتبرز',
  'We craft identities and digital products that make your business impossible to ignore': 'نصمم هويات ومنتجات رقمية تجعل عملك مستحيل التجاهل',
  'Strategy Before Everything': 'الاستراتيجية قبل كل شيء',
  'Every move we make is tied to your business goals — not vanity metrics': 'كل خطوة نقوم بها مرتبطة بأهداف عملك — لا بمقاييس شكلية',
  'Solutions That Drive': 'حلول تحقق',
  'Real Results': 'نتائج حقيقية',
  'End-to-end digital services designed to maximize your ROI': 'خدمات رقمية متكاملة مصممة لتعظيم عائدك على الاستثمار',
  'Marketing': 'التسويق',
  'Build a consistent social presence that keeps your audience engaged and your brand growing': 'ابنِ حضورًا اجتماعيًا ثابتًا يبقي جمهورك متفاعلًا وينمي علامتك',
  'A strong social media presence is the foundation of every successful brand in the digital age': 'الحضور القوي على وسائل التواصل هو أساس كل علامة ناجحة في العصر الرقمي',
  'Content calendar & strategy': 'خطة محتوى واستراتيجية',
  'Post design & copywriting': 'تصميم المنشورات وكتابة النصوص',
  'Community management': 'إدارة المجتمع',
  'Monthly performance reports': 'تقارير أداء شهرية',
  'Advertising': 'الإعلانات',
  'Reach the right people at the right time with data-driven ad campaigns that convert': 'صل إلى الأشخاص المناسبين في الوقت المناسب بحملات إعلانية مبنية على البيانات وتحقق التحويل',
  'Strategic advertising puts your brand in front of your ideal customer — every dirham spent with purpose': 'الإعلان الاستراتيجي يضع علامتك أمام عميلك المثالي — وكل درهم يُنفق له هدف',
  'Facebook & Instagram ads': 'إعلانات فيسبوك وإنستغرام',
  'Google Search & Display ads': 'إعلانات بحث وعرض جوجل',
  'Audience targeting & retargeting': 'استهداف الجمهور وإعادة الاستهداف',
  'Budget optimization & reporting': 'تحسين الميزانية والتقارير',
  'Branding': 'الهوية',
  'Make your business look credible, professional, and impossible to forget from day one': 'اجعل عملك يبدو موثوقًا واحترافيًا ومستحيل النسيان من اليوم الأول',
  'Your brand identity is the first impression you make — we make sure it counts every single time': 'هوية علامتك هي الانطباع الأول الذي تصنعه — ونحن نضمن أن يكون مؤثرًا كل مرة',
  'Logo design & variations': 'تصميم الشعار ونسخه',
  'Color palette & typography system': 'لوحة الألوان ونظام الخطوط',
  'Brand guidelines document': 'دليل إرشادات العلامة التجارية',
  'Business card & stationery design': 'تصميم بطاقات العمل والهوية المكتبية',
  'Content': 'المحتوى',
  'Tell your brand story with professional content that builds trust and drives action': 'احكِ قصة علامتك بمحتوى احترافي يبني الثقة ويدفع لاتخاذ الإجراء',
  'Great content does not just look good — it connects, convinces, and converts your audience': 'المحتوى الرائع لا يبدو جميلًا فقط — بل يتصل ويقنع ويحوّل جمهورك',
  'Photography direction & scripts': 'توجيه التصوير والسكريبتات',
  'Video & reel production': 'إنتاج الفيديوهات والريلز',
  'Graphic design & motion graphics': 'التصميم الجرافيكي والموشن جرافيك',
  'Copywriting & captions': 'الكتابة الإعلانية والكابشن',
  'Growth': 'النمو',
  'Get found on Google and bring in consistent organic traffic without paying for every click': 'كن ظاهرًا على جوجل واجلب زيارات عضوية مستمرة دون دفع مقابل كل نقرة',
  'SEO is a long-term investment that compounds — the earlier you start, the further ahead you get': 'السيو استثمار طويل المدى يتضاعف أثره — وكلما بدأت مبكرًا تقدمت أكثر',
  'On-page SEO optimization': 'تحسين السيو داخل الصفحة',
  'Keyword research & strategy': 'بحث الكلمات المفتاحية والاستراتيجية',
  'Technical SEO audit': 'تدقيق السيو التقني',
  'Monthly ranking reports': 'تقارير ترتيب شهرية',
  'Technology': 'التقنية',
  'Launch a high-performance mobile app for iOS and Android built around your users': 'أطلق تطبيق جوال عالي الأداء لـ iOS وAndroid مبنيًا حول المستخدم',
  'A well-built mobile app is not just a product — it is a direct channel between your brand and your customers': 'التطبيق المصمم بإتقان ليس مجرد منتج — بل قناة مباشرة بين علامتك وعملائك',
  'UI/UX design & prototyping': 'تصميم واجهة وتجربة المستخدم والنماذج الأولية',
  'Native & cross-platform development': 'تطوير أصلي ومتعدد المنصات',
  'App Store & Play Store publishing': 'نشر التطبيق على App Store وPlay Store',
  'Post-launch support & updates': 'الدعم والتحديثات بعد الإطلاق',
  'Get a fast, responsive, and conversion-focused website that represents your brand professionally': 'احصل على موقع سريع ومتجاوب ومصمم للتحويل يمثل علامتك باحترافية',
  'Your website is your most powerful sales tool — we build it to perform, not just to look good': 'موقعك هو أقوى أداة مبيعات لديك — نبنيه ليؤدي لا ليبدو جميلًا فقط',
  'Custom design & development': 'تصميم وتطوير مخصص',
  'Mobile responsive & fast loading': 'متجاوب مع الجوال وسريع التحميل',
  'SEO-ready structure': 'هيكل جاهز للسيو',
  'E-commerce integration if needed': 'تكامل متجر إلكتروني عند الحاجة',
  'Innovation': 'الابتكار',
  'Automate your workflows and customer interactions with intelligent AI-powered systems': 'أتمت سير العمل وتفاعلات العملاء بأنظمة ذكية مدعومة بالذكاء الاصطناعي',
  'AI automation is not the future — it is the competitive advantage your business needs right now': 'أتمتة الذكاء الاصطناعي ليست المستقبل — بل الميزة التنافسية التي يحتاجها عملك الآن',
  'AI chatbot setup & integration': 'إعداد ودمج روبوت الدردشة الذكي',
  'Marketing workflow automation': 'أتمتة سير العمل التسويقي',
  'Lead qualification systems': 'أنظمة تأهيل العملاء المحتملين',
  'CRM & tool integrations': 'تكاملات أنظمة العملاء والأدوات',
  'Explore This Service': 'استكشف هذه الخدمة',
  'What You Get': 'ما الذي ستحصل عليه',
  'Trusted Across': 'موثوق عبر',
  'Multiple Industries': 'قطاعات متعددة',
  'We work with businesses across all industries — from startups to established brands': 'نعمل مع شركات من كل القطاعات — من الشركات الناشئة إلى العلامات الراسخة',
  'Ready to Scale Your Business?': 'هل أنت جاهز لتوسيع أعمالك؟',
  'Book a free strategy session and discover how we can drive measurable growth for your business': 'احجز جلسة استراتيجية مجانية واكتشف كيف يمكننا تحقيق نمو ملموس لأعمالك',
  'Schedule Your Free Consultation': 'احجز استشارتك المجانية',
  'About X Tech Agency': 'عن وكالة إكس تك',
  'Your strategic partner in digital transformation and measurable business growth': 'شريكك الاستراتيجي في التحول الرقمي ونمو الأعمال القابل للقياس',
  'Our Mission': 'مهمتنا',
  'We exist to help businesses achieve exponential growth through strategic digital solutions. Unlike traditional agencies that focus on vanity metrics, we\'re obsessed with driving real business outcomes: revenue, conversions, and ROI.': 'نحن هنا لمساعدة الشركات على تحقيق نمو متسارع من خلال حلول رقمية استراتيجية. وعلى عكس الوكالات التقليدية التي تركز على المقاييس الشكلية، نحن نهتم بتحقيق نتائج أعمال حقيقية مثل الإيرادات والتحويلات والعائد على الاستثمار.',
  'Every campaign we launch, every platform we build, and every strategy we develop is engineered to deliver measurable results that impact your bottom line.': 'كل حملة نطلقها، وكل منصة نبنيها، وكل استراتيجية نطورها مصممة لتحقيق نتائج قابلة للقياس تؤثر مباشرة في أرباحك.',
  'Our Approach': 'نهجنا',
  'We combine data-driven strategy with creative execution to build digital systems that scale. Our team brings together expertise in marketing, technology, design, and analytics to deliver comprehensive solutions.': 'نجمع بين الاستراتيجية المبنية على البيانات والتنفيذ الإبداعي لبناء أنظمة رقمية قابلة للتوسع. ويجمع فريقنا خبرات في التسويق والتقنية والتصميم والتحليلات لتقديم حلول متكاملة.',
  'From startups to established enterprises across real estate, fashion, fitness, automotive, and more, we\'ve helped businesses transform their digital presence and achieve sustainable growth.': 'من الشركات الناشئة إلى المؤسسات الراسخة في العقارات والأزياء واللياقة والسيارات وغيرها، ساعدنا الشركات على تطوير حضورها الرقمي وتحقيق نمو مستدام.',
  'Why Partner With Us': 'لماذا تتعاون معنا',
  'Results-Focused': 'نركز على النتائج',
  'Every decision backed by data and focused on your business objectives': 'كل قرار مدعوم بالبيانات ويركز على أهداف عملك.',
  'Proven Track Record': 'سجل نجاح مثبت',
  '4.2x average ROAS and 45% lead increase across client campaigns': 'متوسط 4.2x في العائد الإعلاني وزيادة 45% في العملاء المحتملين عبر حملات العملاء.',
  'Strategic Partnership': 'شراكة استراتيجية',
  'We work as an extension of your team, invested in your success': 'نعمل كامتداد لفريقك ومستثمرون في نجاحك.',
  'Data-Driven Decisions': 'قرارات مبنية على البيانات',
  'Advanced analytics and continuous optimization for maximum performance': 'تحليلات متقدمة وتحسين مستمر لتحقيق أعلى أداء.',
  'Rapid Execution': 'تنفيذ سريع',
  'Fast implementation without compromising quality or strategy': 'تنفيذ سريع دون التنازل عن الجودة أو الاستراتيجية.',
  'Industry Expertise': 'خبرة قطاعية',
  'Deep experience across multiple sectors and business models': 'خبرة عميقة عبر قطاعات ونماذج أعمال متعددة.',
  'Ready to Drive Real Growth?': 'جاهز لتحقيق نمو حقيقي؟',
  'Schedule a free strategy session and discover how we can scale your business': 'احجز جلسة استراتيجية مجانية واكتشف كيف يمكننا توسيع أعمالك.',
  'Book Your Free Consultation': 'احجز استشارتك المجانية',
  'Our Services': 'خدماتنا',
  'Comprehensive digital solutions engineered to drive measurable business growth': 'حلول رقمية متكاملة مصممة لتحقيق نمو أعمال قابل للقياس.',
  'Learn More': 'اعرف المزيد',
  'Get in Touch': 'تواصل معنا',
  'Email': 'البريد الإلكتروني',
  'Phone': 'الهاتف',
  'WhatsApp': 'واتساب',
  'Business Hours': 'ساعات العمل',
  'Monday - Friday: 9:00 AM - 6:00 PM': 'الاثنين - الجمعة: 9:00 صباحًا - 6:00 مساءً',
  'Saturday: 10:00 AM - 4:00 PM': 'السبت: 10:00 صباحًا - 4:00 مساءً',
  'Sunday: Closed': 'الأحد: مغلق',
  'Response time: Within 24 hours': 'مدة الرد: خلال 24 ساعة',
  'Request a Free Consultation': 'اطلب استشارة مجانية',
  'Full Name *': 'الاسم الكامل *',
  'John Doe': 'الاسم الكامل',
  'john@company.com': 'john@company.com',
  '+20 123 456 7890': '+20 123 456 7890',
  'Email Address *': 'عنوان البريد الإلكتروني *',
  'Phone Number': 'رقم الهاتف',
  'Service Interested In': 'الخدمة المطلوبة',
  'Select a service': 'اختر خدمة',
  'Tell Us About Your Project *': 'أخبرنا عن مشروعك *',
  'What are your business goals? What challenges are you facing?': 'ما أهداف عملك؟ وما التحديات التي تواجهك؟',
  'Send Message': 'إرسال الرسالة',
  'Thank you for your message! We will get back to you within 24 hours.': 'شكرًا لرسالتك! سنعود إليك خلال 24 ساعة.',
  'Back to Services': 'العودة إلى الخدمات',
  'What\'s Included': 'ما الذي يتضمنه',
  'Our Process': 'آلية العمل',
  'Key Benefits': 'أهم المزايا',
  'Frequently Asked Questions': 'الأسئلة الشائعة',
  'Ready to Get Started?': 'هل أنت جاهز للبدء؟',
  'How long does it take to see results?': 'كم يستغرق ظهور النتائج؟',
  'Can this be customized for my business?': 'هل يمكن تخصيص هذا لعملي؟',
  'Case Studies': 'دراسات الحالة',
  'Results Achieved': 'النتائج المحققة',
  'Ready to Write Your Success Story?': 'جاهز لكتابة قصة نجاحك؟',
  'Let\'s discuss how we can achieve similar results for your business': 'دعنا نناقش كيف يمكننا تحقيق نتائج مشابهة لأعمالك.',
  'Our Blog': 'مدونتنا',
  'Blog': 'المدونة',
  'Insights, strategies, and tips to help you grow your business in the digital age': 'أفكار واستراتيجيات ونصائح تساعدك على تنمية عملك في العصر الرقمي',
  'Read More': 'اقرأ المزيد',
  'Blog Access': 'دخول المدونة',
  'Coming Soon': 'قريبًا',
  'Our full blog library is being finalized. Fresh articles and growth guides will be published here soon.': 'يتم الآن تجهيز مكتبة المدونة كاملة. سيتم نشر مقالات وأدلة نمو جديدة هنا قريبًا.',
  'Transparent Pricing': 'أسعار واضحة',
  'Flexible packages designed to fit your business needs and budget': 'باقات مرنة مصممة لتناسب احتياجات عملك وميزانيتك',
  'Most Popular': 'الأكثر طلبًا',
  'Get Started': 'ابدأ الآن',
  'Pricing Plans': 'خطط الأسعار',
  'We\'re finalizing our transparent pricing structure. Every business is unique, so we prefer to create custom solutions tailored to your specific needs and goals.': 'نحن في طور إنهاء هيكل الأسعار الشفاف. كل عمل فريد، لذلك نفضل إعداد حلول مخصصة تناسب احتياجاتك وأهدافك.',
  'In the meantime, let\'s discuss your project:': 'وفي هذه الأثناء، دعنا نناقش مشروعك:',
  'Get a Custom Quote': 'احصل على عرض سعر مخصص',
  'View Our Services': 'عرض خدماتنا',
  'Why We Offer Custom Solutions': 'لماذا نقدم حلولًا مخصصة',
  'Tailored Strategy': 'استراتيجية مخصصة',
  'Maximum ROI': 'أعلى عائد',
  'Scalable Growth': 'نمو قابل للتوسع',
  'Our Portfolio': 'أعمالنا',
  'Real results for real businesses across diverse industries': 'نتائج حقيقية لشركات حقيقية عبر قطاعات متنوعة',
  'Results That Matter': 'نتائج تهمك',
  'Ready to Be Our Next Success Story?': 'هل أنت جاهز لتكون قصة نجاحنا التالية؟',
  'Let\'s discuss how we can drive measurable growth for your business': 'دعنا نناقش كيف يمكننا تحقيق نمو ملموس لأعمالك',
  'Back to Home': 'العودة للرئيسية',
  'Get Notified': 'أبلغني عند التوفر',
  'Real Estate': 'العقارات',
  'Interior Decor': 'الديكور الداخلي',
  'Startups': 'الشركات الناشئة',
  'Handmade Accessories': 'الإكسسوارات اليدوية',
  'Clothing Brands': 'ماركات الملابس',
  'Car Care Services': 'خدمات العناية بالسيارات',
  'Gyms & Fitness': 'النوادي واللياقة',
  'Social Media Management': 'إدارة وسائل التواصل الاجتماعي',
  'Paid Advertising': 'الإعلانات المدفوعة',
  'Brand Strategy & Marketing': 'استراتيجية العلامة التجارية والتسويق',
  'Web & App Development': 'تطوير الويب والتطبيقات',
  'Creative Design & Motion': 'التصميم الإبداعي والموشن',
  'Commercial Photography': 'التصوير التجاري',
  'Cybersecurity Solutions': 'حلول الأمن السيبراني',
  'AI & Intelligent Systems': 'الذكاء الاصطناعي والأنظمة الذكية',
  'Business Automation': 'أتمتة الأعمال',
  'Turn your social channels into revenue-generating assets with strategic content that drives real business results': 'حوّل قنواتك الاجتماعية إلى أصول تولد الإيرادات من خلال محتوى استراتيجي يحقق نتائج أعمال حقيقية.',
  'Our clients see 3x engagement growth and 45% increase in qualified leads within 90 days': 'يرى عملاؤنا نموًا 3 أضعاف في التفاعل وزيادة 45% في العملاء المؤهلين خلال 90 يومًا.',
  'Strategic content planning & execution': 'تخطيط وتنفيذ استراتيجي للمحتوى',
  'Community management & engagement': 'إدارة المجتمع والتفاعل',
  'Performance analytics & reporting': 'تحليلات الأداء والتقارير',
  'Influencer partnership coordination': 'تنسيق شراكات المؤثرين',
  'Scale your business with high-performance ad campaigns across Meta, Google, and TikTok that maximize ROI': 'وسع أعمالك عبر حملات إعلانية عالية الأداء على ميتا وجوجل وتيك توك لتعظيم العائد على الاستثمار.',
  'Average 4.2x ROAS across all campaigns with continuous optimization and A/B testing': 'متوسط 4.2x عائد إعلاني عبر جميع الحملات مع تحسين مستمر واختبارات A/B.',
  'Multi-platform campaign management': 'إدارة الحملات عبر منصات متعددة',
  'Advanced audience targeting & retargeting': 'استهداف متقدم للجمهور وإعادة الاستهداف',
  'Conversion rate optimization': 'تحسين معدل التحويل',
  'Real-time performance tracking': 'تتبع الأداء في الوقت الفعلي',
  'Build a brand that commands attention and loyalty in your market with strategic positioning and identity': 'ابنِ علامة تجارية تجذب الانتباه والولاء في سوقك من خلال تموضع وهوية استراتيجية.',
  'Establish market differentiation that increases brand recall by 60% and customer lifetime value': 'حقق تميزًا في السوق يزيد تذكر العلامة التجارية بنسبة 60% ويرفع قيمة العميل مدى الحياة.',
  'Brand strategy & positioning': 'استراتيجية وتموضع العلامة التجارية',
  'Visual identity system design': 'تصميم نظام الهوية البصرية',
  'Marketing campaign development': 'تطوير الحملات التسويقية',
  'Brand guidelines & asset creation': 'إعداد دليل العلامة التجارية والأصول',
  'Launch high-performance digital platforms that convert visitors into customers and scale with your growth': 'أطلق منصات رقمية عالية الأداء تحول الزوار إلى عملاء وتتوسع مع نمو أعمالك.',
  'Deliver platforms with 40% higher conversion rates through optimized UX and technical excellence': 'نقدم منصات بمعدلات تحويل أعلى بنسبة 40% عبر تجربة مستخدم محسنة وتميز تقني.',
  'Custom web application development': 'تطوير تطبيقات ويب مخصصة',
  'Native & cross-platform mobile apps': 'تطبيقات جوال أصلية ومتعددة المنصات',
  'E-commerce platform solutions': 'حلول منصات التجارة الإلكترونية',
  'API integration & development': 'تكامل وتطوير واجهات API',
  'Create visual content that stops the scroll and drives action with professional design and motion graphics': 'أنشئ محتوى بصريًا يوقف التمرير ويدفع لاتخاذ الإجراء عبر تصميم احترافي وموشن جرافيك.',
  'Increase content engagement by 85% with scroll-stopping visuals that convert': 'زد تفاعل المحتوى بنسبة 85% عبر مرئيات جذابة تحقق التحويل.',
  'Motion graphics & animation': 'موشن جرافيك ورسوم متحركة',
  'Video editing & post-production': 'مونتاج فيديو وما بعد الإنتاج',
  '3D modeling & visualization': 'نمذجة وعرض ثلاثي الأبعاد',
  'Brand collateral design': 'تصميم المواد الدعائية للعلامة التجارية',
  'Professional photography that showcases your brand with studio-quality images that sell': 'تصوير احترافي يعرض علامتك التجارية بصور بجودة الاستوديو تساعد على البيع.',
  'Boost product conversion rates by 35% with professional imagery that builds trust': 'ارفع معدلات تحويل المنتجات بنسبة 35% عبر صور احترافية تبني الثقة.',
  'Product & lifestyle photography': 'تصوير المنتجات ونمط الحياة',
  'Corporate & team photography': 'تصوير الشركات والفرق',
  'Event & conference coverage': 'تغطية الفعاليات والمؤتمرات',
  'Commercial advertising shoots': 'جلسات تصوير إعلانية تجارية',
  'Protect your business from digital threats with enterprise-grade security solutions and compliance': 'احمِ أعمالك من التهديدات الرقمية عبر حلول أمنية بمستوى المؤسسات والامتثال التنظيمي.',
  'Achieve 99.9% threat prevention rate while maintaining full regulatory compliance': 'حقق معدل منع تهديدات 99.9% مع الحفاظ على الامتثال الكامل للأنظمة.',
  'Security audits & penetration testing': 'تدقيقات أمنية واختبارات اختراق',
  'Threat monitoring & response': 'مراقبة التهديدات والاستجابة لها',
  'Compliance consulting (GDPR, ISO)': 'استشارات الامتثال (GDPR, ISO)',
  'Security infrastructure setup': 'إعداد البنية التحتية الأمنية',
  'Deploy AI-powered solutions that automate customer service and unlock insights from your data': 'نشر حلول مدعومة بالذكاء الاصطناعي لأتمتة خدمة العملاء واستخراج الرؤى من بياناتك.',
  'Reduce support costs by 60% while improving response time and customer satisfaction': 'خفض تكاليف الدعم بنسبة 60% مع تحسين زمن الاستجابة ورضا العملاء.',
  'Custom AI chatbot development': 'تطوير روبوتات محادثة مخصصة',
  'Natural language processing': 'معالجة اللغة الطبيعية',
  'Predictive analytics & insights': 'تحليلات وتوقعات ذكية',
  'Machine learning model training': 'تدريب نماذج التعلم الآلي',
  'Eliminate repetitive tasks and streamline operations with custom automation that scales your efficiency': 'تخلص من المهام المتكررة وسهّل العمليات عبر أتمتة مخصصة ترفع كفاءتك.',
  'Save 20+ hours per week per employee with intelligent workflow automation': 'وفّر أكثر من 20 ساعة أسبوعيًا لكل موظف عبر أتمتة سير عمل ذكية.',
  'Process automation & optimization': 'أتمتة وتحسين العمليات',
  'CRM & marketing automation': 'أتمتة إدارة العملاء والتسويق',
  'Custom integration development': 'تطوير تكاملات مخصصة',
  'Workflow design & implementation': 'تصميم وتنفيذ سير العمل',
  'Paid Ads (Meta & Google)': 'إعلانات مدفوعة (ميتا وجوجل)',
  'Brand Identity & Logo': 'هوية العلامة والشعار',
  'Content Creation': 'صناعة المحتوى',
  'SEO': 'السيو',
  'Mobile App Development': 'تطوير تطبيقات الجوال',
  'Website Development': 'تطوير المواقع',
  'AI Automations': 'أتمتة الذكاء الاصطناعي',
  'A consistent and strategic social presence that keeps your audience engaged and growing': 'حضور اجتماعي ثابت واستراتيجي يبقي جمهورك متفاعلًا وينمّي علامتك',
  'Data-driven ad campaigns built to reach the right audience and maximize every dollar you spend': 'حملات إعلانية مبنية على البيانات للوصول إلى الجمهور المناسب وتعظيم قيمة كل دولار تنفقه',
  'A strong brand identity that makes your business look credible and impossible to forget': 'هوية علامة قوية تجعل عملك يبدو موثوقًا ويصعب نسيانه',
  'Fast, responsive digital platforms built to convert visitors into customers': 'منصات رقمية سريعة ومتجاوبة ومبنية لتحويل الزوار إلى عملاء',
  'Visual content that stops the scroll and tells your brand story professionally': 'محتوى بصري يوقف التمرير ويروي قصة علامتك باحترافية',
  'Professional imagery that showcases your brand and builds instant trust with your audience': 'صور احترافية تبرز علامتك وتبني ثقة فورية مع جمهورك',
  'Enterprise-grade security that protects your business and keeps your data safe': 'حماية بمستوى المؤسسات تحافظ على عملك وتبقي بياناتك آمنة',
  'Intelligent automation that saves your team time and improves customer experience': 'أتمتة ذكية توفر وقت فريقك وتحسن تجربة العملاء',
  'Custom automation that eliminates repetitive tasks and lets your team focus on what matters': 'أتمتة مخصصة تلغي المهام المتكررة وتسمح لفريقك بالتركيز على ما يهم',
};

export const translations = {
  en: Object.fromEntries(Object.keys(arabicTranslations).map((text) => [text, text])) as Record<string, string>,
  ar: arabicTranslations,
} as const;

const textNodeOriginals = new WeakMap<Text, string>();
const attributeOriginals = new WeakMap<Element, Map<string, string>>();

function normalizeTranslationKey(value: string) {
  return value
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/â€”/g, '—')
    .replace(/â†’/g, '→')
    .replace(/â€™/g, '’')
    .replace(/â€œ/g, '"')
    .replace(/â€/g, '"');
}

const translationLookup = new Map(
  Object.entries(translations.ar).map(([key, value]) => [normalizeTranslationKey(translations.en[key] ?? key), value]),
);

function translateString(value: string, language: Language) {
  if (language === 'en') {
    return value;
  }

  const normalizedValue = normalizeTranslationKey(value);

  if (!normalizedValue) {
    return value;
  }

  const translated = translationLookup.get(normalizedValue);

  if (!translated) {
    return value;
  }

  return value.replace(value.trim(), translated);
}

function isTranslatedValue(currentValue: string, originalValue: string) {
  return currentValue === translateString(originalValue, 'ar');
}

function syncTextNodeOriginal(textNode: Text) {
  const currentValue = textNode.nodeValue ?? '';
  const storedOriginal = textNodeOriginals.get(textNode);

  if (!storedOriginal || (!isTranslatedValue(currentValue, storedOriginal) && currentValue !== storedOriginal)) {
    textNodeOriginals.set(textNode, currentValue);
    return currentValue;
  }

  return storedOriginal;
}

function syncAttributeOriginal(element: Element, attributeName: string, currentValue: string) {
  const originalAttributes = attributeOriginals.get(element) ?? new Map<string, string>();
  attributeOriginals.set(element, originalAttributes);

  const storedOriginal = originalAttributes.get(attributeName);

  if (!storedOriginal || (!isTranslatedValue(currentValue, storedOriginal) && currentValue !== storedOriginal)) {
    originalAttributes.set(attributeName, currentValue);
    return currentValue;
  }

  return storedOriginal;
}

function walkTextNodes(root: HTMLElement, callback: (textNode: Text) => void) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parentElement = node.parentElement;

      if (!parentElement) {
        return NodeFilter.FILTER_REJECT;
      }

      if (parentElement.closest('[data-no-translate="true"]')) {
        return NodeFilter.FILTER_REJECT;
      }

      if (['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parentElement.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }

      return node.nodeValue?.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });

  let currentNode = walker.nextNode();

  while (currentNode) {
    callback(currentNode as Text);
    currentNode = walker.nextNode();
  }
}

function captureOriginals(root: HTMLElement) {
  walkTextNodes(root, (textNode) => {
    syncTextNodeOriginal(textNode);
  });

  const elements = [root, ...root.querySelectorAll<HTMLElement>('*')];
  const attributeNames = ['placeholder', 'aria-label', 'title', 'alt'];

  elements.forEach((element) => {
    if (element.closest('[data-no-translate="true"]')) {
      return;
    }

    attributeNames.forEach((attributeName) => {
      const currentValue = element.getAttribute(attributeName);

      if (currentValue !== null) {
        syncAttributeOriginal(element, attributeName, currentValue);
      }
    });
  });
}

function restoreOriginals(root: HTMLElement) {
  walkTextNodes(root, (textNode) => {
    const originalValue = textNodeOriginals.get(textNode);

    if (originalValue !== undefined) {
      textNode.nodeValue = originalValue;
    }
  });

  const elements = [root, ...root.querySelectorAll<HTMLElement>('*')];
  const attributeNames = ['placeholder', 'aria-label', 'title', 'alt'];

  elements.forEach((element) => {
    if (element.closest('[data-no-translate="true"]')) {
      return;
    }

    const originalAttributes = attributeOriginals.get(element);

    if (!originalAttributes) {
      return;
    }

    attributeNames.forEach((attributeName) => {
      const originalValue = originalAttributes.get(attributeName);

      if (originalValue !== undefined) {
        element.setAttribute(attributeName, originalValue);
      }
    });
  });
}

export function translatePage(root: HTMLElement, language: Language) {
  captureOriginals(root);
  restoreOriginals(root);

  if (language === 'en') {
    return;
  }

  walkTextNodes(root, (textNode) => {
    const originalValue = textNodeOriginals.get(textNode);

    if (originalValue !== undefined) {
      textNode.nodeValue = translateString(originalValue, language);
    }
  });

  const elements = [root, ...root.querySelectorAll<HTMLElement>('*')];
  const attributeNames = ['placeholder', 'aria-label', 'title', 'alt'];

  elements.forEach((element) => {
    if (element.closest('[data-no-translate="true"]')) {
      return;
    }

    const originalAttributes = attributeOriginals.get(element);

    if (!originalAttributes) {
      return;
    }

    attributeNames.forEach((attributeName) => {
      const originalValue = originalAttributes.get(attributeName);

      if (originalValue !== undefined) {
        element.setAttribute(attributeName, translateString(originalValue, language));
      }
    });
  });
}
