import React from "react";
import Link from "next/link";

function Footer() {
  const footerNavs = [
    {
      href: "/",
      name: "القائمة الرئيسية",
    },
    {
      href: "/user-manual",
      name: "دليل الإستخدام",
    },
    {
      href: "/subscriptions",
      name: "الإشتراكات",
    },
  ];

  return (
    <footer className="bg-primary text-white py-5 mt-5">
      <div className="container">
        <div className="max-w-lg sm:mx-auto">
          <img
            src="/images/logo.png"
            alt="أحجز دروسك"
            className="m-auto"
            loading="lazy"
            width={80}
            height={80}
          />
          <p className="leading-relaxed mt-5 text-[15px] text-center">
            منصة أحجز دروسك تعتبر هى المنصة الأولى من نوعها لتنظيم نظام حجز
            الطلاب فى مجموعات المعلمين و يتم العمل على هذه المنصة دائماً و
            تطويرها
          </p>
        </div>
        <ul className="items-center justify-center mt-5 space-y-5 sm:flex sm:space-x-4 sm:space-x-reverse sm:space-y-0">
          {footerNavs.map((item, idx) => (
            <li className="hover:text-dark" key={idx}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <p className="mt-4 sm:mt-0 text-center">
            جميع الحقوق محفوظة لدى منصة أحجز دروسك © 2022 - {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
