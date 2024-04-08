export const navigation = [
    {
      name: "خدمات دهندگان",
      current: false, src :"/img/menu1.svg",
      children: [
        { name: "خدمات", href: "/" },
        { name: "تخصص و زیر تخصص", href: "/expertise" },
        { name: "امکانات", href: "/facility" },
        { name: "موقعیت", href: "/location" },
      ],
    },
    {
      name: "مدیریت کاربران",
      current: false, src :"/img/menu2.svg",
      children: [
        { name: "همه کاربران", href: "/users" },
        { name: "افزودن کاربر", href: "/add-user" },
      ],
    },
  
    { name: "دپارتمان", href: "/department", current: false , src : "/img/menu3.svg" },
    { name: "مقالات", href: "/articles", current: false , src : "/img/menu4.svg" },
    {
      name: "دیدگاه",
      current: false, src :"/img/menu5.svg",
      children: [
        { name: "لیست دیدگاه", href: "comments" },
        { name: "پاسخ دیدگاه", href: "response-comment" },
      ],
    },
    { name: "اشتراک", href: "/subscription", current: false , src : "/img/menu6.svg" },
    { name: "مالی", href: "/financial", current: false , src :"/img/menu7.svg" },
   
    { name: "پشتیبانی", href: "/support", current: false , src : "/img/menu8.svg" },
    { name: "رمز عبور", href: "/password", current: false , src : "/img/menu9.svg" },
  ];