// E:\programming\Project\byo_eng\client\src\component\Footer.js

import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();  // 現在の年を取得

  return (
    <footer className="bg-navy text-white p-4">  {/* 背景色を濃い紺色に変更 */}
      <p>&copy; {currentYear} 秒速英作文</p>  {/* 年を動的に更新 */}
    </footer>
  );
}

export default Footer;